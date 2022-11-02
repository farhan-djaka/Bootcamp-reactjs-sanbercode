import React from "react"
import { Navbar } from 'flowbite-react';


const Navi  =() => {
 return (
<div className="bg-gradient-to-t from-slate-400  to-slate-500">
<Navbar className="bg-gradient-to-t from-slate-400 to-slate-500"
fluid={true}
rounded={true}
>
<Navbar.Brand  href="https://flowbite.com/">
  <img
    src="https://flowbite.com/docs/images/logo.svg"
    className="mr-3 h-6 sm:h-9"
    alt="Flowbite Logo"
  />
  <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
    Final Project React.JS
  </span>
</Navbar.Brand>
<Navbar.Toggle />
<Navbar.Collapse>
  <Navbar.Link
    href="/navbars"
    active={true}
  >
    Home
  </Navbar.Link>
</Navbar.Collapse>
</Navbar>
</div>

)}

export default Navi