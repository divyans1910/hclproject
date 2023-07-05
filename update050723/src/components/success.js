import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Success() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="" />
      <Card.Body>
        <Card.Title>Payment Successful</Card.Title>
        <Card.Text>
          Thanks for visting, we await your next visit.
        </Card.Text>
        <Button variant="primary">Continue</Button>
      </Card.Body>
    </Card>
  );
}

export default Success;