import React, { useContext, useEffect, useState } from 'react'
import Header from '../header/Header'
import StockDataForm from './StockDataForm'

import axios from 'axios'
import WidgetView from './WidgetView'
import './stocks.css'
import LayoutContext from '../../../contextapi/LayoutContext'
import StocksContext from './context-stocks/StocksContext'
import EditStockForm from './EditStockForm'
const StocksComponent = () => {
  const [addStock, setAddStock] = useState(false)
  const [userStocks, setUserStocks] = useState([])
  // const [isPopupOpen, setIsPopupOpen] = useState(false);
  const {isPopupOpen, setIsPopupOpen,needRefresh, triggerRefresh} = useContext(StocksContext);
  const [isLoading, setLoading] = useState(true)
  const [editingStockId, setEditingStockId] = useState(null);
  const [netPL,setNetPL]=useState(0);
  const {isSidebarOpen} = useContext(LayoutContext)

  const handleSetData = ()=>{
      setAddStock(!addStock)
  }
  


  useEffect(()=>{
    const fetchStocks = async ()=>{
      try {
        const response = await axios.get('http://localhost:3000/api/v1/userStocks',{
          withCredentials: true
        } )
        setUserStocks(response.data.stocks || [])
       setNetPL(response.data.netPL);

      } catch (error) {
          console.error(`failed to fetch data`, error);
      }
      finally{
        setLoading(false)
      }
    }
    fetchStocks()
  },[needRefresh])

  const handleDelteStock =async (id)=>{
      const response = await axios.delete(`http://localhost:3000/api/v1/userStocks/${id}`,{
        withCredentials: true
      })
      if(response.status===200){
        triggerRefresh(!needRefresh)
      }
  }
const handleUpdate = async (data) =>{
 
    setIsPopupOpen(true)
    const response = await axios.patch(`http://localhost:3000/api/v1/userStocks/${data.stockId}`,data,{
        withCredentials: true
      })
      if(response.status===200){
        triggerRefresh(!needRefresh)
      }
}
  
  if(isLoading) return <div className='p-4'>Loading market data...</div>
  return (

    <div >

   
    {/* <StocksProvider > */}

        <div className={`${isSidebarOpen? 'sidebar-open': ''}`}>
          <div>
              <Header title="Stocks" className></Header>
          </div>
          <div style={{display:'flex', flexDirection:"row" , alignItems:'center', gap: "1rem"}}>
            <button onClick={handleSetData}>Add Stock</button>
          </div>
          <div>{`Net P&L: ${netPL}`}</div>
            {addStock && <StockDataForm onClose={handleSetData}  />}
          <div className='stock-widget-grid'>
              <div >
                  {
                    userStocks.map((index, i)=>(
                     
                      <div key={i}>
                      <WidgetView
                    
                      StockName={index.stockname}
                      BuyPrice={index.price}
                      BuyQuantity={index.noOfStocks}   
                      CurrentPrice={index.currentPrice}           
                      Brokerage={index.Brokerage}
                      IndividualPL={index.individualPL}
                      StockId={index._id}
                      onDelete={handleDelteStock}
                      onUpdate={() => setEditingStockId(index._id)}
                      
                      />
                     {editingStockId === index._id && (
                              <EditStockForm 
                                updateButton={handleUpdate} 
                                StockName={index.stockname}
                                BuyPrice={index.price}
                                BuyQuantity={index.noOfStocks}              
                                BrokerageName={index.Brokerage}
                                StockId={index._id} 
                                onClose={() => setEditingStockId(null)} 
                                // optional: for closing popup
                              />
                            )}
                      </div>
                    )
                    )
                    }  
              </div>
          </div>
        </div>
      {/* </StocksProvider> */}
     </div>
  )
}

export default StocksComponent
