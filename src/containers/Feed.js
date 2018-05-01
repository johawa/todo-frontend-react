import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';

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
                            <li><NavLink to="/" exact>Home</NavLink></li>
                            <li><NavLink to="/Sign-Up">Sign Up</NavLink></li>
                            <li><NavLink to={{
                                pathname: '/Profile',
                                //pathname: this.props.match.url + 'Settings'
                                //to generata a relative path
                                hash: '123',
                                search: '?example123'
                            }}>Profile</NavLink></li>
                            <li><NavLink to="/ToDos">ToDos</NavLink></li>
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