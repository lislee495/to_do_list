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
    this.updateCurr = this.updateCurr.bind(this)
  }
  updateCurr(id){
    this.setState({currentUser: id})
  }
  componentDidMount(){
    fetch("/api/v1/current_user")
    .then(response => response.json())
    .then(res => {
      this.setState({currentUser: res})
    })
  }
  shouldComponentUpdate(nextProps, nextState){
    return (this.state.currentUser !== nextState.currentUser)    
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
          <Route path="/login" render={(props) => <Signin {...props} updateCurr={this.updateCurr} />}/>
          <Route path="/signup" render={(props) => <Signup {...props} updateCurr={this.updateCurr} />}/>
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
