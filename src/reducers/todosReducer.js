import _ from 'lodash'
import {
  GET_TODOS
} from '../constants'

export default (state=[], action) => {
  let newState = null

  switch (action.type) {
    case GET_TODOS:
      newState = action.data
      return newState
    default:
      return state
  }
}
