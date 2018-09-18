import axios from 'axios'
import {
  GET_TODOS
} from '../constants'

const BASE_URL = 'http://localhost:8000'

const getTodos = () => {
  return (dispatch) => {
    axios.get(`${BASE_URL}/api/todos`)
    .then( ({data}) => {
      dispatch({
        type:GET_TODOS,
        data
      })
    })
    .catch((error) => {
      console.log(error)
    })
  }
}

export default {
  getTodos
}
