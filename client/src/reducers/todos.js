import { ON_TODO_ADDED } from '../actions/actionTypes';

const initialState = {
   todos : []
}

export default function todos(state = initialState, action) {
    switch (action.type) {
      case ON_TODO_ADDED:
        return {
          ...state,
          todos : action.payload.todos
        }
      default:
        return state
    }
  }