import React from 'react'
import Navbar from '../components/Navbar'
import login from '../images/login.jpg'
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <>
      <Navbar />
      <section className="login">
        <div className="container">
          <div className="form-content mt-5 p-5">
          <div className="form-image">
              <figure>
                <img src={login} alt="register" />
              </figure>
            </div>
            <div className="login-form">
              <h2 className="form-title ms-5">Login</h2>
              <form action="Submit" className="userform">
                <div className="form-group">
                  <label htmlFor="email">
                    <i className="zmdi zmdi-email material-icons-name"></i>
                  </label>
                  <input type="email" name='email' id='email'
                    autoComplete='off' placeholder='email' />
                </div>
                <div className="form-group">
                  <label htmlFor="password">
                    <i className="zmdi zmdi-lock material-icons-name"></i>
                  </label>
                  <input type="password" name='password' id='password'
                    autoComplete='off' placeholder='password' />
                </div>
                <div className="form-group form-button">
                  <input type="submit" id='login' name='login' value="Login"  />
                </div>
              </form>
              <span className='extra ms-3'>
                Do not have an account? <Link to='/register' >Register</Link>
              </span>
            </div>
            
          </div>
        </div>
      </section>
    </>
  )
}
