/**
 *
 * LoginPage
 *
 */

import React,{useState} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object().shape({
  email: yup.string().required(),
  password: yup.string().required(),
});

export function LoginPage() {

  const { register, handleSubmit, reset, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const [formData, setFormData] = useState('');

  const onSubmitt = data => {
    setFormData({ ...data });
    console.log(data);
    reset();
  }
  return (
    <>
      <Navbar />
<div className="cntainer-fluid row " style={{ minHeight: '1000px' }}>
        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 ">
          <div className="row justify-content-center mt-5 ">
            <div className="col-10 col-sm-10 col-md-8 col-lg-6 col-xl-6 pb-3 pt-3 border mt-5 mb-5 text-light rounded " style={{  background: "rgba(40, 58, 90, 0.9)" }}>
              <form onSubmit={handleSubmit(onSubmitt)}>
                <div className="row">
                  <div className="form-group col">
                    <label htmlFor="email">Email address</label>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      id="email"
                      aria-describedby="emailHelp"
                      placeholder="Enter email"
                      ref={register}
                    />
                    <div style={{ color: 'red' }}>
                      {errors && errors.email && '* Enter valid email '}
                    </div>
                    <small id="emailHelp" className="form-text text-muted">
                      We'll never share your email with anyone else.
                    </small>
                  </div>
                </div>

                <div className="row">
                  <div className="form-group col">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      name="password"
                      className="form-control"
                      id="password"
                      placeholder="Password"
                      ref={register}
                    />
                    <div style={{ color: 'red' }}>
                      {errors && errors.password && '* Password is required'}
                    </div>
                  </div>
                </div>
                <div className="row ">
                  <div className="col text-center">
                    <button type="submit" className="btn btn-primary">
                      Login
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />

    </>
  );
}

LoginPage.propTypes = {
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

export default compose(withConnect)(LoginPage);
