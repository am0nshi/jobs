import { useState } from "react"
import UserLeft from './UserLeft'
import UserFeedback from "./UserFeedback"
const reviewsSlider = [
  {
    authorName: "Samuel Hungary",
    authorPosition: "PHP Developer",
    authorReview: '"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire". '
  },
  {
    authorName: "David Williumson",
    authorPosition: "WordPress Developer",
    authorReview: '"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire". '
  },
  {
    authorName: "Jacoline Frankly",
    authorPosition: "Shopify Developer",
    authorReview: '"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire". '
  },
]
const FeedBackArea = () => {

  const [slideIndex, setSlideIndex] = useState(1)

  const nextSlide = () => {
    if (slideIndex !== reviewsSlider.length) {
      setSlideIndex(state => state + 1)
    } else if (slideIndex === reviewsSlider.length) {
      setSlideIndex(1)
    }
  }
  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(state => state - 1)
    } else if (slideIndex === 1) {
      setSlideIndex(reviewsSlider.length)
    }
  }

  return (
    <div className="home3-user-feedback mb-120">
      <div className="container">
        <div className="row g-4 gy-5">
          <div className="col-lg-6">
            <UserLeft />
          </div>
          <div className="col-lg-6">
            <div className="swiper user-feedback-slider3">
              <div className="swiper-wrapper">
                {reviewsSlider.map((review, index) => {
                  return <UserFeedback {...review}
                    key={index}
                    isShowed={slideIndex === index + 1}

                  />
                })}

              </div>
              <div className="swiper-pagination-g"></div>
              <div className="swiper-btn-2">
                <div className="swiper-prev prev-6" onClick={prevSlide}>
                  <i className="bi bi-chevron-left"></i>
                </div>
                <div className="swiper-next next-6" onClick={nextSlide}>
                  <i className="bi bi-chevron-right"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeedBackArea