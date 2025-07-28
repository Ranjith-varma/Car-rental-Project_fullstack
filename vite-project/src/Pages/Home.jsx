import React from 'react'
import Hero from '../Components/Hero'
import FeaturedSection from '../Components/FeaturedSection'
import Banner from '../Components/Banner'
import Testimonial from '../Components/Testimonial'
import Newsletter from '../Components/Newsletter'
import CarDetails from './CarDetails'

const Home = () => {
  return (
    <>
      <Hero />
      <FeaturedSection />
      <Banner />
      <Testimonial />
      <Newsletter />
      {/* <CarDetails /> */}
    </>
  )
}

export default Home
