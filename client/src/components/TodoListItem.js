import React from 'react';


const TodoListItem = (props) => {

    return(
        <div className="item" style={{marginTop : '10px', padding : '20px',borderStyle : 'solid',borderWidth : '2px'}}>
            <i className="map marker icon" ></i>
            <div className="content">
                <span className="header">{props.title}</span>
            </div>
        </div>
    )


}

export default TodoListItem