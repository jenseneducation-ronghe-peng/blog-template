import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './page/Home'
import Blog from './page/Blog';
import NewBlog from './page/NewBlog'
import Login from './page/Login'
import Footer from './components/Footer'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
    <Router>
      <Switch>
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/blog/:id' component={Blog}></Route>
      <Route exact path='/newblog' component={NewBlog}></Route>
      <Route exact path='/login' component={Login}></Route>
      </Switch>
      <Footer/>
    </Router>
    </div>
  );
}

export default App;
