import React from 'react'
import './heder.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg ">
            <div className="container">
                <a className="navbar-brand text-primary" href="/">Hosital Portal</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link ms-5 active" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link ms-5" to="/appoinment">appoinment</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link ms-5" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link ms-5" href="/">Dental Sevice</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link ms-5 text-light" href="/">Reviws</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link ms-5 text-light" href="/">Blog</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link ms-5 text-light" href="/">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar