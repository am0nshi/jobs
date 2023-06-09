import RecentActivityIcon1 from "/public/assets/images/bg/company-logo/recent-activity-01.png"
import RecentActivityIcon2 from "/public/assets/images/bg/company-logo/recent-activity-02.png"
import RecentActivityIcon3 from "/public/assets/images/bg/company-logo/recent-activity-03.png"
import RecentActivityIcon4 from "/public/assets/images/bg/company-logo/recent-activity-04.png"
import ClockIcon from "/public/assets/images/icon/clock-1.svg"

const ProfileSidebarWidget = () => {
  return (
    <div className="single-widget">
      <div className="widget-title">
        <h6>Recent Activity:</h6>
      </div>
      <ul className="recent-activitys">
        <li>
          <div className="company-img">
            <img src={RecentActivityIcon1} alt="" />
          </div>
          <div className="content">
            <h6><a href="blog-details.html">Your application has accepted in 2 vacancies.</a></h6>
            <span><img src={ClockIcon} alt="" /> 7 hour ago</span>
          </div>
        </li>
        <li>
          <div className="company-img">
            <img src={RecentActivityIcon2} alt="" />
          </div>
          <div className="content">
            <h6><a href="blog-details.html">1 Day Left For Your Premium Package To Expire.</a></h6>
            <span><img src={ClockIcon} alt="" /> 5 hour ago</span>
          </div>
        </li>
        <li>
          <div className="company-img">
            <img src={RecentActivityIcon3} alt="" />
          </div>
          <div className="content">
            <h6><a href="blog-details.html">Your Job Posted Published On Position WordPress.</a></h6>
            <span><img src={ClockIcon} alt="" /> 1 hour ago</span>
          </div>
        </li>
        <li>
          <div className="company-img">
            <img src={RecentActivityIcon4} alt="" />
          </div>
          <div className="content">
            <h6><a href="blog-details.html">Your Job Posted Published On Position Frontend Developer.</a></h6>
            <span><img src={ClockIcon} alt="" /> 1 hour ago</span>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default ProfileSidebarWidget