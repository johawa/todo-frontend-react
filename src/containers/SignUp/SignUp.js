import React, { Component } from 'react';
import axios from 'axios';

import Input from '../../components/UI/Input/input';
import './SignUp.css';

class SignUp extends Component {
    state = {
        newUserEmail: null,
        newUserPsw: null,
    }
    
    GetInput() {
       console.log(this.state.newUserEmail);
    }

    SignUp() {
        axios({
            url: 'https://arcane-inlet-70554.herokuapp.com/users',
            method: 'POST',
            body: {
                'content-type': 'application/x-www-form-urlencoded',
                "email": this.state.newUserEmail,
                "password": this.state.newUserEmail
            }

        }).then((data) => {
            this.setState({ user: data.data.email });
        }).catch((e) => {
            console.log(e);
        });
    }

    render() {
        return (

            <div className="SignUp">
                <h1>Sign Up</h1>
                <form onSubmit={this.GetInput}>
                    <Input inputType="input" type="text" name="email" placeholder="email"/>
                    <Input inputType="input" type="password" name="password" placeholder="password"/>
                    <button type="submit">Submit</button>
                    </form>
                </div>

                );
            }
        }
        
export default SignUp;