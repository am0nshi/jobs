import React from 'react'
import HomeBannerIcon1 from "/public/assets/images/bg/home2-banner-01.png"
import HomeBannerIcon2 from "/public/assets/images/bg/home2-banner-02.png"
import HomeBannerIcon3 from "/public/assets/images/bg/home2-banner-03.png"
import HomeBannerIcon4 from "/public/assets/images/bg/home2-banner-04.png"
import UserIcon31 from "/public/assets/images/bg/user31.png"
import UserIcon32 from "/public/assets/images/bg/user32.png"
import UserIcon33 from "/public/assets/images/bg/user33.png"
const BannerArea = () => {
  return (
    <div className="banner-image-area">
      <div className="banner-img-left">
        <div className="banner-img1">
          <img className="img-fluid" src={HomeBannerIcon1}
            alt="" />
        </div>
        <div className="banner-img2">
          <img className="img-fluid" src={HomeBannerIcon2}
            alt="" />
        </div>
      </div>
      <div className="banner-img-center">
        <div className="banner-img3">
          <img className="img-fluid" src={HomeBannerIcon3}
            alt="" />
        </div>
        <div className="banner-img4">
          <div className="user-area">
            <ul>
              <li><img src={UserIcon31} alt="" /></li>
              <li><img src={UserIcon32} alt="" /></li>
              <li><img src={UserIcon33} alt="" /></li>
              <li>
                <div className="total-user">
                  <h6>21k</h6>
                </div>
              </li>
            </ul>
            <p>Peoples Joined!</p>
          </div>
        </div>
      </div>
      <div className="banner-img-right">
        <div className="banner-img5">
          <div className="new-job-list">
            <h3>2400+</h3>
            <p>New Job Listed!</p>
          </div>
        </div>
        <div className="banner-img6">
          <img className="img-fluid" src={HomeBannerIcon4}
            alt="" />
        </div>
      </div>
    </div>
  )
}

export default BannerArea