import mongoose, { mongo } from "mongoose";

const stocksSchema = mongoose.Schema({
    Brokerage:{
        type: String,
        required: true
    },
    noOfStocks:{
        type: Number,
        required: true
    },
    stockname:{
         type: String,
        required:true
    },
    price:{
        type: Number,
        required: true
    },
    stockSymbol:{
        type: String,
        required:true
    },
    userid:{
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: true
    }
}) 

const userStocks = mongoose.model('UserStocks', stocksSchema)
export default userStocks

