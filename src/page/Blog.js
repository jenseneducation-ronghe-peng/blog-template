import React, { Component } from "react";
import Header from '../components/Header'
import Comment from '../components/Comment'
import CommentForm from '../components/CommentForm'
import {fetchBlogById, setComment} from '../data/dataHelper'
import '../css/Blog.css'

export default class Blog extends Component {
    constructor(props){
        super(props)
        this.state={
            blog:[],
            comments:[]
        }
        this.getBlogById= this.getBlogById.bind(this)
        this.pushComment= this.pushComment.bind(this)
    }
    async getBlogById(){
        const {match:{params}} = this.props
        let id = Number(params.id)
        const data = await fetchBlogById(id)
        const comments = data.comments
        this.setState({
            blog: data,
            comments:comments
        })
    }
    async pushComment(blogId, comment){
        await setComment(blogId, comment)
        this.getBlogById()
    }
    
    componentDidMount(){
        this.getBlogById()
    }
    render() {
        
      return (
        <div className="Blog">
        <Header/>
        <div className='blog-div' style={{marginBottom:'200px'}}>
        <div className='back-btn-div'>
        <button className='button back-btn' onClick={()=>this.props.history.goBack()}>Back</button>
        </div>
        <div className='blog-text-div'>
        <h1 className='blog-text-title'>{this.state.blog.title}</h1>
        <h4 className='blog-text-date'>{this.state.blog.post_date}</h4>
        <p className='blog-text-content'>{this.state.blog.content}</p>
        </div>
        <h2 className='comment-form-title'>Say some thing</h2>
        <CommentForm 
        blogId={this.state.blog.id}
        callbackFunction ={this.pushComment}
        />
        <h3 className='comments-title'>Comments</h3>
        {this.state.comments.length !==0?(
            this.state.comments.map((comment)=>(
                <div className='comment-box' key={comment.comment_id}>
                <Comment text={comment.text}/>
                </div>
            ))
        ):(
            <div>
            <h5>No comment. Be the first commenter!</h5>
            </div>
        )}
        </div>
        </div>
      );
    }
  }