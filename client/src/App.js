import React,{ useEffect } from 'react';
 
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import TodoInput from './components/TodoInput';

import { GET_TODOS } from './actions/actionTypes';

import { connect } from 'react-redux'
function App(props) {

  useEffect(() => {
      props.start();
  },[])

  return (
    <div className="App">
        <TodoInput />


    </div>
  );
}

const mapToState = state => ({
  todos : state.todos
})

const mapToDispatch = dipatch => ({
  start: () => dispatch({
    type: GET_TODOS
  })
})

export default connect(mapToState,mapToDispatch)(App);
