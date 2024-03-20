import React from 'react'
import { CiLocationOn } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa";
import { FaGooglePlus } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import './footer.css'
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row justify-content-around justify-content-center align-content-center">
                    <div className="col-md-3 text-left">
                        <h5 className='cm-color'>chackup</h5>
                        <h6>Emargency Dental Care</h6>
                        <h6>Check up</h6>
                        <h6>Treatment of personal Diseases</h6>
                        <h6>Truth Extraction</h6>
                        <h6>Check up</h6>
                    </div>
                    <div className="col-md-3 text-left">
                        <h5 className='cm-color'>Services</h5>
                        <h6>Check up</h6>
                        <h6>Treatment of personal Diseases</h6>
                        <h6>Truth Extraction</h6>
                        <h6>Check up</h6>
                    </div>
                    <div className="col-md-3 text-left">
                        <h5 className='cm-color'>Oral Helth</h5>
                        <h6>Check up</h6>
                        <h6>Treatment of personal Diseases</h6>
                        <h6>Truth Extraction</h6>
                        <h6>Check up</h6>
                    </div>
                    <div className="col-md-3 text-left">
                        <h5 className='cm-color'>Our Address</h5>
                        <h6><CiLocationOn className='cm-color' /> Dhaka, Bangladash</h6>
                        <div className='mb-4'>
                            <Link to='/apoinment' relative="path" className='btn text-uppercase'><FaFacebook className='cm-color fs-2' /></Link> <FaGooglePlus className='cm-color fs-2' /> <FaLinkedin className='cm-color fs-2' /></div>
                        <p>Call Now</p>
                        <Link to='/' relative="path" className='btn bg-primary text-uppercase text-white'>+8801777777</Link>
                    </div>
                    <div className='text-center'><p>CopyRight {(new Date().getFullYear())} All Rigiht Reserved</p> <a href='https://www.linkedin.com/in/sakib6619/'>Developed By <b>Sakib</b></a></div>
                </div>
            </div>
        </footer>
    )
}

export default Footer