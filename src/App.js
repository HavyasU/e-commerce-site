import React, { useEffect, useState } from 'react'
// import Cards from './components/cards'
// import "./components/card.css"
import Slider from './components/corousel/slider'
import Navbar from './components/Navbar'
import NoGridCard from './components/corousel/noGridCard'
import Gridcard from './components/corousel/gridcard'
const App = () => {

  return (<>

    <Navbar />
    <Slider />
    <NoGridCard />
    <Gridcard />
  </>)
}

export default App
