import React, { Component } from 'react';

class Signin extends Component {
    constructor(props){
        super(props)
        this.state = {username: "", 
                      password: ""}
    }
    handleUsername = (event)=>{
        this.setState({username: event.target.value})
    }
    handlePassword=(event)=>{
        this.setState({password: event.target.value})
    }
    handleSubmit=(event)=>{
        event.preventDefault()
        fetch(`/api/login`, {
        method: 'POST', // or 'PUT'
        body: JSON.stringify({user: this.state}),
        headers: {'Content-Type': 'application/json'}
        }).then(res=>res.json())
        .then(user => this.props.updateCurr(user.id))
    }
    render() {

        return(
            <div className="signin-container">
            <form onSubmit={this.handleSubmit}>
                <label>Username:
                <input type="text" name="username" onChange={()=>this.handleUsername}/></label>
                <label>Password
                <input type="password" name="password" onChange={()=>this.handlePassword}/></label>
                <input type="submit" value="Submit"/>
            </form>
            </div>
        )
    }
}
export default Signin