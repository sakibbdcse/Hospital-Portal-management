import React from 'react'
import './blog.css'
const BlogCard = ({ blog }) => {
    return (
        <div className='col-md-3 mt-5 blog-info'>
            <h5>{blog.name}</h5>
            <small>{blog.date}</small>
            <h6>{blog.title}</h6>
            <p>{blog.discription}</p>
        </div>
    )
}

export default BlogCard