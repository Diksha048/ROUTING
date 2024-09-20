import React from 'react'
import Navbar  from './../Navbar/navbar'
import AstronautsImg from './astronauts.jpg';

function Astronauts() {
  return (
    <div>
      <Navbar/>
      <h1 className='h1'>Astronauts</h1>

      <img src={AstronautsImg} className='common-img'/>
    </div>
  )
}

export default Astronauts
