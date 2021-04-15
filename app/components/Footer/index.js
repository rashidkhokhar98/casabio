/**
 *
 * Footer
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function Footer() {
  return (
    <>
     <footer id="footer">
    <div className="container footer-bottom clearfix">
      <div className="copyright">
        © Copyright <strong><span>CASABIO</span></strong>. All Rights Reserved
      </div>
      <div className="credits">
        Designed by <a href="/">Cybill Tech</a>
      </div>
    </div>
  </footer>{/* End Footer */}
  <a href="#" className="back-to-top"><i className="ri-arrow-up-line" /></a>
  <div id="preloader" />
    </>
  );
}

Footer.propTypes = {};

export default Footer;
