/**
 *
 * Hero
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function Hero() {
  return (
    <>
     <section id="hero" className="d-flex align-items-center">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1" data-aos="fade-up" data-aos-delay={200}>
          <h1>Better Solutions For Your Business</h1>
          <h2>We are team of talented people making websites with latest Tech.</h2>
          <div className="d-lg-flex">
            <a href="#portfolio" className="btn-get-started scrollto">Explore</a>
          </div>
        </div>
        <div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-in" data-aos-delay={200}>
        <img src="https://i.ibb.co/qpLqz3w/hero-img.png" className="img-fluid animated" alt="hero-img" border="0" />
        </div>
      </div>
    </div>
  </section>{/* End Hero */}
  
    </>
  );
}

Hero.propTypes = {};

export default Hero;
