import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

import './Feed.css';
import GetUser from './GetUser/GetUser';
import SignUp from './SignUp/SignUp';



class Feed extends Component {
    render() {
        return (
            <div className="Feed">
                <header className="Feed-header">
                    <h1 className="Feed-title">TO - DO - APP</h1>
                    <nav>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/Sign-Up">Sign Up</a></li>
                            <li><a href="/">Profile</a></li>
                        </ul>
                    </nav>
                </header>

                <Route path="/" exact component={GetUser} />
                <Route path="/Sign-Up" component={SignUp} />

            </div>
        );
    }
}

export default Feed;