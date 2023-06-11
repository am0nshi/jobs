import UserLeft from './UserLeft'
const FeedBackArea = () => {
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
                <div className="swiper-slide">
                  <div className="user-feedback-wrap">
                    <div className="user-feedback-top">
                      <div className="author-area">
                        <div className="author-img">
                          <img src="assets/images/bg/testimonial-author3.png" alt="" />
                        </div>
                        <div className="author-content">
                          <h5>Samuel Hungary</h5>
                          <span>PHP Developer</span>
                        </div>
                      </div>
                      <div className="reviews">
                        <ul>
                          <li><i className="bi bi-star-fill"></i></li>
                          <li><i className="bi bi-star-fill"></i></li>
                          <li><i className="bi bi-star-fill"></i></li>
                          <li><i className="bi bi-star-fill"></i></li>
                          <li><i className="bi bi-star-half"></i></li>
                        </ul>
                      </div>
                    </div>
                    <p>"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire".</p>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="user-feedback-wrap">
                    <div className="user-feedback-top">
                      <div className="author-area">
                        <div className="author-img">
                          <img src="assets/images/bg/testimonial-author2.png" alt="" />
                        </div>
                        <div className="author-content">
                          <h5>David Williumson</h5>
                          <span>WordPress Developer</span>
                        </div>
                      </div>
                      <div className="reviews">
                        <ul>
                          <li><i className="bi bi-star-fill"></i></li>
                          <li><i className="bi bi-star-fill"></i></li>
                          <li><i className="bi bi-star-fill"></i></li>
                          <li><i className="bi bi-star-fill"></i></li>
                          <li><i className="bi bi-star-half"></i></li>
                        </ul>
                      </div>
                    </div>
                    <p>"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire".</p>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="user-feedback-wrap">
                    <div className="user-feedback-top">
                      <div className="author-area">
                        <div className="author-img">
                          <img src="assets/images/bg/testimonial-author1.png" alt="" />
                        </div>
                        <div className="author-content">
                          <h5>Jacoline Frankly</h5>
                          <span>UI/UX Engineer</span>
                        </div>
                      </div>
                      <div className="reviews">
                        <ul>
                          <li><i className="bi bi-star-fill"></i></li>
                          <li><i className="bi bi-star-fill"></i></li>
                          <li><i className="bi bi-star-fill"></i></li>
                          <li><i className="bi bi-star-fill"></i></li>
                          <li><i className="bi bi-star-half"></i></li>
                        </ul>
                      </div>
                    </div>
                    <p>"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire".</p>
                  </div>
                </div>
              </div>
              <div className="swiper-pagination-g"></div>
              <div className="swiper-btn-2">
                <div className="swiper-prev prev-6">
                  <i className="bi bi-chevron-left"></i>
                </div>
                <div className="swiper-next next-6">
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