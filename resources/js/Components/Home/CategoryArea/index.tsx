import React from 'react'
import CategoryAreaItem from './CategoryAreaItem'
//SVG
import HealthSvg from './HealthSvg'
import JobAvailableSvg from './JobAvailableSvg'
import MedicalSvg from './MedicalSvg'
import TechnologySvg from './TechnologySvg'
import TransportationSvg from './TransportationSvg'
import ReceptionistSvg from './ReceptionistSvg'
import DesigningJobsSvg from './DesigningJobsSvg'
import MarketingSvg from './MarketingSvg'
import DevelopmentSvg from './DevelopmentSvg'
import NonProfitOrgSvg from './NonProfitOrgSvg'
import ElectricianSvg from './ElectricianSvg'
import DataEntrySvg from './DataEntrySvg'
//Icons
import ExploreIcon from "/public/assets/images/icon/explore-elliose.svg"

const CategoryArea = () => {
  return (
    <div className="home2-category-area mb-120">
      <div className="container">
        <div className="row mb-60">
          <div className="col-12 d-flex justify-content-center gap-3">
            <div className="section-title1 text-center">
              <h2>Trending Jobs <span>Category</span></h2>
              <p>To choose your trending job dream & to make future bright.</p>
            </div>
          </div>
        </div>
        <div className="row g-4 justify-content-center">
          <CategoryAreaItem
            ComponentSvg={<HealthSvg />}
            count={240}
            category='Health & Care'
          />
          <CategoryAreaItem
            ComponentSvg={<JobAvailableSvg />}
            count={44}
            category='Account & Finance'
          />
          <CategoryAreaItem
            ComponentSvg={<TechnologySvg />}
            count={45}
            category='Technology'
          />
          <CategoryAreaItem
            ComponentSvg={<MedicalSvg />}
            count={57}
            category='Medical & Nurse'
          />
          <CategoryAreaItem
            ComponentSvg={<TransportationSvg />}
            count={95}
            category='Transportation'
          />
          <CategoryAreaItem
            ComponentSvg={<ReceptionistSvg />}
            count={59}
            category='Receptionist'
          />
          <CategoryAreaItem
            ComponentSvg={<DesigningJobsSvg />}
            count={30}
            category='Designing Jobs'
          />
          <CategoryAreaItem
            ComponentSvg={<MarketingSvg />}
            count={88}
            category='Marketing & Sales'
          />
          <CategoryAreaItem
            ComponentSvg={<DevelopmentSvg />}
            count={342}
            category='Development'
          />
          <CategoryAreaItem
            ComponentSvg={<NonProfitOrgSvg />}
            count={40}
            category='Non-Profit Org.'
          />
          <CategoryAreaItem
            ComponentSvg={<ElectricianSvg />}
            count={88}
            category='Electrician/Repair'
          />
          <CategoryAreaItem
            ComponentSvg={<DataEntrySvg />}
            count={75}
            category='Data Entry Jobs'
          />
          <div className="col-lg-12 d-flex justify-content-center pt-3">
            <div className="explore-btn">
              <a href="category.html">Explore More <span><img src={ExploreIcon} alt="" /></span></a>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default CategoryArea