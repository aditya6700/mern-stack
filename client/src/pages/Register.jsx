import React from 'react'
import Navbar from '../components/Navbar';
import register from '../images/register.jpg'
import { Link } from 'react-router-dom';

export default function Register() {
  return (
    <>
      <Navbar />
      <section className="register">
        <div className="container">
          <div className="form-content mt-5">
            <div className="register-form">
              <h2 className="form-title ms-5">Sign Up</h2>
              <form action="Submit" className="userform">
                <div className="form-group">
                  <label htmlFor="username">
                    <i className="zmdi zmdi-account "></i>
                  </label>
                  <input type="text" name='username' id='username'
                    autoComplete='off' placeholder='Username' />
                </div>
                <div className="form-group">
                  <label htmlFor="email">
                    <i className="zmdi zmdi-email material-icons-name"></i>
                  </label>
                  <input type="email" name='email' id='email'
                    autoComplete='off' placeholder='email' />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">
                    <i className="zmdi zmdi-phone material-icons-name"></i>
                  </label>
                  <input type="text" name='phone' id='phone'
                    autoComplete='off' placeholder='phone' />
                </div>
                <div className="form-group">
                  <label htmlFor="work">
                    <i className="zmdi zmdi-account-box material-icons-name"></i>
                  </label>
                  <input type="text" name='work' id='work'
                    autoComplete='off' placeholder='work' />
                </div>
                <div className="form-group">
                  <label htmlFor="password">
                    <i className="zmdi zmdi-lock material-icons-name"></i>
                  </label>
                  <input type="password" name='password' id='password'
                    autoComplete='off' placeholder='password' />
                </div>
                <div className="form-group">
                  <label htmlFor="cpassword">
                    <i className="zmdi zmdi-lock material-icons-name"></i>
                  </label>
                  <input type="password" name='cpassword' id='cpassword'
                    autoComplete='off' placeholder='confirm password' />
                </div>
                <div className="form-group form-button">
                  <input type="submit" id='register' name='register' value="register"  />
                </div>
              </form>
              <span className='extra ms-3'>
                Already have an account? <Link to='/login' >Login</Link>
              </span>
            </div>
            <div className="form-image">
              <figure>
                <img src={register} alt="register" />
              </figure>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
