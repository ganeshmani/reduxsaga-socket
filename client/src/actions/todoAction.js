import {
    ADD_TODO,
    ON_TODO_ADDED
} from './actionTypes';

export const addTodo = payload => {

    console.log("Add Todo",payload);
    return {
        type : ADD_TODO,
        payload
    }

}

export const onTodoAdded = payload => {
    console.log("on Todo Added",payload);
    return {
        type : ON_TODO_ADDED,
        payload
    }
}

