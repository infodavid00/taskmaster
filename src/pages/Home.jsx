import React,{ useState } from 'react'
import Header from '../utils/Header'
import "../App.css"
import Hero from '../componenets/Hero'
import About from '../componenets/About'
import Cards from '../componenets/Cards'
import Develpers from '../componenets/Develpers'
import Feedback from '../componenets/Feedback'
import Footer from '../componenets/Footer'

export default function Home() {
  return (
    <>
    <div>
    <section className="app-container-fit">
      <Header />
      <section className="app-afterHeader">
        <Hero />
      </section>
    </section>
    <About />
    <Cards />
    <Develpers />
    <Feedback />
    <Footer />
    <section className="app-footer-container app-footer-b-container">
    <li><a href='mailto:da40au40@gmail.com'>contact us at da40au40@gmail.com</a></li>
    </section>
    </div>
    </>
  )
}

