import React from "react"
import logo from "../asset/Logo IFS.png"
import gmail from "../asset/logo-gmail.png"
import igimg from "../asset/logo-Instagram.png"
import waimg from "../asset/logo-wa.png"


const Navi  =() => {
 return (
<div className="flex justify-between border-b-4 ">
    <div className="flex justify-start">
        <img className="w-7 h-fit" alt="yay"
        src={logo}/>
        <div> IFS </div>
    </div>

    <div className="flex justify-end gap-x-3">
        <img className="w-7 sm:w-10 h-fit p-1" src={waimg} alt = "wa"/>
        <img className="w-6 sm:w-7 h-fit p-1" src={igimg} alt = "ig"/> 
        <img className="w-6 sm:w-8 h-fit p-1" src={gmail} alt = "gmail"/> 
    </div>
  
    

</div>

)}

export default Navi