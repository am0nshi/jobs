import React from 'react'
import CompanyCountCard from './CompanyCountCard'
import CounterBlock from '@/Components/CounterBlock'

//icons
import TotalIcon from "/public/assets/images/icon/tt-applied.svg"
import SaveJobIcon from "/public/assets/images/icon/save-job.svg"
import PendingIcon from "/public/assets/images/icon/pending-icon.svg"
import ClosedIcon from "/public/assets/images/icon/closed-icon.svg"
import TotalViewIcon from "/public/assets/images/icon/total-view-icon.svg"
import FollowIcon from "/public/assets/images/icon/follow-icon.svg"
import HightLightIcon from "/public/assets/images/icon/highlight-icon.svg"
import FeaturedIcon from "/public/assets/images/icon/featured-icon.svg"
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
          srcIcon={SaveJobIcon}
          title='Live Jobs'
          sectionName='two'
        />
        <CounterBlock
          countAmount={120}
          srcIcon={PendingIcon}
          title='Pending Job'
          sectionName='three'
        />
        <CounterBlock
          countAmount={900}
          srcIcon={ClosedIcon}
          title='Closed Jobs'
          sectionName='four'
        />
      </div>
      <div className="row g-4 justify-content-cente">
        <CounterBlock
          countAmount={2500}
          srcIcon={TotalViewIcon}
          title='Total View'
        />
        <CounterBlock
          countAmount={250}
          srcIcon={FollowIcon}
          title='Our Followers'
          sectionName='two'
        />
        <CounterBlock
          countAmount={150}
          srcIcon={HightLightIcon}
          title='Highlighted Jobs'
          sectionName='three'
        />
        <CounterBlock
          countAmount={500}
          srcIcon={FeaturedIcon}
          title='Our Followers'
          sectionName='five'
        />
      </div>

    </div >
  )
}

export default CompanyCounterArea