import React from 'react'
import './service.css'
import service1 from '../../assets/images/fluoride.png'
import service2 from '../../assets/images/cavity.png'
import service3 from '../../assets/images/whitening.png'
import ServiceCard from './ServiceCard'
const ServiceInfo = [
    {
        image: service1,
        title: "Fluoride Treatment",
        description: "Our fluoride treatment is available for treatment at the treatment center of the future.",
    },
    {
        image: service2,
        title: "cavity Filling",
        description: "Our cavity Filling treatment is available for treatment at the treatment center of the future.",
    },
    {
        image: service3,
        title: "Teath whitening",
        description: "Our Teath whitening treatment is available for treatment at the treatment center of the future.",
    }
]
const Service = () => {
    return (
        <section className='mt-5'>
            <div className="text-center">
                <h4>Our Services</h4>
                <h2>Sevices We  Provide</h2>
            </div>
            <div className='w-100 d-flex justify-content-center'>
                <div className="w-75 row">
                    {ServiceInfo.map(service => <ServiceCard service={service} />)}
                </div>
            </div>
        </section>
    )
}

export default Service