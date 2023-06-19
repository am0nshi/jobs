import React from 'react'
import CountUp from 'react-countup'
export interface CounterBlock {
  title: string,
  sectionName?: string,
  srcIcon: string;
  countAmount: number
}
const CounterBlock: React.FC<CounterBlock> = ({ title, sectionName, srcIcon, countAmount }) => {
  return (
    <div className="col-lg-3 col-sm-6">
      <div className={`counter-single ${sectionName}`}>
        <div className="counter-icon">
          <img src={srcIcon} alt="image" />
        </div>
        <div className="coundown">
          <p>{title}</p>
          <div className="d-flex align-items-center">
            <h3 className="odometer">
              <CountUp end={countAmount} duration={1.3} />
            </h3>
            <span>+</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CounterBlock