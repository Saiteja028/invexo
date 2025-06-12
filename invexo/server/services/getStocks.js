import axios from 'axios'
import dotenv from 'dotenv'

dotenv.config() 
const uri = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=RELIANCE.BSE&outputsize=full&apikey=${process.env.ALPHA_VANTAGEKEY}`
const getAllStocks =async ()=>{
    const response = await axios.get(`${uri}`)
    console.log(response.data);
}
getAllStocks()