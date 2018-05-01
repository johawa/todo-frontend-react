import React, { Component } from 'react';
import axios from 'axios';

import './GetToDos.css';

class GetToDos extends Component {
    state = {
        todo: null,
        done: null
    }

    componentDidMount() {
        axios.get('/todos')

            .then((data) => {
                
                this.setState({
                    todo: data.data.todos["1"].text,
                    done: data.data.todos["1"].completed ? "completed" : "not completed"
                });
            }).catch((e) => {
                console.log(e);
            });
    }

    render() {
        return (

            <div className="GetToDos">
                <ul></ul>
                <li>To-Dos |  Done?</li>
                <li>{this.state.todo} , {this.state.done} </li>

            </div>
        );
    }
}

export default GetToDos;