import { FormEventHandler } from "react"

import InputText from '@/Components/InputText';

//icons
import FacebookIcon from "/public/assets/images/icon/facebook-2.svg";
import TwitterIcon from "/public/assets/images/icon/twiter-2.svg";
import LinkedInIcon from "/public/assets/images/icon/linkedin-2.svg";
import PinterestIcon from "/public/assets/images/icon/pinterest-2.svg";
import DribbbleIcon from "/public/assets/images/icon/dribble-2.svg";
import BehanceIcon from "/public/assets/images/icon/dribble-2.svg";

import { useForm } from '@inertiajs/react';
const SocialNetwork = () => {

  const { data, errors, setData, reset } = useForm({
    facebook: "",
    twitter: "",
    linkedIn: "",
    pinterest: "",
    dribble: "",
    behance: ""
  })

  const onSubmit: FormEventHandler = (e) => {
    e.preventDefault();
    reset();
  };

  return (
    <div className="form-wrapper">
      <div className="section-title">
        <h5>Social Network:</h5>
      </div>
      <form className="profile-form"
        onSubmit={onSubmit}
      >
        <div className="row">
          <div className="col-md-6">
            <InputText
              onChange={e => setData('facebook', e.target.value)}
              value={data.facebook}
              errors={errors}
              name="facebook"
              placeholder='https://example-facebook.com'
              srcIcon={FacebookIcon}
              title='Facebook' />
          </div>
          <div className="col-md-6">
            <InputText
              onChange={e => setData('twitter', e.target.value)}
              value={data.twitter}
              errors={errors}
              name="twitter"
              placeholder='https://example-twitter.com'
              srcIcon={TwitterIcon}
              title='Twitter'
            />
          </div>

          <div className="col-md-6">
            <InputText
              onChange={e => setData('linkedIn', e.target.value)}
              value={data.linkedIn}
              errors={errors}
              name="linkedIn"
              placeholder='https://example-twitter.com'
              srcIcon={LinkedInIcon}
              title='LinkedIn'
            />
          </div>
          <div className="col-md-6">
            <InputText
              onChange={e => setData('pinterest', e.target.value)}
              value={data.pinterest}
              errors={errors}
              name="pinterest"
              placeholder='https://example-pinterest.com'
              srcIcon={PinterestIcon}
              title='Pinterest'
            />
          </div>
          <div className="col-md-6">
            <InputText
              onChange={e => setData('dribble', e.target.value)}
              value={data.dribble}
              errors={errors}
              name="dribble"
              placeholder='https://example-dribbble.com'
              srcIcon={DribbbleIcon}
              title='Dribbble'
            />
          </div>
          <div className="col-md-6">
            <InputText
              onChange={e => setData('behance', e.target.value)}
              value={data.behance}
              errors={errors}
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