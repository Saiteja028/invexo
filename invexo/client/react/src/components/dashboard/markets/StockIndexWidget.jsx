import React from 'react'
import './marketpage.css'
const StockIndexWidget = ({ region, marketType, exchanges, open, close, status, notes }) => {
  console.log(status);
  
  return (
    <div className={`market-widget`}>
      <h3>{region} ({marketType})</h3>
      <p ><strong>Exchanges:</strong> {exchanges}</p>
      <p><strong>Local Time:</strong> {open} - {close}</p>
      <p className={`${status==='closed'? 'market-StatusClose': 'market-StatusOpen'}`}><strong>Status:</strong> <span className="status">{status.toUpperCase()}</span></p>
      {notes && <p className="notes">🛈 {notes}</p>}
    </div>
  );
}

export default StockIndexWidget
