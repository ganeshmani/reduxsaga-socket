import React from 'react';


const TodoListItem = (props) => {

    return(
        <div className="item" style={{marginTop : '10px', padding : '20px',borderStyle : 'solid',borderWidth : '2px'}}>
            <i className="map marker icon" ></i>
            <div className="content">
                <a className="header" >{props.title}</a>
            </div>
        </div>
    )


}

export default TodoListItem