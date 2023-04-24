import Carousel from 'react-bootstrap/Carousel';
import pic9 from '../assets/pic9.png';
import pic7 from '../assets/pic7.png';
import pic8 from '../assets/pic8.png';
function Gallery() {
return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={pic9}
          alt="First slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={pic7}
          alt="Second slide"
        />

        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={pic8}
          alt="Third slide"
        />

        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
} 
export default  Gallery;