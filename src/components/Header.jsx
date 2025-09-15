import React from 'react'
import './Header.css'

function Header() {
  return (
    <header className="header">

      <div className="logo">
        <span className="logo-highlight">RentCars</span>
      </div>

 
      <nav className="nav">
        <a href="#">Become a renter</a>
        <a href="#">Rental deals</a>
        <a href="#">How it work</a>
        <a href="#">Why choose us</a>
      </nav>

      
    </header>
  )
}

export default Header