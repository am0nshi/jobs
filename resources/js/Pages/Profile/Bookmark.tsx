import ProfileSidebar from '../../Components/Profile/ProfileSidebar';
import Bookmark from '../../Components/Profile/Bookmark/index';
import { Head } from '@inertiajs/react';
import Header from '@/Components/Header';
import Footer from '@/Components/Footer';
import { ProfileSidebarTypes } from "@/Enums/ProfileSidebarTypeEnum";
const Profile = () => {
  return (
    <>
      <Header />
      <Head title="Bookmark" />
      <div className="dashboard-area pt-120 mb-120">
        <div className="container">
          <div className="row g-lg-4 gy-5 mb-90">
            <div className="col-lg-3">
              <ProfileSidebar type={ProfileSidebarTypes.Bookmark} />
            </div>
            <div className="col-lg-9">
              <Bookmark />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>

  )
}

export default Profile