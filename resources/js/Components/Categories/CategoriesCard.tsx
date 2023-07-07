import { Link } from "@inertiajs/react";

export interface CategoriesCardProps {
    title:string;
    amoutAvailable:number;
    srcImg:string;
    href:string;
}
const CategoriesCard: React.FC<CategoriesCardProps> = ({
    title,
    amoutAvailable,
    srcImg,
    href
}) => {
    return (
        <div className="job-category-card2">
            <div className="job-content-inner">
                <div className="cart-front">
                    <h5><Link href={href}>{title}</Link></h5>
                    <p>50 Jobs Available</p>
                    <div className="view-btn1">
                        <Link href="">View All Jobs</Link>
                    </div>
                </div>
                <div className="card-back">
                    <div className="category-img">
                        <img src={srcImg} alt="" />
                    </div>
                    <div className="category-content">
                        <h5><Link href={href}>Marketing & Sales</Link></h5>
                        <p>{amoutAvailable} Jobs Available</p>
                        <div className="view-btn1">
                            <Link href={href}>View All <i className="bi bi-arrow-right"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CategoriesCard