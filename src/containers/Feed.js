import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

import './Feed.css';
import GetUser from './GetUser/GetUser';
import SignUp from './SignUp/SignUp';
import GetToDos from './GetToDos/GetToDos';


class Feed extends Component {
    render() {
        return (
            <div className="Feed">
                <header className="Feed-header">
                    <h1 className="Feed-title">TO - DO - APP</h1>
                    <nav>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/Sign-Up">Sign Up</Link></li>
                            <li><Link to={{
                                pathname: '/Profile',
                                hash: '123',
                                search: '?example123'
                            }}>Profile</Link></li>
                            <li><Link to="/ToDos">ToDos</Link></li>
                        </ul>
                    </nav>
                </header>

                <Route path="/" exact render={() => <h1>Home</h1>} />
                <Route path="/Sign-Up" component={SignUp} />
                <Route path="/Profile" exact component={GetUser} />
                <Route path="/ToDos" exact component={GetToDos} />

            </div>
        );
    }
}

export default Feed;