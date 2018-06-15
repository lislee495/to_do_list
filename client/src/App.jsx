import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import './App.css';
import './Signin.jsx'
import './Signup.jsx'

class App extends Component {
  constructor(){
    super()
    this.state= {
      currentUser: undefined
    }
    this.handlePassword = this.handlePassword.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleUsername(event){
    this.setState({username: event.target.value})
}
  handlePassword(event){
    this.setState({password: event.target.value})
  }
  handleSubmit(event, type){
    event.preventDefault()
    fetch(`/api/v1/${type}`, {
      method: 'POST', // or 'PUT'
      body: JSON.stringify(this.state)
    }).then(res=>res.json())
    .then(name => console.log(name))
  }
  componentDidMount(){
    fetch("/api/v1/current_user")
    .then(response => {
      this.setState({ currentUser: response.json()})
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
          <Route path="/login" component={Signin} 
          handleSubmit={handleSubmit} 
          handlePassword={this.handlePassword}
          handleUsername={this.handleUsername}/>
          <Route path="/signup" component={Signup} 
          handleSubmit={handleSubmit} 
          handlePassword={this.handlePassword}
          handleUsername={this.handleUsername}/>
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
