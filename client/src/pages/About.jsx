import React from 'react'
import Navbar from '../components/Navbar'

export default function About() {
  return (
    <>
      <Navbar />
      <div className="container emp-profile mt-5 p-5">
        <form method="">
        <div className="row">
          <div className="col-md-4">
            {/* <img src={thapapic} alt="thapa" /> */}
          </div>
 
          <div className="col-md-6">
            <div className="profile-head">
              <h5>Sai Aditya</h5>
              <h6>Salesforce Developer</h6>
              <p className="profile-rating mt-3 mb-5">RANKINGS: <span> 1/10 </span></p>
              <ul className="nav nav-tabs" role="tablist">
                <li className="nav-item">
                  <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls='home' aria-selected="true">About</a>
                </li>
                <li className="nav-item">
                  <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls='profile' aria-selected="false">Profile</a>
                </li>
              </ul>
            </div>
          </div>
            
          <div className="col-md-2">
              <input type="submit" className="profile-edit-btn"
                name="btnAddMore" value="Edit Profile" />
          </div>
        </div>
          
        <div className="row">
          <div className="col-md-4">
            <div className="profile-work">
              <p>Work Line</p>
              <a href="test"> test</a> <br />
              <a href="test"> test</a> <br />
              <a href="test"> test</a> <br />
              <a href="test"> test</a> <br />
              <a href="test"> test</a> <br />
              <a href="test"> test</a> <br />
            </div>
          </div>
          <div className="col-md-8 ps-5 about-info">
            <div className="tab-content" id='myTabCsontent'>
              <div className="tab-pane fade show active" id='home' role='tabpanel' aria-labelledby='home-tab'>
                <div className="row">
                  <div className="col-md-6">
                      <label>User Id</label>
                  </div>
                  <div className="col-md-6">
                    <p>26826292356</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                      <label>Name</label>
                  </div>
                  <div className="col-md-6">
                    <p>Sai Aditya</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                      <label>Email</label>
                  </div>
                  <div className="col-md-6">
                    <p>test@email.com</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                      <label>Phone</label>
                  </div>
                  <div className="col-md-6">
                    <p>26826292356</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                      <label>Work</label>
                  </div>
                  <div className="col-md-6">
                    <p>Salesforce</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        
          <div className="col-md-8 ps-5 profile-info">
            <div className="tab-content" id='myTabCsontent'>
              <div className="tab-pane fade" id='profike' role='tabpanel' aria-labelledby='profile-tab'>
                <div className="row">
                  <div className="col-md-6">
                      <label>User Id</label>
                  </div>
                  <div className="col-md-6">
                    <p>26826292356</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                      <label>User Id</label>
                  </div>
                  <div className="col-md-6">
                    <p>26826292356</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                      <label>User Id</label>
                  </div>
                  <div className="col-md-6">
                    <p>26826292356</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                      <label>User Id</label>
                  </div>
                  <div className="col-md-6">
                    <p>26826292356</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                      <label>User Id</label>
                  </div>
                  <div className="col-md-6">
                    <p>26826292356</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </form>
      </div> 
    </>
  )
}
