import {channel} from 'redux-saga'
import {take,call,put,fork} from 'redux-saga/effects'
import {
  ADD_TODO
} from '../actions/actionTypes'

export function* write(socket) {

  while (true) {

    const {title} = yield take(ADD_TODO)

    socket.emit('insert-todo', title)
  }
}