import React, { Component } from 'react'

// libs
import {Link} from 'react-router-dom'

// styles
import './NavBar.css'

// components

export class NavBar extends Component {
  render() {
    return (
      <div className="navbar-block">
        <ul className="navbar-ul">
          <li className="navbar-item"><Link className="navbar-link" to="">Home</Link></li>
          <li className="navbar-item"><Link className="navbar-link" to="/vocab">Vocabulary</Link></li>
          <li className="navbar-item"><Link className="navbar-link" to="">Characters</Link></li>
          <li className="navbar-item"><Link className="navbar-link" to="">Grammer</Link></li>
        </ul>
      </div>
    )
  }
}

export default NavBar