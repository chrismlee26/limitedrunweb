import React from 'react';
import './Nav.css';

function Nav() {
  return (
    <div className="nav__container">
      <div className="navbar__nav">
        <div className="nav__logo">limited run
        </div>
        <div className="nav__item__container">
          <a href="#" className="nav__items" style={{color: 'orange'}}>HOME</a>
          <a href="#" className="nav__items">PREVIEW</a>
          <a href="#" className="nav__items">SETTINGS</a>
          <a href="#" className="nav__items">LOGOUT</a>
        </div>
      </div>
    </div>
  )
}

export default Nav
