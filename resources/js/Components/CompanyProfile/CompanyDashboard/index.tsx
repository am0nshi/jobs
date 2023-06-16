import React from 'react'
import CompanyHeader from '../CompanyHeader'
import CompanyCounterArea from '../CompanyCouterArea'
import CompanyNewApplicants from '../CompanyNewApplicants'

const CompanyDashboard = () => {
  return (
    <div className="dashboard-inner">
      <CompanyHeader
        companyName='Elite Hangstroman'
      />

      <CompanyCounterArea />

      <CompanyNewApplicants />
    </div>
  )
}

export default CompanyDashboard