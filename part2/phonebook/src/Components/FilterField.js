import React from 'react'

const FilterField = ({ handleFilterChange }) => {
  return(
    <>
      <form>
        <div>
          filter names by:
            <input onChange={handleFilterChange} />
      </div>
      </form>
    </>
  )
}

export default FilterField