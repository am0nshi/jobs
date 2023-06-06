import CounterArea from "./CounterArea"

const Dashboard = () => {
  return (
    <div className="dashboard-inner">
      <div className="author-area">
        <div className="author-img">
          <img src="assets/images/bg/author1.png" alt="" />
        </div>
        <div className="author-content">
          <span>Hello, I’m</span>
          <h4>JACOLINE  Frankly</h4>
        </div>
      </div>
      <CounterArea />
      <div className="table-wrapper">
        <h5 className="title">Current Applied Jobs:</h5>
        <div className="scroll-table">
          <table className="eg-table table category-table mb-0">
            <thead>
              <tr>
                <th>Job Tittle</th>
                <th>Apply Date</th>
                <th>Company</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td data-label="Job Title">
                  <div className="company-info">
                    <div className="logo">
                      <img src="assets/images/bg/company-logo/company-06.png" alt="" />
                    </div>
                    <div className="company-details">
                      <div className="top">
                        <h6><a href="job-details.html">Senior UI/UX Designer</a></h6>
                        <span><img src="assets/images/icon/calender2.svg" alt="" /> 1 days ago</span>
                      </div>
                      <ul>
                        <li><img src="assets/images/icon/location.svg" alt="" />New-York, USA</li>
                        <li>
                          <img src="assets/images/icon/arrow2.svg" alt="" />
                          <p><span className="title">Salary:</span> $60-$90 / <span className="time">Per Hour</span></p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </td>
                <td data-label="Apply Job">03/07/2022</td>
                <td data-label="Company"><a className="view-btn" href="company-details.html">Tech.Bath Com... </a></td>
                <td data-label="Status"><button className="eg-btn purple-btn">Viewed</button></td>
              </tr>
              <tr>
                <td data-label="Job Title">
                  <div className="company-info">
                    <div className="logo">
                      <img src="assets/images/bg/company-logo/company-02.png" alt="" />
                    </div>
                    <div className="company-details">
                      <div className="top">
                        <h6><a href="job-details.html">React JS Developer</a></h6>
                        <span><img src="assets/images/icon/calender2.svg" alt="" /> 1 days ago</span>
                      </div>
                      <ul>
                        <li><img src="assets/images/icon/location.svg" alt="" />Dhaka, Bangladesh</li>
                        <li>
                          <img src="assets/images/icon/arrow2.svg" alt="" />
                          <p><span className="title">Salary:</span> $80-$100 / <span className="time">Per Hour</span></p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </td>
                <td data-label="Apply Job">07/07/2022</td>
                <td data-label="Company"><a className="view-btn" href="company-details.html">Gangster Group</a></td>
                <td data-label="Status"><button className="eg-btn yellow-btn">Interview</button></td>
              </tr>
              <tr>
                <td data-label="Job Title">
                  <div className="company-info">
                    <div className="logo">
                      <img src="assets/images/bg/company-logo/company-03.png" alt="" />
                    </div>
                    <div className="company-details">
                      <div className="top">
                        <h6><a href="job-details.html">WordPress Developer</a></h6>
                        <span><img src="assets/images/icon/calender2.svg" alt="" /> 2 days ago</span>
                      </div>
                      <ul>
                        <li><img src="assets/images/icon/location.svg" alt="" />West London, UK</li>
                        <li>
                          <img src="assets/images/icon/arrow2.svg" alt="" />
                          <p><span className="title">Salary:</span> $30K-$40K / <span className="time">Monthly</span></p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </td>
                <td data-label="Apply Job">10/07/2022</td>
                <td data-label="Company"><a className="view-btn" href="company-details.html">Zoomly.Co Ltd</a></td>
                <td data-label="Status"><button className="eg-btn orenge-btn">Canceled</button></td>
              </tr>
              <tr>
                <td data-label="Job Title">
                  <div className="company-info">
                    <div className="logo">
                      <img src="assets/images/bg/company-logo/company-04.png" alt="" />
                    </div>
                    <div className="company-details">
                      <div className="top">
                        <h6><a href="job-details.html">Mern-Stack Developer</a></h6>
                        <span><img src="assets/images/icon/calender2.svg" alt="" /> 1 week ago</span>
                      </div>
                      <ul>
                        <li><img src="assets/images/icon/location.svg" alt="" />New-York, USA</li>
                        <li>
                          <img src="assets/images/icon/arrow2.svg" alt="" />
                          <p><span className="title">Salary:</span> $20-$50 / <span className="time">Per Hour</span></p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </td>
                <td data-label="Apply Job">13/07/2022</td>
                <td data-label="Company"><a className="view-btn" href="company-details.html">Marko-land Ltd</a></td>
                <td data-label="Status"><button className="eg-btn purple-btn">Viewed</button></td>
              </tr>
              <tr>
                <td data-label="Job Title">
                  <div className="company-info">
                    <div className="logo">
                      <img src="assets/images/bg/company-logo/company-05.png" alt="" />
                    </div>
                    <div className="company-details">
                      <div className="top">
                        <h6><a href="job-details.html">PHP Developer</a></h6>
                        <span><img src="assets/images/icon/calender2.svg" alt="" /> 2 week ago</span>
                      </div>
                      <ul>
                        <li><img src="assets/images/icon/location.svg" alt="" />New-York, USA</li>
                        <li>
                          <img src="assets/images/icon/arrow2.svg" alt="" />
                          <p><span className="title">Salary:</span> $40K-$60K / <span className="time">Per Month</span></p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </td>
                <td data-label="Apply Job">18/08/2022</td>
                <td data-label="Company"><a className="view-btn" href="company-details.html">Bistro.Tech Group</a></td>
                <td data-label="Status"><button className="eg-btn green-btn">Success</button></td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>

    </div>
  )
}

export default Dashboard