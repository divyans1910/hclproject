import React from "react";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function GroupExample() {
  return (
    <CardGroup>
      <Card>
        <Card.Body>
          <Card.Title>2 Wheeler</Card.Title>
          <Card.Text>
            <ul>
                <li>Flat Rate Rs. 20/-</li>
                <li>Lockers to store helmet, free of cost</li>
            </ul>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
          <Card.Title>About us</Card.Title>
          <Card.Text>
          A parking management system which is typically made for a <b>parking attendant</b> who has to ensure smooth and <b>fast flow of vehicles into a huge mall/lot.</b> 
          Key features includes a <b>simple UI for ease and speed of access</b>, and a <b>slot number</b> to make the system more uniform and consistent.
          <Card.Text>
          <i>
          Input: Vehicle Number ; Output: Slot Number
          </i> 
          </Card.Text>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
          <Card.Title>4 Wheeler</Card.Title>
          <Card.Text>
            <ul>
                <li>Flat Rate Rs. 40/-</li>
                <li>Parking Lights for ease of parking</li>
            </ul>
          </Card.Text>
        </Card.Body>
      </Card>
    </CardGroup>
  );
}

export default GroupExample;