import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Image } from 'react-bootstrap';
import logo from "./images/logo.svg";
import './Style.css';
function CollapsibleExample() {
  return (
  
    <Navbar  collapseOnSelect expand="lg" bg="black" variant="dark">
      <Container className='v'>
      <Image className='image1' src={logo} alt="logo"></Image>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/dinning">Dining</Nav.Link>
            <Nav.Link href="/accommodation">Accommodation</Nav.Link>
            <Nav.Link href="/facilities">Facilities & Amenities</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            <button className='make'>MAKE RESERVATION</button>
           
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
}

export default CollapsibleExample;