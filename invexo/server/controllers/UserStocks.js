import { StatusCodes } from "http-status-codes";
import badRequestError from "../errors/badReqErr.js";
import userStocksModel from "../models/stockData.js"
import yahooFinance from "yahoo-finance2";
import mongoose from "mongoose";
import stock from "../models/stocks.js";
// import { Promise } from "mongoose";
/** @type {import('mongoose').Model<any>} */
const Stocks = userStocksModel

const getStocks = async (req,res)=>{
    try {
 
        const userid = req.user.userid
  
        const userStocks = await Stocks.find({userid});

        let netPL=0;
        const stocksWithRealPrice = await Promise.all(
            userStocks.map(async (stock)=>{

                const quote = await yahooFinance.quote(`${stock.stockSymbol}.NS`);
                const currentPrice= quote.regularMarketPrice;
                const individualPL = (currentPrice - stock.price) * stock.noOfStocks;
                netPL += individualPL;
                return {
                    ...stock._doc,
                    currentPrice,
                    individualPL:individualPL.toFixed(2)
                }
        })
        )
        res.status(StatusCodes.OK).json({
            stocks:stocksWithRealPrice,
            netPL: netPL.toFixed(2)
        });
    } catch (error) {
        console.log(error);  
        res.status(500).json({error: "failed to fetch the stock price"})      
    }
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
const getNetPL = async(req,res)=>{
    const allStocks = await getStocks(req,res);
    console.log(allStocks);
}

export  {addStock,deleteStock,editStock,getStocks,getNetPL}