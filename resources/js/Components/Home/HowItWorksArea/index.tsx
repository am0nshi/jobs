import React from 'react'
import AccountCreateSvg from './AccountCreateSvg'
import CreateResumeSvg from './CreateResumeSvg'
import FindJobsSvg from './FindJobsSvg'
import ApplyJobsSvg from './ApplyJobsSvg'
import HowItWorksAreaCard from './HowItWorksAreaCard'

const HowItWorksArea = () => {
  return (
    <div className="home3-work-area mb-120">
      <div className="container">
        <div className="row mb-60">
          <div className="col-12 d-flex justify-content-center">
            <div className="section-title1 text-center">
              <h2>How It <span>Works</span></h2>
              <p>To choose your trending job dream & to make future bright.</p>
            </div>
          </div>
        </div>
        <div className="row g-4 justify-content-center">
          <div className="col-lg-3 col-md-4 col-sm-6">
            <HowItWorksAreaCard
              ComponentSvg={<AccountCreateSvg />}
              title='Account Create'
              text='To create your account be confident & safely.'
            />
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6">
            <HowItWorksAreaCard
              ComponentSvg={<CreateResumeSvg />}
              title='Create Resume'
              text='To create your account be confident & safely.'
            />
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6">
            <HowItWorksAreaCard
              ComponentSvg={<FindJobsSvg />}
              title='Find Jobs'
              text='To create your account be confident & safely.'
            />
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6">
            <HowItWorksAreaCard
              ComponentSvg={<ApplyJobsSvg />}
              title='Apply Jobs'
              text='To create your account be confident & safely.'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HowItWorksArea