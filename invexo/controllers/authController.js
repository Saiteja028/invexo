import userModel from '../models/user.js';

/** @type {import('mongoose').Model<any>} */
const User = userModel;

import jwt from 'jsonwebtoken';
import {
  customError,
  unAuthorized,
  unAuthenticated,
  notFoundError,
  badRequestError,
} from '../errors/index.js';

const register = async (req, res) => {
  const { name, email, password } = req.body;

  const emailAlreadyExists = await User.findOne({ email });
  if (emailAlreadyExists) {
    throw new badRequestError('Email already exists');
  }

  const isFirstUser = (await User.countDocuments({})) === 0;
  const role = isFirstUser ? 'admin' : 'user';
  const userObjs={name, email, password,role}
  
};

const login = async (req , res)=>{
    res.send('login')
}
const logout = async (req , res)=>{
    res.send('logout')
}

export {register, login, logout}