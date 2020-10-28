import React, { Component } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

export default class BlogDiv extends Component {
    
    render() {
        const {id, title, sub_title, post_date} = this.props
      return (
        <div className="BlogDiv" id={id}>
        <h5>{post_date}</h5>
        <h2>{title}</h2>
        <h6>{sub_title}</h6>
        <Link to={`blog/${id}`}><button>Read more</button></Link>
        </div>
      );
    }
  }