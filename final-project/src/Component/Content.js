import React from "react";
import { Carousel } from "flowbite-react";
import skate from '../asset/SKateboy.png'
import Diamond from '../asset/DIamondboy.png'
const Content = () => {
    return (
<>
        <div class="flex justify-center
        bg-slate-400
        p-5" >
        <div className=" w-1/6 ">
                  <img
                    src={skate}
                    alt="ika"
                  />
    </div>
        <div class="flex-col w-1/2 p-5 rounded-lg  bg-gradient-to-l from-slate-500 shadow-2xl">
      <h1 className="text-center whitespace-nowrap text-xl font-semibold dark:text-white;">IFS-JOB CONNECT</h1>
      <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
         Excepteur sint occaecat cupidatat non proident, 
        sunt in culpa qui officia deserunt mollit anim id est laborum..</h2>
      <h3>03</h3>
    </div>
      </div>

      <div class="flex justify-center
        bg-slate-400
        p-5" >
    <div class="flex-col w-1/2 p-5 rounded-lg bg-gradient-to-r from-indigo-500 ... shadow-xl">
      <h1 className="text-center whitespace-nowrap text-xl font-semibold dark:text-white;">IFS-JOB CONNECT</h1>
      <h2>The purpose of lorem ipsum is to create a natural looking block of text 
        (sentence, paragraph, page, etc.) that doesn't distract from the layout. 
        A practice not without controversy, laying out pages with meaningless filler text can be very useful
         when the focus is meant to be on design, not content. </h2>
      <h3>03</h3>
    </div>
        <div className=" w-2/6">
                  <img
                    src={Diamond}
                    alt="rika"
                  />
    </div>

      </div>


</>
    )
}

export default Content