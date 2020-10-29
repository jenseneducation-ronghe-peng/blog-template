import React, { Component } from "react";
import moment from 'moment'


export default class CommentForm extends Component{
    constructor(props){
        super(props)
        this.state={
            text:'',
            error:false,
            errorMsg:'Say something first.'
        }
        this.handleComment=this.handleComment.bind(this)
    }
    changeComment(text) {
        this.setState({
            text:text
        })
    }
    async handleComment(){
        let text = this.state.text
        if(text === "" || text=== null){
            this.setState({error:true})
        }else{
            this.setState({error:false})
            let blogId= this.props.blogId
            let time = moment().format('YYMMDDHHMMSS')
            const comment ={
                comment_id:`${blogId}-${time}`,
                text:text
            }
            //await setComment(blogId,comment)
            this.setState({text:''})
            this.props.callbackFunction(blogId,comment)
            
        }
    }
    render(){
        return(
            <div className='CommentForm'>
            {this.state.error?(<p>{this.state.errorMsg}</p>):null}
          <textarea className='comment-input' value={this.state.text} onChange={(e) => this.changeComment(e.target.value)} rows={3}></textarea>
          
          <button className='button' onClick={this.handleComment}>Comment</button>
            </div>
        )
    }
}