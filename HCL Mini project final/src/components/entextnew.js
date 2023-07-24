import React from "react";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { Link } from "react-router-dom"

function EntryExitNew() {
  return (
    <div className="EntryExitNew">
      <ButtonGroup size="lg" className="mb-2 w-100" style={{top: 50,left:225}} >
       <div>
       <Link to="/entrydetails">
       <Button style={{ width: "400px", height: "500px", marginRight:70, fontSize: 70, backgroundImage:"https://images.unsplash.com/photo-1662010021854-e67c538ea7a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8MTV8fGNhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"}}>Entry</Button>
       </Link>
       <Link to="/exitdetails">
       <Button style={{ width: "400px", height: "500px", fontSize: 70}}>Exit</Button>
       </Link>
       </div>
      </ButtonGroup>
    </div>
  );
}

export default EntryExitNew;