import React, { useState, useRef, useEffect } from 'react'
import { motion, useInView } from 'framer-motion';
import CompanyLogoIcon from "/public/assets/images/bg/company-logo/trusted-company-01.png"
const TrustedCompanies = () => {
  const [width, setWidth] = useState(0);
  const sliderWrapper = useRef<HTMLDivElement>(null)
  const inView = useInView(sliderWrapper)

  useEffect(() => {
    if (sliderWrapper.current) {
      setWidth(sliderWrapper.current.scrollWidth - sliderWrapper.current.offsetWidth);
    }
  }, [inView]);

  return (
    <div className="home1-trusted-company two mb-120">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title">
              <h5>Our Trusted Company</h5>
            </div>
            <motion.div className="swiper trusted-company-slider" ref={sliderWrapper}   >
              <motion.div
                drag="x"
                dragConstraints={{ right: 0, left: -width }}
                className="swiper-wrapper"
                whileTap={{ cursor: "grabbing" }}>
                <div className="swiper-slide">
                  <div className="company-logo">
                    <img src={CompanyLogoIcon} alt="" />
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="company-logo">
                    <img src={CompanyLogoIcon} alt="" />
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="company-logo">
                    <img src={CompanyLogoIcon} alt="" />
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="company-logo">
                    <img src={CompanyLogoIcon} alt="" />
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="company-logo">
                    <img src={CompanyLogoIcon} alt="" />
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="company-logo">
                    <img src={CompanyLogoIcon} alt="" />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TrustedCompanies