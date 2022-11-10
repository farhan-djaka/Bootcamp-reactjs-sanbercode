import React, { useState } from 'react';
import './App.css';
import Navi from './Component/Navi';
import Foots from './Component/Foots';
import HeroSecction from './Component/HeroSection';

const App = () => {
  return (
  <>
    <div className='bg-gray-800 p-5'>
        <div className='bg-white p-5 p rounded-xl' >
          <Navi/>
          <HeroSecction/>
        </div>
    <Foots/>
    </div>
    
  </>
  )
}
export default App
