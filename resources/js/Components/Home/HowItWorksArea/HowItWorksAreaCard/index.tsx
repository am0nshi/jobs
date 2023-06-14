import React, { ReactElement } from 'react'
export interface HowItWorksAreaCardProps {
  ComponentSvg: ReactElement;
  title: string;
  text: string;
}
const HowItWorksAreaCard: React.FC<HowItWorksAreaCardProps> = ({
  ComponentSvg,
  title,
  text
}) => {
  return (
    <div className="single-work-area">
      {ComponentSvg}
      <div className="content">
        <h5><a href="register.html">{title}</a></h5>
        <p>{text}</p>
      </div>
    </div>
  )
}

export default HowItWorksAreaCard