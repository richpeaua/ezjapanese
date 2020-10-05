import React from 'react';
import { Link } from 'react-router-dom';


function Menu() {
  return (
    <div>
      { menuItems.map(item =>
      <ul>
        <li><Link to="">item</Link></li>
      </ul>)
      }
    </div>
  )
}

const menuItems = [
  "Home",
  "Vocab",
  "Characters",
  "Grammar"
]

export default Menu;