import { FormEventHandler } from "react"
import { useForm } from '@inertiajs/react';
//Components
import InputText from '@/Components/InputText';
import InputSelect from '@/Components/InputSelect';
import SocialNetwork from '../../MyProfile/SocialNetwork';
import TextArea from '@/Components/TextArea';


//Icons
import UserIcon from "/public/assets/images/icon/user-2.svg";
import CompanyIcon from "/public/assets/images/icon/company-2.svg";
import DesignationIcon from "/public/assets/images/icon/designation-2.svg";
import ExpirienceIcon from "/public/assets/images/icon/experiences-2.svg";
import EmailIcon from "/public/assets/images/icon/email-2.svg";
import QualificationIcon from "/public/assets/images/icon/qualification-2.svg";
import PhoneIcon from "/public/assets/images/icon/phone-2.svg";
import WebSiteIcon from "/public/assets/images/icon/website-2.svg";
import LanguageIcon from "/public/assets/images/icon/language-2.svg";

//options for InputSelect
const qualificationOptions = {
  "Bachelor Degree in CSE": "Bachelor Degree in CSE",
  "IGCSE": "IGCSE",
  "AS": "AS",
  "A Level": "A Level",
  "Matriculated": "Matriculated"
};

const BasicInformation = () => {
  const { data, errors, setData, reset } = useForm({
    firstName: "",
    lastName: "",
    desigation: "",
    jobplace: "",
    experiences: "",
    qualification: "",
    email: "",
    phoneNumber: "",
    website: "",
    language: "",
    description: "",
  })

  const onSubmit: FormEventHandler = (e) => {
    e.preventDefault();
    reset();
  };

  return (
    <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
      <form className="edit-profile-form profile-form  mb-60"
        onSubmit={onSubmit}
      >
        <div className="row">
          <div className="col-md-6">
            <InputText
              onChange={e => setData('firstName', e.target.value)}
              value={data.firstName}
              errors={errors}
              name="firstName"
              placeholder='Mrs. Jacoline'
              srcIcon={UserIcon}
              title='First Name*'
            />
          </div>
          <div className="col-xxl-4 col-md-6">
            <InputText
              onChange={e => setData('lastName', e.target.value)}
              value={data.lastName}
              errors={errors}
              name="lastName"
              placeholder='Frankly'
              srcIcon={UserIcon}
              title='Last Name*'
            />
          </div>
          <div className="col-xxl-2 col-lg-12 position-relative">
            <div className="drag-area">
              <p>Upload Images</p>
              <button type="button" className="upload-btn"><i className="bi bi-plus-lg"></i></button>
              <input type="file" hidden />
            </div>
          </div>
          <div className="col-md-6">
            <InputText
              onChange={e => setData('jobplace', e.target.value)}
              value={data.jobplace}
              errors={errors}
              name="jobplace"
              placeholder='Company Name'
              srcIcon={CompanyIcon}
              title='Company Name'
            />
          </div>
          <div className="col-md-6">
            <InputText
              onChange={e => setData('desigation', e.target.value)}
              value={data.desigation}
              errors={errors}
              name="desigation"
              placeholder='UI/UX Engineer'
              srcIcon={DesignationIcon}
              title='Designation*'
            />
          </div>
          <div className="col-md-6">
            <InputText
              onChange={e => setData('experiences', e.target.value)}
              value={data.experiences}
              errors={errors}
              name="experiences"
              placeholder='3.5 Years'
              srcIcon={ExpirienceIcon}
              title='Year of Experiences*'
            />
          </div>
          <div className="col-md-6">
            <InputSelect
              onChange={e => setData('qualification', e.target.value)}
              value={data.qualification}
              errors={errors}
              name="qualification"
              placeholder='3.5 Years'
              srcIcon={QualificationIcon}
              options={qualificationOptions}
              title='Qualification*'
            />
          </div>
          <div className="col-md-6">
            <InputText
              onChange={e => setData('email', e.target.value)}
              value={data.email}
              errors={errors}
              name="email"
              placeholder='info@example.com'
              srcIcon={EmailIcon}
              title='Email*'
            />
          </div>
          <div className="col-md-6">
            <InputText
              onChange={e => setData('phoneNumber', e.target.value)}
              value={data.phoneNumber}
              errors={errors}
              name="phoneNumber"
              placeholder='+880-17 *** *** **'
              srcIcon={PhoneIcon}
              title='Phone Number*'
            />
          </div>
          <div className="col-md-6">
            <InputText
              onChange={e => setData('website', e.target.value)}
              value={data.website}
              errors={errors}
              name="website"
              placeholder='https://example.com'
              srcIcon={WebSiteIcon}
              title='Phone Number*'
            />
          </div>
          <div className="col-md-6">
            <InputText
              onChange={e => setData('language', e.target.value)}
              value={data.language}
              errors={errors}
              name="language"
              placeholder='Bangla, English, Hindi'
              srcIcon={LanguageIcon}
              title='Language*'
            />
          </div>
          <div className="col-md-12">
            <TextArea
              onChange={e => setData('description', e.target.value)}
              value={data.description}
              name="description"
              placeholder='Something Write Yourself....'
              title='Career Objective*' />
          </div>
          <div className="col-md-12">
            <div className="form-inner">
              <button className="primry-btn-2 lg-btn w-unset" type="submit">Update Resume</button>
            </div>
          </div>
        </div>
      </form>
      <SocialNetwork />
    </div>
  )
}

export default BasicInformation