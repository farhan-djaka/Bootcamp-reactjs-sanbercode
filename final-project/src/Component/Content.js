import React from "react"

import Diamond from '../asset/DIamondboy.png'
import logo from '../asset/Logo IFS.png'


const Content = () => {
    return (<>
<content>
        <div className="flex justify-center
        p-4" >
        <div className="rounded-xl bg-yellow-300 w-auto sm:w-1/12 h-fit drop-shadow-2xl shadow-stone-900">
                  <img
                    src={logo}
                    alt="ika"
                  />
    </div>
        <div className="my-auto flex-col w-auto sm:w-1/2 p-5 rounded-lg">
      <h1 className=" whitespace-nowrap text-xl font-semibold mx-auto bg-yellow-300 rounded-lg p-5">IFS-JOB CONNECT</h1>
      <div className="bg-green-200 px-16  py-5">
        <div className="text-ellipsis">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupsaaidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum..
        </div>
        <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </div>
        </div>
    </div>
      </div>

      <div className ="flex justify-center" >
    <div className=" my-auto flex-col w-auto sm:w-1/2 p-5 rounded-lg">
      <h1 className=" whitespace-nowrap text-xl p-5 font-semibold mx-auto bg-yellow-300 rounded-lg shadow-xl">IFS-JOB CONNECT</h1>
      <h2 className="bg-green-200 p-10 bg-fixed">Loerem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
         Excepteur sint occaecat cupidatat non proident, 
        sunt in culpa qui officia deserunt mollit anim id est laborum..</h2>
    </div>
        <div className="shadow-xl bg-yellow-300 w-auto h-fit sm:w-1/5  rounded-xl">
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