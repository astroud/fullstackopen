import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Search from './Components/Search'
import DisplayCountries from './Components/DisplayCountries'


function App() {
  const [ countries, setCountries ] = useState([])
  const [ results, setResults ] = useState([])
  const [ searchName, setSearchName ] = useState('')

  useEffect(() => {
    axios
    .get('https://restcountries.eu/rest/v2/all')
    .then(response => {
      setCountries(response.data)
    })
  }, []);

  const handleForm = (event) => {
    setSearchName(event.target.value)

    const filter = event.target.value.toLocaleLowerCase();
    
    setResults(countries.filter(country =>
      country.name.toLowerCase().includes(filter)))
  }

  const handleSubmit = (event) => { event.preventDefault() }

  return (
    <div className="App">
      <Search
        value={searchName}
        handleForm={handleForm}
        handleSubmit={handleSubmit}
        results={results}
        setResults={setResults}
      />

      <DisplayCountries countries={results} />
    </div>
  );
}

export default App;
