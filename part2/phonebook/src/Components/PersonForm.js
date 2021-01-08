import React from 'react'

const PersonForm = ({ addName, newName, handlePersonChange,
                  newPhone, handlePhoneChange, title }) => {
  return(
    <>
    <h2>{title}</h2>
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
    </>
  )
}

export default PersonForm