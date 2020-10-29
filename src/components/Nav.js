import React, { Component } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

export default class Nav extends Component{
    render() {
        return (
          <nav>
          {this.props.logInStatus?(
              <div className='nav row'>
              <Link to={'/'}><div className='logo'></div></Link>
          <h2 className='header-title'>BLOG TEMPLATE</h2>
              <div className='nav-div row'>
              <Link style={{textDecoration:'none'}} to={`/newblog`}>
              <div className='create'></div>
              <h6 style={{color:'#c79288'}}>New Blog</h6>
              </Link>
              <div style={{cursor:"pointer"}}>
              <div className='logout' onClick={this.props.logOutCallback}></div>
              <h6 style={{color:'#c79288'}}>Log Out</h6>
              </div>
              </div>
              
              </div>
              
          ):(
              <div className='nav row'>
              <Link to={'/'}><div className='logo'></div></Link>
          <h1 className='header-title'>BLOG TEMPLATE</h1>
              <Link to={'/login'} style={{textDecoration:'none'}}>
              <div className='admin'></div>
              <h6 style={{color:'#c79288'}}>Log In</h6>
              </Link>
              </div>
          )}
          </nav>
        );
      }
}