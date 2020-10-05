import React from 'react'

// libs

// style
import "./Header.css"

//assets
import logo from "../../../assets/images/sakura-blossom.png"

// components
import NavBar from '../NavBar/NavBar'

function Header() {
  return (
    <div className="header-block">

      <div className="title-flexblock">

        <div className="logo-block">
          <img className="logo-1" src={logo} alt="sakura blossom" />  
        </div>

        <div className="title-block">
          <h1 className="title">EZJapanese</h1>
        </div>

        <div className="logo-block">
          <img className="logo-2" src={logo} alt="sakura blossom" />  
        </div>
      
      </div>

      <NavBar />
    </div>
  )
}

export default Header
