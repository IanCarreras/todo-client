import {
  GET_TODOS
} from '../constants'

const defaultState = {
  allTodos: []
}

export default (state=defaultState, action) => {

  switch (action.type) {
    case GET_TODOS:
      return Object.assign(state, { allTodos: action.data })
    default:
      return state
  }
}
