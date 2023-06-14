import FeaturedAreaCard from "./FeaturedAreaCard"
import CompanyIcon2 from "/public/assets/images/bg/company-logo/company-02.png"
const FeaturedArea = () => {
  return (
    <div className="home2-featured-area mb-120">
      <div className="container">
        <div className="row mb-60">
          <div className="col-12 d-flex flex-wrap align-items-end justify-content-md-between justify-content-start gap-3">
            <div className="section-title1">
              <h2>Our <span>Featured</span> Jobs</h2>
              <p>To choose your trending job dream &amp; to make future bright.</p>
            </div>
          </div>
        </div>
        <div className="row gy-5">
          <div className="col-lg-6">
            <FeaturedAreaCard
              companySrc={CompanyIcon2}
              companyName="Norland Company"
              position="UI/UX Engineer"
              jobType="Full Time, Remote"
              isVerified
              location="Chicago, Australia"
              salary="$90-$140"
              experience="2-3 Years"
              salaryType="Per Hour"
              deadline="3 February, 2023"
            />
          </div>
          <div className="col-lg-6">
            <FeaturedAreaCard
              companySrc={CompanyIcon2}
              position="React JS Developer"
              jobType="Full Time, Remote"
              companyName="UX.UI Company"
              isVerified
              location="Dhaka, Bangladesh"
              salary="$80K-$110K"
              experience="2-3 Years"
              salaryType="Per Hour"
              deadline="3 February, 2023"
            />
          </div>
          <div className="col-lg-6">
            <FeaturedAreaCard
              companySrc={CompanyIcon2}
              position="Receptionist"
              jobType="Full Time, Remote"
              companyName="Germaine Group Ltd"
              isVerified
              location="Dhaka, Bangladesh"
              salary="$50K-$60K"
              experience="2-3 Years"
              salaryType="Per Hour"
              deadline="3 February, 2023"
            />
          </div>
          <div className="col-lg-6">
            <FeaturedAreaCard
              companySrc={CompanyIcon2}
              position="Manager"
              jobType="Full Time, Remote"
              companyName="Marko-land Company"
              isVerified
              location="Chicago, Australia"
              salary="$50K-$60K"
              experience="2-3 Years"
              salaryType="Per Hour"
              deadline="3 February, 2023"
            />
          </div>
        </div>
      </div>
    </div >
  )
}

export default FeaturedArea