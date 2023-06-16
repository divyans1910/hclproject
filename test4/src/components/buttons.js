import React from "react";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

function SizesExample() {
  return (
    <div>
      <ButtonGroup size="lg" className="mb-2">
        <Button>2 Wheeler</Button>
        <Button>3 Wheeler</Button>
        <Button>4 Wheeler</Button>
      </ButtonGroup>
    </div>
  );
}

export default SizesExample;