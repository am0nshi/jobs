import React from 'react'
import CompanyCountCard from './CompanyCountCard'
import CounterBlock from '@/Components/CounterBlock'

//icons
import TotalIcon from "/public/assets/images/icon/tt-applied.svg"
import SaveJobIcon from "/public/assets/images/icon/save-job.svg"
import PendingIcon from "/public/assets/images/icon/pending-icon.svg"
import ClosedIcon from "/public/assets/images/icon/closed-icon.svg"
const CompanyCounterArea = () => {
  return (
    <div className="counter-area">
      <div className="row g-4 justify-content-center mb-30">
        <CounterBlock
          countAmount={30}
          srcIcon={TotalIcon}
          title='Total Applied'

        />
        <CounterBlock
          countAmount={30}
          srcIcon={TotalIcon}
          title='Total Applied'
          sectionName='two'
        />
        <CompanyCountCard
          count={120}
          srcIcon={PendingIcon}
          title='Pending Job'
          classType='three'
        />
        <CompanyCountCard
          count={900}
          srcIcon={ClosedIcon}
          title='Closed Jobs'
          classType='four'
        />
      </div>
      <div className="row g-4 justify-content-cente">
        <div className="col-lg-3 col-sm-6">
          <div className="counter-single">
            <div className="counter-icon">
              <img src="assets/images/icon/total-view-icon.svg" alt="image" />
            </div>
            <div className="coundown">
              <p>Total View</p>
              <div className="d-flex align-items-center">
                <h3 className="odometer">
                  2500
                </h3>
                <span>+</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6">
          <div className="counter-single two">
            <div className="counter-icon">
              <img src="assets/images/icon/follow-icon.svg" alt="image" />
            </div>
            <div className="coundown">
              <p>Our Followers</p>
              <div className="d-flex align-items-center">
                <h3 className="odometer">
                  250
                </h3>
                <span>+</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6">
          <div className="counter-single three">
            <div className="counter-icon">
              <img src="assets/images/icon/highlight-icon.svg" alt="image" />
            </div>
            <div className="coundown">
              <p>Highlighted Jobs</p>
              <div className="d-flex align-items-center">
                <h3 className="odometer">
                  150
                </h3>
                <span>+</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6">
          <div className="counter-single five">
            <div className="counter-icon">
              <img src="assets/images/icon/featured-icon.svg" alt="image" />
            </div>
            <div className="coundown">
              <p>Our Followers</p>
              <div className="d-flex align-items-center">
                <h3 className="odometer">
                  500
                </h3>
                <span>+</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CompanyCounterArea