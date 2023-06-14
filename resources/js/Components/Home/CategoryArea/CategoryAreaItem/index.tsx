import React, { ReactElement } from 'react'
export interface CategoryAreaItemProps {
  ComponentSvg: ReactElement;
  category: string;
  count: number
}
const CategoryAreaItem: React.FC<CategoryAreaItemProps> = ({ ComponentSvg, category, count }) => {
  return (
    <div className="col-xl-3 col-lg-4 col-sm-6">
      <div className="single-category2">
        {ComponentSvg}
        <div className="category-content">
          <h5><a href="job-listing1.html">{category}</a></h5>
          <p>Job Available: <span>{count}</span></p>
        </div>
      </div>
    </div>
  )
}

export default CategoryAreaItem