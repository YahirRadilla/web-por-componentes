import React from 'react'
import './Home.css'

function Home() {
  return (
    <section id='home-section'>
        <div id='home-text-container'>
            <h1 id='home-title'>Grown your skills, define your future</h1>
            <p id='home-paragraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quaerat saepe ipsa, fugiat aut modi tenetur eum sint magni itaque quibusdam reiciendis natus quia est!</p>
            <div id='home-buttons'>
                <button className='home-button'>Explore Courses</button>
                <button className='home-button-2 '>Learn More</button>
            </div>
        </div>

        <div id='home-image-container'>
            <img id='home-image' src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="home-image" />
        </div>
    </section>
  )
}

export default Home