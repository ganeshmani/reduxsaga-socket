import React,{ useEffect } from 'react';
 
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import TodoInput from './components/TodoInput';

import { GET_TODOS } from './actions/actionTypes';

import { connect } from 'react-redux'

import TodoList from './components/TodoList'
function App({start}) {

  useEffect(() => {
      start();
  },[start])

  return (
    <div className="App">
        <TodoInput />

        <TodoList />

    </div>
  );
}

const mapToState = state => ({
  todos : state.todos
})

const mapToDispatch = dispatch => ({
  start: () => dispatch({
    type: GET_TODOS
  })
})

export default connect(mapToState,mapToDispatch)(App);
