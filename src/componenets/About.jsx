import React from 'react'
import '../App.css'
import box from '../assets/Mystery box-amico.svg'
import noad from '../assets/Online ads-bro.svg'
import tools from '../assets/Pen tool-bro.svg'
import offline from '../assets/Going offline-rafiki.svg'

export default function About() {
  return (
    <section className='app-about-body afterHeader' id='about'>
       <div className='app-about-container'>
         <h2>Comprehensive Toolkit</h2>
         <img src={box} />
         <p>Incorporating a diverse range of features within a unified container, our toolkit provides a comprehensive and integrated solution.</p>
       </div>

       <div className='app-about-container'>
         <h2>Over 12 Free Tools</h2>
         <img src={tools} />
         <p>Explore a wide array of tools at no cost, without discounts, upfront fees, or additional charges.</p>
       </div>

       <div className='app-about-container'>
        <h2>No Advertisements</h2>
        <img src={noad} />
        <p>Tired of annoying sales discount ads or unwanted redirects? Taskmaster ensures a seamless and ad-free experience, prioritizing your satisfaction.</p>
       </div>

      <div className='app-about-container'>
       <h2>Offline Capabilities</h2>
       <img src={offline} />
       <p>Experience the full range of our tools seamlessly, regardless of your internet connection status.</p>
      </div>
    </section>
  )
}
