import React from 'react'
import SearchIcon from "/public/assets/images/icon/search-icon.svg"
import InputSelect from '@/Components/InputSelect'

//option for InputSelect
const categoryOptions = {
  "Category": "Category",
  "UI/UX": "UI/UX",
  "Closed": "Closed",
}
const JobSearchArea = () => {
  return (
    <div className="job-search-area">
      <form>
        <div className="form-inner job-title">
          <input type="text" placeholder="What jobs are you looking for?" />
        </div>
        <InputSelect
          name="category"
          className='category w-[100%]'
          options={categoryOptions}
        />
        <div className="form-inner">
          <button type="submit" className="primry-btn-2 ">
            <img src={SearchIcon} alt="" />Search</button>
        </div>
      </form>
    </div>
  )
}

export default JobSearchArea