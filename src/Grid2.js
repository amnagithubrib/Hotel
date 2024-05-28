import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import wedding from "./images/wedding.jpg";
import conf from "./images/conf.jpg";
import club from "./images/club.webp";
function Grid2() {
    return (
        <Container fluid style={{backgroundColor:"black",paddingTop:50}}> 
        <h1 className='linee'>Ideal Venue For Any Event</h1>
        <p className='ll'>
        Quisque velit nisi, pretium ut lacinia in, elementum id enim.
        </p>
       <Row>
       <Col sm={2}></Col>
       <Col sm={2}><img className='imt' src={wedding}></img></Col>
       <Col sm={1}></Col>
       <Col sm={2}><h6 className='textsize2' style={{paddingTop:100}}>Parties</h6>
                <h4 className='size2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper
                 mattis, pulvinar dapibus leo.</h4></Col>
                 <Col sm={1}></Col>
                 <Col sm={2}><img className='imt' src={conf}></img></Col>
                 <Col sm={1}></Col>
       </Row>
       <Row>
       <Col sm={2}></Col>
       <Col sm={2}><h6 className='textsize2' style={{paddingTop:100}}>Weddings</h6>
                <h4 className='size2'>Lorem ipsum dolor sit amet, consectetur 
                adipiscing elit. Ut elit tellus,
                 luctus nec ullamcorper mattis, pulvinar dapibus leo.</h4></Col>
                 <Col sm={1}></Col>
       <Col sm={2}><img className='imt' src={club}></img></Col>
       <Col sm={1}></Col>
       <Col sm={2}><h6 className='textsize2' style={{paddingTop:100}}>Conference</h6>
                <h4 className='size2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
                 luctus nec ullamcorper mattis, pulvinar dapibus leo.</h4></Col>
                 <Col sm={1}></Col>
</Row>
<Row>
<Col>
        <h1 className='r' style={{paddingTop:60}}>
Your search for True Luxury ends here
</h1>
        <h4 className='size22'> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
         Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. <button className='book'>BOOK NOW</button></h4>
         <br></br>
         
    </Col>
    </Row>
        </Container>
    )
    }
export default Grid2
