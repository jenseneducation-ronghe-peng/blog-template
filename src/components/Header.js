import React, { Component } from 'react'
import Nav from './Nav'
import { checkLoginStatus, removeUser } from '../data/dataHelper'
import '../css/Header.css'

export default class Header extends Component {
  constructor () {
    super()
    this.state = {
      logInStatus: false
    }
    this.handelLogout = this.handelLogout.bind(this)
  }

  // check if user is loged in
  async checkLogin () {
    const res = await checkLoginStatus()
    this.setState({
      logInStatus: res
    })
  }

  // log out and remove user data from localStorage
  handelLogout () {
    removeUser()
    window.location.replace('/')
    this.checkLogin()
  }

  componentDidMount () {
    this.checkLogin()
  }

  render () {
    return (
        <header>
            <Nav
        logInStatus={this.state.logInStatus}
        logOutCallback={this.handelLogout}
        />
        </header>
    )
  }
}
