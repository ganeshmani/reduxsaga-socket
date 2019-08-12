import {
    ADD_TODO,
    ON_TODO_ADDED
} from './actionTypes';

export const addTodo = payload => {

    return {
        type : ADD_TODO,
        payload
    }
}

export const onTodoAdded = payload => {

    return {
        type : ON_TODO_ADDED,
        payload
    }
}

