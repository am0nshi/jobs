
import CategoriesCard from './CategoriesCard'
import CategoryIcon from "/public/assets/images/bg/home4-category-02.png" 
const CategoriesRow = () => {
    return (
        <div className="row row-cols-xxl-5 row-cols-xl-4 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1 g-4 cf justify-content-center">
            <div className="col">
                <CategoriesCard 
                title="Marketing & Sales" 
                amoutAvailable={50} 
                srcImg={CategoryIcon}
                href=""
                />
            </div>
            <div className="col">
            <CategoriesCard 
                title="Marketing & Sales" 
                amoutAvailable={50} 
                srcImg={CategoryIcon}
                href=""
                />
            </div>
            <div className="col">
            <CategoriesCard 
                title="Marketing & Sales" 
                amoutAvailable={50} 
                srcImg={CategoryIcon}
                href=""
                />
            </div>
            <div className="col">
            <CategoriesCard 
                title="Marketing & Sales" 
                amoutAvailable={50} 
                srcImg={CategoryIcon}
                href=""
                />
            </div>
            <div className="col">
            <CategoriesCard 
                title="Marketing & Sales" 
                amoutAvailable={50} 
                srcImg={CategoryIcon}
                href=""
                />
            </div>
            <div className="col">
            <CategoriesCard 
                title="Marketing & Sales" 
                amoutAvailable={50} 
                srcImg={CategoryIcon}
                href=""
                />
            </div>
            <div className="col">
            <CategoriesCard 
                title="Marketing & Sales" 
                amoutAvailable={50} 
                srcImg={CategoryIcon}
                href=""
                />
            </div>
            <div className="col">
            <CategoriesCard 
                title="Marketing & Sales" 
                amoutAvailable={50} 
                srcImg={CategoryIcon}
                href=""
                />
            </div>
            <div className="col">
            <CategoriesCard 
                title="Marketing & Sales" 
                amoutAvailable={50} 
                srcImg={CategoryIcon}
                href=""
                />
            </div>
        </div>
    )
}

export default CategoriesRow