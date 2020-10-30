/* eslint-disable react/prop-types */
import React, { Component } from 'react'
import Header from '../components/Header'
import moment from 'moment'
import { setBlog } from '../data/dataHelper'
import '../css/NewBlog.css'

export default class NewBlog extends Component {
  constructor (props) {
    super(props)
    this.state = {
      title: '',
      subTitle: '',
      text: '',
      error: false,
      errorMsg: 'Ops, you need to fill in title, subtitle and text!'
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  // save title to this.state
  changeTitle (input) {
    this.setState({ title: input })
  }

  // save sub-title to this.state
  changeSubTitle (input) {
    this.setState({ subTitle: input })
  }

  // save text to this.state
  changeText (input) {
    this.setState({ text: input })
  }

  // push new blog to localStorage
  async handleSubmit (e) {
    e.preventDefault()
    const today = moment().format('YY-MM-DD')
    const time = moment().format('YYMMDDHHMMSS')
    const timeNumber = Number(time)
    const title = this.state.title
    const subTitle = this.state.subTitle
    const text = this.state.text
    const newBlog = {
      id: timeNumber,
      title: title,
      sub_title: subTitle,
      post_date: today,
      content: text,
      comments: []
    }
    if (title !== '' && subTitle !== '' && text !== '') {
      this.setState({
        error: false
      })
      await setBlog(newBlog)
      this.props.history.push('/')
    } else {
      this.setState({
        error: true
      })
    }
  }

  render () {
    return (
        <div className="NewBlog">
          <Header/>
          <div style={{ marginBottom: '100px', marginTop: '2rem' }}>
            <h3 style={{ color: '#c79288' }}>New Blog</h3>
            <form className='blog-form' onSubmit={this.handleSubmit} >
              <label className='newblog-lable'>Title</label>
              <input className='newblog-input newblog-title' onChange={(e) => this.changeTitle(e.target.value)}></input>
              <label className='newblog-lable'>Sub Title</label>
              <textarea className='newblog-input' rows='5' onChange={(e) => this.changeSubTitle(e.target.value)}></textarea>
              <label className='newblog-lable'>Text</label>
              <textarea className='newblog-input' rows='15' onChange={(e) => this.changeText(e.target.value)}></textarea>
              {this.state.error
                ? <p>{this.state.errorMsg}</p>
                : null
              }
              <button className='button'>Post Blog</button>
              </form>
          </div>
        </div>
    )
  }
}
