import {channel} from 'redux-saga'
import {take,call,put,fork} from 'redux-saga/effects'
import {
  ADD_TODO
} from '../actions/actionTypes'

export function* write(socket) {

  while (true) {

    const {todo} = yield take(ADD_TODO)
    console.log("saga title",todo);
    socket.emit('insert-todo', todo.title)
  }
}