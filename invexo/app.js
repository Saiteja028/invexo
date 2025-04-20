// const express = require('express');
// const dotenv= require(dotenv);
import express from 'express'
import dotenv from 'dotenv'
import connectDB from './db/connectDB.js';
import authRouter from './routers/authRouter.js'
import morgan from 'morgan'
const app = express();
app.use(express.json());
app.use(morgan('tiny'))

dotenv.config();
app.use('/api/v1/auth',authRouter)
const PORT=3000 || process.env.PORT;

const start=async ()=>{

try {
    console.log(process.env.MONGO_URI);
    
    await connectDB(process.env.MONGO_URI);
    // console.log('');
    
    app.listen(PORT, ()=>console.log(`listening to port ${PORT}`));
    
} catch (error) {
    console.log(error);
    
}
   
    
    
}
start()