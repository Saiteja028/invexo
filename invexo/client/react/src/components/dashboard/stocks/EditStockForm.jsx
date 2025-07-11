import axios from 'axios'
import React from 'react'
import StocksContext from './context-stocks/StocksContext'
import SearchStock from './SearchStock'
import { useState, useContext, useEffect } from 'react'
const EditStockForm = ({updateButton, onClose,StockName, BuyPrice, BuyQuantity,CurrentPrice, onDelete, StockId,StockSymbol,BrokerageName}) => {
// const [Brokerage, setBrokerage] = useState('')
// const [noOfStocks, setStockNumber] = useState(0)
// const [price, setPrice] = useState(0)

// const {stock, setStockName} = useContext(StocksContext)
const [position, setPosition] = useState({})
const {needRefresh, triggerRefresh} = useContext(StocksContext)
  const {isPopupOpen, setIsPopupOpen} = useContext(StocksContext);
//   const stockname= stock.name;
//   const stockSymbol = stock.symbol;
//   const stockId = stock._id

// const stockId = StockId
// const stockname = StockName
// const noOfStocks = BuyQuantity
// const price = BuyPrice
// const stockSymbol= StockSymbol
// const Brokerage=Brokerage
const [stockId, setStockId] = useState(StockId);
const [stockname, setStockName] = useState(StockName);
const [noOfStocks, setNoOfStocks] = useState(BuyQuantity);
const [price, setPrice] = useState(BuyPrice);
const [stockSymbol, setStockSymbol] = useState(StockSymbol);
const [Brokerage, setBrokerage] = useState(BrokerageName);
const Symbol = StockSymbol


let data = {StockName, BuyQuantity, BuyPrice, Brokerage, StockSymbol,Symbol}
data = JSON.stringify(data)


//  stockname, noOfStocks, price, Brokerage, stockSymbol

  return (
    <div>
      <div className="stock-dataform">
            {/* <SearchStock  className="stock-dataform bar" /> */}
        <h3>{stockname}</h3>
            <form className="inputs">

              <div className="form-row">
                <label htmlFor="noofStocks">Quantity:</label>
                <input
                  type="number"
                  id="noofStocks"
                  placeholder="No. of Stocks"
                  onChange={(e) => setNoOfStocks(e.target.value)}
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
                  <option value="Angle-One">Angle-One</option>
                </select>
                
              </div>
              <button className='btn' onClick={(e) => {
                        e.preventDefault();
                        const data = {stockId, stockname, noOfStocks, price, Brokerage, stockSymbol }; 
                        updateButton(data)
                        triggerRefresh(!needRefresh)
            }}
            >Update</button>
            </form>
            <button className='btn-cancel' onClick={onClose}>Close</button>
          </div>
    </div>
  )
}

export default EditStockForm
