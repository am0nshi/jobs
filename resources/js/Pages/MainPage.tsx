import CategoryArea from '@/Components/CategoryArea'
import CounterArea from '@/Components/CounterArea'
import Footer from '@/Components/Footer'
import Header from '@/Components/Header'
import Hero from '@/Components/Hero'
import React from 'react'

const MainPage = () => {
  return (
    <>
      <Header />
      <Hero />
      <CounterArea />
      <CategoryArea />
      <Footer />
    </>
  )
}

export default MainPage