import { FormEventHandler } from "react"


import EditTopbar from './EditTopbar';
import BasicInformation from './BasicInformation';
import EditProfile from './EditProfile';
import EditEducation from './EditEducation';
import EditPersonalInfo from './EditProfessionalInfo';
import { EditResumeTypes } from "@/Enums/EditResumeTypeEnum"
const EditResume = ({ type }: { type: string }) => {
  return (
    <div className="edit-profile-inner">
      <div className="form-wrapper">
        <EditTopbar type={type} />
        <div className="tab-content" id="myTabContent">
          {type === EditResumeTypes.BasicInformation ? <BasicInformation /> : null}
          {type === EditResumeTypes.Profile ? <EditProfile /> : null}
          {type === EditResumeTypes.Education ? <EditEducation /> : null}
          {type === EditResumeTypes.ProfessionalInfo ? <EditPersonalInfo /> : null}
        </div>
      </div>
    </div >
  )
}

export default EditResume