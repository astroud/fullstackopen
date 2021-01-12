import React, { useEffect } from 'react'
import axios from 'axios'

const DisplayCountry = ({ country, weather, setWeather }) => {
  const API_KEY = process.env.REACT_APP_API_KEY_WEATHER
  const getWeather = () => {
    axios
      .get(`http://api.weatherstack.com/current?access_key=${API_KEY}&query=${country.name},${country.capital}`)
      .then(response => {
        setWeather(response.data)
      })
    }

  useEffect( getWeather, [])

  if('current' in weather) {
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
        <h3>Weather in {country.capital}</h3>
        <p>Temperature: {weather.current.temperature}° Celsius</p>
        <img src={weather.current.weather_icons} alt="graphic indicating current weather" />
        <p>Wind:  {weather.current.wind_speed} km/hr direction &nbsp;
                  {weather.current.wind_dir}
        </p>
      </>
      )
  }

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