import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from 'react-router-dom';
import { userContext } from '../App';

export default function Navbar() {
  
  const { state, dispatch } = useContext(userContext);
  
  const LoginLogout = () => {
    if (state) {
      return (
        <>
          <li className="nav-item">
            <NavLink className="nav-link" to="/logout">Logout</NavLink>
          </li>
        </>
      )
    }
    else {
      return (
        <>
          <li className="nav-item">
            <NavLink className="nav-link" to="/login">Login</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/register">Register</NavLink>
          </li>
        </>
      )
    }
  }
   
  return (
    <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <NavLink className="navbar-brand" to="/">Masteroot</NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                </li>
                <li className="nav-item">
                <NavLink className="nav-link" to="/about">About</NavLink>
                </li>
                <li className="nav-item">
                <NavLink className="nav-link" to="/contact">Contact</NavLink>
                </li>
                <LoginLogout />
            </ul>
            </div>
        </div>
        </nav>
    </>
  )
}
