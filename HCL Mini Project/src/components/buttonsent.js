import React from "react";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { Link } from "react-router-dom";

function Buttonsent() {
  return (
    <div>
      <ButtonGroup size="lg" className="mb-2 w-100" style={{top: 50,left:225}}>
      <Link to="/slotno">
        <Button  style={{ width: "400px", height: "500px", marginRight:70, fontSize: 70}}>2 Wheeler</Button>
        </Link>
        <Link to="/slotnoc">
        <Button  style={{ width: "400px", height: "500px", fontSize: 70}}>4 Wheeler</Button>
        </Link>
      </ButtonGroup>
    </div>
  );
}

export default Buttonsent;