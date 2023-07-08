import React from 'react'
import Hero from '../../components/Hero'
import JobPost from '../../components/JobPost'
import NewsLetter from '../../components/NewsLetter'
import Process from '../../components/Process'
import Statistics from '../../components/Statistics'
import Testimonials from '../../components/Testimonials'

const Home = () => {
  return (
    <main className='itemCenter'>
      <div className='width px-8'>
        <Hero />
        <Process />
        <Statistics />
        <JobPost/>
        <Testimonials />
        <NewsLetter/>
      </div>
    </main>
  )
}

export default Home