import CategoryArea from '@/Components/CategoryArea'
import CounterArea from '@/Components/CounterArea'
import FeaturedArea from '@/Components/FeaturedArea'
import Footer from '@/Components/Footer'
import Header from '@/Components/Header'
import Hero from '@/Components/Hero'
import HowItWorksArea from '@/Components/HowItWorksArea'
import JobListArea from '@/Components/JobListArea'

const MainPage = () => {
  return (
    <>
      <Header />
      <Hero />
      <CounterArea />
      <CategoryArea />
      <JobListArea />
      <HowItWorksArea />
      <FeaturedArea />
      <Footer />
    </>
  )
}

export default MainPage