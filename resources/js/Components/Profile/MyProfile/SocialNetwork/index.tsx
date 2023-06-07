import InputText from '@/Components/InputText';
//icons
import FacebookIcon from "/public/assets/images/icon/facebook-2.svg";
import TwitterIcon from "/public/assets/images/icon/twiter-2.svg";
import LinkedInIcon from "/public/assets/images/icon/linkedin-2.svg";
import PinterestIcon from "/public/assets/images/icon/pinterest-2.svg";
import DribbbleIcon from "/public/assets/images/icon/dribble-2.svg";
import BehanceIcon from "/public/assets/images/icon/dribble-2.svg";
const SocialNetwork = () => {
  return (
    <div className="form-wrapper">
      <div className="section-title">
        <h5>Social Network:</h5>
      </div>
      <form className="profile-form">
        <div className="row">
          <div className="col-md-6">
            <InputText
              name="facebook"
              placeholder='https://example-facebook.com'
              srcIcon={FacebookIcon}
              title='Facebook' />
          </div>
          <div className="col-md-6">
            <InputText
              name="twitter"
              placeholder='https://example-twitter.com'
              srcIcon={TwitterIcon}
              title='Twitter'
            />
          </div>

          <div className="col-md-6">
            <InputText
              name="linkedIn"
              placeholder='https://example-twitter.com'
              srcIcon={LinkedInIcon}
              title='LinkedIn'
            />
          </div>
          <div className="col-md-6">
            <InputText
              name="pinterest"
              placeholder='https://example-pinterest.com'
              srcIcon={PinterestIcon}
              title='Pinterest'
            />
          </div>
          <div className="col-md-6">
            <InputText
              name="dribble"
              placeholder='https://example-dribbble.com'
              srcIcon={DribbbleIcon}
              title='Dribbble'
            />
          </div>
          <div className="col-md-6">
            <InputText
              name="behance"
              placeholder='https://example-behance.com'
              srcIcon={BehanceIcon}
              title='Behance'
            />
          </div>
          <div className="col-md-12">
            <div className="form-inner">
              <button className="primry-btn-2 lg-btn w-unset" type="submit">Edit Social</button>
            </div>
          </div>
        </div>
      </form >
    </div>
  )
}

export default SocialNetwork;