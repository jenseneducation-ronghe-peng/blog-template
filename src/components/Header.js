import React, { Component } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import {removeUser} from '../data/dataHelper'
import '../css/Header.css'

export default class Header extends Component {
    constructor(){
        super()
        this.handelLogout=this.handelLogout.bind(this)
    }

    handelLogout(){
        removeUser()
        this.props.callback()
    }

    render() {
      return (
        <header>
        <nav>
        <h1>BLOG TEMPLATE</h1>
        {this.props.logInStatus?(
            <div>
            <button onClick={this.handelLogout}>Log out</button>
            <Link to={`/newblog`}>NEWPOST</Link>
            </div>
            
        ):(
            <Link to={'/login'}><div className='admin'></div></Link>
        )}
        </nav>
        </header>
      );
    }
  }