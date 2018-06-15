import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import './App.css';
import './Signin.jsx'

class App extends Component {
  constructor(){
    super()
    this.state= {
      currentUser: undefined
    }
  }
  handleUsername(event){
    this.setState({username: event.target.value})
}
  handlePassword(event){
      this.setState({password: event.target.value})
  }
  componentDidMount(){
    fetch("/api/v1/current_user")
    .then(response => {
      this.setState({ currentUser: response.body})
    })
  }
  render() {
    return (
      <Router>
        <div className="App">
        {this.state.currentUser ? (
          <div className="logged-in">

          </div>
        ) : 
        (
        <div>  
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/" component={LandingPage} />
        </div>
        )
      }
                
        </div>
      </Router>
    );
  }
}

export default App;
