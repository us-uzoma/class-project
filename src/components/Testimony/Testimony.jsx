import React from 'react'
import './Testimony.css'
import profile from "../../assets/profile (1).jpg"
import profiler from "../../assets/profile (2).jpg"
import profilerr from "../../assets/profile (3).jpg"



const Testimony = () => {
  return (
    <div>
        {/* <!-- Testimonies --> */}
     <section className="testimonials">
        <h4>TESTIMONIES</h4>
        <h2>Feedback from our students</h2>
        <div className="testimonial-container">
            <div className="card">
                <img src={profile} alt="profile card"/>
                <h2>Oluchi Iwueze</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, officiis officia facere placeat repellat nesciunt maiores ratione reprehenderit est, totam debitis! Ullam odit rem aut cupiditate impedit accusantium? Deleniti, officiis.
                </p>
            </div>
            <div className="card">
                <img src={profiler} alt="profile card"/>
                <h2>Taiye Taiwo</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, officiis officia facere placeat repellat nesciunt maiores ratione reprehenderit est, totam debitis! Ullam odit rem aut cupiditate impedit accusantium? Deleniti, officiis.
                </p>
            </div>
            <div className="card">
                <img src={profilerr} alt="profile card"/>
                <h2>Olugbenga Femi</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, officiis officia facere placeat repellat nesciunt maiores ratione reprehenderit est, totam debitis! Ullam odit rem aut cupiditate impedit accusantium? Deleniti, officiis.
                </p>
            </div>
        </div>
     </section>
    </div>
  )
}

export default Testimony


