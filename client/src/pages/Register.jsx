import React, { useState } from 'react'
import Navbar from '../components/Navbar';
import register from '../images/register.jpg'
import { Link, useNavigate } from 'react-router-dom';
import Axios from 'axios';

export default function Register() {
    let navigate = useNavigate();

    const [values, setValues] = useState({
        username: "", email: "", phone: "", work: "", password: "", cpassword: ""
    });

    const handleSubmit = async (event) => {
        event.preventDefault();
        const { username, email, phone, work, password, cpassword } = values;
        try {
            const res = await Axios.post('/api/register', {
            username, email, phone, work, password, cpassword
            });

            let userData = res.data;
            console.log(userData);
            if (res.status == 201) {
                window.alert(userData.message);
                navigate('/login'); 
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
        const {value, name} = event.target;
        return setValues({ ...values, [name]: value });
    }


  return (
    <>
      <Navbar />
      <section className="register">
        <div className="container">
          <div className="form-content mt-5 p-5">
            <div className="register-form">
              <h2 className="form-title ms-5">Sign Up</h2>
              <form onSubmit={e => handleSubmit(e)} className="userform">
                <div className="form-group">
                  <label htmlFor="username">
                    <i className="zmdi zmdi-account "></i>
                  </label>
                  <input type="text" name='username' id='username'
                    autoComplete='off' 
                    onChange={changeHandler} placeholder='Username' />
                </div>
                <div className="form-group">
                  <label htmlFor="email">
                    <i className="zmdi zmdi-email material-icons-name"></i>
                  </label>
                  <input type="email" name='email' id='email'
                    autoComplete='off' 
                    onChange={changeHandler} placeholder='email' />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">
                    <i className="zmdi zmdi-phone material-icons-name"></i>
                  </label>
                  <input type="phone" name='phone' id='phone'
                    autoComplete='off' 
                    onChange={changeHandler} placeholder='phone' />
                </div>
                <div className="form-group">
                  <label htmlFor="work">
                    <i className="zmdi zmdi-account-box material-icons-name"></i>
                  </label>
                  <input type="text" name='work' id='work'
                    autoComplete='off' 
                    onChange={changeHandler} placeholder='work' />
                </div>
                <div className="form-group">
                  <label htmlFor="password">
                    <i className="zmdi zmdi-lock material-icons-name"></i>
                  </label>
                  <input type="password" name='password' id='password'
                    autoComplete='off' 
                    onChange={changeHandler} placeholder='password' />
                </div>
                <div className="form-group">
                  <label htmlFor="cpassword">
                    <i className="zmdi zmdi-lock material-icons-name"></i>
                  </label>
                  <input type="password" name='cpassword' id='cpassword'
                    autoComplete='off' 
                    onChange={changeHandler} placeholder='confirm password' />
                </div>
                <div className="form-group form-button">
                  <input type="submit" id='register' name='register' value="register" />
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
