import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import loginImage from "../images/login.svg";
const Login = () => {
  const [user, setUser] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  let name, value;
  let handleInput = (e) => {
    document.getElementById("success").className = "";
    document.getElementById("success").innerHTML = "";
    document.getElementById("error").className = "";
    document.getElementById("error").innerHTML = "";
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };
  let submitData = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:3000/login", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const data = await res.json();

    console.log(data);
    if (data.error) {
      document.getElementById("error").className =
        "alert alert-danger error-message";
      setError("Invalid username and password");
    } else {
      document.getElementById("success").className =
        "alert alert-success success-message";
      setSuccess(data.message);
    }
  };

  return (
    <>
      <div className='container mt-3  auto'>
        <div className='row '>
          <div className='col-lg-10 col-xl-9  mx-auto'>
            <div className='card card-signin flex-row my-5 shadow-lg p-3 mb-5 bg-white rounded'>
              <div
                className='card-img-left d-none d-md-flex'
                style={{ backgroundImage: `url(${loginImage})` }}></div>
              <div className='card-body'>
                <h5 className='card-title text-center'>Login</h5>
                <div className='' id='error'>
                  {error}
                </div>
                <div className='' id='success'>
                  {success}
                </div>
                <form
                  className='form-signin'
                  method='POST'
                  onSubmit={submitData}>
                  <div className='form-label-group'>
                    <input
                      type='email'
                      id='inputEmail'
                      className='form-control'
                      placeholder='Email address'
                      name='username'
                      onChange={handleInput}
                      required
                    />
                    <label for='inputEmail'>Email address</label>
                  </div>
                  <div className='form-label-group'>
                    <input
                      type='password'
                      id='inputPassword'
                      className='form-control'
                      placeholder='Password'
                      name='password'
                      onChange={handleInput}
                      required
                    />
                    <label for='inputPassword'>Password</label>
                  </div>
                  <button
                    className='btn btn-lg btn-primary btn-block text-uppercase'
                    type='submit'
                    onClick={submitData}>
                    Login
                  </button>
                  <p className='d-block text-center mt-4 small'>
                    Don't Have an Account?
                    <NavLink to='/Registration'> Signup</NavLink>
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

export default Login;
