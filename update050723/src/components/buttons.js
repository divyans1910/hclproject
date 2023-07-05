import React from "react";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

function SizesExample() {
  return (
    <div>
      <ButtonGroup size="lg" className="mb-2" style={{ top:100,left:100}}>
        <Button  style={{ width: "400px", height: "500px", marginRight:70, fontSize: 70}}>2 Wheeler</Button>
        <Button  style={{ width: "400px", height: "500px", marginRight:70, fontSize: 70}}>3 Wheeler</Button>
        <Button  style={{ width: "400px", height: "500px", marginRight:70, fontSize: 70}}>4 Wheeler</Button>
      </ButtonGroup>
    </div>
  );
}

export default SizesExample;