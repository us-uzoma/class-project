import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'




function Header() {
  return (
    <div>
        <section>
            <header>
                <div className="logo"><a href="gym.html">Gym<span>Rat</span></a></div>
                <ul className="nav-bar-one">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="about-us">About</Link>
                    </li>
                    <li>
                        <Link to="contact-us">Contact Us</Link>
                    </li>
                    <li>
                        <Link to="services">Services</Link>
                    </li>
                    <li><a href="#">Login</a></li>
                    <li><a className="register" href="#">Sign Up</a></li>
                </ul>
            </header>
        </section>
             
        
            
    </div>
  )
}

export default Header