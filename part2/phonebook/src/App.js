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

  const duplicateName = (newName, savedNames) => {
    let filteredNames = savedNames.filter(
          savedName => savedName.name === newName)
    return filteredNames.length === 0 ? false : true 
  }

  const addName = (event) => {
    event.preventDefault()
    if(duplicateName(newName, people)) {
      alert(`${newName} is already in the phonebook`)
    }
    else {
      peopleService.add(newName, newPhone, people, setPeople)
        .then(people => setPeople(people))
      setNewName('')
      setNewPhone('')
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