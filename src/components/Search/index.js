import React from 'react'
import "./style.css";
function Search({handleSearchChange}){
   
        return (
            <div className="search">
            <form className="form-inline">
              <input
                className="form-control"
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={e => handleSearchChange(e)}
              />
            </form>
          </div>
        )
    }


export default  Search