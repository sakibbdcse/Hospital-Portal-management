import React from 'react'
import people1 from '../../assets/images/people1.png'
import people2 from '../../assets/images/people2.png'
import people3 from '../../assets/images/people3.png'
import TestimonialCard from './TestimonialCard'
import './testimonial.css'
const TestimonialInfo = [
    {
        name: 'Mark Down',
        title: "CEO at MarkDown Inc.",
        queo: "this is a testimonial at MarkDown Inc and will be available tritment",
        from: "canada",
        image: people1
    },
    {
        name: 'wilson megi',
        title: "Teacher",
        queo: "this is a testimonial at wilson megi and will be available tritment",
        from: "USA",
        image: people2
    },
    {
        name: 'Begom Aliza',
        title: "CEO at Mother Grupe",
        queo: "this is a testimonial at Begom Aliza and will be available tritment",
        from: "Bangladash",
        image: people3
    },
]
const Testimonial = () => {
    return (
        <section className='testimonial my-5 py-5'>
            <div className="container">
                <div className="section-heder">
                    <h5>Testimonials</h5>
                    <h1>Our Patient <br /> Feedbacks</h1>
                </div>
                <div className="card-testimonial row mt-5 justify-content-around" >
                    {TestimonialInfo.map(testimonial => <TestimonialCard testimonial={testimonial} />)}
                </div>
            </div>
        </section>
    )
}

export default Testimonial