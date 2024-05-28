import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import card6 from "./images/card6.jpeg";
import card7 from "./images/card7.jpeg";
import card8 from "./images/card8.jpeg";
import card9 from "./images/card9.jpeg";
import card10 from "./images/card10.jpg";
import card11 from "./images/card11.jpeg";
import "./Style.css";
function Card2() {
    return (
        <Container fluid style={{backgroundColor:"black"}}>
                <h1 style={{paddingTop:100,color:"white",fontFamily:"DM Serif Display"}}>Every corner with a</h1>
      <h1 style={{color:"white",fontFamily:"DM Serif Display"}}>Luxury Touch</h1>
<p style={{color:"white",fontFamily:"Poppins, sans-serif"}}>Lorem elit tellus, 
luctus nec ullamcorper mattis, pulvinar dapibus leo. </p>
            <Row>
            <Col sm={1}></Col>
                <Col><img src={card11} className="w-100 shadow-1-strong rounded mb-4 shadow" alt="Boat on Calm Water" 
               
    />
     <img
      src={card7}
      className="w-100 shadow-1-strong rounded mb-4 shadow4 "
      alt="Yosemite National Park"
    /></Col>
    <Col><img src={card10} className="w-100 shadow-1-strong rounded mb-4 shadow2 " alt="Wintry Mountain Landscape" 
 />
  <img
      src={card6}
      className="w-100 shadow-1-strong rounded mb-4 shadow22"
      alt="Waves at Sea"
    />
 </Col>
<Col><img src={card9} className="w-100 shadow-1-strong rounded mb-4 shadow" alt="Mountains in the Clouds" 
/>
<img src={card8} className=" shadow-1-strong rounded mb-4 shadow4" alt="Boat on Calm Water" 
                /></Col>
                <Col sm={1}></Col>
            </Row>
       
        </Container>
    )
}

export default Card2