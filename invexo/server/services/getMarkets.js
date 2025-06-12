import axios from 'axios'
import dotenv from 'dotenv'

dotenv.config() 
const uri = `https://www.alphavantage.co/query?function=MARKET_STATUS&apikey=${process.env.ALPHA_VANTAGEKEY}`
const getMarkets =async ()=>{
    const response = await axios.get(`${uri}`)
    console.log(response.data);
}
getMarkets()

