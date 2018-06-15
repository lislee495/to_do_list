import React, { Component } from 'react';
import List from './List.jsx'
import NewList from './NewList.jsx'


class Home extends Component {
  render() {
    return (
      <div className="home">
        <header className="home-header">
          <h1 className="home-title">Welcome to your to-do list.</h1>
        </header>
        <List/>
        <NewList/>
      </div>
    );
  }
}

export default Home;