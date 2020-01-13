import React, { Component } from 'react';
import {Carousel} from 'react-bootstrap';
import ph2 from '../../assets/img/2.JPG';
import ph3 from '../../assets/img/3.JPG';

class Carousel1 extends Component {
    render() {
        return (
            <div>
                <Carousel>
  <Carousel.Item >
    <img
      className="d-block w-100"
      src={ph3}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item >
    <img
      className="d-block w-100"
      src={ph2}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item >
    <img
      className="d-block w-100"
      src={ph3}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
                
            </div>
        );
    }
}

export default Carousel1;