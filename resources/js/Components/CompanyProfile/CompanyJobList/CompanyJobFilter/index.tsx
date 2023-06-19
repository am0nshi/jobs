//icons
import SearchIcon from "/public/assets/images/icon/search-2.svg"
import CalendarIcon from "/public/assets/images/icon/calender2.svg"

const CompanyJobFilter = () => {
  return (
    <div className="table-filter-area mb-30">
      <form>
        <div className="form-wrap style-2 style-3">
          <div className="form-inner">
            <div className="input-area">
              <img src={SearchIcon} alt="" />
              <input type="text" id="jobtitle" name="jobtitle" placeholder="Search by job title" />
            </div>
          </div>
          <button className="primry-btn-1" type="submit">Search</button>
        </div>

        <div className="form-wrap style-3">
          <div className="form-inner">
            <div className="input-area">
              <img src={CalendarIcon} alt="" />
              <input type="text" id="datepicker11" placeholder="Search by date" />
            </div>
          </div>
        </div>
        <div className="form-wrap">
          <div className="form-inner">
            <p>Show er page</p>
            <div className="select-area">
              <select className="select1">
                <option>05</option>
                <option>10</option>
                <option>15</option>
                <option>20</option>
              </select>
            </div>
          </div>
        </div>


      </form>
    </div>
  )
}

export default CompanyJobFilter