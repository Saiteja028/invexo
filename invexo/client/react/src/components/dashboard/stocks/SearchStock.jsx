import React, { useEffect, useState, useContext } from 'react'
import './stocks.css'
import LayoutContext from '../../../contextapi/LayoutContext'
import axios from 'axios'
import StocksContext from './context-stocks/StocksContext'

const SearchStock = ({onSelect}) => {
    // const [stock, setStockName] = useState('')
    const {stock, setStockName} = useContext(StocksContext)
    const {isSidebarOpen} = useContext(LayoutContext)
  const {results, setResults} = useContext(StocksContext)
  const {input, setInput} = useContext(StocksContext)
    useEffect(()=>{
   
         if (!input.trim()) {
              setResults([]);
              return;
            }
        const delayBounce = setTimeout(async ()=>{
            if(input.trim()){
                const response =await axios.get('http://localhost:3000/api/v1/stocks',{
                  withCredentials:true,
                })
                setResults(response.data)
            }
            else {
                setResults([])
            }
        }, 30)
     
        return () => clearTimeout(delayBounce)
    },[input])
    const filteredResults = results.filter(stock =>
            stock.name.toLowerCase().includes(input.toLowerCase()) ||
            stock.symbol.toLowerCase().includes(input.toLowerCase())
      );

    return (
            <div >
  <div className="relative w-full max-w-md mx-auto">
    <input
      type="text"
      placeholder="Search stock to add"
      value={input}
      className="stock-dataform bar"
      onChange={(e) => setInput(e.target.value)}
    />
    {filteredResults.length > 0 && (
      <ul className="absolute w-full border max-h-64 overflow-y-auto">
        {filteredResults.map((stock, idx) => (
          <li
            key={idx}
            className="p-2 hover-bg-gray-100"
            onClick={() => {
              // onSelect((stock));
              setStockName(stock)
              setInput("");
              setResults([]);
            }}
          >
            {stock.name} ({stock.symbol})
          </li>
        ))}
      </ul>
    )}
  </div>
</div>

    )
}

export default SearchStock
