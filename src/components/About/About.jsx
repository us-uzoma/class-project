import React from 'react'
import './About.css'
import about from "../../assets/about.png"


const About = () => {
  return (
    <div>
        {/* <!-- ABOUT --> */}
     <section className="about">
        <div className="about-text">
            <h4>About Us</h4>
            <h2>Building Skills, <br />Building Futures</h2>
            <p>
                At morning className Digital Skill Academy, We provide practial training that helps you create a future.
            </p>
            <ul>
                <li>&#10004; Practical Hands-on Learning</li>
                <li>&#10004; Expert Instructors</li>
                <li>&#10004; Flexible Learning</li>
            </ul>
            <a href="#" className="btn">Learn More</a>
        </div>
        <div className="about-image">
            <img src={about} alt="about us"/>
        </div>
     </section>
    </div>
  )
}

export default About