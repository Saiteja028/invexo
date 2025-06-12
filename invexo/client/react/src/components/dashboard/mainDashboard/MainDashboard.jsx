import React from 'react'

import Home from './Home'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const MainDashboard = () => {
  const navigate = useNavigate()
  

    return (
      <>
          <div>
              <Home />
          </div>
      </>
  )
}

export default MainDashboard
