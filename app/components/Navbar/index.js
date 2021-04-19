/**
 *
 * Navbar
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function Navbar() {
  return (
    <>
  <header id="header" className="fixed-top ">
  <div className="container d-flex align-items-center">
  {/*<img src="https://i.ibb.co/zH7XBs1/logo.png" className="img-fluid" alt="logo" border="0" width="40" height="40"/>*/}
    <h1 className="logo mr-auto"><a href="/">casabio</a></h1>
    {/* Uncomment below if you prefer to use an image logo 
    {/* <a href="index.html" class="logo mr-auto"><img src="assets/img/logo.png" alt="" ></a>*/}
    <nav className="nav-menu d-none d-lg-block">
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#Blogs">Blogs</a></li>
        <li><a href="#Products">Services & Products</a></li>
        <li><a href="#about">Volunteering </a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>{/* .nav-menu */}
    <a href="/login" className="get-started-btn scrollto">Login</a>
  </div>
</header>{/* End Header */}
</>
  );
}

Navbar.propTypes = {};

export default Navbar;
