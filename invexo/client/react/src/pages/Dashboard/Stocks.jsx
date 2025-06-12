import React from 'react'
import StocksComponent from '../../components/dashboard/stocks/StocksComponent'
import { useContext } from 'react'
import LayoutContext from '../../contextapi/LayoutContext'
import StocksProvider from '../../components/dashboard/stocks/context-stocks/StocksProvider'
const Stocks = () => {
   const {isSidebarOpen} = useContext(LayoutContext)
  return (
    <StocksProvider>

    <div className={`content ${isSidebarOpen? 'sidebar-open': ''}`}>
          <StocksComponent/>
    </div>
    </StocksProvider>
  )
}

export default Stocks
