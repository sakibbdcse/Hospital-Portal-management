import React from 'react'

const ServiceCard = ({ service }) => {
    return (
        <div className="col-md-4 text-center service-card">
            <img src={service.image} alt={service.title} className="img-fluid" />
            <h5>{service.title}</h5>
            <p>{service.description}</p>
        </div>
    )
}

export default ServiceCard