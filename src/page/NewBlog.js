import React, { Component } from "react";
import moment from 'moment'
import {setBlog} from '../data/dataHelper'

export default class NewBlog extends Component{
    constructor(props){
        super(props)
        this.state={
            title:'',
            subTitle:'',
            text:'',
        }
        this.handleSubmit=this.handleSubmit.bind(this)
    }
    changeTitle(input){
        this.setState({title:input})
    }
    changeSubTitle(input){
        this.setState({subTitle:input})
    }
    changeText(input){
        this.setState({text:input})
    }
    async handleSubmit (e){
        e.preventDefault()
        let today = moment().format('YY-MM-DD')
        let time = moment().format('YYMMDDHHMMSS')
        let timeNumber = Number(time)
        const newBlog ={
            id: timeNumber,
            title: this.state.title,
            sub_title:this.state.subTitle,
            post_date:today,
            content:this.state.text,
            comments:[]
        }
        await setBlog(newBlog)
        this.props.history.push('/')

    }
    render() {
        return (
          <div className="NewBlog">
          <form className='blog-form' onSubmit={this.handleSubmit} >
          <label>Title</label>
          <hr/>
          <input onChange={(e) => this.changeTitle(e.target.value)}></input>
          <hr/>
          <label>Sub Title</label>
          <hr/>
          <textarea rows='5' onChange={(e) => this.changeSubTitle(e.target.value)}></textarea>
          <hr/>
          <label>Text</label>
          <hr/>
          <textarea rows='15' onChange={(e) => this.changeText(e.target.value)}></textarea>
          <hr/>
          <button>Post Blog</button>
          </form>
          </div>
        );
      }
}