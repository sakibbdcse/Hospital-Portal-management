import React from 'react'
import featureImage from '../../assets/images/treatment.png'
import Button from '../Button/Button'
const FeatureService = () => {
    return (
        <section className='feature-service pb-0 pb-md-5 my-5'>
            <div className="container mb-5">
                <div className="row mb-5">
                    <div className="col-md-5 md-4 m-md-0">
                        <img src={featureImage} alt="tritment" className="img-fluid" />
                    </div>
                    <div className="col-md-7 align-self-center">
                        <h1>Exceptional Dentar Care, on Our team</h1>
                        <p>Exceptional  service for exceptional results. our team always work pasent  to provide you the best possible care.</p>
                        <p>We are a group of highly trained and experienced professionals who provide you with a variety of services and services that provide you with a variety of services and services that provide you with a variety of services and services that provide you with a variety</p>
                        <Button link='/' value='Learn More' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FeatureService