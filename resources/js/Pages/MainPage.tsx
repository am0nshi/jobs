import CategoryArea from '@/Components/Home/CategoryArea'
import CounterArea from '@/Components/Home/CounterArea'
import FeaturedArea from '@/Components/Home/FeaturedArea'
import FeedBackArea from '@/Components/Home/FeedbackArea'
import Hero from '@/Components/Home/Hero'
import HowItWorksArea from '@/Components/Home/HowItWorksArea'
import JobListArea from '@/Components/Home/JobListArea'
import JobLocationArea from '@/Components/Home/JobLocationArea'
import RecentArticleArea from '@/Components/Home/RecentArticleArea'
import TrustedCompanies from '@/Components/Home/TrustedCompanies'
import Modal from '@/Components/Modal'
import { useState } from 'react'
const MainPage = () => {
  let [isOpen, setIsOpen] = useState(true)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }
  return (

    <>
      <Modal onClose={closeModal} show={isOpen} >
        <h1>wow</h1>
        <h2>valera</h2>
      </Modal>

      <Hero />
      <CounterArea />
      <CategoryArea />
      <JobListArea />
      <HowItWorksArea />
      <FeaturedArea />
      <FeedBackArea />
      <JobLocationArea />
      <RecentArticleArea />
      <TrustedCompanies />
    </>
  )
}

export default MainPage