import React from 'react'
import './Header.css'

function Header() {
  return (
    <header className="header">

      <div className="logo">
        <span className="logo-highlight">Quest</span>
      </div>

 
      <nav className="nav">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Courses</a>
        <a href="#">Pages</a>
        <a href="#">Blog</a>
      </nav>

      
    </header>
  )
}

export default Header