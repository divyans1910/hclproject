import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Entrydetails() {
  return (
    <div style={{marginLeft: 500, marginTop: 250}}>
    <Form style={{ width: "500px"}}>
      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Vehicle Number</Form.Label>
        <Form.Control type="text" placeholder="Vehicle Number" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicNumber">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control type="number" placeholder="Phone Number" />
      </Form.Group>
      <a href="/">
      <Button variant="primary" type="submit">
        Submit
      </Button>
      </a>
    </Form>
    </div>
  );
}

export default Entrydetails;