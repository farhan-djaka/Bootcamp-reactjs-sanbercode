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

    {display === true ?
    <>
     <Joblist/>
    </>
    : 
    ""
    }
               <div className="flex justify-center">
                <button onClick= {handledisplay} >
                    
                    <div className="bg-amber-500 rounded-xl m-5 p-2">
                        Show Joblist
                    </div>
                    
                 </button>
                </div>
    </div>
    </>
    )

}

export default HeroSecction