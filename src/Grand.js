import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./Style.css";


function Grand() {
  return (
    <Container  fluid style={{backgroundColor:"black",paddingTop:100}}>
      <Row>
      <Col sm={2}></Col>
      <Col sm={5}> <h3 className='dive'>Dive into Ultimate Luxury at</h3>
      <h2 className='ceaser'>The Caeser Grand </h2>
      <p className='lorem'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
<button className='bttn'>Make Reservation</button>
      </Col>
      <Col sm={5}></Col>
      </Row>
    </Container>
  );
}

export default Grand;