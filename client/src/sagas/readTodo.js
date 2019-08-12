import {take,put,call,fork} from 'redux-saga/effects'
import {eventChannel} from 'redux-saga'
import {
  GET_TODOS
  ,ADD_TODO_SUCCESS
  ,ADD_TODO_FAILRE
} from '../actions/actionTypes';

import  {
  onTodoAdded
} from '../actions/todoAction'
import {write} from './write'
import io from 'socket.io-client';

function connect() {
  const socket = io('http://localhost:4123/');
  return new Promise(resolve => {
    socket.on('connect', () => {
      resolve(socket);
      console.log("Socket connected");
    });
  });
}

function* read(socket) {
  const channel = yield call(subscribe, socket);
  while (true) {
    let action = yield take(channel);
    yield put(action);
  }
}

export function* subscribe(socket) {
  return new eventChannel(emit => {
    const update = todos => emit(onTodoAdded(todos))
    socket.on('get-todos', update)
    return () => {}
  })
}

export function* flow() {
  yield take(GET_TODOS)
  const socket = yield call(connect)
  yield fork(read, socket)
  yield fork(write, socket)
}