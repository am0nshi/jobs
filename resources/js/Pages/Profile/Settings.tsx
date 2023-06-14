import ProfileSidebar from "@/Components/Profile/ProfileSidebar"
import Settings from "@/Components/Profile/Settings"
import { Head } from "@inertiajs/react"
import { ProfileSidebarTypes } from "@/Enums/ProfileSidebarTypeEnum";
const Profile = () => {
  return (
    <>
      <Head title="My Profile" />
      <div className="dashboard-area pt-120 mb-120">
        <div className="container">
          <div className="row g-lg-4 gy-5 mb-90">
            <div className="col-lg-3">
              <ProfileSidebar type={ProfileSidebarTypes.Settings} />
            </div>
            <div className="col-lg-9">
              <Settings />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile