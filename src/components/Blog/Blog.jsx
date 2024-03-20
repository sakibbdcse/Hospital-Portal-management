import React from 'react'
import './blog.css'
import BlogCard from './BlogCard'
const BlogData = [
    {
        name: 'Rashed Khan',
        date: '12-12-2015',
        image: "",
        title: '2 times of brush in a day can keep your healthy',
        discription: 'it is a logng established fact that by the readable content of a lot layout of the point'
    },
    {
        name: 'Rashed Khan',
        date: '12-12-2015',
        image: "",
        title: '2 times of brush in a day can keep your healthy',
        discription: 'it is a logng established fact that by the readable content of a lot layout of the point'
    },
    {
        name: 'Rashed Khan',
        date: '12-12-2015',
        image: "",
        title: '2 times of brush in a day can keep your healthy',
        discription: 'it is a logng established fact that by the readable content of a lot layout of the point'
    },
]
const Blog = () => {
    return (
        <section className='blog-section mt-5'>
            <div className="container">
                <div className="row text-center justify-content-around">
                    <h5 className='cm-color'>our blogs</h5>
                    <h1>From Our Blog news</h1>
                    {BlogData.map(blog => (<BlogCard blog={blog} />))}
                </div>
            </div>
        </section>
    )
}

export default Blog