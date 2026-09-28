import React from 'react'
import '../../src/index.css'
import imgnine from '../assets/image (9).svg'
import imgseven from '../assets/image (7).svg'
import imgten from '../assets/image (10).svg'




const ServicesScreen = () => {
  return (
    <div>
        {/* <!-- CALL-TO-ACTION --> */}
    <div className="cta">
        <h1>Explore Our all inclusive classes</h1>
        <div className="row cta-bg">
            <div className="cta-card">
                <img src={imgnine} alt="yoga i-FITNESS"/>
                <h2>YOGA</h2>
                <p>
                    Our yoga classes keeps you centered mentally and physically.
                </p>
            </div>
            <div className="cta-card">
                <img src={imgseven} alt="cardio i-FITNESS"/>
                <h2>CORE CARDIO</h2>
                <p>
                    Our core cardio classes are essentially designed to help you reach your fitness goals.
                </p>
            </div>
            <div className="cta-card">
                <img src={imgten} alt="tabata i-Fitness"/>
                <h2>TABATA</h2>
                <p>
                    A high-intensity interval training (HIIT) workout, featuring exercises that lasts minutes.
                </p>
            </div>
        </div>
    </div>

    </div>
  )
}

export default ServicesScreen