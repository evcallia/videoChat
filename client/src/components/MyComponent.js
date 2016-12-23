import React, { Component } from 'react';
import axios from 'axios';

class SearchComponent extends Component {
    constructor(){
        super()
        // this.setState = this.setState.bind(this);
        this.state = {
            data: {}
        }
    }
    render() {
        return (
            <h1>Hello World</h1>
        );
    }
}

export default SearchComponent;
