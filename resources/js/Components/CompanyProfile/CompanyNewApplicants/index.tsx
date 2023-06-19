import React from 'react'
import CandidateCard from './CandidateCard'

const CompanyNewApplicants = () => {
  return (
    <div className="new-applied-job-area">
      <h5>New Applied List:</h5>
      <div className="table-wrapper2">
        <table className="eg-table table category-table mb-0">
          <tbody>
            <CandidateCard
              candidateName="Mr. Willium Jacson"
              experience=' 2+ Years'
              position='(Teaching Assistant)'
              salary=" $800/ Per Month"
              companyName='Colliegate Ltd'
              educationPlace='Internation Colliegate University'
              appliedOn='02 April, 2023 '
            />
            <CandidateCard
              candidateName="Robert Williamson "
              experience=' 2+ Years'
              position='(UI/UX Designer)'
              salary=" $800/ Per Month"
              companyName='UI/UX Company Ltd '
              educationPlace='London University'
              appliedOn='02 April, 2023 '
            />
            <CandidateCard
              candidateName="Robertson Harry"
              experience=' 3+ Years'
              position='(Teaching Assistant)'
              salary=" $800/ Per Month"
              companyName='Bistro.Tech Ltd '
              educationPlace='Royals Republic University'
              appliedOn='05 April, 2023 '
            />
            <CandidateCard
              candidateName="Hari Jonson"
              experience=' 1.5+ Years'
              position='(Teaching Assistant)'
              salary="  $1200/ Per Month"
              companyName='Elite Author '
              educationPlace='Bistro Mycol University'
              appliedOn='06 April, 2023 '
            />
            <CandidateCard
              candidateName="Mrs. Jordan Harry"
              experience=' 2.5+ Years'
              position='(Teaching Assistant)'
              salary="   $900/ Per Month"
              companyName='Marko Group '
              educationPlace='Internation Colliegate University'
              appliedOn='07 April, 2023 '
            />
            <CandidateCard
              candidateName="Juliya Bhut"
              experience=' 2.5+ Years'
              position='(Teaching Assistant)'
              salary="   $900/ Per Month"
              companyName='Nowreh Tech '
              educationPlace='Internation Colliegate University'
              appliedOn='08 April, 2023 '
            />
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default CompanyNewApplicants