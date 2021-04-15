/**
 *
 * BlogPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export function BlogPage() {
  return (
 <div>
   <Navbar />
  <main id="main" style={{minHeight: '1000px'}}>
    {/* ======= Breadcrumbs ======= */}
    <section id="breadcrumbs" className="breadcrumbs">
      <div className="container">
        <ol>
          <li><a href="/">Home</a></li>
          <li>Blog Details</li>
        </ol>
        <h2>Blog Details</h2>
      </div>
    </section>{/* End Breadcrumbs */}
    <section className="inner-page">
      <div className="container">
       
       <h1> What is Lorem Ipsum?</h1>
       <p>
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
      </div>
    </section>

    <div className="footer-newsletter mt-5">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-lg-6">
        <h4>Join Our Newsletter</h4>
        <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
      
        <form>
          <div >
          <input type="email" placeholder="enter email" name="email" className="col-lg-8" style={{border: '2px solid #37517e', borderRadius: '20px 0px 0px 20px' }} />
          <button type="submit" className="col-lg-4" style={{background: '#37517e',border: '2px solid #37517e', borderRadius: '0px 20px 20px 0px' }} > 
          Subscribe
          </button>
            </div>      
        </form>
        </div>
    </div>
  </div>
</div>
  </main>
  <Footer />
</div>
);
}

BlogPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(withConnect)(BlogPage);
