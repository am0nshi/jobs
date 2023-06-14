import React from 'react'
import JobLocationCard from './JobLocationCard'

import ExploreIcon from "/public/assets/images/icon/explore-elliose.svg"
import LocationIcon1 from "/public/assets/images/bg/location-01.png"
import LocationIcon2 from "/public/assets/images/bg/location-02.png"
import LocationIcon3 from "/public/assets/images/bg/location-03.png"
import LocationIcon4 from "/public/assets/images/bg/location-04.png"
import LocationIcon5 from "/public/assets/images/bg/location-05.png"
import LocationIcon6 from "/public/assets/images/bg/location-06.png"
import LocationIcon7 from "/public/assets/images/bg/location-07.png"
import LocationIcon8 from "/public/assets/images/bg/location-08.png"
const JobLocationArea = () => {
  return (
    <div className="home4-joblocation-area mb-120">
      <div className="container">
        <div className="row mb-60">
          <div className="col-12 d-flex flex-wrap align-items-end justify-content-md-between justify-content-start gap-3">
            <div className="section-title1">
              <h2>Job By Your <span>Location</span></h2>
              <p>To choose your trending job dream &amp; to make future bright.</p>
            </div>
            <div className="explore-btn">
              <a href="job-listing1.html">View All Location  <span><img src={ExploreIcon} alt="" /></span></a>
            </div>
          </div>
        </div>
        <div className="row grid g-4">
          <div className="col-lg-4 col-md-6">
            <JobLocationCard
              locationSrc={LocationIcon1}
              isPopular
              location='Loss Angles City, Canada'
              jobCount={33}
            />
          </div>
          <div className="col-lg-4 col-md-6">
            <JobLocationCard
              locationSrc={LocationIcon2}
              location='Dhaka City, Bangladesh'
              jobCount={38}
            />
          </div>
          <div className="col-lg-4 col-md-6">
            <JobLocationCard
              locationSrc={LocationIcon3}
              location='Melbourne City, Austrila'
              jobCount={66}
            />
          </div>
          <div className="col-lg-4 col-md-6">
            <JobLocationCard
              locationSrc={LocationIcon4}
              isPopular
              location='New York City, USA'
              jobCount={55}
            />
          </div>
          <div className="col-lg-4 col-md-6">
            <JobLocationCard
              locationSrc={LocationIcon5}
              location='California City, UK'
              jobCount={76}
            />
          </div>
          <div className="col-lg-4 col-md-6">
            <JobLocationCard
              isPopular
              locationSrc={LocationIcon6}
              location='Kyiv, Ukraine'
              jobCount={1000}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default JobLocationArea