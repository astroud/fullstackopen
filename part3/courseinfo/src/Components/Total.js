import React from 'react'

const Total = ({ parts }) => {
  const total = parts.reduce( (total, part) => total + part.exercises, 0);

  return(
    <p>Number of exercises {total}</p>
  ) 
}

export default Total