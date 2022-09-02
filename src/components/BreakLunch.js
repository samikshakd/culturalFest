import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";

function BreakLunch() {
  const navigate = useNavigate();
  return (
    <CardGroup>
    <Card  style={{ width: '90rem', height:'10rem' }}>
      <Card.Img style={{height:'40rem'}} src="https://images.pexels.com/photos/4449068/pexels-photo-4449068.jpeg?auto=compress&cs=tinysrgb&w=600" />
      <Card.Body>
        <Card.Title>Card title</Card.Title>
        <Card.Text>
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </Card.Text>
        <Button variant="primary" onClick={() => navigate("/register")}>Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card>
      <Card.Img style={{height:'40rem'}} src="https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=600" />
      <Card.Body>
        <Card.Title>Card title</Card.Title>
        <Card.Text>
          This card has supporting text below as a natural lead-in to
          additional content.{' '}
        </Card.Text>
        <Button variant="primary" onClick={() => navigate("/register")}>Go somewhere</Button>
      </Card.Body>
     
    </Card>
    <Card>
      <Card.Img style={{height:'40rem'}} src="https://images.pexels.com/photos/13041629/pexels-photo-13041629.jpeg?auto=compress&cs=tinysrgb&w=600" />
      <Card.Body>
        <Card.Title>Card title</Card.Title>
        <Card.Text>
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This card has even longer content than the
          first to show that equal height action.
        </Card.Text>
        <Button variant="primary" onClick={() => navigate("/register")}>Go somewhere</Button>
      </Card.Body> 
    </Card>
  </CardGroup>
  
  );
}

export default BreakLunch;