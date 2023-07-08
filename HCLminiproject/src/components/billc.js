import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Billc() {
  return (
    <Card style={{ width: '30rem', marginLeft: 430, marginTop:35}}>
      <Card.Img variant="top" src="https://images.unsplash.com/photo-1494905998402-395d579af36f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60" />
      <Card.Body>
        <Card.Title>Pay Rs.40/-</Card.Title>
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

export default Billc;