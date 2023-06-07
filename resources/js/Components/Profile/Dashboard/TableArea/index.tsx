import Vacancie from "./Vacansie"

const TableArea = () => {
  return (
    <div className="table-wrapper">
      <h5 className="title">Current Applied Jobs:</h5>
      <div className="scroll-table">
        <table className="eg-table table category-table mb-0">
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
              logoSrc="assets/images/bg/company-logo/company-06.png"
              jobTitle="Senior UI/UX Designer"
              postedDate="1 days ago"
              aplyDate="03/07/2022"
              location="New-York, USA"
              salary="$60-$90"
              salaryTime="Per Hour"
              companyName="Tech.Bath Com..."
              status="viewed"
            />
            <Vacancie
              logoSrc="assets/images/bg/company-logo/company-06.png"
              jobTitle="React JS Developer"
              postedDate="1 days ago"
              location="Dhaka, Bangladesh"
              aplyDate="07/07/2022"
              salary="$80-$100"
              salaryTime="Per Hour"
              companyName="Gangster Group"
              status="viewed"
            />

            <Vacancie
              logoSrc="assets/images/bg/company-logo/company-06.png"
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
              logoSrc="assets/images/bg/company-logo/company-06.png"
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
              logoSrc="assets/images/bg/company-logo/company-06.png"
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
      </div>

    </div>
  )
}

export default TableArea