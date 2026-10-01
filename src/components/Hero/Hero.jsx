import React from 'react'
import "./Hero.css"
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div>
       <section className="gym-image-holder">
        <div className="hero">
            <h1 className="hero-h1">i-<span>Fitness</span> <br /> on steroids</h1>
            <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium neque blanditiis recusandae quo.
            </p>
            <Link to='/sign-up'>Get Started</Link>
        </div>

       </section>




        
    </div>
  )
}

export default Hero