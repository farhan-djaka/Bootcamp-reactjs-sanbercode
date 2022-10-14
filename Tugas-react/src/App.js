import React from "react"
import "./App.css"
import Article from "./components/Article"
import Hero from "./components/Hero"
import Navbar from "./components/navbar"

const App = () => {
    return(<div>  
    <Navbar/>
    <Hero/>
    <Article/>
</div>
  
    )
}

export default App