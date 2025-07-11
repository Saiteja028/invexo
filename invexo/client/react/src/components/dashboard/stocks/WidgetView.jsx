import React, { useEffect , useContext} from 'react'
import StocksContext from './context-stocks/StocksContext'


// import StocksContext from './context-stocks/StocksCOntext'
import './stocks.css'
const WidgetView = ({StockName, BuyPrice, BuyQuantity,CurrentPrice, Brokerage, onDelete, StockId,onUpdate,IndividualPL}) => {

  const deleteStock = ()=>{
      onDelete(StockId)
  }

const handleTrade = (Brokerage) => {

  const brokerURLs = {
    Zerodha: 'https://kite-beta.zerodha.com/',
    Upstox: 'https://login.upstox.com/',
    Grow: 'https://groww.in/login',
    AngleOne: 'https://www.angelone.in/login/'
  };

  const url = brokerURLs[Brokerage] || '';

  if (url) {
    // Open immediately on user click
    window.open(url, '_blank', 'noopener,noreferrer');
  } else {
    console.log("Invalid brokerage selected");
  }
  console.log("clicked trade");
  
};

  

  return (

    <div className='stock-grid-items'>
      <h3>{StockName}</h3>
      <p><strong>Buy Quantity:</strong>{BuyQuantity}</p>
      <p><strong>Buy Price:</strong>{BuyPrice}</p>
      <p><strong>Current Price:</strong>{CurrentPrice}</p>
      <p><strong> Brokerage:</strong>{Brokerage}</p>
      <p>
        <strong>P&amp;L: </strong>
       {IndividualPL}
      </p>
      {/* <a href="#">{Brokerage}</a> */}
      <div className='button-container'>
     
          <button className='responsive-btn' onClick={onUpdate}>Edit</button>
          <button className='responsive-btn' onClick={()=>handleTrade(Brokerage)} >Trade</button>
          <button className='responsive-btn' onClick={deleteStock}>Delete</button>
 
      </div>
       

    </div>
  )
}

export default WidgetView
