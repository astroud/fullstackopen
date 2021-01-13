import axios from 'axios'

const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const add = ( newName, newPhone, people) => {
  const request = axios
                    .post(baseUrl,
                          { name: newName, phone: newPhone })
  return request.then(response => people.concat(response.data))
}

const remove = (id, name, people, setPeople) => {
  const request = axios.delete(`${baseUrl}/${id}`)

  if(window.confirm(`Delete ${name}?`)) {
    request
      .then( () => {
        console.log('remove person from state here');
        setPeople(
          people.filter(person => person.id !== id)
        )
      })
      .catch(error => {
        alert(`'${name}' was already deleted from server`)
      })

  }
}

const peopleService = { getAll, add, remove }
export default peopleService