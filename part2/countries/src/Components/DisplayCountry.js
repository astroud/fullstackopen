import React from 'react'

const DisplayCountry = ({country}) => {
  return(
    <>
      <h2>{country.name}</h2>
      <p>capital {country.capital}<br />
        population {country.population}</p>
      <h3>Language{country.languages.length === 1 ? '' : 's'}
      </h3>
      <ul>
        { country.languages.map( language => <li key={language.name}>{language.name}</li>) }
      </ul>
      <img src={country.flag} alt="{country.name}'s flag" width="200" />
    </>
    )
}

export default DisplayCountry