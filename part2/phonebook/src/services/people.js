import axios from 'axios'

const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const add = ( newName, newPhone, people) => {
  const request = axios
                    .post('http://localhost:3001/persons',
                          { name: newName, phone: newPhone })
  return request.then(response => people.concat(response.data))
}


const peopleService = { getAll, add }
export default peopleService