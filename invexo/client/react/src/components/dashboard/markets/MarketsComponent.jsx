import React, { useState, useEffect, useContext } from 'react'
import Header from '../header/Header'
import Sidebar from '../Sidebar/SideBar'
import axios from 'axios'
import StockIndexWidget from './StockIndexWidget'
import './marketpage.css'
import LayoutContext from '../../../contextapi/LayoutContext'

const MarketsComponent = () => {
  const {isSidebarOpen} = useContext(LayoutContext)
  const [market, setIndexes] = useState([]);
  const [loading, setLoading] = useState(true);

  // const marketsuri = `https://www.alphavantage.co/query?function=MARKET_STATUS&apikey=5V4BQ9QQ00I5ZG07`;

  const marketsuri = `http://localhost:3000/api/v1/markets`

  useEffect(() => {

    const fetchIndexes = async () => {
      try {
        const response = await axios.get(marketsuri,{
          withCredentials:true
        });
        // console.log(response.data);
        setIndexes(response.data.markets || []);
      } catch (error) {
        console.error(`Failed to fetch data: `, error);
      } finally {
        setLoading(false);
      }
    };

    fetchIndexes(); // ✅ Call the function
  }, []);

  if (loading) return <div className='p-4'>Loading market data...</div>;

  return (
    <div className={`content ${isSidebarOpen? 'sidebar-open': ''}`}>
      <Header title="Markets" />
      <div className="market-grid">
        {market.map((index, i) => (
          <StockIndexWidget className='market-widget'
            key={i}
            region={index.region}
            marketType={index.market_type}
            exchanges={index.primary_exchanges}
            open={index.local_open}
            close={index.local_close}
            status={index.current_status}
            notes={index.notes}
           />
        ))}
      </div>
 
    </div>
  );
};

export default MarketsComponent;
