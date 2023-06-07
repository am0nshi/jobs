const ChangePrivacy = () => {
  return (
    <div className="privacy-security-area">
      <div className="row">
        <div className="col-lg-12">
          <div className="info-title">
            <h6>Privacy & Security</h6>
            <div className="dash"></div>
          </div>
        </div>
        <div className="col-lg-12">
          <div className="single-permission mb-2">
            <div className="title">
              <h6>All Job Alert</h6>
            </div>
            <div className="form-check form-switch">
              <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault1" />
            </div>
          </div>
          <div className="single-permission mb-30">
            <div className="title">
              <h6>Resume Visibility</h6>
            </div>
            <div className="form-check form-switch">
              <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault2" />
            </div>
          </div>
          <div className="single-permission mb-3">
            <div className="title">
              <h6>Disable Account</h6>
              <p>If you log in again you will able to see all the match jobs and get all information.</p>
            </div>
            <div className="form-check form-switch">
              <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault3" />
            </div>
          </div>
          <div className="single-permission align-items-start">
            <div className="title">
              <h6>Delete Account</h6>
              <p>If you delete your account, you will no longer be able to get information about the matched jobs.</p>
            </div>
            <div className="delete-btn">
              <button type="reset">Delete Account</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChangePrivacy