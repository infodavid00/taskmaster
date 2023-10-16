import React from 'react'
import '../App.css'

export default function Hero() {
  return (
    <section className="app-hero-container-b">
      <div>
       <h1>Boost Productivity, Slay Tasks Efficiently with Task Master </h1>
       <div className="app-hero-cta-b">Harness the Power of Cutting-Edge Features and Time-Saving Tools with Our Rich Toolkit</div>
       <div className="app-hero-cta-b app-hero-cta-flex">
       {/* <!-- use app-hero-cta-stretch in the div for long buttons. use app-hero-cta-flex to make the button align next to each other  --> */}
        <button onClick={()=> window.location.href = '#tools'}>Explore Taskmaster's toolkit</button>
        <button><a href="mailto:da40au40@gmail.com" style={{color:'inherit',textDecoration:'none'}}>Contact Team</a></button>
       </div>
       </div>
   </section>
  )
}
