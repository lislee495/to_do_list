import React, { Component } from 'react';
import { Link} from 'react-router-dom';


class Landing extends Component {
  render() {
    return (
      <div className="landing">
        <header className="landing-header">
          <h1 className="landing-title">Welcome to your to-do list.</h1>
        </header>
        <p className="landing-intro">
          To get started, <Link to='/signup'>sign up</Link> or 
          <Link to='/login'>login</Link>.
        </p>
      </div>
    );
  }
}

export default Landing;