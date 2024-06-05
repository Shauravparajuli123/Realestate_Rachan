import React from 'react'
import Navbar from './Components/Navbar'
import Herosection from './Components/Herosection'
import Myteam from './Components/Myteam'
import Contact from './Components/Contact'
import Properties from './Components/Properties'


const App = () => {
  return (
    <>
      <Navbar/>
      <Herosection/>
      <Properties/>
      <Myteam/>
      <Contact/>
    </>
  )
}

export default App