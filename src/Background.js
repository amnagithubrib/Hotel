import React from "react";
import "./Style.css";
import { Container } from "react-bootstrap";
import Col from 'react-bootstrap/Col';

const Background = () => {
  return (
    <div className="bg">
    <Container className="doss">
    <Col sm={8}> 
      <h2 className='ceaser'>An Escape from Reality</h2>
      <p className='lorem'>Quisque velit nisi, pretium ut lacinia in, 
      elementum id enim. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.
       Lorem elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo</p>
      </Col>
            </Container>   
    </div>
  
  )
}

export default Background;