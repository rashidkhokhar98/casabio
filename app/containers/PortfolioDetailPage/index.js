/**
 *
 * PortfolioDetailPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export function PortfolioDetailPage() {
  return (
    <div>
      <Navbar />
   <main id="main" style={{minHeight: '1000px'}}>
  {/* ======= Breadcrumbs ======= */}
  <section id="breadcrumbs" className="breadcrumbs">
    <div className="container">
      <ol>
        <li><a href="/">Home</a></li>
        <li>Portfolio Detail</li>
      </ol>
      <h2>Portfolio Detail</h2>
    </div>
  </section>{/* End Breadcrumbs */}
  {/* ======= Portfolio Details Section ======= */}
  <section id="portfolio-details" className="portfolio-details">
    <div className="container">
      <div className="portfolio-details-container">
        <div className="owl-carousel portfolio-details-carousel">
          <img src="https://i.ibb.co/tYMkzsS/portfolio-2.jpg"  className="img-fluid" alt="portfolio-2" width="800px" height="800px" />
         
        </div>
        <div className="portfolio-info">
          <h3>Project information</h3>
          <ul>
            <li><strong>Category</strong>: Web design</li>
            <li><strong>Client</strong>: Casabio Company</li>
            <li><strong>Project date</strong>: 15 March, 2021</li>
            <li><strong>Project URL</strong>: <a href="#">www.example.com</a></li>
          </ul>
        </div>
      </div>
      <div className="portfolio-description">
        <h2>This is an example of portfolio detail</h2>
        <p>
          Autem ipsum nam porro corporis rerum. Quis eos dolorem eos itaque inventore commodi labore quia quia. Exercitationem repudiandae officiis neque suscipit non officia eaque itaque enim. Voluptatem officia accusantium nesciunt est omnis tempora consectetur dignissimos. Sequi nulla at esse enim cum deserunt eius.
        </p>
      </div>
    </div>
  </section>
</main>
<Footer />
</div>
  );
}

PortfolioDetailPage.propTypes = {
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

export default compose(withConnect)(PortfolioDetailPage);
