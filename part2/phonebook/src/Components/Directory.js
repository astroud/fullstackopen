import React from 'react'
import peopleService from '../services/people'

const Directory = ({  people, setPeople, filter, title,
                      setIsError, setNotificationMsg, hideNotification }) => {
  const searchTerm = filter.toLowerCase()

  let filteredPeople = 
    people.filter(person =>
                  person.name.toLowerCase().includes(searchTerm))
  return(
    <>
      <h2>{title}</h2>
      <ul>
        {filteredPeople.map(person =>
          <li key={person.id}>
            {person.name} {person.number} 
            <button key={person.id}
                    onClick={() => {
                      peopleService.remove( person.id,
                                            person.name,
                                            people,
                                            setPeople,
                                            setIsError,
                                            setNotificationMsg,
                                            hideNotification )
                    }}
            >delete</button>
          </li>
        )}
      </ul>
    </>
  )
}

export default Directory