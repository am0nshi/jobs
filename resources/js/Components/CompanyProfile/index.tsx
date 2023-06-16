import React from 'react'
import CompanyHeader from './CompanyHeader'
import CompanyCounterArea from './CompanyCouterArea'
import CompanySidebar from './CompanySidebar'
import CompanyNewApplicants from './CompanyNewApplicants'
import CompanyDashboard from './CompanyDashboard'
import CompanySettings from './CompanySettings'

const CompanyProfile = () => {
  return (
    <div className="dashboard-area company-dashboard pt-120 mb-120">
      <div className="container">
        <div className="row g-lg-4">
          <div className="col-lg-12 mb-20">
            <CompanySidebar />
          </div>
          <div className="col-lg-12">
            {/* <CompanyDashboard /> */}
            {/* <CompanySettings /> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CompanyProfile