import React, { useState } from 'react'

const Directory = ({ people }) => {
  return(
    <ul>
      {people.map(person =>
        <li key={person.name}>{person.name}</li>
      )}
    </ul>
  )
}

const App = () => {
  const [ people, setPeople ] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')

  const addName = (event) => {
    event.preventDefault()
    console.log('setPeople should save:', newName)
    setPeople(people.concat({name: newName}))
  }

  const handlePersonChange = (event) => {
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input
                  value={newName}
                  onChange={handlePersonChange}
                />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <Directory people={people} />
    </div>
  )
}

export default App