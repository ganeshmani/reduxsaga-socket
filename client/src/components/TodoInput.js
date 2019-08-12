import React,{ useState } from 'react';
import { connect } from 'react-redux';
import  {
    ADD_TODO
} from '../actions/actionTypes';

const TodoInput = (props)  => {

    const [todo,setTodo] = useState('')

    const addTodo = () => {
        props.addTodo({
            title : todo
        })

        setTodo('')
    }

    return (
        <div className="ui center aligned container">
            <div className="ui fluid action input">
                <input type="text" value={todo} onChange = { (e) => setTodo(e.target.value) }  placeholder="Add Todo..." />
                <div className="ui button" onClick={ () => addTodo() }>Add</div>
            </div>
        </div>
    )
}

const mapToDispatch = dispatch => ({
    
    addTodo : todo => dispatch({
        type : ADD_TODO,
        todo
    })

})

export default connect(null,mapToDispatch)(TodoInput);