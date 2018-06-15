import React, { Component } from 'react';
import { Link} from 'react-router-dom';
import './App.css';
import './Signin.js'

class Signin extends Component {
    constructor(){
        super()
        this.state = {username: "", 
                      password: ""}
    }
    render() {
        return(
            <div className="signin-container">
            <form>
                <label>Username:
                <input type="text" name="username"/></label>
                <label>Password
                <input type="password" name="password"/></label>
                <input type="submit" value="Submit"/>
            </form>
            </div>
        )
    }

}