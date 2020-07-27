import React from 'react'
import "./style.css"
import TableData from '../TableData'
 function Table(props) {
    return (
        <div>
        
        
         <table>
             <thead>
                 <tr>
                  {props.tableHeads.map((tableHead)=>{
                     console.log("test");
                  return<th key={tableHead.name}
                  onClick={()=>{
                    props.tableHeadSort()
                }}
                  
                  >{tableHead.name} </th>
                }

                )}


                 </tr>
             </thead>
                <TableData results={props.results}
                 
                />
         </table>
        </div>
    )
}

export default Table;