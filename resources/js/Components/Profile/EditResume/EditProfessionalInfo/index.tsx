import { FormEventHandler } from "react"
import InputText from '@/Components/InputText'
import { useForm } from '@inertiajs/react'
//icons
import CompanyIcon from "/public/assets/images/icon/company-2.svg"
import InputSelect from '@/Components/InputSelect';
import DesigationIcon from "/public/assets/images/icon/designation-2.svg"
import CalendarIcon from "/public/assets/images/icon/calender2.svg"
import InputCheckBox from '@/Components/InputCheckBox';
import TextArea from '@/Components/TextArea';
//Options for InputSelect
const desigationOptions = {
  "Back-end developer": "Back-end developer",
  "Front-end developer": "Front-end developer",
  "Full-stack developer": "Full-stack developer",
};

const EditProfessionalInfo = () => {
  const { data, errors, setData, reset } = useForm({

    company: "",
    desigation: "",
    dateStart: "",
    dateEnd: "",
    isWorking: false,
    responsibility: "",

  })
  const onSubmit: FormEventHandler = (e) => {
    e.preventDefault();
    reset();
  };
  return (
    <div className="tab-pane active" id="professional" role="tabpanel" aria-labelledby="professional-tab">
      <form
        onSubmit={onSubmit}
        className="edit-profile-form profile-form">
        <div className="section-title2">
          <h5>Employment Information:</h5>
        </div>
        <div className="experiences-row">
          <div className="row">
            <div className="col-lg-12">
              <div className="info-title">
                <h6>Add Your Experiences</h6>
                <div className="dash"></div>
              </div>
            </div>
            <div className="col-md-6">
              <InputText
                onChange={e => setData('company', e.target.value)}
                value={data.company}
                errors={errors}
                name="company"
                placeholder='Egenslab'
                srcIcon={CompanyIcon}
                title='Company Name*'
              />
            </div>
            <div className="col-md-6">
              <InputSelect
                onChange={e => setData('desigation', e.target.value)}
                value={data.desigation}
                errors={errors}
                name="desigation"
                srcIcon={DesigationIcon}
                options={desigationOptions}
                title='Designation*'
              />
            </div>
            <div className="col-md-6">
              <InputText
                onChange={e => setData('dateStart', e.target.value)}
                value={data.dateStart}
                errors={errors}
                name="dateStart"
                placeholder='DD/MM/YY'
                srcIcon={CalendarIcon}
                title='Starting Period*'
              />
            </div>
            <div className="col-md-6">

              <InputText
                onChange={e => setData('dateEnd', e.target.value)}
                value={data.dateEnd}
                errors={errors}
                name="dateEnd"
                placeholder='DD/MM/YY'
                srcIcon={CalendarIcon}
                title='Ending Period*'
              />
            </div>

            <div className="col-md-12">
              <InputCheckBox
                onChange={e => setData('isWorking', e.target.checked)}
                value={data.isWorking}
                name="isWorking"
                placeholder='DD/MM/YY'
                srcIcon={CalendarIcon}
                text='Continuing Working Here*'
              />
            </div>
            <div className="col-md-12">
              <TextArea
                onChange={e => setData('responsibility', e.target.value)}
                value={data.responsibility}
                name="responsibility"
                placeholder='DD/MM/YY'
                title='Write Your Responsibility...'
              />
            </div>
          </div>
        </div>
        <div className="add-remove-btn d-flex align-items-center justify-content-between mb-50">
          <div className="add-row">
            <button type="button" className="add-experiences-row">Add New+ </button>
          </div>
        </div>
        <div className="col-md-12">
          <div className="form-inner">
            <button className="primry-btn-2 lg-btn w-unset" type="submit">Update Change</button>
          </div>
        </div>
      </form >
    </div >
  )
}

export default EditProfessionalInfo