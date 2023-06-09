import Vacancie from '../Vacansie'

//icons


const AppliedJobs = () => {
  return (
    <div className="applied-job-area">
      <div className="table-wrapper">
        <div className="table-title-filter">
          <div className="section-title">
            <h5>Applied Jobs:</h5>
          </div>
        </div>
        <table className="eg-table table category-table mb-30">
          <thead>
            <tr>
              <th>Job Tittle</th>
              <th>Apply Date</th>
              <th>Company</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <Vacancie
              jobTitle="Senior UI/UX Designer"
              postedDate="1 days ago"
              aplyDate="03/07/2022"
              location="New-York, USA"
              salary="$60-$90"
              salaryTime="Per Hour"
              companyName="Tech.Bath Com..."
              status="Viewed"
            />
            <Vacancie
              jobTitle="React JS Developer"
              postedDate="1 days ago"
              location="Dhaka, Bangladesh"
              aplyDate="07/07/2022"
              salary="$80-$100"
              salaryTime="Per Hour"
              companyName="Gangster Group"
              status="Viewed"
            />

            <Vacancie
              jobTitle="WordPress Developer"
              postedDate="2 days ago"
              location="West London, UK"
              aplyDate="10/07/2022"
              salary="$30K-$40K"
              salaryTime="Monthly"
              companyName="Zoomly.Co Ltd"
              status="Canceled"
            />
            <Vacancie
              jobTitle="Mern-Stack Developer"
              postedDate="1 week ago"
              location="New-York, USA"
              aplyDate="13/07/2022"
              salary="$20-$50"
              salaryTime="Per Hour"
              companyName="Marko-land Ltd"
              status="Viewed"
            />
            <Vacancie

              jobTitle="PHP Developer"
              postedDate="2 week ago"
              location="New-York, USA"
              aplyDate="18/08/2022"
              salary="$40K-$60K"
              salaryTime="Per Month"
              companyName="Bistro.Tech Group"
              status="Success"
            />
          </tbody>
        </table>
        <div className="pagination-table-info">
          <div className="table-info">
            <span>06 Results Showing In 20 Jobs</span>
          </div>
          <div className="pagination-area">
            <nav aria-label="...">
              <ul className="pagination">
                <li className="page-item disabled"><a className="page-link" href="#" tabIndex={-1}></a></li>
                <li className="page-item active" aria-current="page"><a className="page-link" href="#">01</a></li>
                <li className="page-item"><a className="page-link" href="#">02</a></li>
                <li className="page-item"><a className="page-link" href="#">03</a></li>
                <li className="page-item"><a className="page-link" href="#"></a></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>

    </div>
  )
}

export default AppliedJobs