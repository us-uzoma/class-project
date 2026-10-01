import React from 'react'
import './Cta.css'
import { Link } from 'react-router-dom'

const Cta = () => {
  return (
    <div>
        {/* <!-- CTA --> */}
     <section className="cta">
        <div className="cta-content">
            <h2>Ready To Start Your Learning Journey?</h2>
            <p>
                Join us today and start learning practical digital skills that can transform your future.
            </p>
            <Link to='/sign-up' className='cta-button'>Get Started</Link>
        </div>
     </section>
    </div>
  )
}

export default Cta


