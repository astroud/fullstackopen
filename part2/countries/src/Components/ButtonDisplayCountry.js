import React from 'react'

const ButtonDisplayCountry = ({ country, setResults }) => {
  return(
    <button type="button"
            onClick={() => setResults([country])}>
      show
    </button>
  )
}

export default ButtonDisplayCountry