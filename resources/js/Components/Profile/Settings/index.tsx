import ChangePassword from './ChangePassword'
import ChangePhoneEmail from './ChangePhoneEmail'
import ChangeLocation from './ChangeLocation'
import ChangePrivacy from './ChangePrivacy'
const Settings = () => {
  return (
    <div className="form-wrapper">
      <form className="profile-form">
        <div className="section-title2">
          <h5 className="d-flex align-items-baseline gap-1"><img src="assets/images/icon/profile-settings.svg" alt="" /> Profile Settings </h5>
        </div>
        <ChangePassword />
        <ChangePhoneEmail />
        <ChangeLocation />
        <ChangePrivacy />
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