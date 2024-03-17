import React from 'react'

const TestimonialCard = ({ testimonial }) => {
    return (
        <div>
            <p>{testimonial.queo}</p>
            <div d>
                <img src={testimonial.image} alt={testimonial.name} className="img-fluid" />
                <h3>{testimonial.name}</h3>
                <small>{testimonial.jobTitle}</small>
            </div>
        </div>
    )
}

export default TestimonialCard