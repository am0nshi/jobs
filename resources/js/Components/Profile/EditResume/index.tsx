import { FormEventHandler } from "react"


import EditTopbar from './EditTopbar';
import BasicInformation from './BasicInformation';
import EditProfile from './EditProfile';
import EditEducation from './EditEducation';
import EditPersonalInfo from './EditPersonalInfo';

const EditResume = () => {
  return (
    <div className="edit-profile-inner">
      <div className="form-wrapper">
        <EditTopbar />
        <div className="tab-content" id="myTabContent">
          <BasicInformation />
          {/*  <EditProfile /> */}
          {/*   <EditEducation /> */}
          {/*  <EditPersonalInfo /> */}
        </div>
      </div>
    </div >
  )
}

export default EditResume