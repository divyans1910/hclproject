import React from "react";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { useLocation, useNavigate } from "react-router-dom";

function EntryExit() {
  const location = useLocation()
  return (
    <div className="EntryExit">
    <p style={{color:"grey"}}>Logged in as {location.state.id}</p>
      <ButtonGroup size="lg" className="mb-2 w-100" style={{top: 50,left:225}} >
       <div>
       <Button style={{ width: "400px", height: "500px", marginRight:70, fontSize: 70}}>Entry</Button>
       <Button style={{ width: "400px", height: "500px", fontSize: 70}}>Exit</Button>
       </div>
      </ButtonGroup>
    </div>
  );
}

export default EntryExit;