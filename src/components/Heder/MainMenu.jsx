import React from 'react'
import heroImage from '../../assets/images/chair.png'
import './heder.css'
import { Link } from 'react-router-dom'
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
                    <Link to='/appoinment' relative="path" className='btn bg-primary text-uppercase text-white'>Get Appointment</Link>
                </div>
                <div className="col-md-6">
                    <img src={heroImage} alt="cheir" className="img-fluid" />
                </div>
            </div>
        </main>
    )
}

export default MainMenu