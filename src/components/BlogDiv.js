/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
import React, { Component } from 'react'
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Link } from 'react-router-dom'

export default class BlogDiv extends Component {
  render () {
    const { id, title, sub_title, post_date } = this.props
    return (
        <div className="BlogDiv" id={id}>
          <div className='blog-content'>
            <p>{post_date}</p>
            <div className='blog-title-div'>
              <h2 className='blog-title'>{title}</h2>
            </div>
            <p>{sub_title}</p>
          </div>
          <Link to={`blog/${id}`}><h5 className='read-more'>Read more</h5></Link>
        </div>
    )
  }
}
