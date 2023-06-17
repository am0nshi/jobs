import React, { FormEventHandler } from 'react'
//icons
import CompanyIcon from "/public/assets/images/icon/company-2.svg";
import CategoryIcon from "/public/assets/images/icon/category-2.svg";
import PersonIcon from "/public/assets/images/icon/person-2.svg";
import EmailIcon from "/public/assets/images/icon/email-2.svg";
import MapIcon from "/public/assets/images/icon/map-2.svg";
import WebsiteIcon from "/public/assets/images/icon/website-2.svg";
import FacebookIcon from "/public/assets/images/icon/facebook-2.svg";
import TwitterIcon from "/public/assets/images/icon/twiter-2.svg";
import LinkedInIcon from "/public/assets/images/icon/linkedin-2.svg";
import PinterestIcon from "/public/assets/images/icon/pinterest-2.svg";
import DribbleIcon from "/public/assets/images/icon/dribble-2.svg";
import BehanceIcon from "/public/assets/images/icon/behance-2.svg"
import InputText from '@/Components/InputText';
import TextArea from '@/Components/TextArea';
import { useForm } from '@inertiajs/react';
import InputSelect from '@/Components/InputSelect';

const companyTypeOptions = {
  "Digital Agency": "Digital Agency",
  "Digital Marketing Agency": "Digital Marketing Agency",
  "Software Company": "Software Company"
}

const CompanyMyProfile = () => {

  const { data, setData, reset } = useForm({
    companyName: "",
    companyType: "",
    companySize: "",
    location: "",
    email: "",
    website: "",
    facebook: "",
    twitter: "",
    linkedIn: "",
    pinterest: "",
    dribble: "",
    behance: "",
    description: "",
    workingField: ""

  })
  const onSubmit: FormEventHandler = (e) => {
    e.preventDefault();
    reset();
  }
  return (
    <div className="my-profile-inner ">
      <div className="form-wrapper">
        <div className="section-title two">
          <h5>My Profile</h5>
          <div className="dash"></div>
        </div>
        <form
          onSubmit={onSubmit}
          className="profile-form">
          <div className="section-title2">
            <h5>Company Information:</h5>
          </div>
          <div className="row">
            <div className="col-md-6">
              <InputText
                onChange={(e) => setData("companyName", e.target.value)}
                value={data.companyName}
                title='Company Name*'
                name='companyName'
                placeholder='Elite Hangstroman'
                srcIcon={CompanyIcon}
              />
            </div>
            <div className="col-md-6">
              <InputSelect
                onChange={(e) => setData("companyType", e.target.value)}
                value={data.companyType}
                name='companyType'
                title='Company Type*'
                options={companyTypeOptions}
              />
            </div>
            <div className="col-md-6">
              <InputText
                onChange={(e) => setData("companySize", e.target.value)}
                value={data.companySize}
                name='company'
                title='Company Size*'
                srcIcon={PersonIcon}
                placeholder='40 Person'
              />
            </div>
            <div className="col-md-6">
              <InputText
                onChange={(e) => setData("email", e.target.value)}
                value={data.email}
                name='email'
                title='Email*'
                placeholder='info@example.com'
                srcIcon={EmailIcon}
              />
            </div>
            <div className="col-md-6">
              <InputText
                onChange={(e) => setData("location", e.target.value)}
                value={data.location}
                name='location'
                title='Location*'
                placeholder='Type Location'
                srcIcon={MapIcon}
              />
            </div>
            <div className="col-md-6">
              <InputText
                onChange={(e) => setData("website", e.target.value)}
                value={data.website}
                name='website'
                title='Website Link*'
                placeholder='https://example.com'
                srcIcon={WebsiteIcon}
              />
            </div>
            <div className="col-md-6">
              <InputText
                onChange={(e) => setData("facebook", e.target.value)}
                value={data.facebook}
                name='facebook'
                title='Facebook'
                placeholder='https://example-facebook.com'
                srcIcon={FacebookIcon}
              />
            </div>
            <div className="col-md-6">
              <InputText
                onChange={(e) => setData("twitter", e.target.value)}
                value={data.twitter}
                name='twitter'
                title='Twitter'
                placeholder='https://example-twitter.com'
                srcIcon={TwitterIcon}
              />
            </div>
            <div className="col-md-6">
              <InputText
                onChange={(e) => setData("linkedIn", e.target.value)}
                value={data.linkedIn}
                name='linkedIn'
                title='LinkedIn'
                placeholder='https://example-linkedin.com'
                srcIcon={LinkedInIcon}
              />
            </div>
            <div className="col-md-6">
              <InputText
                onChange={(e) => setData("pinterest", e.target.value)}
                value={data.pinterest}
                name='pinterest'
                title='Pinterest'
                placeholder='https://example-pinterest.com'
                srcIcon={PinterestIcon}
              />
            </div>
            <div className="col-md-6">
              <InputText
                onChange={(e) => setData("dribble", e.target.value)}
                value={data.dribble}
                name='dribble'
                title='Dribbble'
                placeholder='https://example-dribbble.com'
                srcIcon={DribbleIcon}
              />
            </div>
            <div className="col-md-6">
              <InputText
                onChange={(e) => setData("behance", e.target.value)}
                value={data.behance}
                name='behance'
                title='Behance'
                placeholder='https://example-behance.com'
                srcIcon={BehanceIcon}
              />
            </div>
            <div className="col-lg-12">
              <div className="company-images-area mb-50">
                <div className="row g-lg-4 gy-5">
                  <div className="col-lg-6 devaider1 position-relative">
                    <div className="company-logo-area">
                      <h5>Company Logo: </h5>
                      <div className="drag-area">
                        <p>Upload Logo</p>
                        <button type="button" className="upload-btn"><i className="bi bi-plus-lg"></i></button>
                        <input type="file" />
                      </div>
                      <span>Maximum File Upload: 2 MB</span>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="company-cover-photo-area">
                      <h5>Company Cover Photo: </h5>
                      <div className="drag-area" id="dragArea2">
                        <p>Upload Photo</p>
                        <button type="button" className="upload-btn"><i className="bi bi-plus-lg"></i></button>
                        <input type="file" /* hidden="" */ />
                      </div>
                      <span>Maximum File Upload: 5 MB</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="section-title2">
              <h5>Working Area:</h5>
            </div>
            <div className="work-area-row">
              <div className="row">
                <div className="col-md-6">
                  <InputText
                    onChange={(e) => setData("workingField", e.target.value)}
                    value={data.workingField}
                    name='workingField'
                    title='Working Field*'
                    placeholder='Frontend Developer'
                    srcIcon={CompanyIcon}
                  />
                </div>
                <div className="col-md-6">
                  <div className="form-inner mb-25">
                    <label>Add Icon*</label>
                    <div className="input-area">
                      <img src="assets/images/icon/company-2.svg" alt="" />
                      <input type="file" />
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <TextArea
                    onChange={(e) => setData("description", e.target.value)}
                    value={data.description}
                    name='description'
                    placeholder='Company Details*'
                  />
                </div>
              </div>
            </div>
            <div className="add-remove-btn d-flex align-items-center justify-content-between mb-50">
              <div className="add-row">
                <button type="button" className="addwork-area-row">Add Working Area+</button>
              </div>
            </div>
            <div className="col-md-12">
              <div className="form-inner">
                <button className="primry-btn-2 lg-btn w-unset" type="submit">Update Change</button>
              </div>
            </div>

          </div>
        </form>
      </div>
    </div>
  )
}

export default CompanyMyProfile