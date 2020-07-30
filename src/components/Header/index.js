import React, { Component } from 'react';
import "./style.css"
export default class Navbar extends Component {
    render() {
        return (
            <div className="header">
            <h1>Employee Directory</h1>
            <p>Click on name header to rearrange alphabetically or use the search box to narrow your results</p>
           
          </div>
        )
    }
}
