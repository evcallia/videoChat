import React, { Component } from 'react';
import Link from 'react-router';
// import axios from 'axios';

import NavigationBar from './NavigationBar';

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
                <Foot />
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
                <button className='btn'>Sign Up</button>
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

function Foot(){
    return(
        <div className='main-foot text-center'>
            <h6>Site Created By:</h6>
            <a href="www.evancallia.com"><h6>Evan Callia</h6></a>
            {/* <Link to='www.evancallia.co'><h6>Evan Callia</h6></Link> */}
            <h6>and</h6>
            <h6>Jeff Kwok</h6>
        </div>
    )
}

export default Welcome;
