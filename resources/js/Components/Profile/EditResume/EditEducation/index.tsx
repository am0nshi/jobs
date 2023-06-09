import { FormEventHandler } from "react"
import InputSelect from '@/Components/InputSelect'

import QualificationIcon from "/public/assets/images/icon/qualification-2.svg";
import MajorIcon from "/public/assets/images/icon/major.svg"
import UnivercityIcon from "/public/assets/images/icon/univercity.svg"
import GPAIcon from "/public/assets/images/icon/gpa-2.svg"
import CalendarIcon from "/public/assets/images/icon/calender2.svg"

import { useForm } from '@inertiajs/react';
import InputText from '@/Components/InputText';

const qualificationOptions = {
  "Bachelor Degree in CSE": "Bachelor Degree in CSE",
  "IGCSE": "IGCSE",
  "AS": "AS",
  "A Level": "A Level",
  "Matriculated": "Matriculated"
};
const majorOptions = {
  "Science": "Science",
  "Arts": "Arts",
};
const EditEducation = () => {
  const { data, errors, setData, reset } = useForm({

    qualification: "",
    major: "",
    institute: "",
    gpa: "",
    date: "",
    endDate: "",
  })

  const onSubmit: FormEventHandler = (e) => {
    e.preventDefault();
    reset();
  };
  return (
    <div className="tab-pane active" id="contact" role="tabpanel" aria-labelledby="contact-tab">
      <form className="edit-profile-form profile-form"
        onSubmit={onSubmit}
      >
        <div className="section-title2">
          <h5>Educational Qualification:</h5>
        </div>
        <div className="education-row">
          <div className="row">
            <div className="col-lg-12">
              <div className="info-title">
                <h6>Academic Information:</h6>
                <div className="dash"></div>
              </div>
            </div>
            <div className="col-md-6">
              <InputSelect
                onChange={e => setData('qualification', e.target.value)}
                value={data.qualification}
                errors={errors}
                name="qualification"
                placeholder='3.5 Years'
                srcIcon={QualificationIcon}
                options={qualificationOptions}
                title='Education Level**'
              />
            </div>
            <div className="col-md-6">
              <InputSelect
                onChange={e => setData('major', e.target.value)}
                value={data.major}
                errors={errors}
                name="major"
                placeholder='3.5 Years'
                srcIcon={MajorIcon}
                options={majorOptions}
                title='My Major*'
              />
            </div>
            <div className="col-md-6">
              <InputText
                onChange={e => setData('institute', e.target.value)}
                value={data.institute}
                errors={errors}
                name="institute"
                placeholder='Type Your Institute Name...'
                srcIcon={UnivercityIcon}
                title='Institute/University*'
              />
            </div>
            <div className="col-md-6">
              <InputText
                onChange={e => setData('gpa', e.target.value)}
                value={data.gpa}
                errors={errors}
                name="gpa"
                placeholder='4.75/5'
                srcIcon={GPAIcon}
                title='Result/GPA**'
              />
            </div>
            <div className="col-md-6">
              <InputText
                onChange={e => setData('date', e.target.value)}
                value={data.date}
                errors={errors}
                name="date"
                placeholder='DD/MM/YY'
                srcIcon={CalendarIcon}
                title='Starting Period*'
              />
            </div>
            <div className="col-md-6">
              <InputText
                onChange={e => setData('endDate', e.target.value)}
                value={data.endDate}
                errors={errors}
                name="endDate"
                placeholder='DD/MM/YY'
                srcIcon={CalendarIcon}
                title='Ending Period*'
              />
            </div>
          </div>
        </div>
        <div className="add-remove-btn d-flex align-items-center justify-content-between mb-50">
          <div className="add-row">
            <button type="button" className="add-education-row">Add Education+</button>
          </div>
        </div>
        <div className="col-md-12">
          <div className="form-inner">
            <button className="primry-btn-2 lg-btn w-unset" type="submit">Update Change</button>
          </div>
        </div>
      </form>
      E</div>
  )
}

export default EditEducation