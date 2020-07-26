import React, { Component } from 'react'
import Search from "../Search";
import "./style.css"
export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand navbar-light bg-light">
            <div className="navbar-collapse row" id="navbarNav">
              <Search/>
            </div>
          </nav>
        )
    }
}
