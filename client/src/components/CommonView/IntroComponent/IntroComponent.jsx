import React from 'react';
import bg3 from '../../../resouces/images/backgroundImages/bg_3.jpg';
import './IntroComponent.scss';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'
export default function IntroTest(intro) {
  return (
    <div>
      <div className="carousel-inner">
        <div className="carousel-item active"></div>
      </div>
      <div className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100 h-80" src={bg3} alt="First slide" />
          </div>
          <div className="carousel-caption justify-content-center d-none d-md-block">
            <h1 className="titleColor">{intro.introDetail.intro}</h1>
            <p className="breadcrumbs">
              <span className="mr-2">
                <Button variant="outline-light"><Link style={{ color: "white" }} to='/menu' variant="light">Order Now</Link></Button>
                <Button variant="outline-light"><Link style={{ color: "white" }} to='/menu' variant="light">View Menu</Link></Button>
              </span>{' '}

            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
