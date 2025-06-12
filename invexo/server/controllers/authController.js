import userModel from '../models/user.js';

/** @type {import('mongoose').Model<any>} */
const User = userModel;

import jwt from 'jsonwebtoken';
import {customError,unAuthorized,unAuthenticated,notFoundError,badRequestError} from '../errors/index.js';
import createTokenUser from '../utils/createTokenUser.js';
import {attachCookiesToResponse} from '../utils/jwt.js'
import { StatusCodes } from 'http-status-codes';

const register = async (req, res) => {
  
  const {firstName, lastName, email, password} = req.body;

  if(!email || !password || !firstName){
    throw new badRequestError('Please provide the details')
  }
  const emailAlreadyExists =await User.findOne({email});
  
  if(emailAlreadyExists){
    throw new badRequestError('User already exists')
  }

  const user =await User.create({firstName, lastName, email, password})
  console.log(user);
  
  const tokenUser = createTokenUser(user)
  attachCookiesToResponse({res, user:tokenUser})
  res.status(StatusCodes.CREATED).json({user:tokenUser})
  user.save()
};

const login = async (req , res)=>{
    const {email,password} = req.body;
    if(!email || !password) throw new badRequestError('Please enter email & password')
    
    const userObj = await User.findOne({email})
    if(!userObj) throw new unAuthenticated('User doesnot exist')

    const isValidPassword = await userObj.comparePassword(password)
    if(!isValidPassword) throw new unAuthenticated('Invalid credentials')
    const tokenUser = createTokenUser(userObj)
    attachCookiesToResponse({res, user:tokenUser})
    res.status(StatusCodes.OK).json({user:tokenUser})
    
}
const logout = async (req , res)=>{
    res.cookie('token','logout', {
      httpOnly: true,
      expires: new Date(Date.now())
    })
    res.status(StatusCodes.OK).json({msg: 'User logged out successfully'})
}

export {register, login, logout}