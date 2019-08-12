import React,{ useState,useEffect } from 'react';
import { connect } from 'react-redux'
import TodoListItem from './TodoListItem';
const TodoList = (props) => {


    return(
        <div className="ui center aligned container">
        <div className="ui list">
            {
                props.todos.map((item) => {

                    return(
                        <TodoListItem key={item._id} title = { item.title }/>
                    )

                })
            }
            

        </div>
        </div>
    )
}

const mapStateToProps = state => ({
    todos : state.todos.todos
})

export default connect(mapStateToProps,{})(TodoList);