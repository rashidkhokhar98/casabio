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
       
        <div className=" row phone mt-2 pt-2" style={{backgroundColor: '#C2A835'}}>
                <h4 className="ml-2">Call Us:</h4>
                <p >+55 48 9101-3968</p>
              </div>

            
        <div className="row">
         
           
          

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
    </section>
 
    </>
  );
}

Contact.propTypes = {};

export default Contact;
