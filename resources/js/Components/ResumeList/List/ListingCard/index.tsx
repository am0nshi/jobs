import Expand from '@/Components/Expand'
import React, { ReactNode } from 'react'
import { Button } from 'primereact/button';
export interface ListingCardProps {
  jobPosition: string;
  company: string;
  salaryAmount: string;
  salaryType: string;
  ExpandNode: ReactNode;
  jobType: Array<string>;
}
const ListingCard: React.FC<ListingCardProps> = ({
  jobPosition,
  company,
  salaryAmount,
  salaryType,
  ExpandNode,
  jobType
}) => {
  return (
    <div className="job-listing-card">
      <div className="job-top">
        <div className="job-list-content">
          <div className="company-area">
            <div className="company-details">
              <div className="name-location">
                <h5><a href="job-details.html">{jobPosition}</a></h5>
                <p><a href="company-details.html">{company}</a></p>
              </div>
            </div>
          </div>
          <div className="job-discription">
            <ul>
              <li>
                <p><span className="title">Salary:</span> {salaryAmount}/ <span className="time">{salaryType}</span></p>
              </li>
            </ul>
          </div>
        </div>
        <div className="bookmark">
          <i className="bi bi-bookmark-fill"></i>
        </div>
      </div>
      <div>
        {ExpandNode && (
          <Expand>
            {ExpandNode}
          </Expand>
        )}
      </div>
      <div className="job-type-apply">
        <div className="job-type">
          {jobType.map((item, index) => {
            return (
              <span className="light-green" key={index}>{item}</span>
            )
          })}
        </div>
        <div>
          <Button label="Download" link icon="pi pi-download" style={{ color: "#00A7AC" }} />
        </div>
      </div>
    </div>
  )
}

export default ListingCard