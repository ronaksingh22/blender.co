import React from 'react';
import * as ReactBootStrap from "react-bootstrap";

function Profile() {
    const table = [
        {infoField: "Name", info: "Ronnie Singh"},
        {infoField: "Email", info: "ronakguliani24@gmail.com"},
        {infoField: "Address", info: "0xfb0c603e7d038974c1557a04a900ebad3933743d"}, 
        {infoField: "Funds", info: "4.324 ETH"}
    ]

    const renderTrans = (table, index) =>{
        return(
            <tr key={index}>
                <td>{table.infoField}</td>
                <td>{table.info}</td>
            </tr>
        )
    }

    return (

        <div className="App">

            <ReactBootStrap.Table striped bordered hover size="sm">
  <thead>
    <tr> 

    </tr>
  </thead>
  <tbody>
        {table.map(renderTrans)}
  </tbody>
</ReactBootStrap.Table>

        </div>
    );
}

export default Profile;