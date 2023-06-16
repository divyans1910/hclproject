import React from "react";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

function EntryExit() {
  return (
    <div id="entryandexit">
      <ButtonGroup size="xxl" className="mb-2">
        <Button>Entry</Button>
        <Button>Exit</Button>
      </ButtonGroup>
    </div>
  );
}

export default EntryExit;