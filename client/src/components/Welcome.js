import React, { Component } from 'react';
import { Link } from 'react-router';
// import axios from 'axios';

import NavigationBar from './NavigationBar';
import Footer from './Footer';

class Welcome extends Component {
    constructor(){
        super()
        // this.setState = this.setState.bind(this);
        this.state = {
            data: {}
        }
    }
    render() {
        return (
            <div>
                <NavigationBar log={true} reg={true}/>
                <Head />
                <Body />
                <Footer />
            </div>
        );
    }
}

function Head() {
    return(
        <div className='main-head parallax center-text parallax1'>
            <span className="block"><h1>Welcome To VideoChat</h1></span>
            <span className="block"><h2>A video calling and instant messaging application</h2></span>
            <span className="block">
                <button className='btn'>Find Out More</button>
                <Link to='registration'><button className='btn'>Sign Up</button></Link>
            </span>
        </div>
    )
}

function Body() {
    return(
        <div className="main-body">
            <div className="container">
                <div className="row">
                    <div className="center-text col-sm-6 col-xs-12">
                        <img className='main-icon' src="https://d30y9cdsu7xlg0.cloudfront.net/png/399380-200.png" alt="Video Chat Icon"/>
                        <h2>Video Calls</h2>
                        <p>Make UNLIMITED video calls for FREE!</p>
                    </div>
                    <div className="center-text col-sm-6 col-xs-12">
                        <img className='main-icon' src="http://icons.iconarchive.com/icons/icons8/windows-8/512/Messaging-Chat-icon.png" alt="Instant Messaging Icon"/>
                        <h2>Instant Messaging</h2>
                        <p>Instantly contact someone from wherever you are!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Welcome;
