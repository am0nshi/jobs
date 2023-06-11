import CategoryArea from '@/Components/CategoryArea'
import CounterArea from '@/Components/CounterArea'
import Footer from '@/Components/Footer'
import Header from '@/Components/Header'
import Hero from '@/Components/Hero'
import JobListArea from '@/Components/JobListArea'
import React from 'react'

const MainPage = () => {
  return (
    <>
      <Header />
      <Hero />
      <CounterArea />
      <CategoryArea />
      <JobListArea />
      <Footer />
    </>
  )
}

export default MainPage