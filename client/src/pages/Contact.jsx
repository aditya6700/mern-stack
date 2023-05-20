import React from 'react'
import Navbar from '../components/Navbar'

export default function Contact() {
  return (
    <>
      <Navbar />
      <div className="contact_info">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-10 offset-lg-1 d-flex justify-content-between">
              {/* phone number */}
              <div className="contact_info_item d-flex justify-content-start align-items-center">
                <img src="https://img.icons8.com/office/24/000000/iphone.png" alt="phone" />
                <div className="contact_info_content">
                  <div className="contact_info_title">Phone </div>
                  <div className="contact_info_text">+91 1111 543 2198</div>
                </div>
              </div>
              <div className="contact_info_item d-flex justify-content-start align-items-center">
                <img src="https://img.icons8.com/office/24/000000/iphone.png" alt="phone" />
                <div className="contact_info_content">
                  <div className="contact_info_title">Email </div>
                  <div className="contact_info_text">devmasteroot@gmail.com</div>
                </div>
              </div>
              <div className="contact_info_item d-flex justify-content-start align-items-center">
                <img src="https://img.icons8.com/office/24/000000/iphone.png" alt="phone" />
                <div className="contact_info_content">
                  <div className="contact_info_title">Web </div>
                  <div className="contact_info_text">www.reactjs.com</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

       
      <div className="contact_form mt-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="contact_form_container p-4">
                <div className="contact_form_title mb-3">Get in Touch </div>
                <form id="contact_form">
                  <div className="contact_form_name d-flex justify-content-between align-items-between">
                    <input type="text" id="contact_form_name"
                        className="contact_form_name input_field"
                      placeholder="Your Name" required={true} />
                    
                    <input type="email" id="contact_form_name"
                        className="contact_form_name input_field"
                      placeholder="Your Email" required={true} />
                    
                    <input type="phone" id="contact_form_name"
                        className="contact_form_name input_field"
                        placeholder="Your Phone" required={true} />
                  </div>
                  <div className="contact_form_text mt-4">
                    <textarea className="text_field contact_form_message"
                    placeholder="Message" cols="30" rows="5"></textarea>
                  </div>
                  <div className="contact_form_button">
                    <button type="submit"
                      className="button contact_submit_button mt-3">Send Message</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
