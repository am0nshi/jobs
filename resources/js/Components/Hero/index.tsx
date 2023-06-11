import BannerArea from "./BannerArea";
import JobSearchArea from "./JobSearchArea";
import SuggestedTag from "./SuggestedTag";

const Hero = () => {
  return (
    <>
      <div className="hero2">
        <div className="hero-wapper">
          <div className="container-fluid px-0">
            <div className="row">
              <div className="col-lg-7 d-flex align-items-center">
                <div className="hero-content">
                  <h1>To Choose Your Level Best <span>Dream Career.</span></h1>
                  <p><span>2400</span> Peoples are daily search in this portal, <span>100</span> user
                    added job portal!</p>
                  <JobSearchArea />
                  <SuggestedTag />
                </div>
              </div>
              <div className="col-lg-5 d-flex jsutify-content-end">
                <BannerArea />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Hero;