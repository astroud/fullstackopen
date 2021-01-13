import React, { useState, useEffect } from 'react'
import FilterField from './Components/FilterField'
import Directory from './Components/Directory'
import PersonForm from './Components/PersonForm'
import peopleService from './services/people'

const App = () => {
  const [ people, setPeople ] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newPhone, setNewPhone ] = useState('')
  const [ filter, setNewFilter ] = useState('')

  useEffect(() => {
    peopleService
      .getAll()
      .then(initialPeople => { setPeople(initialPeople) })
  }, []);

  const clearFields = () => {
    setNewName('')
    setNewPhone('')
  }

  const duplicateName = (newName, savedNames) => {
    let filteredNames = savedNames.filter(
          savedName => savedName.name.toLowerCase() === newName.toLowerCase())
    return filteredNames.length === 0 ? false : true 
  }

  const addName = (event) => {
    event.preventDefault()
    const message = `${newName} is already in the phonebook, do you want to update the number?`

    if(duplicateName(newName, people)) {
      if(window.confirm(message)) {      
        const id = people
                    .filter(person => 
                      person.name.toLowerCase() === newName.toLowerCase()
                    )[0].id
                    
        peopleService
          .update(id, newName, newPhone)
          .then(returnedPerson => {
            setPeople(people.map(person => person.id !== id ? person : returnedPerson))
          })
      }
    }
    else {
      peopleService.add(newName, newPhone, people, setPeople)
        .then(people => setPeople(people))
      clearFields()
    }
  }

  const handlePersonChange = (event) => {
    setNewName(event.target.value)
  }

  const handlePhoneChange = (event) => {
    setNewPhone(event.target.value)
  }

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <FilterField handleFilterChange={handleFilterChange} />
      <PersonForm addName={addName}
                  newName={newName}
                  handlePersonChange={handlePersonChange}
                  newPhone={newPhone}
                  handlePhoneChange={handlePhoneChange}
                  title="Add a new entry"
      />
      <Directory  people={people}
                  setPeople={setPeople}
                  filter={filter}
                  title="Numbers"
      />
    </div>
  )
}

export default App