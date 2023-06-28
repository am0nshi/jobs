

import JobPostForm from "./JobPostForm";


const JobPost = () => {


    return (<>
        <div className="inner-banner">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="banner-content text-center">
                            <h1>Post A Jobs</h1>
                            <span></span>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="/">Home</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">Post A Jobs</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <JobPostForm />
    </>)

}

export default JobPost
