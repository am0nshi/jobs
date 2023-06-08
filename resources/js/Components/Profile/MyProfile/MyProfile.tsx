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
  return (
    <>
      <div className="my-profile-inner">
        <div className="form-wrapper mb-60">
          <div className="section-title">
            <h5>My Profile</h5>
          </div>
          <form className="profile-form">
            <div className="row">
              <div className="col-md-6">
                <InputText name="name"
                  placeholder='Mr. Robert'
                  srcIcon={UserIcon}
                  title='First Name*'
                />
              </div>
              <div className="col-md-6">
                <InputText name="age"
                  placeholder='21 Years'
                  srcIcon={ClockIcon}
                  title='Your Age*'
                />
              </div>
              <div className="col-md-6">
                <InputText
                  name="location"
                  placeholder='Mirput, Dhaka'
                  srcIcon={LocationIcon}
                  title='Current Location*'
                />
              </div>
              <div className="col-md-6">
                <InputText
                  name="phone"
                  placeholder='+880-17 *** *** **'
                  srcIcon={PhoneIcon}
                  title='Phone Number*'
                />
              </div>
              <div className="col-md-6">
                <InputText
                  name="email"
                  placeholder='info@example.com'
                  srcIcon={EmailIcon}
                  title='Email*'
                />
              </div>
              <div className="col-md-6">
                <InputText
                  name="websiteLink"
                  placeholder='https://example.com'
                  srcIcon={WebsiteIcon}
                  title="Website Link*"
                />
              </div>
              <div className="col-md-6">
                <InputText
                  name="companyName"
                  placeholder='Company Name'
                  srcIcon={CompanyIcon}
                  title="Current Job Place*"
                />
              </div>
              <div className="col-md-6">
                <InputText
                  name="companyName"
                  placeholder='UI/UX Engineer'
                  srcIcon={DesignationIcon}
                  title="Designation*"
                />
              </div>
              <div className="col-md-6">
                <InputSelect
                  name='qualification'
                  srcIcon={QualificationIcon}
                  options={qualificationOptions}
                  title='Qualification*'
                />
              </div>
              <div className="col-md-6">
                <InputSelect
                  name='qualification'
                  srcIcon={LanguageIcon}
                  options={languageOptions}
                  title='Qualification*'
                />
              </div>
              <div className="col-md-12">
                <TextArea
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