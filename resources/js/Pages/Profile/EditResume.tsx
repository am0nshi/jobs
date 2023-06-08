import Header from "@/Components/Header"
import EditResume from "@/Components/Profile/EditResume"
import ProfileSidebar from "@/Components/Profile/ProfileSidebar"
import { Head } from "@inertiajs/react"
import { ProfileSidebarTypes } from "@/Enums/ProfileSidebarTypeEnum";
const EditCV = () => {
  return (
    <>
      <Header />
      <Head title="Edit Resume" />
      <div className="dashboard-area pt-120 mb-120">
        <div className="container">
          <div className="row g-lg-4 gy-5 mb-90">
            <div className="col-lg-3">
              <ProfileSidebar type={ProfileSidebarTypes.EditResume} />
            </div>
            <div className="col-lg-9">
              <EditResume />
            </div>
          </div>
        </div>
      </div>
    </>

  )
}

export default EditCV