import { FormEventHandler } from "react"
//Icons
import UserIcon from "/public/assets/images/icon/user-2.svg";
import GenderIcon from "/public/assets/images/icon/gender.svg"
import ReligionIcon from "/public/assets/images/icon/religion.svg"
import CalendarIcon from "/public/assets/images/icon/calender2.svg"
import NidIcon from "/public/assets/images/icon/nid.svg"
import MaritalIcon from "/public/assets/images/icon/marital-2.svg"
import BloodIcon from "/public/assets/images/icon/blood.svg"
import HeightIcon from "/public/assets/images/icon/hight.svg"
import WeightIcon from "/public/assets/images/icon/weight.svg"

import { useForm } from '@inertiajs/react';

import InputText from '@/Components/InputText';
import InputSelect from '@/Components/InputSelect';
const maritalOptions = {
  "Single": "Single",
  "Married": "Married",
  "Widowed": "Widowed",
  "Divorced": "Divorced",
};
const genderOptions = {
  "Female": "Female",
  "Male": "Male",
  "Custom": "Custom",
};
const religionOptions = {
  "Christianity": "Christianity",
  "Islam": "Islam",
  "Buddhism": "Buddhism",
  "Sikhism": "Sikhism",
  "Judaism": "Judaism",
};
const bloodOptions = {
  "A+": "A+",
  "A-": "A-",
  "B+": "B+",
  "B-": "B-",
  "AB+": "AB+",
  "AB-": "AB-",
  "O+": "O+",
  "O-": "O-",
};
const EditProfile = () => {

  const { data, errors, setData, reset } = useForm({
    fatherName: "",
    motherName: "",
    date: "",
    nid: "",
    perAddress: "",
    meritalStatus: "",
    gender: "",
    religion: "",
    bloodType: "",
    height: "",
    weight: "",
  })
  const onSubmit: FormEventHandler = (e) => {
    e.preventDefault();
    reset();
  };
  return (
    <div className="tab-pane active" id="profile" role="tabpanel" aria-labelledby="profile-tab">
      <form className="edit-profile-form profile-form"
        onSubmit={onSubmit}
      >
        <div className="row">
          <div className="col-md-6">
            <InputText
              onChange={e => setData('fatherName', e.target.value)}
              value={data.fatherName}
              errors={errors}
              name="fatherName"
              placeholder='Mr. Norman Frankly'
              srcIcon={UserIcon}
              title='Father’s Name*'
            />
          </div>
          <div className="col-md-6">
            <InputText
              onChange={e => setData('motherName', e.target.value)}
              value={data.motherName}
              errors={errors}
              name="motherName"
              placeholder='Mrs. Marcoline Frankly'
              srcIcon={UserIcon}
              title='Mother`s Name*'
            />
          </div>
          <div className="col-md-6">
            <InputText
              onChange={e => setData('date', e.target.value)}
              value={data.date}
              errors={errors}
              name="date"
              placeholder='03/08/1986'
              srcIcon={CalendarIcon}
              title='Date of Birth*'
            />
          </div>
          <div className="col-md-6">
            <InputText
              onChange={e => setData('nid', e.target.value)}
              value={data.nid}
              errors={errors}
              name="nid"
              placeholder='0988 *** *** *** **'
              srcIcon={NidIcon}
              title='National Id*'
            />
          </div>
          <div className="col-md-6">
            <div className="form-inner mb-25">
              <div className="salary-wrap">
                <label className="label" htmlFor="preAddress">Present Address*</label>
                <div className="checkbox-container">
                  <ul>
                    <li>
                      <label className="containerss">
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                        <span className="text">Same as permanent Address</span>
                      </label>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="input-area">
                <img src="assets/images/icon/home-2.svg" alt="" />
                <input type="text" id="preAddress" name="preAddress " placeholder="Your Address Here..." />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <InputText
              onChange={e => setData('perAddress', e.target.value)}
              value={data.perAddress}
              errors={errors}
              name="perAddress"
              placeholder='Your Address Here...'
              srcIcon={NidIcon}
              title='Permanent Address*'
            />
          </div>
          <div className="col-md-6">
            <InputSelect
              onChange={e => setData('meritalStatus', e.target.value)}
              value={data.meritalStatus}
              errors={errors}
              name="meritalStatus"
              options={maritalOptions}
              srcIcon={MaritalIcon}
              title='Marital Status*'
            />
          </div>
          <div className="col-md-6">
            <InputSelect
              onChange={e => setData('gender', e.target.value)}
              value={data.gender}
              errors={errors}
              name="gender"
              options={genderOptions}
              srcIcon={GenderIcon}
              title='Gender*'
            />
          </div>
          <div className="col-md-6">
            <InputSelect
              onChange={e => setData('religion', e.target.value)}
              value={data.religion}
              errors={errors}
              name="religion"
              options={religionOptions}
              srcIcon={ReligionIcon}
              title='Religion*'
            />
          </div>
          <div className="col-md-6">
            <InputSelect
              onChange={e => setData('bloodType', e.target.value)}
              value={data.bloodType}
              errors={errors}
              name="bloodType"
              options={bloodOptions}
              srcIcon={BloodIcon}
              title='Blood Group*'
            />
          </div>
          <div className="col-md-6">
            <InputText
              onChange={e => setData('height', e.target.value)}
              value={data.height}
              errors={errors}
              name="height"
              placeholder='5.6'
              srcIcon={HeightIcon}
              title='Height*'
            />
          </div>
          <div className="col-md-6">
            <InputText
              onChange={e => setData('weight', e.target.value)}
              value={data.weight}
              errors={errors}
              name="weight"
              placeholder='56'
              srcIcon={WeightIcon}
              title='Weight*'
            />
          </div>
          <div className="skills-row">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title2 mb-20">
                  <h5>Your Skills:</h5>
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-inner mb-25">
                  <label>Special Skills*</label>
                  <select className="js-example-basic-multiple " name="states[]">

                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <div className="form-inner">
              <button className="primry-btn-2 lg-btn w-unset" type="submit">Update Change</button>
            </div>
          </div>

        </div>
      </form>
    </div>
  )
}

export default EditProfile