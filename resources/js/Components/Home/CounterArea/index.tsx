import React, { useRef, memo } from 'react'
import CountUp from 'react-countup';
import { useInView } from "framer-motion"
import CompaniesSvg from './CompaniesSvg';
import CandidatesSvg from './CandidatesSvg';
import NewJobsSvg from './NewJobsSvg';
import LiveJobsSvg from './LiveJobsSvg';

//CountUp duration
const duration = 1;

const CounterArea = memo(() => {

  const ref = useRef(null)
  const isInView = useInView(ref)

  return (
    <div className="counter-area home2-counter-area mb-80" ref={ref}>
      <div className="container">
        <div className="row g-lg-4 gy-5 justify-content-center">
          <div className="col-lg-3 col-sm-6 divider d-flex justify-content-center">
            <div className="counter-single">
              <LiveJobsSvg />
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
          <div className="col-lg-3 col-sm-6 divider d-flex justify-content-center">
            <div className="counter-single">
              <CompaniesSvg />
              <div className="coundown">
                <p>Companies</p>
                <div className="d-flex align-items-center gap-2">
                  <h3 className="odometer">
                    {isInView ? <CountUp end={802} duration={duration}
                    />
                      :
                      null
                    }
                  </h3 >
                  <span>+</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 divider d-flex justify-content-center">
            <div className="counter-single">
              <CandidatesSvg />
              <div className="coundown">
                <p>Candidates</p>
                <div className="d-flex align-items-center gap-2">
                  <h3 className="odometer">
                    {isInView ? <CountUp end={500} duration={duration}
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
          <div className="col-lg-3 col-sm-6 d-flex justify-content-center">
            <div className="counter-single">
              <NewJobsSvg />
              <div className="coundown">
                <p>New Jobs</p>
                <div className="d-flex align-items-center gap-2">
                  <h3 className="odometer">
                    {isInView ? <CountUp end={102} duration={duration} />
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

export default CounterArea