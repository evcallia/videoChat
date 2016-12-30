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
            email: '',
            password: '',
        }
    }
    HandleLogin(e){
        e.preventDefault();
        console.log('verify info here');
        // TODO: use axios to verify information!
    }
    HandleChange(e){
        this.setState({
            [e.target.id]: e.target.value
        });
    }
    render() {
        return (
            <div>
                <NavigationBar log={false} reg={true}/>
                <LoginForm onLogin={(e) => this.HandleLogin(e)} email={this.state.email} password={this.state.password}
                    onChange={(e) => this.HandleChange(e)}/>
                <Footer />
            </div>
        );
    }
}

function LoginForm(props){
    return(
        <div className="container loginBody">
            <form className='form-horizontal' onSubmit={props.onLogin}>

                <div className="form-group">
                    <label className="control-label col-sm-3" htmlFor="email">Email:</label>
                    <div className="col-sm-5">
                        <input type="email" className="form-control" id="email" placeholder="Enter email" value={props.email} onChange={props.onChange}/>
                    </div>
                </div>
                <div className="form-group">
                    <label className="control-label col-sm-3" htmlFor="password">Password:</label>
                    <div className="col-sm-5">
                        <input type="password" className="form-control" id="password" placeholder="Enter password" value={props.password} onChange={props.onChange}/>
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-sm-offset-7 col-sm-2">
                        <button type="submit" className="btn btn-success">Login</button>
                    </div>
                </div>
            </form>
            <p>Dont have an account? Click <Link to='registration'>here</Link> to register!</p>
        </div>
    );
}

export default Login;
