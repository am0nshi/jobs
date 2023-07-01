import List from "./List"
import ListSidebar from "./ListSidebar"


const ResumeList = () => {
    return (
        <div className="job-listing-area pt-120 mb-120 bg-white">
            <div className="container">
                <div className="row g-lg-4 gy-5">
                    <div className="col-lg-4 order-lg-1 order-2">
                        <ListSidebar />
                    </div>
                    <div className="col-lg-8 order-lg-2 order-1">
                        <List />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ResumeList
