import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Bill() {
  return (
    <Card style={{ width: '30rem', marginLeft: 430, marginTop:35}}>
      <Card.Img variant="top" src="https://images.unsplash.com/photo-1538895490524-0ded232a96d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2Nvb3RlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60" />
      <Card.Body>
        <Card.Title>Pay Rs.20/-</Card.Title>
        <Card.Text>
          We accept Cash, Card and UPI payments
        </Card.Text>
        <Link to="/success">
        <Button variant="primary">Payment Done</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default Bill;