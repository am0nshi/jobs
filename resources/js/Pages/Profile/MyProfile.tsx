import Footer from "@/Components/Footer"
import Header from "@/Components/Header"
import MyProfile from "@/Components/Profile/MyProfile/MyProfile"
import ProfileSidebar from "@/Components/Profile/ProfileSidebar"
import { Head } from "@inertiajs/react"


const Profile = () => {
  return (
    <>
      <Head title="My Profile" />
      <Header />
      <div className="dashboard-area pt-120 mb-120">
        <div className="container">
          <div className="row g-lg-4 gy-5 mb-90">
            <div className="col-lg-3">
              <ProfileSidebar />
            </div>
            <div className="col-lg-9">
              <MyProfile />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>

  )
}

export default Profile