import { NavLink } from 'react-router-dom';
import './App.css';


import React from 'react';

export const Nav = () => {
  return (
    <div className="App">
      <div className="container">
         <div className="nav">
          <div className="navbar">
                <ul className="navbar-list">
                 <NavLink to="/" className="logo">keshav</NavLink>
                    {/* <li>
                        <NavLink to="/">Keshav</NavLink>
                    </li> */}
                    <div className="link">

                    <li>
                        <NavLink to="/about">About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/project">Projects</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact">Contact</NavLink>
                    </li>
                    </div>
                </ul>
          </div>
         </div>
      </div>
    </div>
  );
}




