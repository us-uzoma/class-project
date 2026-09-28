import React from 'react'
import '../../src/index.css'
import bgimage from "../assets/bg-image.jpg";
import imageone from "../assets/image (1).svg";
import imagetwo from "../assets/image (2).svg";
import imagethree from "../assets/image (3).svg";



const ContactUsScreen = () => {
  return (
    <div>
        {/* <!-- HERO SECTION --> */}
    <div className="row">
        <img className="hero-img" src={bgimage} alt="i-Fitness"/>
        <div className="aside">
            <h2>WHY GymRat</h2>
            <h1>Unique experiences tailored to your lifestyle</h1>
            <div className="hero-col">
                <img src={imageone} alt=""/>
                <div className="hero-col-note">
                    <h3>Wide Range of Fitness Programs</h3>
                    <p>
                        Our timetable offers a wide range of low to high-intensity fitness programmes to suit your fitness lifestyle. There’s something for everyone!
                    </p>
                </div>
            </div>
            <div className="hero-col">
                <img src={imagetwo} alt=""/>
                <div className="hero-col-note">
                    <h3>Supportive Community</h3>
                    <p>
                        Enjoy a sense of belonging in a community that supports your fitness goals and reminds you that you are not alone!
                    </p>
                </div>
            </div>
            <div className="hero-col">
                <img src={imagethree} alt=""/>
                <div className="hero-col-note">
                    <h3>Ultra-Modern Facilities</h3>
                    <p>
                        We have over 200 professionally certified personal trainers and ultra-modern facilities across all our branches in Lagos, Port Harcourt, Abuja and Ibadan.
                    </p>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default ContactUsScreen