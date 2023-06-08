import InputText from '@/Components/InputText';
import React from 'react';
import EmailIcon from "/public/assets/images/icon/email-2.svg"
import SecEmail from "/public/assets/images/icon/email-2.svg"
import PhoneIcon from "/public/assets/images/icon/phone-2.svg";
import SecPhoneIcon from "/public/assets/images/icon/phone-2.svg"
const ChangePhoneEmail = () => {
  return (
    <div className="phone-email-area">
      <div className="row">
        <div className="col-lg-12">
          <div className="info-title">
            <h6>Phone & Email</h6>
            <div className="dash"></div>
          </div>
        </div>
        <div className="col-md-6">
          <InputText
            srcIcon={PhoneIcon}
            name="phoneNumber"
            placeholder='+880-17 *** *** **'
            title='Primary Number*'
          />

        </div>

        <div className="col-md-6">
          <InputText
            name="sphoneNumber"
            title='Secondary Number*'
            placeholder='+880-17 *** *** **'
            srcIcon={SecPhoneIcon}
          />
        </div>
        <div className="col-md-6">
          <InputText
            name="sphoneNumber"
            title='Primary Email*'
            placeholder='info@example.com'
            srcIcon={EmailIcon}
          />
        </div>
        <div className="col-md-6">
          <InputText
            name="sEmail"
            title='Secondary Email*'
            placeholder='info@example.com'
            srcIcon={SecEmail}
          />
        </div>
      </div>
    </div>
  )
}

export default ChangePhoneEmail