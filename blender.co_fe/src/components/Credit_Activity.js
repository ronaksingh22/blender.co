import React from 'react';
import * as ReactBootStrap from "react-bootstrap";

function Credit_Activity() {
    const table = [
        {Date: "9/08/21", Activity: "PAID LOAN TO AAVE", Impact: "+5"},
        {Date: "6/03/21", Activity: "2 YEAR ANNIVERSARY", Impact: "+10"},
        {Date: "1/23/21", Activity: "ADDED FUNDS", Impact: "+5"}, 
        {Date: "8/11/20", Activity: "ADDED FUNDS", Impact: "+5"}, 
        {Date: "6/18/20", Activity: "TRANSFERRED FUNDS", Impact: "-2"}, 
        {Date: "6/03/20", Activity: "1 YEAR ANNIVERSARY", Impact: "+10"},
        {Date: "5/14/20", Activity: "ADDED FUNDS", Impact: "+3" }, 
        {Date: "4/12/20", Activity: "TRANSFERRED FUNDS", Impact: "-1" }, 
        {Date: "6/04/19", Activity: "ADDED FUNDS", Impact: "+7" }, 
        {Date: "6/03/19", Activity: "CREATED ACCOUNT", Impact: "+20" }, 
    ]

    const renderTrans = (table, index) =>{
        return(
            <tr key={index}>
                <td>{table.Date}</td>
                <td>{table.Activity}</td>
                <td>{table.Impact}</td>
            </tr>

        )

    }

    return (

        <div className="App">

            <ReactBootStrap.Table striped bordered hover size="sm">
  <thead>
    <tr> 
      <th>Date</th>
      <th>Activity</th>
      <th>Impact to Credit Score</th>
    </tr>
  </thead>
  <tbody>
        {table.map(renderTrans)}
  </tbody>
</ReactBootStrap.Table>

        </div>
    );
}

export default Credit_Activity;