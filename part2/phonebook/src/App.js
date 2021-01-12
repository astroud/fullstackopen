import React, { useState, useEffect } from 'react'
import axios from 'axios'
import FilterField from './Components/FilterField'
import Directory from './Components/Directory'
import PersonForm from './Components/PersonForm'


const App = () => {
  const [ people, setPeople ] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newPhone, setNewPhone ] = useState('')
  const [ filter, setNewFilter ] = useState('')

  useEffect(() => {
    axios
    .get('http://localhost:3001/persons')
    .then(response => {
      setPeople(response.data);
    })
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
      axios
        .post('http://localhost:3001/persons', { name: newName, phone: newPhone })
        .then(response => {
          setPeople(people.concat(response.data));
          setNewName('')
          setNewPhone('')
        })
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
      <Directory people={people} filter={filter} title="Numbers"/>
    </div>
  )
}

export default App