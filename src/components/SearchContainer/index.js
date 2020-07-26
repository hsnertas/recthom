import React, { Component } from 'react';
import Navbar from "../Navbar";
import Table from "../Table";
import API from"../../utils/API"






export default class SearchContainer extends Component {
   
   
    state={
        results: []
    }

   componentDidMount (){
         API.search()
         .then(results => {
             this.setState({
                 results: results.data.results});
                 })
         .catch(err => console.log(err));
     
        }
   
   
    render() {
     
        return (
            <div>
                <Navbar></Navbar>
                <Table results={this.state.results}/>
            </div>
        )
    }
}
