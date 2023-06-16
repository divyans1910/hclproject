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
          <Card.Title>3 Wheeler</Card.Title>
          <Card.Text>
            <ul>
                <li>Flat Rate Rs. 30/-</li>
                <li>24/7 Security</li>
            </ul>
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