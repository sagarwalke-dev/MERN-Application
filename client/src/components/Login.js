import React from "react";
import "./Login.css";
const Login = () => {
  return (
    <div className='container mt-0 auto'>
      <div className='row'>
        <div className='col-lg-10 col-xl-9 mx-auto'>
          <div className='card card-signin flex-row my-5'>
            <div className='card-img-left d-none d-md-flex'></div>
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
                <a className='d-block text-center mt-2 small' href='#'>
                  Already Have an Account?
                </a>
                <hr className='my-4' />
                <button
                  className='btn btn-lg btn-google btn-block text-uppercase'
                  type='submit'>
                  <i className='fab fa-google mr-2'></i> Sign up with Google
                </button>
                <button
                  className='btn btn-lg btn-facebook btn-block text-uppercase'
                  type='submit'>
                  <i className='fab fa-facebook-f mr-2'></i> Sign up with
                  Facebook
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
