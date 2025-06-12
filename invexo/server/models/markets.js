import mongoose from "mongoose";
const marketSchema = mongoose.Schema({
    market_type:{
        type: String,
    },
    region:{
        type: String,
    },
    primary_exchanges:{
        type: String,
    },
    local_open:{
        type: String,
    },
    local_close:{
        type: String,
    },
    current_status:{
        type: String,
    },
    notes:{
        type:String
    }
})

const market = mongoose.model('Market', marketSchema )
export default market