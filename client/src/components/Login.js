import React, { Component } from 'react';
import Link from 'react-router';
// import axios from 'axios';

import NavigationBar from './NavigationBar';

class Login extends Component {
    constructor(){
        super()
        // this.setState = this.setState.bind(this);
        this.state = {
            email: '',
            password: '',
        }
    }
    HandleLogin(){
        console.log('login');
    }
    render() {
        return (
            <div>
                <NavigationBar log={false} reg={true}/>
                <LoginForm onLogin={this.HandleLogin} email={this.state.email} password={this.state.password}/>
            </div>
        );
    }
}

function LoginForm(props){
    return(
        <form onSubmit={props.onLogin}>
            <label htmlFor="email">Email:</label>
            <input type="text" name='email' value={props.email}/>
            <label htmlFor="password">Password:</label>
            <input type="text" name='password' value={props.password}/>
            <input type="submit" value='Login'/>
        </form>
    );
}

export default Login;
