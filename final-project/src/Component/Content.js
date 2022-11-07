import React from "react"
import skate from '../asset/SKateboy.png'
import Diamond from '../asset/DIamondboy.png'
import logo from '../asset/Logo IFS.png'


const Content = () => {
    return (<>
<content>
        <div className="flex justify-center
        p- " >
        <div className="rounded-xl bg-yellow-300 w-1/12 h-fit shadow-xl">
                  <img
                    src={logo}
                    alt="ika"
                  />
    </div>
        <div className="text-center my-auto flex-col w-1/2 p-5 rounded-lg">
      <h1 className=" whitespace-nowrap text-xl font-semibold mx-auto bg-yellow-300 rounded-lg">" IFS-JOB CONNECT "</h1>
      <h2 className="bg-green-200">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
         Excepteur sint occaecat cupidatat non proident, 
        sunt in culpa qui officia deserunt mollit anim id est laborum..</h2>
    </div>
      </div>

      <div className ="flex justify-center" >
    <div className=" my-auto flex-col w-1/2 p-5 rounded-lg">
      <h1 className=" whitespace-nowrap text-xl font-semibold mx-auto bg-yellow-300 rounded-lg shadow-xl">" IFS-JOB CONNECT "</h1>
      <h2 className="bg-green-200">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
         Excepteur sint occaecat cupidatat non proident, 
        sunt in culpa qui officia deserunt mollit anim id est laborum..</h2>
    </div>
        <div className="shadow-xl bg-yellow-300 w-1/5  rounded-xl">
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