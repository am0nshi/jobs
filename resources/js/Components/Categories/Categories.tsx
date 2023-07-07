import React from 'react'
import CategoriesRow from './CategoriesRow'

const Categories = () => {
  return (
    <div className="home4-category-area pt-120 mb-120" id="home4-category">
      <div className="container">
        <div className="row mb-60">
          <div className="col-12 d-flex flex-wrap align-items-end justify-content-md-between justify-content-start gap-3">
            <div className="section-title1">
              <h2>Jobs <span>Category</span> List</h2>
              <p>To choose your trending job dream &amp; to make future bright.</p>
            </div>
          </div>
        </div>
        <CategoriesRow />
      </div>
    </div>
  )
}

export default Categories