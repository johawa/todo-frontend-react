import React from 'react';

import './ToDo_Post.css';

const post = (props) => (
    <article className="ToDo_Post" onClick={props.clicked}>
        <h1>{props.title}</h1>
        <div className="Info">           
             <div className="Author">{props.completed ? <p>completed</p> : <p>not completed</p>
             }</div> 
        </div>
    </article>
);

export default post;