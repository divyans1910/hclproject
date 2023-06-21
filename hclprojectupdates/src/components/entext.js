import React from "react";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';


function EntryExit() {
  return (
    <div>
      <ButtonGroup size="lg" className="mb-2 w-100" style={{ top: 100,left:350}} >
       <div id="change">
       <a href="">
       <Button style={{ width: "400px", height: "500px", marginRight:70, fontSize: 70}}>Entry</Button>
       </a>
       <a href="">
        <Button style={{ width: "400px", height: "500px", fontSize: 70}}>Exit</Button>
        </a>
        </div>
      </ButtonGroup>
    </div>
  );
}

export default EntryExit;