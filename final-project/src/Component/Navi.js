import React from "react"
import logo from "../asset/Logo IFS.png"
import gmail from "../asset/logo-gmail.png"
import igimg from "../asset/logo-Instagram.png"
import waimg from "../asset/logo-wa.png"
import { Navbar } from 'flowbite-react';


const Navi  =() => {
 return (
<div className="flex justify-between">
    <div className="flex justify-start gap-2">
        <img className="w-7 h-fit" alt="yay"
        src={logo}/>
        <div> IFS </div>
        <div className="bg-yellow-300 px-3"> job connect</div>
    </div>

    <div className="flex justify-end gap-x-3">
        <img className="w-12 h-fit p-1" src={waimg} alt = "wa"/>
        <img className="w-9 h-fit p-1" src={igimg} alt = "ig"/> 
        <img className="w-9 h-fit p-0.5" src={gmail} alt = "gmail"/> 
        <div> Creator profile </div>
    </div>
  
    

</div>

)}

export default Navi