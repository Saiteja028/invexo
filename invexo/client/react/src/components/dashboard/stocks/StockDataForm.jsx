import React, { useContext, useState , useEffect} from 'react'
import axios from 'axios'
import StocksContext from './context-stocks/StocksCOntext'
import SearchStock from './SearchStock'
import './stocks.css'
const StockDataForm = ({onClose}) => {
  const [Brokerage, setBrokerage] = useState('')
  const [noOfStocks, setStockNumber] = useState(0)
  const [price, setPrice] = useState(0)
  const {stock, setStockName} = useContext(StocksContext)
  const [position, setPosition] = useState({})
  // const {position, setPosition} = useContext(StocksContext)
  const {results, setResults} = useContext(StocksContext)
  const {input, setInput} = useContext(StocksContext)
  const {needRefresh, triggerRefresh} = useContext(StocksContext)
  

  const stockname= stock.name;
  const stockSymbol = stock.symbol;
  let data = {stockname, noOfStocks, price, Brokerage, stockSymbol}
  data = JSON.stringify(data)
  

  
  const handleSubmit = async () => {


    const payload = { stockname, noOfStocks, price, Brokerage, stockSymbol };

    try {
      const res = await axios.post('http://localhost:3000/api/v1/userStocks', payload, {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      });
     
      console.log('Stock added:', res.data);
    } catch (error) {
      console.error('Error adding stock:', error);
    }
  };

  return (
          <div className="stock-dataform">
            <SearchStock  className="stock-dataform bar" />
            <h3>{stock.name}</h3>
            <form className="inputs">

              <div className="form-row">
                <label htmlFor="noofStocks">Quantity:</label>
                <input
                  type="number"
                  id="noofStocks"
                  placeholder="No. of Stocks"
                  onChange={(e) => setStockNumber(e.target.value)}
                />
              </div>

              <div className="form-row">
                <label htmlFor="price">Price:</label>
                <input
                  type="number"
                  id="price"
                  placeholder="Entry Price"
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>

              <div className="form-row">
                <label htmlFor="Brokerage">Select Brokerage:</label>
                <select
                  id="Brokerage"
                  value={Brokerage}
                  onChange={(e) => setBrokerage(e.target.value)}
                >
                  <option value="">--Select--</option>
                  <option value="Zerodha">Zerodha</option>
                  <option value="Upstox">Upstox</option>
                  <option value="Grow">Grow</option>
                  <option value="AngleOne">Angle-One</option>
                </select>
                
              </div>
              <button className='btn' onClick={(e) => {
              e.preventDefault();
              const data = { stockname, noOfStocks, price, Brokerage, stockSymbol };
              setPosition(data);
              handleSubmit();
              setTimeout(() => {
                    triggerRefresh(!needRefresh);

                  }, 1000);
                
              console.log();
              
              // console.log("clicked the button");
               
            }}
        >ADD</button>
            </form>
            <button className='btn-cancel' onClick={onClose}>Close</button>
          </div>

  )
}

export default StockDataForm
