import InputText from '@/Components/InputText';
import { ChangeEventHandler } from 'react';
import EmailIcon from "/public/assets/images/icon/email-2.svg"
import SecEmail from "/public/assets/images/icon/email-2.svg"
import PhoneIcon from "/public/assets/images/icon/phone-2.svg";
import SecPhoneIcon from "/public/assets/images/icon/phone-2.svg"
interface ChangePhoneEmailProps {
  data: {
    phoneNumber: string;
    sPhoneNumber: string;
    email: string;
    sEmail: string;
  };
  errors?: Record<string, string | undefined>;
  onChangePhone: ChangeEventHandler<HTMLInputElement>;
  onChangeSPhone: ChangeEventHandler<HTMLInputElement>;
  onChangeEmail: ChangeEventHandler<HTMLInputElement>;
  onChangeSEmail: ChangeEventHandler<HTMLInputElement>;
}
const ChangePhoneEmail: React.FC<ChangePhoneEmailProps> = (
  { data, errors, onChangePhone, onChangeSPhone, onChangeEmail, onChangeSEmail, }) => {
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
            errors={errors}
            value={data.phoneNumber}
            onChange={onChangePhone}
            srcIcon={PhoneIcon}
            name="phoneNumber"
            placeholder='+880-17 *** *** **'
            title='Primary Number*'
          />
        </div>
        <div className="col-md-6">
          <InputText
            errors={errors}
            value={data.sPhoneNumber}
            onChange={onChangeSPhone}
            name="sPhoneNumber"
            title='Secondary Number*'
            placeholder='+880-17 *** *** **'
            srcIcon={SecPhoneIcon}
          />
        </div>
        <div className="col-md-6">
          <InputText
            errors={errors}
            value={data.email}
            onChange={onChangeEmail}
            name="email"
            title='Primary Email*'
            placeholder='info@example.com'
            srcIcon={EmailIcon}
          />
        </div>
        <div className="col-md-6">
          <InputText
            errors={errors}
            value={data.sEmail}
            onChange={onChangeSEmail}
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