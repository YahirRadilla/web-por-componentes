import React from 'react'
import './Home.css'

function Home() {
  return (
    <section id='home-section'>
        <div id='home-text-container'>
            <h1 id='home-title'>Find Your Dream Car Here</h1>
            <p id='home-paragraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quaerat saepe ipsa, fugiat aut modi tenetur eum sint magni itaque quibusdam reiciendis natus quia est!</p>
            <div id='home-buttons'>
                <button className='home-button'>Explore Cars</button>
                <button className='home-button-2 '>Sell Your Car</button>
            </div>
        </div>

        <div id='home-image-container'>
            <img id='home-image' src="./public/car.png" alt="home-image" />
        </div>
    </section>
  )
}

export default Home