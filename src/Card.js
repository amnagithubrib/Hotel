import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Image } from 'react-bootstrap';
import inroom from "./images/inroom.jpg";
import service from "./images/service.jpg";
import vip from "./images/vip.jpg";
import pool from "./images/pool.jpg";
import "./Style.css";


function Card() {
  return (
    <Container fluid style={{backgroundColor:"black"}}>
      <Row>
        <Col >
        <div className = "head-text">
        <div className = "head-image">
        <Image className='imag' src={service} alt="card3"></Image>
        </div>
        <div class='text-on-image'>
          <h5> ConciergeService</h5>
  </div>
      </div>

        </Col>
        <Col>
        <div className = "head-text">
        <div className = "head-image">
        <Image className='imag1' src={pool} alt="card2"></Image>
        </div>
        <div class='text-on-image'>
          <h5>  private pools</h5>
  </div>
      </div>
        </Col>
        <Col >
        <div className = "head-text">
        <div className = "head-image">
        <Image  className='imag' src={inroom} alt="card5"></Image>
        </div>
        <div class='text-on-image'>
          <h5>  In room Dining</h5>
  </div>
      </div>
 
       </Col>
        <Col>
        <div className = "head-text">
        <div className = "head-image">
        <Image  className='imag' src={vip} alt="card4"></Image>
        </div>
        <div class='text-on-image'>
          <h5>VIP Casino Entries</h5>
  </div>
      </div>

       </Col>
        <Col sm={2}></Col>
      </Row>
    </Container>
  );
}

export default Card;