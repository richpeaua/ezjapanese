import React, { Component } from 'react';

import Menu from './Menu';

class Header extends Component {
  render() {
    return (
      <div className="header-box">
        <h1>EZJapanese Header</h1>
        <Menu />
      </div>
    )
  }
}

export default Header;