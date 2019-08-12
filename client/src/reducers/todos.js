import {
    GET_TODOS
} from '../actions/actionTypes';

export default function todos(state = [], {type,todos}) {
    switch (type) {
      case ON_TODO_ADDED:
        return [...todos]
        break;
      default:
        return state
    }
  }