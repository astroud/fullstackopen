import React from 'react'

const Search = ({ handleForm, handleSubmit }) => {
  return(
    <form onSubmit={handleSubmit}>
      <label>find countries</label>
      <input
        id="searchField"
        onChange={handleForm}
        autoFocus={true}
      ></input>
    </form>
  )
}

export default Search