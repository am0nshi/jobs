import PrivacyCheckBox from "./PrivacyCheckBox"
import { ChangeEventHandler } from "react"
interface ChangePhoneEmailProps {
  onChangeJobAlert: ChangeEventHandler<HTMLInputElement>;
  onChangeVisability: ChangeEventHandler<HTMLInputElement>;
  onChangeDisableAccount: ChangeEventHandler<HTMLInputElement>;
}
const ChangePrivacy: React.FC<ChangePhoneEmailProps> = ({
  onChangeJobAlert,
  onChangeVisability,
  onChangeDisableAccount
}) => {
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
          <PrivacyCheckBox
            onChange={onChangeJobAlert}
            title="All Job Alert"
            name="jobAlert"
          />
          <PrivacyCheckBox
            onChange={onChangeVisability}
            title="Resume Visibility"
            name="visibility"
          />
          <PrivacyCheckBox
            onChange={onChangeDisableAccount}
            title="Disable Account"
            text="If you log in again you will able to see all the match jobs and get all information."
            name="disableAccount"
          />
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