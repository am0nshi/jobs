import List from "./List"

const ResumeList = () => {
  return (
    <div className="container mt-[100px]">
      {/* wrap */}
      <div className="flex justify-around">
        {/* Filter */}
        <div className="flex flex-col items-center w-[35%]">
          1
        </div>
        {/* List */}
        <List />
      </div>

    </div>
  )
}

export default ResumeList