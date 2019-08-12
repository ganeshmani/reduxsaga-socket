import { fork } from "redux-saga/effects";
import read from './readTodo';

export default function* rootSaga() {
    fork(read);
}