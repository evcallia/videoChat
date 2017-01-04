import React, { Component } from 'react';
import { Link } from 'react-router';
import axios from 'axios';

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
            passwordConfirmation: '',
            errors: []
        }
    }
    HandleRegistration(e){
        e.preventDefault();
        axios.post('/users', this.state)
            .then(function(response){
                if(response.data.errors){
                // errors(response.data.errors);
                console.log("errors:", response.data.errors);
                this.setState({
                    errors: response.data.errors
                });
                }else{
                    //using cookies
                    // $c.put('user_id', response.data._id);
                    // user = data.data;
                    // success(user);
                    console.log('success');
                }
            }.bind(this))
            .catch(function(error){
                console.log(error);
            });
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
                    onChange={(e) => this.HandleChange(e)}
                    errors={this.state.errors}/>
                <Footer />
            </div>
        );
    }
}

function LoginForm(props){
    var inputs = [];
    if('firstName' in props.errors){
        inputs.push(
            <div className="form-group has-danger" key='1'>
                <label className="control-label col-sm-3" htmlFor="firstName">First Name:</label>
                <div className="col-sm-5">
                    <input onChange={props.onChange} value={props.firstName} type="firstName" className="form-control" id="firstName" placeholder="Enter First Name" />
                </div>
                <div className="form-control-feedback">{props.errors.firstName.message}</div>
            </div>
        )
    }else{
        inputs.push(
            <div className="form-group" key='1'>
                <label className="control-label col-sm-3" htmlFor="firstName">First Name:</label>
                <div className="col-sm-5">
                    <input onChange={props.onChange} value={props.firstName} type="firstName" className="form-control" id="firstName" placeholder="Enter First Name" />
                </div>
            </div>
        )
    }
    if('lastName' in props.errors){
        inputs.push(
            <div className="form-group has-danger" key='2'>
                <label className="control-label col-sm-3" htmlFor="lastName">Last Name:</label>
                <div className="col-sm-5">
                    <input onChange={props.onChange} value={props.lastName} type="lastName" className="form-control" id="lastName" placeholder="Enter Last Name" />
                </div>
                <div className="form-control-feedback">{props.errors.lastName.message}</div>
            </div>
        )
    }else{
        inputs.push(
            <div className="form-group" key='2'>
                <label className="control-label col-sm-3" htmlFor="lastName">Last Name:</label>
                <div className="col-sm-5">
                    <input onChange={props.onChange} value={props.lastName} type="lastName" className="form-control" id="lastName" placeholder="Enter Last Name" />
                </div>
            </div>
        )
    }
    if('email' in props.errors){
        inputs.push(
            <div className="form-group has-danger" key='3'>
                <label className="control-label col-sm-3" htmlFor="email">Email:</label>
                <div className="col-sm-5">
                    <input onChange={props.onChange} value={props.email} type="email" className="form-control" id="email" placeholder="Enter email" />
                </div>
                <div className="form-control-feedback">{props.errors.email.message}</div>
            </div>
        )
    }else{
        inputs.push(
            <div className="form-group" key='3'>
                <label className="control-label col-sm-3" htmlFor="email">Email:</label>
                <div className="col-sm-5">
                    <input onChange={props.onChange} value={props.email} type="email" className="form-control" id="email" placeholder="Enter email" />
                </div>
            </div>
        )
    }
    if('password' in props.errors){
        inputs.push(
            <div className="form-group has-danger" key='4'>
                <label className="control-label col-sm-3" htmlFor="password">Password:</label>
                <div className="col-sm-5">
                    <input onChange={props.onChange} value={props.password} type="password" className="form-control" id="password" placeholder="Enter Password"/>
                </div>
                <div className="form-control-feedback">{props.errors.password.message}</div>
            </div>
        )
    }else{
        inputs.push(
            <div className="form-group" key='4'>
                <label className="control-label col-sm-3" htmlFor="password">Password:</label>
                <div className="col-sm-5">
                    <input onChange={props.onChange} value={props.password} type="password" className="form-control" id="password" placeholder="Enter Password"/>
                </div>
            </div>
        )
    }
    if('passwordConfirmation' in props.errors){
        inputs.push(
            <div className="form-group has-danger" key='5'>
                <label className="control-label col-sm-3" htmlFor="passwordConfirmation">Password Confirmation:</label>
                <div className="col-sm-5">
                    <input onChange={props.onChange} value={props.passwordConfirmation} type="password" className="form-control" id="passwordConfirmation" placeholder="Enter Password Confirmation"/>
                </div>
                <div className="form-control-feedback">{props.errors.passwordConfirmation.message}</div>
            </div>
        )
    }else{
        inputs.push(
            <div className="form-group" key='5'>
                <label className="control-label col-sm-3" htmlFor="passwordConfirmation">Password Confirmation:</label>
                <div className="col-sm-5">
                    <input onChange={props.onChange} value={props.passwordConfirmation} type="password" className="form-control" id="passwordConfirmation" placeholder="Enter Password Confirmation"/>
                </div>
            </div>
        )
    }
    inputs.push(
        <div className="form-group" key='6'>
            <div className="col-sm-offset-7 col-sm-2">
                <button type="submit" className="btn btn-success">Register</button>
            </div>
        </div>
    )
    inputs.push(
        <div className="form-group has-danger" key='7'>
            <label className="form-control-label" htmlFor="inputDanger1">Input with danger</label>
            <input type="text" className="form-control form-control-danger" id="inputDanger1"/>
            <div className="form-control-feedback">Sorry, that username's taken. Try another?</div>
            <small className="form-text text-muted">Example help text that remains unchanged.</small>
        </div>
    )

    return(
        <div className="container loginBody">
            <form className='form-horizontal' onSubmit={props.onRegistration}>
                {inputs}
                {/* <div className="form-group">
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
                </div> */}
            </form>
            <p>Have an account? Click <Link to='login'>here</Link> to login!</p>
        </div>
    );
}

export default Login;
