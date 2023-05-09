import React from 'react'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <>
       <Navbar />
      <section className="home ">
       
        <div className="home-content d-flex flex-column justify-content-center align-items-center">
          <p className="welcome fs-4">Welcome</p>
        <h2 className="title">We are <span>Salesforce</span>  Developers</h2>
        </div>
      </section>
    </>
  )
}
