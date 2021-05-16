import React from "react";
import "./css/Profile.css";
import userPic from "../images/sagar.jpg";

const UserProfile = () => {
  return (
    <>
      <div class=' container mt-5 pt-3 d-flex justify-content-center '>
        <div class='col-xl-12 col-md-12'>
          <div class='card user-card-full shadow-lg p-0 mb-5 bg-white rounded'>
            <div class='row m-l-0 m-r-0 '>
              <div class='col-sm-4 bg-c-lite-green user-profile '>
                <div class='card-block text-center text-white'>
                  <div class='m-b-25'>
                    <img
                      src={userPic}
                      class='img-radius'
                      alt='User-Profile-Image'
                    />{" "}
                  </div>
                  <h6 class='f-w-600'>Sagar Walke</h6>
                  <p>Full Stack Developer</p>{" "}
                  <div class='mt-4 text-center'>
                    <button class='btn btn-primary edit-button' type='button'>
                      Edit Profile
                    </button>
                  </div>
                </div>
              </div>
              <div class='col-sm-8'>
                <div class='card-block'>
                  <h6 class='pb-2 b-b-default f-w-600'>Information</h6>
                  <div class='row'>
                    <div class='col-sm-6 pb-4'>
                      <p class='m-b-10 f-w-600'>User Id</p>
                      <h6 class='text-muted f-w-400'>123457890</h6>
                    </div>
                    <div class='col-sm-6 pb-4'>
                      <p class='m-b-10 f-w-600'>Name</p>
                      <h6 class='text-muted f-w-400'>sagar walke</h6>
                    </div>
                    <div class='col-sm-6 pb-4'>
                      <p class='m-b-10 f-w-600'>Email</p>
                      <h6 class='text-muted f-w-400'>
                        sagarwalke.web@gmail.com
                      </h6>
                    </div>
                    <div class='col-sm-6'>
                      <p class='m-b-10 f-w-600'>Phone</p>
                      <h6 class='text-muted f-w-400'>7030378473</h6>
                    </div>
                    <div class='col-sm-6 pb-4'>
                      <p class='m-b-10 f-w-600'>Work</p>
                      <h6 class='text-muted f-w-400'>Developer</h6>
                    </div>
                    <div class='col-sm-6 pb-4'>
                      <p class='m-b-10 f-w-600'>Created At</p>
                      <h6 class='text-muted f-w-400'>70:30:37 PM</h6>
                    </div>
                  </div>

                  <ul class='social-link list-unstyled '>
                    <li>
                      <a
                        href='#!'
                        data-toggle='tooltip'
                        data-placement='bottom'
                        title=''
                        data-original-title='facebook'
                        data-abc='true'>
                        <i
                          class='mdi mdi-facebook feather icon-facebook facebook'
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
                          class='mdi mdi-twitter feather icon-twitter twitter'
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
                          class='mdi mdi-instagram feather icon-instagram instagram'
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
