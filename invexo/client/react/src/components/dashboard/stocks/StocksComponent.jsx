import React, { useContext, useEffect, useState } from 'react'
import Header from '../header/Header'
import Sidebar from '../Sidebar/SideBar'
import SearchStock from './SearchStock'
import StockDataForm from './StockDataForm'
import StocksProvider from './context-stocks/StocksProvider'
import axios from 'axios'
import WidgetView from './WidgetView'
import { Loader } from 'lucide-react'
import './stocks.css'
import LayoutContext from '../../../contextapi/LayoutContext'
import StocksContext from './context-stocks/StocksCOntext'
import EditStockForm from './EditStockForm'
const StocksComponent = () => {
  const [addStock, setAddStock] = useState(false)
  const [userStocks, setUserStocks] = useState([])
  // const [isPopupOpen, setIsPopupOpen] = useState(false);
  const {isPopupOpen, setIsPopupOpen,needRefresh, triggerRefresh} = useContext(StocksContext);
  const [isLoading, setLoading] = useState(true)
  const [editStockId, setEditStockId] = useState(null);
  const [editingStockId, setEditingStockId] = useState(null);
  const netP_L=0
  // const {} = useContext(StocksProvider)

  // const handleSelect = (stock)=>{
  //     console.log(`the selected stock is ${stock.name}`);
  // }
  const handleSetData = ()=>{
      setAddStock(!addStock)
  }
  


  useEffect(()=>{
    const fetchStocks = async ()=>{
      try {
        const response = await axios.get('http://localhost:3000/api/v1/userStocks',{
          withCredentials: true
        } )
        setUserStocks(response.data || [])
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
      triggerRefresh(!needRefresh)
  }
const handleUpdate = async (data) =>{
    console.log(data);
    
    setIsPopupOpen(true)
    const response = await axios.patch(`http://localhost:3000/api/v1/userStocks/${data.stockId}`,data,{
        withCredentials: true
      })
      triggerRefresh(!needRefresh)
}
const handleClosePopup=()=> setIsPopupOpen(!isPopupOpen)
  
  if(isLoading) return <div className='p-4'>Loading market data...</div>
  return (
    <div >

   
    {/* <StocksProvider > */}

        <div className="stocks-page">
          <div>
              <Header title="Stocks" className></Header>
          </div>
          <div style={{display:'flex', flexDirection:"row" , alignItems:'center', gap: "1rem"}}>
            <button onClick={handleSetData}>Add Stock</button>
          </div>
            {addStock && <StockDataForm onClose={handleSetData}  />}
          <div >

              <div className='stock-widget-grid'>
                  {
                    userStocks.map((index, i)=>(
                     
                      <div key={i}>
                      <WidgetView
                    
                      StockName={index.stockname}
                      BuyPrice={index.price}
                      BuyQuantity={index.noOfStocks}              
                      Brokerage={index.Brokerage}
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
