import React from "react"
import skate from '../asset/SKateboy.png'
import Diamond from '../asset/DIamondboy.png'


const Content = () => {
    return (<>
<content>
        <div className="flex justify-center
        p-5 bg-gray-800" >
        <div className=" w-1/3 ">
                  <img
                    src={skate}
                    alt="ika"
                  />
    </div>
        <div className="flex-col w-1/2 p-5 rounded-lg bg-gradient-to-l from-yellow-300 shadow-2xl">
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

      <div className ="flex justify-center bg-gray-800
        p-5" >
    <div className="flex-col w-1/2 p-5 rounded-lg bg-gradient-to-r from-indigo-500 ... shadow-xl">
      <h1 className="text-center whitespace-nowrap text-xl font-semibold dark:text-white;">IFS-JOB CONNECT</h1>
      <h2>GET YOUR JOB IS LIKE YOU HAVE HAAD GET DIAMOND,IS VERY FANCY a transparent, 
        extremely hard precious stone that is used in jewellery, 
        and in industry for cutting hard things is a solid form of the element carbon with its atoms arranged in a crystal structure called diamond cubic.
        At room temperature and pressure, another solid form of carbon known as graphite is the chemically stable form of carbon,
        but diamond converts to it extremely slowly. </h2>
      <h3>03</h3>
    </div>
        <div className=" w-2/6">
                  <img
                    src={Diamond}
                    alt="rika"
                  />
    </div>

      </div>


</content>
</>    
)
}

export default Content