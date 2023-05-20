import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import axios  from 'axios';
import { useNavigate } from 'react-router-dom';

export default function About() {

    const navigate = useNavigate();

    const [userData, setUserData] = useState({});

    const renderAboutPage = async () => {
        try {
            
            const res = await axios.get('api/about', {
                withCredentials: true,
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                }
            });

            console.log(res);
            setUserData(res.data);
        }
        catch (err) {
            console.log(err.response);
            navigate('/login');
        }
    };

    useEffect(() => {
        renderAboutPage();
    },[]);
    


  return (
    <>
      <Navbar />
      <div className="container emp-profile mt-5 p-5">
        <form method="GET">
        <div className="row">
          <div className="col-md-4">
            <div className="profile-img">
                {/* <img src="" alt="" /> */}
            </div>
          </div>
 
          <div className="col-md-6">
            <div className="profile-head">
              <h5>{userData.username} </h5>
              <h6>{userData.work} </h6>
                <p className="profile-rating mt-3 mb-5">RANKINGS: <span> 1/10 </span></p>
                              
              <ul className="nav nav-tabs" role="tablist">
                <li className="nav-item">
                  <a className="nav-link active" id="home-tab" data-bs-toggle="tab" href="#home" role="tab" aria-controls='home' aria-selected="true">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" id="profile-tab" data-bs-toggle="tab" href="#profile" role="tab" aria-controls='profile' aria-selected="false">Profile</a>
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
            <div className="tab-content col-md-8" id='myTabContent'>
                {/* <div className="ps-5 about-info"> */}
                    <div className="ps-5 tab-pane fade show active" id='home'>
                    <div className="tab-content pt-4" id='myTabContent'>
                        <div className="row">
                            <div className="col-md-6">
                                <label>Name</label>
                            </div>
                            <div className="col-md-6">
                                <p>{userData.username} </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <label>Email</label>
                            </div>
                            <div className="col-md-6">
                                <p>{userData.email} </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <label>Phone</label>
                            </div>
                            <div className="col-md-6">
                                <p>{userData.phone}</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <label>Work</label>
                            </div>
                            <div className="col-md-6">
                                <p>{userData.work}</p>
                            </div>
                        </div>
                    </div>
                    </div>
                {/* </div> */}
            
                {/* <div className="ps-5 profile-info"> */}
                    <div className="ps-5 tab-pane fade" id='profile'>
                    <div className="tab-content pt-4" id='myTabContent'>
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
                {/* </div> */}
            </div>
        </div>
        </form>
      </div> 
    </>
  )
}
