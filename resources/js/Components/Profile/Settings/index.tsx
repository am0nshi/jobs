import ChangePassword from './ChangePassword'
import ChangePhoneEmail from './ChangePhoneEmail'
import ChangeLocation from './ChangeLocation'
import ChangePrivacy from './ChangePrivacy'
import { useForm } from '@inertiajs/react'
import { FormEventHandler } from 'react'

const Settings = () => {
  const { data, errors, setData, reset } = useForm({
    password: "",
    confirmPassword: "",
    phoneNumber: "",
    sPhoneNumber: "",
    email: "",
    sEmail: "",
    location: "",
    jobAlert: false,
    visibility: false,
    disableAccount: false,
  })

  const onSubmit: FormEventHandler = (e) => {
    e.preventDefault();
    reset();
  };

  return (
    <div className="form-wrapper">
      <form className="profile-form" onSubmit={onSubmit}>
        <div className="section-title2">
          <h5 className="d-flex align-items-baseline gap-1">
            <img src="assets/images/icon/profile-settings.svg" alt="" /> Profile Settings
          </h5>
        </div>
        <ChangePassword
          data={data}
          errors={errors}
          onChangePassword={e => setData('password', e.target.value)}
          onChangeConfirmPassword={e => setData('confirmPassword', e.target.value)}
        />
        <ChangePhoneEmail
          data={data}
          errors={errors}
          onChangeEmail={e => setData('email', e.target.value)}
          onChangeSEmail={e => setData('sEmail', e.target.value)}
          onChangePhone={e => setData('phoneNumber', e.target.value)}
          onChangeSPhone={e => setData('sPhoneNumber', e.target.value)}
        />
        <ChangeLocation
          data={data}
          errors={errors}
          onChangeLocation={e => setData('location', e.target.value)}
        />
        <ChangePrivacy
          onChangeDisableAccount={e => setData('disableAccount', e.target.checked)}
          onChangeJobAlert={e => setData('jobAlert', e.target.checked)}
          onChangeVisability={e => setData('visibility', e.target.checked)}
        />
        <div className="col-md-12 pt-50">
          <div className="form-inner">
            <button className="primry-btn-2 lg-btn w-unset" type="submit">Update Change</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Settings
