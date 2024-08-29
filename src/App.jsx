import React, { useState } from 'react'
import backgroundWeather from "/assets/backgroundWeather.svg"
import CradsWeather from './Components/CradsWeather'

function App() {


  return (
    <div className='flex justify-center items-center h-screen bg-cover' style={{backgroundImage:`url(${backgroundWeather})`}}>
      <CradsWeather/>
    </div>
  )
}

export default App