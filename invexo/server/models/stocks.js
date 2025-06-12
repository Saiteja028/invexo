import mongoose from "mongoose";

const stockSchema = mongoose.Schema({
    symbol:{
        type: String
    },
    name:{
        type: String
    }
})

const stock = mongoose.model('Stock', stockSchema)
export default stock