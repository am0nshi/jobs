const CompanyPlansPagination = () => {
  return (
    <div className="pagination-table-info">
      <div className="table-info">
        <span>06 Results Showing In 20 Jobs</span>
      </div>
      <div className="pagination-area">
        <nav aria-label="...">
          <ul className="pagination">
            <li className="page-item disabled"><a className="page-link" href="#" tabIndex={-1}></a>
            </li>
            <li className="page-item active" aria-current="page"><a className="page-link" href="#">01</a></li>
            <li className="page-item"><a className="page-link" href="#">02</a></li>
            <li className="page-item"><a className="page-link" href="#">03</a></li>
            <li className="page-item"><a className="page-link" href="#"></a></li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default CompanyPlansPagination