import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import "./css/Registration.css";
import registrationImage from "../images/registration.svg";

const Registration = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    contact: "",
    work: "",
    password: "",
    cpassword: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  let name, value;
  var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

  let handleInputData = (e) => {
    document.getElementById("error").className = "";
    document.getElementById("error").innerHTML = "";
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  let validation = async (e) => {
    e.preventDefault();

    if (user.password != user.cpassword) {
      document.getElementById("error").className =
        "alert alert-danger error-message";
      document.getElementById("error").innerHTML = "Password not match";
      return;
    }
    if (!reg.test(user.email)) {
      document.getElementById("error").className =
        "alert alert-danger error-message";
      document.getElementById("error").innerHTML = "Please enter valid email";
      return;
    }

    //submit data
    fetch("http://localhost:3000/registration", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        if (json.error) {
          document.getElementById("error").className =
            "alert alert-danger error-message";
          setError(json.error);
          setTimeout(() => {
            document.getElementById("error").className = "";
            document.getElementById("error").innerHTML = "";
          }, 5000);
        } else {
          document.getElementById("success").className =
            "alert alert-success success-message";
          setSuccess(json.message);
          setTimeout(() => {
            document.getElementById("success").className = "";
            document.getElementById("success").innerHTML = "";
          }, 5000);
        }
      });
  };

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
                <div className='' id='error'>
                  {error}
                </div>
                <div className='' id='success'>
                  {success}
                </div>
                <form
                  className='form-signin'
                  method='POST'
                  onSubmit={validation}>
                  <div className='form-label-group pointer'>
                    <input
                      type='text'
                      id='inputName'
                      className='form-control'
                      placeholder='Name'
                      title='Enter valid name'
                      name='name'
                      required
                      onChange={handleInputData}
                    />
                    <label htmlFor='inputName'>Name</label>
                  </div>

                  <div className='form-label-group'>
                    <input
                      type='email'
                      id='inputEmail'
                      name='email'
                      className='form-control'
                      placeholder='Email address'
                      onChange={handleInputData}
                      required
                    />
                    <label htmlFor='inputEmail'>Email address</label>
                  </div>
                  <div className='form-label-group'>
                    <input
                      type='tel'
                      id='inputContact'
                      className='form-control'
                      placeholder='Contact number'
                      name='contact'
                      pattern='[1-9]{1}[0-9]{9}'
                      title='Enter 10 digit mobile number'
                      onChange={handleInputData}
                      required
                    />
                    <label htmlFor='inputContact'>Contact number</label>
                  </div>

                  <div className='form-label-group'>
                    <input
                      type='text'
                      id='inputWork'
                      className='form-control'
                      placeholder='Work'
                      name='work'
                      onChange={handleInputData}
                      required
                    />
                    <label htmlFor='inputWork'>Work</label>
                  </div>

                  <div className='form-label-group'>
                    <input
                      type='password'
                      id='inputPassword'
                      className='form-control'
                      placeholder='Password'
                      name='password'
                      onChange={handleInputData}
                      required
                    />
                    <label htmlFor='inputPassword'>Password</label>
                  </div>

                  <div className='form-label-group'>
                    <input
                      type='password'
                      id='inputConfirmPassword'
                      className='form-control'
                      placeholder='Confirm password'
                      name='cpassword'
                      onChange={handleInputData}
                      required
                    />
                    <label htmlFor='inputConfirmPassword'>
                      Confirm password
                    </label>
                  </div>

                  <button
                    className='btn btn-lg btn-primary btn-block text-uppercase'
                    type='submit'
                    onSubmit={validation}>
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
