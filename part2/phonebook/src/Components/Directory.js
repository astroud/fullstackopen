import React from 'react'

const Directory = ({ people, filter, title }) => {
  const searchTerm = filter.toLowerCase()

  let filteredPeople = 
    people.filter(person =>
                  person.name.toLowerCase().includes(searchTerm))
  return(
    <>
      <h2>{title}</h2>
      <ul>
        {filteredPeople.map(person =>
          <li key={person.name}>{person.name} {person.phone}</li>
        )}
      </ul>
    </>
  )
}

export default Directory