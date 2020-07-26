import React, { Component } from 'react'
import "./style.css";
export default class Search extends Component {
    render() {
        return (
            <div className="search">
            <form className="form-inline">
              <input
                className="form-control"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </form>
          </div>
        )
    }
}
