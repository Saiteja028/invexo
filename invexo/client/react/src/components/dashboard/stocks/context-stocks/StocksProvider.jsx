import React, { useContext, useState } from 'react'
import StocksContext from './StocksContext'
import { useAsyncError } from 'react-router-dom'
const StocksProvider = ({children}) => {
    const [addStock, createNewStock ]=useState('')
    const [stock, setStockName] = useState('')
    const [results, setResults] = useState([])
    const [input, setInput] = useState('')
    const [needRefresh, triggerRefresh] = useState(false)
     const [isPopupOpen, setIsPopupOpen] = useState(false);
  // const [position, setPosition] = useState({})
     
  return (
    <StocksContext.Provider value={{addStock, createNewStock,stock, setStockName,results, setResults,input, setInput,needRefresh, triggerRefresh,isPopupOpen, setIsPopupOpen}}>
        {children}
    </StocksContext.Provider>
  )
}

export default StocksProvider
