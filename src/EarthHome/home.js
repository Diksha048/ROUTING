import React from 'react'
import Navbar from './../Navbar/navbar'
import HomeImg from './earth.jpg';

function Home() {
  return (
    <div>
      <Navbar/>
      <h1 className='h1'> Home </h1>
  
      <img src={HomeImg} className='common-img'/>
    </div>
  )
}

export default Home
