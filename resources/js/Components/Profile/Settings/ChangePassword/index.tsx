import InputPassword from '@/Components/InputPassword'
import React from 'react'

const ChangePassword = () => {
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
            title='New Password*'
            placeholder='Password'
            name="password" />
        </div>
        <div className="col-md-6">
          <InputPassword
            title='Confirm Password*'
            placeholder='Confirm Password'
            name="confirmpassword" />
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