
import React from 'react';
import { Link } from 'react-router-dom'


export default function Navbar1(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">{props.title}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item mx-3">
              <Link className="nav-a" aria-current="page" to="/Home">Home</Link>
            </li>
            <li className="nav-item mx-3">
              <Link className="nav-a" to="/About">About</Link>
            </li>
            
          </ul>
          </div>
          

          <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Toggle Mode</label>
          </div>
        </div>
        
     
    </nav>
  )
}

