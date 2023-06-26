import { FormEventHandler } from "react"

import InputText from '@/Components/InputText';
import TextArea from '@/Components/TextArea';
import InputSelect from '@/Components/InputSelect';
import SocialNetwork from './SocialNetwork';

//Icons
import UserIcon from "/public/assets/images/icon/user-2.svg";
import ClockIcon from "/public/assets/images/icon/clock-2.svg";
import LocationIcon from "/public/assets/images/icon/map-2.svg";
import PhoneIcon from "/public/assets/images/icon/phone-2.svg";
import EmailIcon from "/public/assets/images/icon/email-2.svg";
import WebsiteIcon from "/public/assets/images/icon/website-2.svg";
import CompanyIcon from "/public/assets/images/icon/company-2.svg";
import DesignationIcon from "/public/assets/images/icon/designation-2.svg";
import QualificationIcon from "/public/assets/images/icon/qualification-2.svg";
import LanguageIcon from "/public/assets/images/icon/language-2.svg";
import { useForm } from '@inertiajs/react';
import MaskedInput from "@/Components/MaskedInput";

//Options for InputSelect
const qualificationOptions = {
  "Bachelor Degree in CSE": "Bachelor Degree in CSE",
  "IGCSE": "IGCSE",
  "AS": "AS",
  "A Level": "A Level",
  "Matriculated": "Matriculated"
};
const languageOptions = {
  "Bangla": "Bangla",
  "English": "English",
  "Spanish": "Spanish",
  "Italian": "Italian"
};

const MyProfile = () => {
  const { data, errors, setData, reset } = useForm({
    name: "",
    age: "",
    location: "",
    phone: "",
    email: "",
    websiteLink: "",
    companyName: "",
    designation: "",
    qualification: "",
    language: "",
    description: ""
  })

  const onSubmit: FormEventHandler = (e) => {
    e.preventDefault();
    reset();
  };
  const handlerSelectChange = (name: string, setData: Function) => {
    return (selectedOption: Array<object> | object) => {
      if (Array.isArray(selectedOption)) {
        const value = selectedOption.map(item => { return item.value })
        setData(name, value)
      }
      else {
        const optionWithValue = selectedOption as { value: string };
        setData(name, optionWithValue.value);
      }

    }
  }
  return (
    <>
      <div className="my-profile-inner">
        <div className="form-wrapper mb-60">
          <div className="section-title">
            <h5>My Profile</h5>
          </div>
          <form
            onSubmit={onSubmit}
            className="profile-form">
            <div className="row">
              <div className="col-md-6">
                <InputText
                  onChange={e => setData('name', e.target.value)}
                  name="name"
                  value={data.name}
                  errors={errors}
                  placeholder='Mr. Robert'
                  srcIcon={UserIcon}
                  title='First Name*'
                />
              </div>
              <div className="col-md-6">
                <InputText name="age"
                  onChange={e => setData('age', e.target.value)}
                  value={data.age}
                  errors={errors}
                  placeholder='21 Years'
                  srcIcon={ClockIcon}
                  title='Your Age*'
                />
              </div>
              <div className="col-md-6">
                <InputText
                  onChange={e => setData('location', e.target.value)}
                  value={data.location}
                  errors={errors}
                  name="location"
                  placeholder='Mirput, Dhaka'
                  srcIcon={LocationIcon}
                  title='Current Location*'
                />
              </div>
              <div className="col-md-6">
                <MaskedInput
                  mask="(999) 999-9999"
                  onChange={e => setData('phone', e.target.value || "")}
                  value={data.phone}
                  errors={errors}
                  name="phone"
                  placeholder='+880-17 *** *** **'
                  srcIcon={PhoneIcon}
                  title='Phone Number*'
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
                  onChange={e => setData('websiteLink', e.target.value)}
                  value={data.websiteLink}
                  errors={errors}
                  name="websiteLink"
                  placeholder='https://example.com'
                  srcIcon={WebsiteIcon}
                  title="Website Link*"
                />
              </div>
              <div className="col-md-6">
                <InputText
                  onChange={e => setData('companyName', e.target.value)}
                  value={data.companyName}
                  errors={errors}
                  name="companyName"
                  placeholder='Company Name'
                  srcIcon={CompanyIcon}
                  title="Current Job Place*"
                />
              </div>
              <div className="col-md-6">
                <InputText
                  onChange={e => setData('designation', e.target.value)}
                  value={data.designation}
                  errors={errors}
                  name="designation"
                  placeholder='UI/UX Engineer'
                  srcIcon={DesignationIcon}
                  title="Designation*"
                />
              </div>
              <div className="col-md-6">
                <InputSelect
                  onChange={handlerSelectChange("qualification", setData)}
                  errors={errors}
                  name='qualification'
                  srcIcon={QualificationIcon}
                  options={qualificationOptions}
                  title='Qualification*'
                />
              </div>
              <div className="col-md-6">
                <InputSelect
                  onChange={handlerSelectChange("language", setData)}
                  errors={errors}
                  name='language'
                  srcIcon={LanguageIcon}
                  options={languageOptions}
                  title='Language*'
                />
              </div>
              <div className="col-md-12">
                <TextArea
                  onChange={e => setData('description', e.target.value)}
                  value={data.description}
                  name="description"
                  placeholder='Write something about yourself..........'
                  title='Description*' />
              </div>
              <div className="col-md-12">
                <div className="form-inner">
                  <button className="primry-btn-2 lg-btn w-unset" type="submit">Update Profile</button>
                </div>
              </div>
            </div>
          </form>
        </div>
        <SocialNetwork />
      </div>
    </>

  )
}

export default MyProfile