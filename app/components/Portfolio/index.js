/**
 *
 * Portfolio
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function Portfolio() {
  return (
    <>
      <section id="portfolio" className="portfolio">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Portfolio</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>
       
        <div className="row portfolio-container" data-aos="fade-up" data-aos-delay={200}>
          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-img">
              <a href="/detail">
            <img src="https://i.ibb.co/phn8gN7/portfolio-1.jpg" className="img-fluid" alt="portfolio-1" border="0" />
             </a>
              </div>
            <div className="portfolio-info">
              <h4>App 1</h4>
              <p>App</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <div className="portfolio-img">
            <a href="/detail">
            <img src="https://i.ibb.co/tYMkzsS/portfolio-2.jpg" className="img-fluid" alt="portfolio-2" border="0" />
            </a>
              </div>
            <div className="portfolio-info">
              <h4>Web 3</h4>
              <p>Web</p>
                 </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-img">
            <a href="/detail">
            <img src="https://i.ibb.co/R02cQ4j/portfolio-3.jpg" className="img-fluid" alt="portfolio-3" border="0" />
              </a>
              </div>
            <div className="portfolio-info">
              <h4>App 2</h4>
              <p>App</p>
             </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <div className="portfolio-img">
            <a href="/detail">
            <img src="https://i.ibb.co/nf9G3Zt/portfolio-4.jpg"  className="img-fluid" alt="portfolio-4" border="0" />
             </a>
              </div>
            <div className="portfolio-info">
              <h4>Card 2</h4>
              <p>Card</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <div className="portfolio-img">
            <a href="/detail">
            <img src="https://i.ibb.co/qBfqn9c/portfolio-5.jpg" className="img-fluid" alt="portfolio-5" border="0" />
           </a>
            </div>
            <div className="portfolio-info">
              <h4>Web 2</h4>
              <p>Web</p>
               </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-img">
            <a href="/detail">
            <img src="https://i.ibb.co/YpnvjWF/portfolio-6.jpg" className="img-fluid" alt="portfolio-6" border="0" />
             </a>
              </div>
            <div className="portfolio-info">
              <h4>App 3</h4>
              <p>App</p>
               </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <div className="portfolio-img">
            <a href="/detail">
            <img src="https://i.ibb.co/pfjfQ7T/portfolio-7.jpg" className="img-fluid" alt="portfolio-7" border="0" />
           </a>
              </div>
            <div className="portfolio-info">
              <h4>Card 1</h4>
              <p>Card</p>
             </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <div className="portfolio-img">
            <a href="/detail">
            <img src="https://i.ibb.co/GvJXRYJ/portfolio-8.jpg"  className="img-fluid" alt="portfolio-8" border="0" />
             </a>
              </div>
            <div className="portfolio-info">
              <h4>Card 3</h4>
              <p>Card</p>
               </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <div className="portfolio-img">
            <a href="/detail">
            <img src="https://i.ibb.co/PzR79q8/portfolio-9.jpg" className="img-fluid" alt="portfolio-9" border="0" />
              </a>
              </div>
            <div className="portfolio-info">
              <h4>Web 3</h4>
              <p>Web</p>
               </div>
          </div>
        </div>
      </div>
    </section>{/* End Portfolio Section */}
  
    </>
  );
}

Portfolio.propTypes = {};

export default Portfolio;
