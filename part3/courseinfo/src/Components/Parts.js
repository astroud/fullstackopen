import React from 'react'

const Parts = ({ parts }) => {
  return (
    <ul>
      {parts.map(part => {
        return(
          <li key={part.id}>
          {part.name} {part.exercises}
          </li>
        )
      })}
    </ul>
  )
}

export default Parts