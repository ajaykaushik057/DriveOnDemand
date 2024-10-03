import React from 'react'
import Header from './Header'
import '../../styles/Home.css'
import CarBooking from './CarBooking'
import StatisticsSection from './Strip'
import Article from './Article'
import Guest from './Guest'
import Background from './Background'
import Footer from './Footer'

const Home = () => {
  return (
    <div>
      <Background />
      <StatisticsSection/>
      <CarBooking />
      <Article/>
      <Guest/>
      <Footer/>
    </div>
  )
}

export default Home
