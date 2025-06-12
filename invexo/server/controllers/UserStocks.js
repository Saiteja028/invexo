import { StatusCodes } from "http-status-codes";
import badRequestError from "../errors/badReqErr.js";
import userStocksModel from "../models/stockData.js"
/** @type {import('mongoose').Model<any>} */
const Stocks = userStocksModel

const getStocks = async (req,res)=>{
    const userid= req.user.userid 
    const response = await Stocks.find({userid})
    res.status(StatusCodes.OK).json(response)
}

const addStock = async (req,res)=>{
    
    if(!req.body)
    {
        throw new badRequestError('Please provide payload')
    }
    req.body.user=req.user

    const {Brokerage,noOfStocks,price,stockSymbol,stockname, user} = req.body 
    const data = {Brokerage,noOfStocks,price,stockSymbol,stockname, userid:user.userid}
    const response = await Stocks.create(data)
    res.status(StatusCodes.CREATED).json(response)
    
}
const deleteStock =async (req,res)=>{
    const {id:symbol} = req.params
    const ifExists = await Stocks.findById(symbol)
    if(!ifExists) throw new badRequestError(`Object with id ${symbol} not found`)
    const stock = await Stocks.findByIdAndDelete(symbol)
    console.log(stock);
    
    res.status(StatusCodes.OK).json(`thh stock with id ${symbol} deleted successfully`)

    
}
const editStock = async (req,res)=>{
    const {id:symbol_id} = req.params
    const newData = req.body
    const ifExists = await Stocks.findById(symbol_id)
    if(!ifExists) throw new badRequestError(`Object with id ${symbol_id} not found`)
        console.log(newData);
        
    const updatedData = await Stocks.findByIdAndUpdate(symbol_id, newData)
console.log(updatedData);

    res.status(StatusCodes.OK).json(`thh stock with id ${symbol_id} udpated successfully`)
}

export  {addStock,deleteStock,editStock,getStocks}