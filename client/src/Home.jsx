import React, { Component } from 'react';
import List from './List.jsx'
import NewList from './NewList.jsx'
import NewListForm from './NewListForm.jsx'


class Home extends Component {
  constructor(){
    super()
    this.state = {
      showNewListForm: false
    }
  }
  render() {
    return (
      <div className="home">
        <header className="home-header">
          <h1 className="home-title">Welcome to your to-do list.</h1>
        </header>
        <div className="content">
        {this.state.showNewListForm ? <NewListForm/> : <NewList/>}
        <List/>
        </div>
      </div>
    );
  }
}

export default Home;