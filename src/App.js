import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './page/Home'
import Header from './components/Header'
import Blog from './page/Blog';
import NewBlog from './page/NewBlog'
import Login from './page/Login'
import {checkLoginStatus} from './data/dataHelper'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Component } from 'react';

export default class APP extends Component{
  constructor(){
    super()
    this.state={
      logInStatus:false
    }
    this.checkLogin=this.checkLogin.bind(this)
    this.updateStatus= this.updateStatus.bind(this)
  }
  async checkLogin(){
    let res = await checkLoginStatus()
    this.setState({
      logInStatus: res
    })
  }
  updateStatus(){
    this.checkLogin()
  }
  handelCallback(){
    this.checkLogin()
  }
  componentDidMount(){
    this.checkLogin()
  }
  render(){
    return (
      <div className="App">
      <Router>
      <Header logInStatus={this.state.logInStatus} callback={this.updateStatus}/>
        <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route exact path='/blog/:id' component={Blog}></Route>
        <Route exact path='/newblog' component={NewBlog}></Route>
        <Route exact path='/login' component={Login}></Route>
        </Switch>
      </Router>
      </div>
    );
  }
}
/*function App() {
  return (
    <div className="App">
    <Router>
    <Header/>
      <Switch>
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/blog/:id' component={Blog}></Route>
      <Route exact path='/newblog' component={NewBlog}></Route>
      <Route exact path='/login' component={Login}></Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;*/
