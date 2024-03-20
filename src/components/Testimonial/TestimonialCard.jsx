import React from 'react'
import './testimonial.css';
const TestimonialCard = ({ testimonial }) => {
    return (
        <div className='col-md-3 testimonial-card-info bg-body-secondary text-center'>
            <p>{testimonial.queo}</p>
            <div>
                <img src={testimonial.image} alt={testimonial.name} className="img-fluid" />
                <h3>{testimonial.name}</h3>
                <small>{testimonial.jobTitle}</small>
                <h6>{testimonial.title}</h6>
                <p>{testimonial.from}</p>
            </div>
        </div>
    )
}

export default TestimonialCard