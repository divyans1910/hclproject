import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Success() {
  return (
    <Card style={{ width: '30rem', marginLeft: 430, marginTop:35}}>
      <Card.Img variant="top" src="https://img.freepik.com/free-vector/circle-tick-check-mark-paint-brush-stroke_78370-645.jpg?w=740&t=st=1688805783~exp=1688806383~hmac=8acbd675b8a8e6a87c1609e8e0ce8194b513fb562dfa71d6ab08398e09fc2a93" />
      <Card.Body>
        <Card.Title>Payment Successful</Card.Title>
        <Card.Text>
          Thanks for visting, we await your next visit.
        </Card.Text>
        <Link to="/entextnew">
        <Button variant="primary">Continue</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default Success;