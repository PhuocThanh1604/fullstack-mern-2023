import Carousel from 'react-bootstrap/Carousel';

function DarkVariantExample() {
  return (
    <Carousel variant="dark">
      <Carousel.Item>
        <img
          width={900}
          height={500}
          className="d-block  w-100"
          src="https://i.graphicmama.com/blog/wp-content/uploads/2019/06/28130634/How-to-Design-Your-Own-T-shirt.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          {/* <h5>First slide label</h5> */}
          {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          width={900}
          height={500}
          className="d-block  w-100"
          src="https://www.gentlemansgazette.com/wp-content/uploads/2018/06/Screen-Shot-2018-06-22-at-10.58.05-AM.png"
          alt="Second slide"
        />
        <Carousel.Caption>
          {/* <h5>Second slide label</h5> */}
          {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          width={800}
          height={500}
          className="d-block w-100"
          src="https://blog.bonfire.com/wp-content/uploads/2023/01/Wavy-Wording-B-1504x782.png"
          alt="Third slide"
        />
        <Carousel.Caption>
          {/* <h5>Third slide label</h5> */}
          {/* <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default DarkVariantExample;
