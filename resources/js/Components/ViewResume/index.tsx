import React from 'react'
import ResumeHeader from './ResumeHeader'
import ResumeDescription from './ResumeDescription'
import ResumePersonalInfo from './ResumePersonalInfo'
import ResumeEducation from './ResumeEducation'
import ResumeCareerApplication from './ResumeCareerApplication'
import ResumeProfInfo from './ResumeProfInfo'
import ResumeSkills from './ResumeSkills'
import ResumeSocialNetwork from './ResumeSocialNetwork'
import ResumeDeclaration from './ResuneDeclaration'

const ViewResume = () => {
  return (
    <div className="row justify-content-center g-lg-4 gy-5 mb-90">
      <div className="col-lg-10">
        <div className="resume-area">
          <div className="edit-resume-btn">
            <a href="edit-profile.html">Edit Resume
              <svg width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M11.8798 1.19201C11.9563 1.26957 11.9993 1.37462 11.9993 1.48414C11.9993 1.59365 11.9563 1.6987 11.8798 1.77627L11.0253 2.64024L9.3868 0.98512L10.2413 0.121149C10.3181 0.0435774 10.4223 0 10.5309 0C10.6395 0 10.7437 0.0435774 10.8205 0.121149L11.8798 1.19118V1.19201ZM10.4461 3.22449L8.8076 1.56938L3.22607 7.20836C3.18098 7.2539 3.14704 7.30944 3.12694 7.37056L2.46745 9.36829C2.45549 9.40471 2.45379 9.44377 2.46254 9.48111C2.4713 9.51844 2.49016 9.55259 2.51702 9.57972C2.54388 9.60685 2.57768 9.62591 2.61464 9.63475C2.65161 9.64359 2.69028 9.64188 2.72633 9.62979L4.70399 8.96361C4.76442 8.94355 4.8194 8.90955 4.86456 8.8643L10.4461 3.22532V3.22449Z" />
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M0 10.7585C0 11.0878 0.12947 11.4035 0.359928 11.6363C0.590385 11.8691 0.902953 11.9999 1.22887 11.9999H10.2406C10.5665 11.9999 10.8791 11.8691 11.1095 11.6363C11.34 11.4035 11.4694 11.0878 11.4694 10.7585V5.79319C11.4694 5.68345 11.4263 5.5782 11.3495 5.50061C11.2727 5.42301 11.1685 5.37941 11.0598 5.37941C10.9512 5.37941 10.847 5.42301 10.7702 5.50061C10.6934 5.5782 10.6502 5.68345 10.6502 5.79319V10.7585C10.6502 10.8683 10.607 10.9735 10.5302 11.0511C10.4534 11.1287 10.3492 11.1723 10.2406 11.1723H1.22887C1.12023 11.1723 1.01604 11.1287 0.939222 11.0511C0.862403 10.9735 0.819246 10.8683 0.819246 10.7585V1.6554C0.819246 1.54566 0.862403 1.44041 0.939222 1.36281C1.01604 1.28522 1.12023 1.24162 1.22887 1.24162H6.55397C6.66261 1.24162 6.7668 1.19803 6.84362 1.12043C6.92044 1.04283 6.96359 0.937583 6.96359 0.827842C6.96359 0.718101 6.92044 0.612854 6.84362 0.535256C6.7668 0.457657 6.66261 0.414063 6.55397 0.414062H1.22887C0.902953 0.414063 0.590385 0.544846 0.359928 0.777642C0.12947 1.01044 0 1.32618 0 1.6554V10.7585Z" />
              </svg>
            </a>
          </div>
          <ResumeHeader
            name="Mr. Jacoline Frankly"
            position='UI/UX Engineer'
            phoneNumber='+880-177 443 5455'
            email='info@example.com'
            website="www.infositeexample.com"
            srcIcon="assets/images/bg/resume-author.png"
          />
          <div className="col-lg-12">
            <ResumeDescription
              description="I'm a passionate UI/UX designer and can bring innovative ideas & concepts to life for client-based design projects. I have more than 3 years of design experience in digital/e-commerce. I experienced at tackle various needs from landing page designs, web app interfaces. I have skills in User Experience Design (UXD), user-centered Design, Interaction and Visual Design for websites, applications, web, and mobile products, wireframes, mock-ups, qualitative and quantitative user studies, usability analysis, and informal usability audits."
            />
          </div>
          <div className="col-lg-12">
            <ResumePersonalInfo />
          </div>
          <div className="col-lg-12">
            <ResumeEducation />
          </div>
          <div className="col-lg-12">
            <ResumeCareerApplication />
          </div>
          <div className="col-lg-12">
            <ResumeProfInfo />
          </div>
          <div className="col-lg-12">
            <ResumeSkills />
          </div>
          <div className="col-lg-12">
            <ResumeSocialNetwork />
          </div>
          <div className="col-lg-12">
            <ResumeDeclaration />
          </div>
        </div>
        <div className="dowunload-btn pt-50">
          <a className="primry-btn-2 lg-btn" href="#">Download CV</a>
        </div>
      </div>
    </div>
  )
}

export default ViewResume