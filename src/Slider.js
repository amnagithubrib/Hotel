import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import { Image } from 'react-bootstrap';
import slide1 from "./images/slide1.jpg";
import slide2 from "./images/slide2.jpg";
import slide3 from "./images/slide3.jpg";

function Slider() {
  return (
    <Container  fluid style={{backgroundColor:"black",paddingTop:100, paddingBottom:100}} >
    <Carousel  controls={false} indicators={false}>
      <Carousel.Item>
       <Image  className="block" src={slide1} alt="first slide"/>
      </Carousel.Item>
      <Carousel.Item>
        <Image className="block" src={slide2}  alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <Image className="block" src={slide3} alt="Third slide"/>
      </Carousel.Item>
    
    </Carousel>
    </Container>
  );
}
export default Slider;