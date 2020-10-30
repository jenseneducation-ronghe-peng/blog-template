/* eslint-disable react/prop-types */
import React, { Component } from 'react'
import { setUser } from '../data/dataHelper'
import '../css/Login.css'

export default class Login extends Component {
  constructor (props) {
    super(props)
    this.state = {
      error: false,
      errorMgs: 'Ops, wrong user name or password',
      userName: 'admin123',
      password: 'admin123'
    }
    this.handelLogin = this.handelLogin.bind(this)
  }

  // save user name in this.state
  changeUser (user) {
    this.setState({ userName: user })
  }

  // save user password in this.state
  changePass (pass) {
    this.setState({ password: pass })
  }

  // log in and go back to home page
  async handelLogin () {
    console.log('handle login')
    const userName = 'admin123'
    const password = 'admin123'
    if (this.state.userName === userName && this.state.password === password) {
      this.setState({ error: false })
      setUser(userName)
      this.props.history.push('/')
    } else {
      this.setState({ error: true })
    }
  }

  render () {
    return (
        <div className='Login row'>
          <label className='login-lable'>User Name</label>
          <input className='login-input' value={this.state.userName} onChange={(e) => this.changeUser(e.target.value)}></input>
          <label className='login-lable'>Password</label>
          <input className='login-input' type='password' value={this.state.password} onChange={(e) => this.changePass(e.target.value)}></input>
          {this.state.error
            ? <p>{this.state.errorMgs}</p>
            : null
          }
          <div className='login-btn-div'>
            <button className='button' onClick={this.handelLogin}>Log in</button>
            <button className='button' onClick={() => this.props.history.goBack()}>Maybe next time</button>
          </div>
        </div>
    )
  }
}
