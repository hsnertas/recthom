import React from 'react'
import "./style.css"
 function Table(props) {
    return (
        <div>
         {console.log(props.tableHeads)}

         <table>
             <thead>
                 <tr>
                  {props.tableHeads.map(tableHead=>{
                     console.log("test");
                  return<th key={tableHead.name}>{tableHead.name}</th>

                                  
                  }

                  )}


                 </tr>
             </thead>
         </table>
        </div>
    )
}

export default Table;