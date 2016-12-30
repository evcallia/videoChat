import React, { Component } from 'react';
import { Link } from 'react-router';

//takes log and reg as a boolean value
//if log = true will put the login tab in the menu
//if reg = true will put the register tab in the menu
class NavigationBar extends Component {
    render() {
        var menuItems;
        if(this.props.log && this.props.reg){
            menuItems = <div className="collapse navbar-collapse" id="myNavbar">
                <ul className="nav navbar-nav navbar-right">
                    <li><Link to="/registration"><span className="glyphicon glyphicon-user"></span> Sign Up</Link></li>
                    <li><Link to="/login"><span className="glyphicon glyphicon-log-in"></span> Login</Link></li>
                </ul>
            </div>;
        }
        else if(this.props.log){
            menuItems = <div className="collapse navbar-collapse" id="myNavbar">
                <ul className="nav navbar-nav navbar-right">
                    <li><Link to="/login"><span className="glyphicon glyphicon-log-in"></span> Login</Link></li>
                </ul>
            </div>
        }else if(this.props.reg){
            menuItems = <div className="collapse navbar-collapse" id="myNavbar">
                <ul className="nav navbar-nav navbar-right">
                    <li><Link to="/registration"><span className="glyphicon glyphicon-user"></span> Sign Up</Link></li>
                </ul>
            </div>;
        }
        return (
            <nav className='navbar navbar-inverse navbar-fixed-top'>
                <div className='container-fluid'>
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                      </button>
                        <a className="navbar-brand" href="#">VideoChat</a>
                    </div>
                    {menuItems}
                </div>
            </nav>
        );
    }
}

export default NavigationBar;
