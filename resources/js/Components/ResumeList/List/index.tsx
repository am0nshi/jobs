


import FilterList from './FilterList'
import Column from './Column'

const List = () => {
  return (
    <div className='flex flex-col gap-10 w-full'>
      <FilterList />
      <Column />
    </div>
  )
}

export default List