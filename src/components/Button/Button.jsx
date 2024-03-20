import React from 'react'
import './button.css'
import { Link } from 'react-router-dom'
const Button = (btnInfo) => {
    return (
        <Link to={btnInfo.Link} className='btn bg-primary text-uppercase'>{btnInfo.value}</Link>
    )
}

export default Button