import React, { Component } from 'react';
import { Link } from 'react-router';
// import axios from 'axios';

class Footer extends Component {
    render(){
        return(
            <div className='main-foot text-center'>
                <h6>Site Created By:</h6>
                <a target='_blank' href="www.evancallia.com"><h6>Evan Callia</h6></a>
                {/* <Link target='_blank' to='www.evancallia.com'><h6>Evan Callia</h6></Link> */}
                <h6>and</h6>
                <h6>Jeff Kwok</h6>
            </div>
        )
    }
}

export default Footer;
