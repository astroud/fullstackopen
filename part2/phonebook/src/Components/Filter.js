import React from 'react'

const Filter = ({ handleFilterChange }) => {
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

export default Filter