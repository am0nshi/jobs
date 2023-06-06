import React from 'react'

const EditResume = () => {
  return (
    <div className="edit-profile-inner">
      <div className="form-wrapper">
        <ul className="nav nav-tabs" id="myTab" role="tablist">
          <li className="nav-item" role="presentation">
            <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button"
              role="tab" aria-controls="home" aria-selected="true"><span></span>Basic Information:</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button"
              role="tab" aria-controls="profile" aria-selected="false"><span></span>Profile</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button"
              role="tab" aria-controls="contact" aria-selected="false"><span></span>Education</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link" id="professional-tab" data-bs-toggle="tab" data-bs-target="#professional" type="button"
              role="tab" aria-controls="professional" aria-selected="false"><span></span>Professional Info</button>
          </li>
        </ul>
        <div className="tab-content" id="myTabContent">

          <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
            <form className="edit-profile-form profile-form  mb-60">
              <div className="row">

                <div className="col-md-6">
                  <div className="form-inner mb-25">
                    <label htmlFor="firstname1">First Name*</label>
                    <div className="input-area">
                      <img src="assets/images/icon/user-2.svg" alt="" />
                      <input type="text" id="firstname1" name="firstname" placeholder="Mrs. Jacoline" />
                    </div>
                  </div>
                </div>
                <div className="col-xxl-4 col-md-6">
                  <div className="form-inner mb-25">
                    <label htmlFor="lastname">Last Name*</label>
                    <div className="input-area">
                      <img src="assets/images/icon/user-2.svg " alt="" />
                      <input type="text" id="lastname" name="lastname" placeholder="Frankly" />
                    </div>
                  </div>
                </div>
                <div className="col-xxl-2 col-lg-12 position-relative">
                  <div className="drag-area">
                    <p>Upload Images</p>
                    <button type="button" className="upload-btn"><i className="bi bi-plus-lg"></i></button>
                    <input type="file" hidden />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-inner mb-25">
                    <label htmlFor="jobplace">Current Job Place*</label>
                    <div className="input-area">
                      <img src="assets/images/icon/company-2.svg" alt="" />
                      <input type="text" id="jobplace" name="jobplace" placeholder="Company Name" />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-inner mb-25">
                    <label htmlFor="desigation">Designation*</label>
                    <div className="input-area">
                      <img src="assets/images/icon/designation-2.svg" alt="" />
                      <input type="text" id="desigation" name="desigation" placeholder="UI/UX Engineer" />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-inner mb-25">
                    <label htmlFor="experiences">Year of Experiences*</label>
                    <div className="input-area">
                      <img src="assets/images/icon/experiences-2.svg" alt="" />
                      <input type="text" id="experiences" name="experiences" placeholder="3.5 Years" />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-inner mb-25">
                    <label>Qualification*</label>
                    <div className="input-area">
                      <img src="assets/images/icon/qualification-2.svg" alt="" />
                      <select className="select1">
                        <option value="0">Bachelor Degree in CSE</option>
                        <option value="1">IGCSE</option>
                        <option value="2">AS</option>
                        <option value="4">A Level</option>
                        <option value="5">Matriculated</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-inner mb-25">
                    <label htmlFor="email1">Email*</label>
                    <div className="input-area">
                      <img src="assets/images/icon/email-2.svg" alt="" />
                      <input type="text" id="email1" name="email" placeholder="info@example.com" />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-inner mb-25">
                    <label htmlFor="phonenumber">Phone Number*</label>
                    <div className="input-area">
                      <img src="assets/images/icon/phone-2.svg" alt="" />
                      <input type="text" id="phonenumber" name="phonenumber" placeholder="+880-17 *** *** **" />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-inner mb-25">
                    <label htmlFor="website">Website Link*</label>
                    <div className="input-area">
                      <img src="assets/images/icon/website-2.svg" alt="" />
                      <input type="text" id="website" name="website" placeholder="https://example.com" />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-inner mb-25">
                    <label htmlFor="language">Language*</label>
                    <div className="input-area">
                      <img src="assets/images/icon/language-2.svg" alt="" />
                      <input type="text" id="language" name="language" placeholder="Bangla, English, Hindi" />
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-inner mb-50">
                    <label htmlFor="description">Career Objective*</label>
                    <textarea name="description" id="description" placeholder="Something Write Yourself...."></textarea>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-inner">
                    <button className="primry-btn-2 lg-btn w-unset" type="submit">Update Resume</button>
                  </div>
                </div>

              </div>
            </form>

            <div className="form-wrapper">
              <div className="section-title">
                <h5>Social Network:</h5>
              </div>
              <form className="profile-form">
                <div className="row">

                  <div className="col-md-6">
                    <div className="form-inner mb-25">
                      <label htmlFor="fecebook">Facebook</label>
                      <div className="input-area">
                        <img src="assets/images/icon/facebook-2.svg" alt="" />
                        <input type="text" id="fecebook" name="fecebook" placeholder="https://example-fecebook.com" />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-inner mb-25">
                      <label htmlFor="twitter">Twitter</label>
                      <div className="input-area">
                        <img src="assets/images/icon/twiter-2.svg" alt="" />
                        <input type="text" id="twitter" name="twitter" placeholder="https://example-twitter.com" />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-inner mb-25">
                      <label htmlFor="linkedin">LinkedIn</label>
                      <div className="input-area">
                        <img src="assets/images/icon/linkedin-2.svg" alt="" />
                        <input type="text" id="linkedin" name="linkedin" placeholder="https://example-linkedin.com" />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-inner mb-25">
                      <label htmlFor="pinterest">Pinterest</label>
                      <div className="input-area">
                        <img src="assets/images/icon/pinterest-2.svg" alt="" />
                        <input type="text" id="pinterest" name="pinterest" placeholder="https://example-pinterest.com" />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-inner mb-25">
                      <label htmlFor="dribble">Dribbble</label>
                      <div className="input-area">
                        <img src="assets/images/icon/dribble-2.svg" alt="" />
                        <input type="text" id="dribble" name="dribble" placeholder="https://example-dribbble.com" />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-inner mb-50">
                      <label htmlFor="behance">Behance</label>
                      <div className="input-area">
                        <img src="assets/images/icon/behance-2.svg" alt="" />
                        <input type="text" id="behance" name="behance" placeholder="https://example-behance.com" />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-inner">
                      <button className="primry-btn-2 lg-btn w-unset" type="submit">Update Social Link</button>
                    </div>
                  </div>

                </div>
              </form>
            </div>
          </div>
          <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
            <form className="edit-profile-form profile-form">
              <div className="row">
                <div className="col-md-6">
                  <div className="form-inner mb-25">
                    <label htmlFor="fathername">Father’s Name*</label>
                    <div className="input-area">
                      <img src="assets/images/icon/user-2.svg" alt="" />
                      <input type="text" id="fathername" name="fathername" placeholder="Mr. Norman Frankly" />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-inner mb-25">
                    <label htmlFor="mothername">Mother's Name*</label>
                    <div className="input-area">
                      <img src="assets/images/icon/user-2.svg " alt="" />
                      <input type="text" id="mothername" name="mothername" placeholder="Mrs. Marcoline Frankly" />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-inner mb-25">
                    <label htmlFor="datepicker5">Date of Birth*</label>
                    <div className="input-area">
                      <img src="assets/images/icon/calender2.svg" alt="" />
                      <input type="text" id="datepicker5" name="datepicker5" placeholder="03/08/1986" />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-inner mb-25">
                    <label htmlFor="nid">National Id*</label>
                    <div className="input-area">
                      <img src="assets/images/icon/nid.svg" alt="" />
                      <input type="text" id="nid" name="nid " placeholder="0988 *** *** *** **" />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-inner mb-25">
                    <div className="salary-wrap">
                      <label className="label" htmlFor="preAddress">Present Address*</label>
                      <div className="checkbox-container">
                        <ul>
                          <li>
                            <label className="containerss">
                              <input type="checkbox" />
                              <span className="checkmark"></span>
                              <span className="text">Same as permanent Address</span>
                            </label>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="input-area">
                      <img src="assets/images/icon/home-2.svg" alt="" />
                      <input type="text" id="preAddress" name="preAddress " placeholder="Your Address Here..." />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-inner mb-25">
                    <label htmlFor="perAddress">Permanent Address*</label>
                    <div className="input-area">
                      <img src="assets/images/icon/home-2.svg" alt="" />
                      <input type="text" id="perAddress" name="perAddress" placeholder="Your Address Here..." />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-inner mb-25">
                    <label>Marital Status*</label>
                    <div className="input-area">
                      <img src="assets/images/icon/marital-2.svg" alt="" />
                      <select className="select1">
                        <option value="0">Single</option>
                        <option value="1">Married</option>
                        <option value="2">Widowed</option>
                        <option value="4">Divorced</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-inner mb-25">
                    <label>Gender*</label>
                    <div className="input-area">
                      <img src="assets/images/icon/gender.svg " alt="" />
                      <select className="select1">
                        <option value="0">Female</option>
                        <option value="1">Male</option>
                        <option value="2">Custom</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-inner mb-25">
                    <label>Religion*</label>
                    <div className="input-area">
                      <img src="assets/images/icon/religion.svg" alt="" />
                      <select className="select1">
                        <option value="0">Christianity</option>
                        <option value="1">Islam</option>
                        <option value="2">Buddhism</option>
                        <option value="3">Sikhism</option>
                        <option value="4">Judaism</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-inner mb-25">
                    <label>Blood Group*</label>
                    <div className="input-area">
                      <img src="assets/images/icon/blood.svg" alt="" />
                      <select className="select1">
                        <option value="0">A+</option>
                        <option value="1">A-</option>
                        <option value="2">B+</option>
                        <option value="3">B-</option>
                        <option value="4">AB+</option>
                        <option value="5">AB-</option>
                        <option value="6">O+</option>
                        <option value="7">O-</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-inner mb-25">
                    <label htmlFor="hight">Height*</label>
                    <div className="input-area">
                      <img src="assets/images/icon/hight.svg" alt="" />
                      <input type="text" id="hight" name="hight" placeholder="5.6'" />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-inner mb-25">
                    <label htmlFor="weight">Weight*</label>
                    <div className="input-area">
                      <img src="assets/images/icon/weight.svg" alt="" />
                      <input type="text" id="weight" name="weight " placeholder="56" />
                    </div>
                  </div>
                </div>
                <div className="skills-row">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="section-title2 mb-20">
                        <h5>Your Skills:</h5>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-inner mb-25">
                        <label>Special Skills*</label>
                        <select className="js-example-basic-multiple " name="states[]" multiple="multiple">

                        </select>
                      </div>
                    </div>
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
          <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
            <form className="edit-profile-form profile-form">
              <div className="section-title2">
                <h5>Educational Qualification:</h5>
              </div>
              <div className="education-row">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="info-title">
                      <h6>Academic Information:</h6>
                      <div className="dash"></div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-inner mb-25">
                      <label>Education Level*</label>
                      <div className="input-area">
                        <img src="assets/images/icon/qualification-2.svg" alt="" />
                        <select className="select1">
                          <option value="0">Bachelor Degree in CSE</option>
                          <option value="1">IGCSE</option>
                          <option value="2">AS</option>
                          <option value="4">A Level</option>
                          <option value="5">Matriculated</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-inner mb-25">
                      <label>My Major*</label>
                      <div className="input-area">
                        <img src="assets/images/icon/major.svg" alt="" />
                        <select className="select1">
                          <option value="0">Science</option>
                          <option value="1">Arts</option>

                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-inner mb-25">
                      <label htmlFor="institute">Institute/University*</label>
                      <div className="input-area">
                        <img src="assets/images/icon/univercity.svg" alt="" />
                        <input type="text" id="institute" name="institute" placeholder="Type Your Institute Name..." />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-inner mb-30">
                      <label htmlFor="gpa">Result/GPA**</label>
                      <div className="input-area">
                        <img src="assets/images/icon/gpa-2.svg" alt="" />
                        <input type="text" id="gpa" name="gpa" placeholder="4.75/5" />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-inner mb-20">
                      <label htmlFor="datepicker10">Starting Period*</label>
                      <div className="input-area">
                        <img src="assets/images/icon/calender2.svg" alt="" />
                        <input type="text" id="datepicker10" name="ep" placeholder="DD/MM/YY" />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-inner mb-20">
                      <label htmlFor="datepicker11">Ending Period*</label>
                      <div className="input-area">
                        <img src="assets/images/icon/calender2.svg" alt="" />
                        <input type="text" id="datepicker11" name="ep" placeholder="DD/MM/YY" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="add-remove-btn d-flex align-items-center justify-content-between mb-50">
                <div className="add-row">
                  <button type="button" className="add-education-row">Add Education+</button>
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-inner">
                  <button className="primry-btn-2 lg-btn w-unset" type="submit">Update Change</button>
                </div>
              </div>
            </form>
          </div>
          <div className="tab-pane fade" id="professional" role="tabpanel" aria-labelledby="professional-tab">
            <form className="edit-profile-form profile-form">
              <div className="section-title2">
                <h5>Employment Information:</h5>
              </div>
              <div className="experiences-row">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="info-title">
                      <h6>Add Your Experiences</h6>
                      <div className="dash"></div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-inner mb-25">
                      <label htmlFor="companies">Company Name*</label>
                      <div className="input-area">
                        <img src="assets/images/icon/company-2.svg " alt="" />
                        <input type="text" id="companies" name="companies" placeholder="Egenslab" />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-inner mb-25">
                      <label htmlFor="desigation">Designation*</label>
                      <div className="input-area">
                        <img src="assets/images/icon/designation-2.svg" alt="" />
                        <select className="select1">
                          <option value="0">Back-end developer</option>
                          <option value="1">Front-end developer</option>
                          <option value="2">Full-stack developer</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-inner mb-20">
                      <label htmlFor="datepicker6">Starting Period*</label>
                      <div className="input-area">
                        <img src="assets/images/icon/calender2.svg" alt="" />
                        <input type="text" id="datepicker6" name="stp" placeholder="DD/MM/YY" />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-inner mb-20">
                      <label htmlFor="datepicker7">Ending Period*</label>
                      <div className="input-area">
                        <img src="assets/images/icon/calender2.svg" alt="" />
                        <input type="text" id="datepicker7" name="ep" placeholder="DD/MM/YY" />
                      </div>
                    </div>
                  </div>

                  <div className="col-md-12">
                    <div className="form-agreement employment-check form-inner d-flex justify-content-between flex-wrap p-0">
                      <div className="form-group two">
                        <input type="checkbox" id="html5" />
                        <label htmlFor="html5">Continuing Working Here</label>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-inner mb-20">
                      <label htmlFor="description1">Responsibility**</label>
                      <textarea name="description" id="description1" placeholder="Write Your Responsibility..."></textarea>
                    </div>
                  </div>

                </div>
              </div>
              <div className="add-remove-btn d-flex align-items-center justify-content-between mb-50">
                <div className="add-row">
                  <button type="button" className="add-experiences-row">Add New+ </button>
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-inner">
                  <button className="primry-btn-2 lg-btn w-unset" type="submit">Update Change</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditResume