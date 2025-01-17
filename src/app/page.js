import Atm from '@/components/Atm'
import Blog from '@/components/Blog'
import TestimonialCarousel from '@/components/Carousel'
import Hero from '@/components/Hero'
import Matrix from '@/components/Matrix'
import Services from '@/components/Services'
import React from 'react'

const HomePage = () => {
  return (
    <div className=''>
      <Hero />
      <Services />
      <Matrix />
      <TestimonialCarousel />
      <Atm />
      <Blog />
    </div>
  )
}

export default HomePage