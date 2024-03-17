import React from 'react'
import heroImage from '../../assets/images/chair.png'
import Button from '../Button/Button'
import './heder.css'
const MainMenu = () => {
    return (
        <main>
            <div className="row hero align-items-center">
                <div className="col-md-4 offset-1">
                    <h1>Your New Smile Start Here</h1>
                    <small>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        <br />
                        In velit, culpa labore minima officia dicta!
                    </small>
                    <br />
                    <br />
                    <Button link='/' value='Get Appointment' />
                </div>
                <div className="col-md-6">
                    <img src={heroImage} alt="cheir" className="img-fluid" />
                </div>
            </div>
        </main>
    )
}

export default MainMenu