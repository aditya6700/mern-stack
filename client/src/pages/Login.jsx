import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import login from '../images/login.jpg'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Login() {
    const navigate = useNavigate();

    const [creden, setCreden] = useState({
        email: "", password: ""
    });

    const handleSubmit = async (event) => {
        event.preventDefault();
        const { email, password } = creden;
        try {
            const res = await axios.post('api/login', {
                email, password
            });
            // console.log(res);
            let loginData = res.data;
            if (res.status == 200) {
                window.alert(loginData.message);
                navigate('/');
            }
        }
        catch (err) {
            console.log(err.response.status);
            const errorMessage = Object.values(err.response.data)[0];
            console.log(err.response.data);
            window.alert(errorMessage);
        }  
    }

    const changeHandler = (event) => {
        const { name, value } = event.target;
        return setCreden({...creden, [name]:value})
    }

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
              <form onSubmit={handleSubmit} className="userform">
                <div className="form-group">
                  <label htmlFor="email">
                    <i className="zmdi zmdi-email material-icons-name"></i>
                  </label>
                  <input type="email" name='email' id='email'
                    autoComplete='off' 
                    onChange={changeHandler} placeholder='email' />
                </div>
                <div className="form-group">
                  <label htmlFor="password">
                    <i className="zmdi zmdi-lock material-icons-name"></i>
                  </label>
                  <input type="password" name='password' id='password'
                    autoComplete='off' 
                    onChange={changeHandler} placeholder='password' />
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
