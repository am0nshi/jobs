import Filter from "./Filter"
import List from "./List"

const ResumeList = () => {
  return (
    <div className="container mt-[100px]">
      {/* wrap */}
      <div className="flex justify-around gap-10">
        {/* Filter */}
        <Filter />
        {/* List */}
        <List />
      </div>

    </div>
  )
}

export default ResumeList