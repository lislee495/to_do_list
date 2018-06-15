import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Signin from './Signin.jsx'
import Signup from './Signup.jsx'
import Landing from './Landing.jsx'
import Home from './Home.jsx'

class App extends Component {
  constructor(){
    super()
    this.state= {
      currentUser: undefined
    }
  }
  componentDidMount(){
    fetch("/api/v1/current_user")
    .then(response => {
      console.log(response.data)
    })
  }
  render() {
    return (
      <Router>
        <div className="App">
        {this.state.currentUser ? (
          <div className="logged-in">
          <Route path="/" component={Home}/>
          </div>
        ) : 
        (
        <div> 
          <Route path="/login" component={Signin} />
          <Route path="/signup" component={Signup}/>
          <Route path="/" component={Landing} />
        </div>
        )
      }     
        </div>
      </Router>
    );
  }
}

export default App;
