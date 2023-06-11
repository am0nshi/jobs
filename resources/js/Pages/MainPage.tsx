import CategoryArea from '@/Components/CategoryArea'
import CounterArea from '@/Components/CounterArea'
import FeaturedArea from '@/Components/FeaturedArea'
import FeedBackArea from '@/Components/FeedbackArea'
import Footer from '@/Components/Footer'
import Header from '@/Components/Header'
import Hero from '@/Components/Hero'
import HowItWorksArea from '@/Components/HowItWorksArea'
import JobListArea from '@/Components/JobListArea'
import JobLocationArea from '@/Components/JobLocationArea'

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
      <FeedBackArea />
      <JobLocationArea />
      <Footer />
    </>
  )
}

export default MainPage