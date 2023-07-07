import React from "react";

const Error = () => {
    return (
        <>
            <div className="error-page">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="error-wrapper">
                                <div className="error-img">
                                    <img
                                        className="img-fluid"
                                        src="assets/images/bg/404.svg"
                                        alt=""
                                    />
                                </div>
                                <div className="error-content-area text-center">
                                    <h2>Opps... Page Not Found</h2>
                                    <p>
                                        Something went wrong, web page that is
                                        displayed to the user when the server
                                        cannot find the requested page.
                                    </p>
                                    <div className="error-btn">
                                        <a
                                            className="primry-btn-2 lg-btn "
                                            href="/"
                                        >
                                            Back Homepage
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            ;
        </>
    );
};

export default Error;
