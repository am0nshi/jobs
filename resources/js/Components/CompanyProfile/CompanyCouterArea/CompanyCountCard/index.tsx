import React, { useRef } from 'react'
import CountUp from 'react-countup';
import { useInView } from "framer-motion"

export interface CompanyCountCardProps {
  title: string;
  count: number;
  classType?: string;
  srcIcon: string;
  duration?: number
}

const CompanyCountCard: React.FC<CompanyCountCardProps> = ({
  title,
  count,
  classType,
  srcIcon,
  duration = 1 }) => {

  const ref = useRef(null)
  const isInView = useInView(ref)

  return (
    <div className={`counter-single ${classType}`} ref={ref}>
      <div className="counter-icon">
        <img src={srcIcon} alt="image" />
      </div>
      <div className="coundown">
        <p> {title}</p>
        <div className="d-flex align-items-center">
          <h3 className="odometer">

            {isInView
              ?
              <CountUp
                end={count}
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
  )
}

export default CompanyCountCard