import InputPassword from '@/Components/InputPassword';
import { ChangeEventHandler } from 'react';
interface ChangePasswordProps {
  data: {
    password: string;
    confirmPassword: string;
  };
  errors?: Record<string, string | undefined>;
  onChangePassword: ChangeEventHandler<HTMLInputElement>;
  onChangeConfirmPassword: ChangeEventHandler<HTMLInputElement>;
}
const ChangePassword: React.FC<ChangePasswordProps> = ({ data, errors, onChangePassword, onChangeConfirmPassword }) => {

  return (
    <div className="change-password-area mb-40">
      <div className="row">
        <div className="col-lg-12">
          <div className="info-title">
            <h6>Change Your Password</h6>
            <div className="dash"></div>
          </div>
        </div>
        <div className="col-md-6">
          <InputPassword
            errors={errors}
            value={data.password}
            onChange={onChangePassword}
            title='New Password*'
            placeholder='Password'
            name="password" />
        </div>
        <div className="col-md-6">
          <InputPassword
            errors={errors}
            value={data.confirmPassword}
            onChange={onChangeConfirmPassword}
            title='Confirm Password*'
            placeholder='Confirm Password'
            name="confirmPassword" />
        </div>
        <div className="col-md-12 pt-10">
          <div className="form-inner">
            <button className="primry-btn-1 lg-btn w-unset" type="submit">Update Change</button>
          </div>
        </div>
      </div>
    </div>

  )
}

export default ChangePassword