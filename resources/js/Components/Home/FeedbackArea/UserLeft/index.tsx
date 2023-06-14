import { useInView } from 'framer-motion'
import { useRef, memo } from 'react'
import CountUp from 'react-countup'

//CountUp duration
const duration = 1;

const UserLeft = memo(() => {

  const ref = useRef(null)
  const isInView = useInView(ref)
  return (
    <div className="user-feedback-left" ref={ref}>
      <div className="section-title1">
        <h2>Our Users <span>Feedback</span></h2>
        <p>To choose your trending job dream & to make future bright.</p>
      </div>
      <div className="counter-area">
        <div className="row divider justify-content-center">
          <div className="col-sm-6 mb-60">
            <div className="counter-single">
              <div className="counter-icon">
                <img src="assets/images/icon/job2.svg" alt="image" />
              </div>
              <div className="coundown">
                <p>Live Jobs</p>
                <div className="d-flex align-items-center gap-2">
                  <h3 className="odometer">
                    {isInView
                      ?
                      <CountUp
                        end={20223}
                        duration={duration}
                      />
                      :
                      null
                    }
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 mb-60">
            <div className="counter-single two">
              <div className="counter-icon">
                <img src="assets/images/icon/companies.svg" alt="image" />
              </div>
              <div className="coundown">
                <p>Companies</p>
                <div className="d-flex align-items-center gap-2">
                  <h3 className="odometer">
                    {isInView
                      ?
                      <CountUp
                        end={803}
                        duration={duration}
                      />
                      :
                      null
                    }</h3>
                  <span>+</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 d-flex">
            <div className="counter-single three">
              <div className="counter-icon">
                <img src="assets/images/icon/candidates.svg" alt="image" />
              </div>
              <div className="coundown">
                <p>Candidates</p>
                <div className="d-flex align-items-center gap-2">
                  <h3 className="odometer">
                    {isInView
                      ?
                      <CountUp
                        end={500}
                        duration={duration}
                      />
                      :
                      null
                    }
                  </h3>
                  <span>+</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="counter-single four">
              <div className="counter-icon">
                <img src="assets/images/icon/new-jobs.svg" alt="image" />
              </div>
              <div className="coundown">
                <p>New Jobs</p>
                <div className="d-flex align-items-center gap-2">
                  <h3 className="odometer">
                    {isInView
                      ?
                      <CountUp
                        end={102}
                        duration={duration}
                      />
                      :
                      null
                    }
                  </h3>
                  <span>+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
})

export default UserLeft