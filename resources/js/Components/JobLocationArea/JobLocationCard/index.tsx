import React from 'react'
export interface JobLocationCardProps {
  isPopular?: boolean;
  location: string;
  locationSrc: string;
  jobCount: number;

}
const JobLocationCard: React.FC<JobLocationCardProps> = ({
  isPopular,
  location,
  locationSrc,
  jobCount,
}) => {
  return (
    <div className="location-wrap">
      <img className="img-fluid" src={locationSrc} alt="" />
      <div className="location-content-wrap">
        {
          isPopular ?
            <div className="batch">
              <span>Popular</span>
            </div>
            :
            null
        }
        <div className="location-content">
          <h4><a href="job-listing1.html">{location}</a></h4>
          <p>Job Available: <span>{jobCount}</span></p>
        </div>
      </div>
    </div>
  )
}

export default JobLocationCard