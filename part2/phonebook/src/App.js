import React, { useState } from 'react'
import FilterField from './Components/FilterField'

const Directory = ({ people, filter }) => {
  const searchTerm = filter.toLowerCase()

  let filteredPeople = 
    people.filter(person =>
                  person.name.toLowerCase().includes(searchTerm))
  return(
    <ul>
      {filteredPeople.map(person =>
        <li key={person.name}>{person.name} {person.phone}</li>
      )}
    </ul>
  )
}

const App = () => {
  const [people, setPeople] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [ newName, setNewName ] = useState('')
  const [ newPhone, setNewPhone ] = useState('')
  const [ filter, setNewFilter ] = useState('')

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
      setPeople(people.concat({name: newName, phone: newPhone}))
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
      <form onSubmit={addName}>
        <div>
          name: <input
                  value={newName}
                  onChange={handlePersonChange}
                  required={true}
                />
        </div>
        <div>
          number: <input
                  value={newPhone}
                  onChange={handlePhoneChange}
                  required={true}
                />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <Directory people={people} filter={filter} />
    </div>
  )
}

export default App