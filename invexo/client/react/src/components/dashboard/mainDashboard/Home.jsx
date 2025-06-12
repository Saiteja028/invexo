import React from 'react'

import Sidebar from '../Sidebar/SideBar'
import Header from '../header/Header'
const Home = ({onLogout}) => {
  return (
    <section>
      <Header onLogout={onLogout} title='Dashboard'/>
    </section>
  )
}

export default Home
