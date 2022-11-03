import React from 'react';
import './App.css';
import Navi from './Component/Navi';
import Foots from './Component/Foots';
import HeroSecction from './Component/HeroSection';

const App = () => {
  return (
  <>
    <div className='bg-white'>
    <div className='m-5 p-6 rounded-xl' >
      
    <Navi/>
    <HeroSecction/>
    <Foots/>
    </div>
    </div>
  </>
  )
}
export default App
