import ProfileSidebar from "@/Components/Profile/ProfileSidebar"
import { Head } from "@inertiajs/react"
import { ProfileSidebarTypes } from "@/Enums/ProfileSidebarTypeEnum";
import ViewResumeList from "@/Components/Profile/ViewResumeList/ViewResumeList";
const Profile = () => {
  return (
    <>
      <Head title="My Profile" />
      <div className="dashboard-area pt-120 mb-120">
        <div className="container">
          <div className="row g-lg-4 gy-5 mb-90">
            <div className="col-lg-3">
              <ProfileSidebar type={ProfileSidebarTypes.ViewResume} />
            </div>
            <div className="col-lg-9">
              <ViewResumeList />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile