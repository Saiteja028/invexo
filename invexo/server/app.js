// const express = require('express');
// const dotenv= require(dotenv);
import express from 'express'
import dotenv from 'dotenv'
import connectDB from './db/connectDB.js';
import authRouter from './routers/authRouter.js'
import morgan from 'morgan' 
import errorHandlerMiddleware from './middleware/errror-handler.js';
import cookieparser from 'cookie-parser'
import cors from 'cors'
import dataRouter from './routers/dataRouter.js'
import authenticateUser from './middleware/authenticate.js';
import userStockRouter from './routers/userStocksRouter.js'
const app = express(); 
app.use(express.json()); 
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true

}))
dotenv.config();
app.use(morgan('tiny')) //loging the path in console
app.use(cookieparser(process.env.JWT_SECRET))
app.use('/api/v1/auth',authRouter)
app.use('/api/v1',dataRouter)
app.use('/api/v1',userStockRouter)
const PORT=3000 || process.env.PORT;
app.use(errorHandlerMiddleware)
//start the server
const start=async ()=>{
        try {
            await connectDB(process.env.MONGO_URI);
            app.listen(PORT, ()=>console.log(`listening to port ${PORT}`));
        } catch (error) {
            console.log(error);
        }
}
start()