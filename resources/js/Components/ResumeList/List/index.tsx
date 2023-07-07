import {ReactNode} from 'react'
import ListingCard from './ListingCard'
import ListTopbar from './ListTopbar'

const List = ({children} :{children: ReactNode}) => {
    return (
        <div className="job-listing-wrrap">
            <ListTopbar />
            <div className="row ">
               {children}
                <div className="col-lg-12 d-flex justify-content-center">
                    <div className="pagination-area">
                        <nav aria-label="...">
                            <ul className="pagination">
                                <li className="page-item disabled"><a className="page-link" href="#" tabIndex={-1}></a></li>
                                <li className="page-item active" aria-current="page"><a className="page-link" href="#">01</a></li>
                                <li className="page-item"><a className="page-link" href="#">02</a></li>
                                <li className="page-item"><a className="page-link" href="#">03</a></li>
                                <li className="page-item"><a className="page-link" href="#"></a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default List
