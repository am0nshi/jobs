import React from 'react'
import CompanyJobFilter from './CompanyJobFilter'
import CompanyJobTable from './CompanyJobTable'
import CompanyJobPagination from './CompanyJobPagination'

const CompanyJobList = () => {
  return (
    <div className="table-wrapper2">
      <div className="title-and-btn">
        <div className="title">
          <h4>Latest Job List:</h4>
        </div>
        <div className="job-post-btn">
          <a className="primry-btn-2" href="job-post.html">Create Job Post</a>
        </div>
      </div>
      <CompanyJobFilter />
      <CompanyJobTable />
      <CompanyJobPagination />
    </div>
  )
}

export default CompanyJobList