import React from 'react'
import ButtonDisplayCountry from './ButtonDisplayCountry'
import DisplayCountry from "./DisplayCountry"

const DisplayCountries = ({ countries, setResults }) => {
  if (countries.length > 10) {
    return(<p>Too many matches, specifiy another filter</p>)
  }

  if (countries.length > 1) {
    return(
      <ul>
        {countries.map( country => {
          return(
            <li key={country.name+country.population.toString()}>
              {country.name} &nbsp;
              <ButtonDisplayCountry country={country}
                                    setResults={setResults} />
            </li>)
        })}
      </ul>
    )
  }

  if (countries.length === 1) {
    return(<DisplayCountry country={countries[0]}/>)
  }
  
  else {
    return(<p></p>)
  }
}

  export default DisplayCountries