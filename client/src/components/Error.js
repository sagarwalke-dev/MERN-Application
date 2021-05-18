import React from "react";
import { NavLink } from "react-router-dom";
import "./css/Error.css";
function Error() {
  return (
    <div className='mt-5 pt-3  auto'>
      <h1 className='errorMessage'>404</h1>
      <p id='errorMessage'>Oops! Something is wrong.</p>
      <NavLink class='btnError' to='/'>
        Go back to Home .
      </NavLink>
    </div>
  );
}

export default Error;
