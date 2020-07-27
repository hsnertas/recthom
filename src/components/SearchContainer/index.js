import React, { Component } from 'react';
import Navbar from "../Navbar";
import Table from "../Table";
import API from"../../utils/API"






export default class SearchContainer extends Component {
   constructor(props) {
       super(props);
       this.state = {
           results: [],
           order: "descend"
       }
       this.tableHeadSort = this.tableHeadSort();
   }
    tableHeadSort=()=>{
        (this.state.order === "descend") ? this.setState({order: "ascend"}) : this.setState({order: "descend"})
        console.log(this.state.order);
    }
        tableHeads = [
        { name: "Image"},
        { name: "Name"},
        { name: "Phone"},
        { name: "Email"},
        { name: "DOB"}
        ]


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
                <Table results={this.state.results}
                tableHeads={this.tableHeads}
                tableHeadSort={this.tableHeadSort}
                />
            </div>
        )
    }
}
