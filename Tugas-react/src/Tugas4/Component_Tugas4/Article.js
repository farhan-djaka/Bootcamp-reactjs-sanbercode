import React, { useState } from "react"
import Gambar from "../../asset/Farhan.jpg"

   

const Article = () =>{

const [display, setDisplay] = useState(false)

const handledisplay = () => {
    setDisplay(display === true ? false : true)

console.log(display)
}

    return (
        <div className="pahlawan">
        <code>Created by</code>

    {display === true ?
    <>
     <img alt="samsudin" src={Gambar} />
     <code>Farhan Able Djaka Iffatammaruddin Ro'if</code>
    </>
    : 
    ""
    }
                <button onClick= {handledisplay} className="button">tampilkan pembuat article</button>
            </div>
    )
}
export default Article
