import React from 'react';
import { Carousel, Row, Col, Button } from 'react-bootstrap';
import bgImages from '../../../resouces/images/backgroundImages/bgImages';
import './style.css';
import { Link } from 'react-router-dom'

function SliderImages() {
  //console.log(bgImages)
  return (
    <Carousel>
      {bgImages.map((item) => {
        return (
          <Carousel.Item key={item.alt}>
            <img className="d-block w-100" src={item.src} alt={item.alt} />
            <Carousel.Caption className="caption-pos">
              <span className="subheading titleColor">Welcome</span>
              <Row>
                <Col lg={{ span: 6, offset: 3 }}>
                  <h1>{item.title}</h1>
                </Col>
              </Row>

              <p>{item.content}</p>
              <Button variant="outline-light"><Link style={{ color: "white" }} to='/menu' variant="light">Order Now</Link></Button>
              <Button variant="outline-light"><Link style={{ color: "white" }} to='/menu' variant="light">View Menu</Link></Button>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}

export default SliderImages;
