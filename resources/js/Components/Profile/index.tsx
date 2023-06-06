import React from 'react'
import ProfileSidebar from './ProfileSidebar'
import EditResume from './EditResume'
import MyProfile from './MyProfile'
import Dashboard from './Dashboard'
import AppliedJobs from './AppliedJobs'
import Bookmark from './Bookmark'
import Settings from './Settings'

const Profile = () => {
  return (
    <div className="dashboard-area pt-120 mb-120">
      <div className="container">
        <div className="row g-lg-4 gy-5 mb-90">
          <div className="col-lg-3">
            <ProfileSidebar />
          </div>
          <div className="col-lg-9">
            <Dashboard />
            {/* <MyProfile /> */}
            {/*  <AppliedJobs /> */}
            {/* <Bookmark /> */}
            {/* <EditResume /> */}
            {/* <Settings /> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile