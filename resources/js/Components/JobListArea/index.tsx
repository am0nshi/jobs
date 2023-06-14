import JobListAreaItem from './JobListAreaItem'
import CompanyIcon1 from "/public/assets/images/bg/company-logo/company-01.png";
import CompanyIcon2 from "/public/assets/images/bg/company-logo/company-02.png";
import CompanyIcon3 from "/public/assets/images/bg/company-logo/company-03.png";
import CompanyIcon4 from "/public/assets/images/bg/company-logo/company-04.png";
import CompanyIcon5 from "/public/assets/images/bg/company-logo/company-05.png";
import CompanyIcon6 from "/public/assets/images/bg/company-logo/company-06.png";
const JobListArea = () => {
  return (
    <div className="home2-job-list-area mb-120">
      <div className="container">
        <div className="row mb-60">
          <div className="col-12 d-flex flex-wrap align-items-end justify-content-md-between justify-content-start gap-3">
            <div className="section-title1">
              <h2>JOBES <span>Latest</span> Job</h2>
              <p>To choose your trending job dream &amp; to make future bright.</p>
            </div>
            <div className="explore-btn">
              <a href="job-listing1.html">Explore More <span><img src="assets/images/icon/explore-elliose.svg" alt="" /></span></a>
            </div>
          </div>
        </div>
        <div className="row g-4">
          <div className="col-xl-4 col-lg-6">
            <JobListAreaItem
              isUrgent={true}
              position='UI/UX Engineer'
              companyName='Germain Group Ltd'
              salary='$80-$110'
              salaryType='Per hour'
              type='Remote, Full Time'
              deadline='02-04-2023'
              companySrc={CompanyIcon1}
            />
          </div>
          <div className="col-xl-4 col-lg-6">
            <JobListAreaItem
              position='Assistant Laboratorist'
              companyName='Norland Comapny'
              salary='$30-$40'
              salaryType='Per hour'
              type='Part Time, Full Time'
              deadline='03-04-2023'
              companySrc={CompanyIcon2}
            />
          </div>
          <div className="col-xl-4 col-lg-6">
            <JobListAreaItem
              isUrgent
              position='WordPress Developer'
              companyName='Markoian Ltd'
              salary='$60-$80'
              salaryType='Per month'
              type='Remote, Full Time'
              deadline='05-04-2023'
              companySrc={CompanyIcon3}
            />
          </div>
          <div className="col-xl-4 col-lg-6">
            <JobListAreaItem
              isUrgent
              position='Senior Receptionist'
              companyName='Hangman Gold'
              salary='$80K-$110K'
              salaryType='Per month'
              type='Part Time, Full Time'
              deadline='02-04-2023'
              companySrc={CompanyIcon4}
            />
          </div>
          <div className="col-xl-4 col-lg-6">
            <JobListAreaItem
              position='Manager (HR)'
              companyName='Digita.Co Ltd'
              salary='$60K-$70K'
              salaryType='Per month'
              type='Full Time'
              deadline='07-04-2023'
              companySrc={CompanyIcon5}
            />
          </div>
          <div className="col-xl-4 col-lg-6">
            <JobListAreaItem
              position='UI/UX Designer'
              companyName='Techman Digital'
              salary='$80-$110'
              salaryType='Per month'
              type='Remote, Full Time'
              deadline='09-04-2023'
              companySrc={CompanyIcon6}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default JobListArea