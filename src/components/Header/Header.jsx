import React from 'react'
import "./Header.css"

function Header() {
  return (
    <div>   <section className="gym-image-holder">
            <nav>
                <div className="logo"><a href="gym.html">Gym<span>Rat</span></a></div>
                <ul className="nav-bar-one">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Membership</a></li>
                    <li><a href="#">Quick Tour</a></li>
                    <li><a href="#">Login</a></li>
                    <li><a className="register" href="#">Sign Up</a></li>
                </ul>
            </nav>
            <div className="hero">
                <h1 className="hero-h1">i-<span>Fitness</span> <br /> on steroids</h1>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium neque blanditiis recusandae quo.
                </p>
                <a href="#">Quick tour</a>
            </div>
        </section></div>
  )
}

export default Header