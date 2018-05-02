import React, { Component } from 'react';
import axios from 'axios';

import './FullPost.css';

class FullPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            todo: []
        }
    }

    componentDidMount() {
        
        axios.get('/todos/' + this.state.id)
            .then((response) => {
                //console.log(response);
                const updatedTodos = response.data.todo;
                this.setState({ todo: updatedTodos });
            })
            .catch(e => console.log(e));

    }



    render() {
        let post = <p>Please select a Post!</p>;
        post = (
            <div className="FullPost">
                <h1>{this.state.todo.text}</h1>
                <p>Author : {this.state.todo._creator}</p>
                <div className="Edit">
                    <button className="Delete">Delete</button>
                </div>
            </div>

        );
        return post;
    }
}

export default FullPost;