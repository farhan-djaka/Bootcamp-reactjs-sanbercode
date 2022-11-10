import React from "react"
import Content from "./Content"
import Joblist from "./Joblist"
import { useState } from "react"

const HeroSecction = () => {
    const [display, setDisplay] = useState(false)

const handledisplay = () => {
    setDisplay(display === true ? false : true)

console.log(display)
}

    return (
        <>
        <Content/>
        <div>
               <div className="flex justify-center">
                <button onClick= {handledisplay} >
                     
                    <div className="bg-amber-500 rounded-xl m-5 p-2">
                        {display ? "hide" : "show"} Joblist
                    </div>
                    
                 </button>
                </div>

                {display === true ?
    <>
     <Joblist/>
    </>
    : 
    ""
    }
    </div>
    </>
    )

}

export default HeroSecction