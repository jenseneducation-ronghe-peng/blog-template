import React, { Component } from "react";
import {setUser} from '../data/dataHelper'

export default class Login extends Component{
    constructor(props){
        super(props)
        this.state={
            error:false,
            errorMgs:'Ops, wrong user name or password',
            userName:'admin123',
            password:'admin123',
        }
        this.handelLogin=this.handelLogin.bind(this)
    }
    changeUser(user){
        this.setState({userName:user})
    }
    changePass(pass){
        this.setState({password:pass})
    }
   async handelLogin(){
        console.log('handle login')
        const userName='admin123'
        const password='admin123'
        if(this.state.userName === userName && this.state.password === password){
            this.setState({error:false})
            setUser(userName)
            this.props.history.push('/')
            window.location.reload()
        }else{
            this.setState({error:true})
        }
    }
    render(){
        return(
            <div className='Login'>
            <label>User Name</label>
            <hr/>
            <input value={this.state.userName} onChange={(e) => this.changeUser(e.target.value)}></input>
            <hr/>
            <label>Password</label>
            <hr/>
            <input type='password' value={this.state.password} onChange={(e) => this.changePass(e.target.value)}></input>
            <hr/>
            {this.state.error?(
                <p>{this.state.errorMgs}</p>
            ):null}
            <button onClick={this.handelLogin}>Log in</button>
            </div>
        )
    }
}