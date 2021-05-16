import React from "react";
import "./css/Contact.css";
import "./css/Registration.css";
const Contact = () => {
  return (
    <>
      <div class='container mt-5 pt-3  auto'>
        <div className='card  shadow-lg p-3 mb-5 bg-white rounded'>
          <div class='contact_info'>
            <div className='row'>
              <div class='col-lg-10 offset-lg-1'>
                <div class='contact_info_container d-flex flex-lg-row flex-column justify-content-between align-items-between'>
                  <div class='contact_info_item d-flex flex-row align-items-center justify-content-start'>
                    <div class='contact_info_image'>
                      <img
                        src='https://img.icons8.com/office/24/000000/iphone.png'
                        alt=''
                      />
                    </div>
                    <div class='contact_info_content'>
                      <div class='contact_info_title'>Phone</div>
                      <div class='contact_info_text'>+91 7030378473</div>
                    </div>
                  </div>
                  <div class='contact_info_item d-flex flex-row align-items-center justify-content-start'>
                    <div class='contact_info_image'>
                      <img
                        src='https://img.icons8.com/ultraviolet/24/000000/filled-message.png'
                        alt=''
                      />
                    </div>
                    <div class='contact_info_content'>
                      <div class='contact_info_title'>Email</div>
                      <div class='contact_info_text'>
                        sagarwalke.web@gmail.com
                      </div>
                    </div>
                  </div>
                  <div class='contact_info_item d-flex flex-row align-items-center justify-content-start'>
                    <div class='contact_info_image'>
                      <img
                        src='https://img.icons8.com/ultraviolet/24/000000/map-marker.png'
                        alt=''
                      />
                    </div>
                    <div class='contact_info_content'>
                      <div class='contact_info_title'>Address</div>
                      <div class='contact_info_text'>Nashik, Maharashtra</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class='contact_form'>
            <div class='row'>
              <div class='col-lg-10 offset-lg-1'>
                <div class='contact_form_container'>
                  <div class='contact_form_title'>Get in Touch</div>

                  <form className='form-signin'>
                    <div className='form-label-group pointer'>
                      {/* <div class='contact_form_inputs d-flex flex-md-row flex-column justify-content-between align-items-between'> */}
                      <input
                        type='text'
                        id='inputName'
                        className='form-control'
                        placeholder='Name'
                        name='name'
                        required
                        autofocus
                      />
                      <label for='inputName'>Name</label>
                    </div>
                    <div className='form-label-group'>
                      <input
                        type='email'
                        id='inputEmail'
                        className='form-control'
                        placeholder='Email'
                        name='email'
                        required
                      />
                      <label for='inputEmail'>Email</label>
                    </div>

                    <div className='form-label-group'>
                      <textarea
                        id='inputMessage'
                        className='form-control'
                        placeholder='Message'
                        name='message'
                        required></textarea>
                    </div>

                    <div class='contact_form_button'>
                      {" "}
                      <button
                        type='submit'
                        class='button contact_submit_button'>
                        Send Message
                      </button>{" "}
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className='panel'></p>
    </>
  );
};

export default Contact;
