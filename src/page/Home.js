import React, { Component } from "react";
import BlogDiv from '../components/BlogDiv'
import {fetchBlogs} from '../data/dataHelper'
//import Blog from "./Blog";

export default class Home extends Component {
    constructor(props){
        super(props)
        this.state ={
            blogs:[]
        }
    }
    async getBlogs(){
        const data = await fetchBlogs()
        let reversedData=data.reverse()
        this.setState({
            blogs: reversedData,
        })
    }
    componentDidMount(){
        this.getBlogs()
    }
    
    render() {
      return (
        <div className="Home">
        {this.state.blogs?(
            <div className='row blog-cards'>
            {this.state.blogs.length !== 0 ? 
                this.state.blogs.map((blog)=>(
                        <div className='blog-card row-item col-10 col-md-5 col-lg-5 col-xl-5' 
                        key={blog.id}>
                        <BlogDiv 
                        id={blog.id}
                        title={blog.title}
                        sub_title={blog.sub_title}
                        post_date={blog.post_date}
                        />
                        </div>
                )):null}
            </div>
        ):(null)}
        </div>
      );
    }
  }