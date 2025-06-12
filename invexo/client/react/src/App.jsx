import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'from 
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Markets from './pages/Dashboard/Markets'
import {Login, Dashboard, About,  Register} from './pages'
import './App.css'
import Stocks from './pages/Dashboard/Stocks'
import LayoutProvider from './contextapi/LayoutProvider'
import LoginProvider from './contextapi/loginpage/LoginProvider'
function App() {
  return <>
  <LoginProvider>

  <LayoutProvider>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            {/* <Route path='/dashboard' element={<Dashboard/>}/> */}
            {/* <Route path="/about" element={<About />} /> */}
            <Route path='/markets' element={<Markets/>}/>
            <Route path='/stocks' element={<Stocks/>}/>
          </Routes>
      </BrowserRouter>
  </LayoutProvider>
  </LoginProvider>
  </>
}

export default App
