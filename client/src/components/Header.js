import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import logo from "../images/logo-1.png";
import "bootstrap/dist/css/bootstrap.css";
import { UserContext } from "../App";

const Header = () => {
  const { state, dispatch } = useContext(UserContext);
  let Menu = () => {
    console.log(state);
    if (state) {
      return (
        <>
          {" "}
          <div>
            <nav className='navbar navbar-expand-sm py-0 navbar-light bg-white'>
              <img className='logo' src={logo} alt='Code Creator' />
              <button
                className='navbar-toggler'
                type='button'
                data-toggle='collapse'
                data-target='#navbarSupportedContent'
                aria-controls='navbarSupportedContent'
                aria-expanded='false'
                aria-label='Toggle navigation'>
                <span className='navbar-toggler-icon'></span>
              </button>

              <div
                className='collapse navbar-collapse'
                id='navbarSupportedContent'>
                <ul className='navbar-nav ml-auto'>
                  <li className='nav-item active'>
                    <NavLink className='nav-link' to='/'>
                      Home <span className='sr-only'>(current)</span>
                    </NavLink>
                  </li>

                  <li className='nav-item'>
                    <NavLink className='nav-link' to='/User-profile'>
                      Profile
                    </NavLink>
                  </li>
                  <li className='nav-item'>
                    <NavLink className='nav-link' to='/Contact'>
                      Contact
                    </NavLink>
                  </li>
                  <li className='nav-item'>
                    <NavLink className='nav-link' to='/Logout'>
                      Logout
                    </NavLink>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div>
            <nav className='navbar navbar-expand-sm py-0 navbar-light bg-white'>
              <img className='logo' src={logo} alt='Code Creator' />
              <button
                className='navbar-toggler'
                type='button'
                data-toggle='collapse'
                data-target='#navbarSupportedContent'
                aria-controls='navbarSupportedContent'
                aria-expanded='false'
                aria-label='Toggle navigation'>
                <span className='navbar-toggler-icon'></span>
              </button>

              <div
                className='collapse navbar-collapse'
                id='navbarSupportedContent'>
                <ul className='navbar-nav ml-auto'>
                  <li className='nav-item active'>
                    <NavLink className='nav-link' to='/'>
                      Home <span className='sr-only'>(current)</span>
                    </NavLink>
                  </li>

                  <li className='nav-item'>
                    <NavLink className='nav-link' to='/User-profile'>
                      Profile
                    </NavLink>
                  </li>
                  <li className='nav-item'>
                    <NavLink className='nav-link' to='/Contact'>
                      Contact
                    </NavLink>
                  </li>
                  <li className='nav-item'>
                    <NavLink className='nav-link' to='/Registration'>
                      Registration
                    </NavLink>
                  </li>

                  <li className='nav-item'>
                    <NavLink className='nav-link' to='/Login'>
                      Login
                    </NavLink>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </>
      );
    }
  };
  return <Menu />;
};

export default Header;
