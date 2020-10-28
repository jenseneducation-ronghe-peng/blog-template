import React, { Component } from "react";
import Comment from '../components/Comment'
import CommentForm from '../components/CommentForm'
import {fetchBlogById, setComment} from '../data/dataHelper'

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
        <div>
        <button onClick={()=>this.props.history.goBack()}>Back</button>
        </div>
        <h1>{this.state.blog.title}</h1>
        <h4>{this.state.blog.post_date}</h4>
        <p>{this.state.blog.content}</p>
        <h2>Say some thing</h2>
        <CommentForm 
        blogId={this.state.blog.id}
        callbackFunction ={this.pushComment}
        />
        <h2>Comments</h2>
        {this.state.comments.length !==0?(
            this.state.comments.map((comment)=>(
                <div className='comment-box' key={comment.comment_id}>
                <Comment text={comment.text}/>
                </div>
            ))
        ):(
            <div>
            <h4>No comment. Be the first commenter!</h4>
            </div>
        )}
        </div>
      );
    }
  }