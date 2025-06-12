import { StatusCodes } from 'http-status-codes'
import Market from '../models/markets.js'
import Stocks from '../models/stocks.js'
import express from 'express'
const getMarketDetails =async (req, res)=>{
    const markets= await Market.find({})
    res.status(StatusCodes.OK).json({markets})
}
const getStockDetails = async (req,res)=>{
    const stocks = await Stocks.find({})
    res.status(StatusCodes.OK).json(stocks)
}
const getSingleStock = async (req,res) =>{
    const {Stocksymbol}= req.params
    const singleStock = await Stocks.findOne({symbol:Stocksymbol})
    console.log(req.params);
    res.status(StatusCodes.OK).json(singleStock)
}

export {getMarketDetails,getStockDetails, getSingleStock}