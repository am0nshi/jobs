import React from 'react'
import CompanyTableCard from './CompanyTableCard'

const CompanyJobTable = () => {
  return (
    <table className="eg-table table job-list-table mb-0">
      <thead>
        <tr>
          <th>Job Title</th>
          <th>Applications</th>
          <th>Matched</th>
          <th>Shortlisted</th>
          <th>Viewed</th>
          <th>Not Viewed</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <CompanyTableCard
          position='Manager- Account & Finance'
          deadline='02 April, 2023'
          applications={1000}
          matched={400}
          shortListed={700}
          viewed={300}
          notViewed={100}
        />
        <CompanyTableCard
          position='Assistant Laboratorist'
          deadline='02 April, 2023'
          applications={1000}
          matched={400}
          shortListed={700}
          viewed={300}
          notViewed={100}
        />
        <CompanyTableCard
          position='Senior React Native'
          deadline='02 April, 2023'
          applications={1000}
          matched={400}
          shortListed={700}
          viewed={300}
          notViewed={100}
        />
        <CompanyTableCard
          position='Manager- Account & Finance'
          deadline='02 April, 2023'
          applications={1000}
          matched={400}
          shortListed={700}
          viewed={300}
          notViewed={100}
        />
        <CompanyTableCard
          position='WordPress Developer'
          deadline='02 April, 2023'
          applications={1000}
          matched={400}
          shortListed={700}
          viewed={300}
          notViewed={100}
        />
      </tbody>
    </table>
  )
}

export default CompanyJobTable