import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import room from "./images/room.jpg";
import room1 from "./images/room1.jpg";
import think from "./images/think.jpg";
import drink from "./images/drink.jpg";
import "./Style.css";

function Grid() {
    return (
        <Container fluid style={{backgroundColor:"black",paddingTop:140}}> 
            <Row>
            <Col sm={1}></Col>
                <Col sm={4}><h6 className='textsize'>Luxury Privilleges</h6>
                <h1 className='textsize2'>Membership Benefits</h1>
                <h4 className='size2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus 
                nec ullamcorper mattis, pulvinar dapibus leo.</h4></Col>
                <Col sm={1}></Col>
                <Col sm={2} ><h3 className='sizee'>World-class Stay Benefits</h3>
                <p className='sizing'>Lorem ipsum dolor sit amet, consec tetur adipiscing. Ut elit 
                tellus, luctus nec nullam corper, pulvinar dapibus  leo.</p></Col>
                <Col><img className='imtt' src={room}></img></Col>
                <Col sm={1}></Col>
            </Row>
            <Row>
            <Col sm={1}></Col>
                <Col>
                <img className='imt' src={room1}   ></img>
                </Col>
                <Col style={{paddingTop:60}}><h1 className='sizeee'>Exclusive Casino Benefits</h1>
                <p  className='sizingg'>Lorem ipsum dolor sit amet, consec tetur adipiscing.
                 Ut elit tellus, luctus nec nullam corper, pulvinar dapibus leo.</p>
                 </Col>
                 <Col>
                 <img className='imt' src={think} style={{paddingTop:20}}></img>  
                 </Col>
                 <Col style={{paddingTop:60}}>
                    <h1 className='sizeee'>
                    Exclusive Lifestyle Voucher
                    </h1>
                    <p className='sizingg'>Lorem ipsum dolor sit amet, consec tetur adipiscing.
                     Ut elit tellus, luctus nec nullam corper, pulvinar dapibus leo. </p>
                 </Col>
                 <Col sm={1}></Col>
            </Row>
<Row>
<Col sm={1}></Col>
    <Col sm={2}>
        <h1 className='sizeee' style={{paddingTop:60}}>Complementary Wine Bottle</h1>
        <p className='sizingg'> Lorem ipsum dolor sit amet, consec tetur adipiscing. 
        Ut elit tellus, luctus nec nullam corper, pulvinar dapibus leo.</p>
    </Col>
    <Col sm={4}>
    <img className='imt' src={drink} style={{paddingTop:20}}  ></img>
    </Col>
    <Col sm={3}>
        <h1 className='textsize2' style={{paddingTop:60}}>More Benefits</h1>
        <h4 className='size2'> Quisque velit nisi, pretium ut lacinia in, elementum id enim.
         Curabitur non nulla sit amet
         nisl tempus convallis quis ac lectus. </h4>
         <br></br>
         <button className='bttn'>BECOME A MEMBER</button>
    </Col>
    <Col sm={1}></Col>


</Row>
        </Container>
    )
}

export default Grid