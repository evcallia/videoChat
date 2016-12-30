import React, { Component } from 'react';
import { Link } from 'react-router';
// import axios from 'axios';

import NavigationBar from './NavigationBar';
import Footer from './Footer';

class Login extends Component {
    constructor(){
        super()
        // this.setState = this.setState.bind(this);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            passwordConfirmation: ''
        }
    }
    HandleRegistration(e){
        e.preventDefault();
        console.log('register user here');
        // TODO: send axios req 
    }
    HandleChange(e){
        this.setState({
            [e.target.id]: e.target.value
        });
    }
    render() {
        return (
            <div>
                <NavigationBar log={true} reg={false}/>
                <LoginForm onRegistration={(e) => this.HandleRegistration(e)} firstName={this.state.firstName} lastName={this.state.lastName}
                    email={this.state.email}
                    password={this.state.password}
                    passwordConfirmation={this.state.passwordConfirmation}
                    onChange={(e) => this.HandleChange(e)}/>
                <Footer />
            </div>
        );
    }
}

function LoginForm(props){
    return(
        <div className="container loginBody">
            <form className='form-horizontal' onSubmit={props.onRegistration}>
                <div className="form-group">
                    <label className="control-label col-sm-3" htmlFor="firstName">First Name:</label>
                    <div className="col-sm-5">
                        <input onChange={props.onChange} value={props.firstName} type="firstName" className="form-control" id="firstName" placeholder="Enter First Name" />
                    </div>
                </div>
                <div className="form-group">
                    <label className="control-label col-sm-3" htmlFor="lastName">Last Name:</label>
                    <div className="col-sm-5">
                        <input onChange={props.onChange} value={props.lastName} type="lastName" className="form-control" id="lastName" placeholder="Enter Last Name" />
                    </div>
                </div>
                <div className="form-group">
                    <label className="control-label col-sm-3" htmlFor="email">Email:</label>
                    <div className="col-sm-5">
                        <input onChange={props.onChange} value={props.email} type="email" className="form-control" id="email" placeholder="Enter email" />
                    </div>
                </div>
                <div className="form-group">
                    <label className="control-label col-sm-3" htmlFor="password">Password:</label>
                    <div className="col-sm-5">
                        <input onChange={props.onChange} value={props.password} type="password" className="form-control" id="password" placeholder="Enter Password"/>
                    </div>
                </div>
                <div className="form-group">
                    <label className="control-label col-sm-3" htmlFor="passwordConfirmation">Password Confirmation:</label>
                    <div className="col-sm-5">
                        <input onChange={props.onChange} value={props.passwordConfirmation} type="password" className="form-control" id="passwordConfirmation" placeholder="Enter Password Confirmation"/>
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-sm-offset-7 col-sm-2">
                        <button type="submit" className="btn btn-success">Register</button>
                    </div>
                </div>
            </form>
            <p>Have an account? Click <Link to='login'>here</Link> to login!</p>
        </div>
    );
}

export default Login;
