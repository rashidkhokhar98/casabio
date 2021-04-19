/**
 *
 * Contact
 *
 */

import React, {useState} from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';


import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object().shape({
  email: yup.string().required(),
  body: yup.string().required(),
});

function Contact() {
  const { register, handleSubmit, reset, errors} = useForm({
    resolver: yupResolver(schema),
  });
 
  const [fromEmail, setFromEmail] = useState('');
  const [text, setText] = useState('');
  const toEmail = 'casabio@example.com';

  const onSubmit = data => {
    setFromEmail(...data.email);
    setText(...data.body);
    console.log(data)
    reset();
  };


  return (
    <>
     <section id="contact" className="contact">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Contact</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>
        <div className="row">
          <div className="col-lg-5 d-flex align-items-stretch">
            <div className="info">
              <div className="address">
                <i className="icofont-google-map" />
                <h4>Location:</h4>
                <p>Umer Street, Johar Town, Lahore</p>
              </div>
              <div className="email">
                <i className="icofont-envelope" />
                <h4>Email:</h4>
                <p>casabio@example.com</p>
              </div>
              <div className="phone">
                <i className="icofont-phone" />
                <h4>Call:</h4>
                <p>+92 3154518620</p>
              </div>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3402.7257551052526!2d74.28875801462978!3d31.47672940644618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391903e64da0e06d%3A0x739b1e1a979589ec!2sJamea%20Masjid%20Taqwa!5e0!3m2!1sen!2s!4v1618471783990!5m2!1sen!2s" frameBorder={0} style={{border: 0, width: '100%', height: 290}} allowFullScreen />
            </div>
          </div>
          <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">

            <form onSubmit={handleSubmit(onSubmit)} className="php-email-form" >
            <div className="form-row mt-3 mb-4">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                      <input
                        type="email"
                        className="form-control"
                        id="to"
                        placeholder="To"
                        value={toEmail}
                        readOnly
                        style={{
                          border: '2px solid #5B5426',
                          borderRadius: '5px',
                        }}
                      />
                    </div>
                  </div>
                  <div className="form-row mb-4">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        id="fromEmail"
                        placeholder="Your Email"
                        onChange={e => setFromEmail(e.target.value)}
                        ref={register}
                        style={{
                          border: '2px solid #5B5426',
                          borderRadius: '5px',
                        }}
                      />
                      <div style={{ color: 'red' }}>
                        {' '}
                        {errors && errors.email && ' Enter valid Email *'}
                      </div>
                    </div>
                  </div>
               
                  <div className="form-group mt-4">
                    <textarea
                      className="form-control"
                      id="message"
                      name="body"
                      rows={12}
                      placeholder="Write Your Message here!"
                      onChange={e => setText(e.target.value)}
                      ref={register}
                      style={{
                        border: '2px solid #5B5426',
                        borderRadius: '5px',
                      }}
                    />
                    <div style={{ color: 'red' }}>
                      {errors && errors.body && 'Field is required * '}
                    </div>
                  </div>
                  <div className="form-group text-center">
                    <button type="submit" className="btn btn-success ">
                      Send Message
                    </button>
                  </div>
            </form>

          </div>
        </div>
      </div>
    </section>
 
    </>
  );
}

Contact.propTypes = {};

export default Contact;
