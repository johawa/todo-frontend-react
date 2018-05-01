import React, { Component } from 'react';
import axios from 'axios';

import './getUser.css';

class GetUser extends Component {
    state = {
        user: null
    }

    componentDidMount() {
        console.log(this.props);
        axios.get('/users/me')

            .then((data) => {
                this.setState({ user: data.data.email });
            }).catch((e) => {
                console.log(e);
            });
    }

    render() {
        return (
            this.state.user ?
                <div className="getUser">
                    <p>Hello: {this.state.user} </p>
                </div> :
                <div className="getUser">
                    <p>Loading...</p>
                </div>
        );
    }
}

export default GetUser;