import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Full() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="" />
      <Card.Body>
        <Card.Title>Parking Full</Card.Title>
        <Card.Text>
          Sorry, Please Visit Again
        </Card.Text>
        <Button variant="danger">Continue</Button>
      </Card.Body>
    </Card>
  );
}

export default Full;