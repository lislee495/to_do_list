import React, { Component } from 'react';

class Signup extends Component(props) {
    constructor(props){
        super(props)
        this.state = {username: "", 
                      password: ""}
    }
    render() {
        return(
            <div className="signin-container">
            <form onSubmit={this.props.handleSubmit(event, "signup")}>
                <label>Username:
                <input type="text" name="username" onChange={this.props.handleUsername}/></label>
                <label>Password
                <input type="password" name="password" onChange={this.props.handlePassword}/></label>
                <input type="submit" value="Submit"/>
            </form>
            </div>
        )
    }
}
export default Signin