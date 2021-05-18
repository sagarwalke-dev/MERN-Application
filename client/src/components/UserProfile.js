import React, { useEffect, useState } from "react";
import "./css/Profile.css";
import { useHistory } from "react-router-dom";
import userPic from "../images/sagar.jpg";

const UserProfile = () => {
  const history = useHistory();
  const [users, setUser] = useState({
    user: {
      userId: "",
      userName: "",
      userEmail: "",
      userContact: "",
      userWork: "",
      createdAt: "",
    },
  });
  useEffect(() => {
    let verifyToken = async () => {
      const res = await fetch("/auth", {
        method: "get",
        credentials: "include",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      const data = await res.json();
      console.log(data);
      if (data.error) history.push("/Login");
      setUser(data);
    };
    //call function
    verifyToken();
  }, []);
  return (
    <>
      <div className=' container mt-5 pt-3 d-flex justify-content-center '>
        <div className='col-xl-12 col-md-12'>
          <div className='card user-card-full shadow-lg p-0 mb-5 bg-white rounded'>
            <div className='row m-l-0 m-r-0 '>
              <div className='col-sm-4 bg-c-lite-green user-profile '>
                <div className='card-block text-center text-white'>
                  <div className='m-b-25'>
                    <img
                      src={userPic}
                      className='img-radius'
                      alt='User-Profile-Image'
                    />{" "}
                  </div>
                  <h6 className='f-w-600 text-capitalize'>
                    {users.user.userName}
                  </h6>
                  <p className='text-capitalize'>{users.user.userWork}</p>{" "}
                  <div className='mt-4 text-center'>
                    <button
                      className='btn btn-primary edit-button'
                      type='button'>
                      Edit Profile
                    </button>
                  </div>
                </div>
              </div>
              <div className='col-sm-8'>
                <div className='card-block'>
                  <h6 className='pb-2 b-b-default f-w-600'>Information</h6>
                  <div className='row'>
                    <div className='col-sm-6 pb-4'>
                      <p className='m-b-10 f-w-600'>User Id</p>
                      <h6 className='text-muted f-w-400'>
                        {users.user.userId}
                      </h6>
                    </div>
                    <div className='col-sm-6 pb-4'>
                      <p className='m-b-10 f-w-600'>Name</p>
                      <h6 className='text-muted f-w-400 text-capitalize'>
                        {users.user.userName}
                      </h6>
                    </div>
                    <div className='col-sm-6 pb-4'>
                      <p className='m-b-10 f-w-600'>Email</p>
                      <h6 className='text-muted f-w-400'>
                        {users.user.userEmail}
                      </h6>
                    </div>
                    <div className='col-sm-6'>
                      <p className='m-b-10 f-w-600'>Phone</p>
                      <h6 className='text-muted f-w-400'>
                        {users.user.userContact}
                      </h6>
                    </div>
                    <div className='col-sm-6 pb-4'>
                      <p className='m-b-10 f-w-600'>Work</p>
                      <h6 className='text-muted f-w-400 text-capitalize'>
                        {users.user.userWork}
                      </h6>
                    </div>
                    <div className='col-sm-6 pb-4'>
                      <p className='m-b-10 f-w-600'>Created At</p>
                      <h6 className='text-muted f-w-400'>{Date.now()}</h6>
                    </div>
                  </div>

                  <ul className='social-link list-unstyled '>
                    <li>
                      <a
                        href='#!'
                        data-toggle='tooltip'
                        data-placement='bottom'
                        title=''
                        data-original-title='facebook'
                        data-abc='true'>
                        <i
                          className='mdi mdi-facebook feather icon-facebook facebook'
                          aria-hidden='true'></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href='#!'
                        data-toggle='tooltip'
                        data-placement='bottom'
                        title=''
                        data-original-title='twitter'
                        data-abc='true'>
                        <i
                          className='mdi mdi-twitter feather icon-twitter twitter'
                          aria-hidden='true'></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href='#!'
                        data-toggle='tooltip'
                        data-placement='bottom'
                        title=''
                        data-original-title='instagram'
                        data-abc='true'>
                        <i
                          className='mdi mdi-instagram feather icon-instagram instagram'
                          aria-hidden='true'></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
