import React from "react";
import { NavLink } from "react-router-dom";
import "./css/Registration.css";
import registrationImage from "../images/registration.svg";
const Registration = () => {
  return (
    <>
      <div className='container mt-3 auto'>
        <div className='row'>
          <div className='col-lg-10 col-xl-9 mx-auto '>
            <div className='card card-signin flex-row my-5 shadow-lg p-3 mb-5 bg-white rounded'>
              <div
                className='card-img-left d-none d-md-flex'
                style={{ backgroundImage: `url(${registrationImage})` }}></div>
              <div className='card-body'>
                <h5 className='card-title text-center'>Register</h5>
                <form className='form-signin'>
                  <div className='form-label-group pointer'>
                    <input
                      type='text'
                      id='inputUserame'
                      className='form-control'
                      placeholder='Name'
                      name='name'
                      required
                      autofocus
                    />
                    <label for='inputUserame'>Username</label>
                  </div>

                  <div className='form-label-group'>
                    <input
                      type='email'
                      id='inputEmail'
                      className='form-control'
                      placeholder='Email address'
                      required
                    />
                    <label for='inputEmail'>Email address</label>
                  </div>
                  <div className='form-label-group'>
                    <input
                      type='tel'
                      id='inputContact'
                      className='form-control'
                      placeholder='Contact number'
                      name='contact'
                      required
                    />
                    <label for='inputContact'>Contact number</label>
                  </div>

                  <div className='form-label-group'>
                    <input
                      type='text'
                      id='inputWork'
                      className='form-control'
                      placeholder='Work'
                      name='work'
                      required
                    />
                    <label for='inputWork'>Work</label>
                  </div>

                  <div className='form-label-group'>
                    <input
                      type='password'
                      id='inputPassword'
                      className='form-control'
                      placeholder='Password'
                      required
                    />
                    <label for='inputPassword'>Password</label>
                  </div>

                  <div className='form-label-group'>
                    <input
                      type='password'
                      id='inputConfirmPassword'
                      className='form-control'
                      placeholder='Password'
                      required
                    />
                    <label for='inputConfirmPassword'>Confirm password</label>
                  </div>

                  <button
                    className='btn btn-lg btn-primary btn-block text-uppercase'
                    type='submit'>
                    Register
                  </button>

                  <p className='d-block text-center mt-4 small'>
                    Already Have an Account?{" "}
                    <NavLink to='/Login'> Signin</NavLink>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Registration;
