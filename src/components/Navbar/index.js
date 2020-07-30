import React from 'react'
import Search from "../Search";
import "./style.css"
 function Navbar ({handleSearchChange}) {

        return (
            <nav className="navbar navbar-expand navbar-light bg-light">
            <div className="navbar-collapse row" id="navbarNav">
              <Search handleSearchChange={handleSearchChange}/>
            </div>
          </nav>
        )
    
}
export default  Navbar;