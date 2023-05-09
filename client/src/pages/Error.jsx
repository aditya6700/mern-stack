import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Error() {
  return (
      <>
        <div id="notfound">
            <div className="conatainer notfound d-flex justify-content-center flex-column align-items-center p-5">
                <div className="not found-404">
                    <h1>404</h1>
                </div>
                <h2>we are sorry, page not found!</h2>
                <p className="mb-5">The page you are looking for might have been removed
                had its name changed or is temporarily unavailable.</p>
                <NavLink to="/"> Back To Homepage </NavLink>
            </div>
        </div>
    </>
  )
}
