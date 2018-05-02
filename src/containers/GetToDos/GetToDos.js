import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'

import Post from '../../components/ToDo_Post/ToDo_Post';

import './GetToDos.css';

class GetToDos extends Component {
    state = {
        todos: []
    }

    componentDidMount() {
        axios.get('/todos')
            .then((data) => {
                const todo = data.data.todos
                const updatedTodos = todo.map((item) => {
                    return {
                        ...item
                    }
                });
                this.setState({ todos: updatedTodos });

            }).catch((e) => {
                console.log(e);
            });
    }

    selectToDoPost = (id) => {
        //to navigate withou <Link> in the post element

        //this.props.history.push({ pahtname: '/' + id });
    }


    render() {
        let posts = <p style={{ textAlign: 'center' }}>Something went wrong!</p>;
        if (!this.state.error) {
            posts = this.state.todos.map(post => {
                //console.log(post)
                return (<Link to={'/ToDos/' + post._id} key={post._id}>
                    <Post
                        title={post.text}
                        completed={post.completed}
                        clicked={() => this.selectToDoPost(post._id)}
                    />
                </Link>);
            });
        }


        return (
            <section className="GetToDos">
                {posts}
            </section>
        );




    }
}

export default GetToDos;