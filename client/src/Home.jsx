import React, {Component} from 'react';
import List from './List.jsx'
import NewList from './NewList.jsx'
import NewListForm from './NewListForm.jsx'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showNewListForm: false,
      lists: []
    }
    this.toggleShowNewList = this
      .toggleShowNewList
      .bind(this)
  }
  toggleShowNewList() {
    this.setState({
      showNewListForm: !this.state.showNewListForm
    })
  }
  componentDidMount(){
    fetch(`/api/users/${this.props.userId}/lists`)
    .then(res => res.json())
    .then(lists => {
      console.log(lists)
      this.setState({lists: lists})
    })
  }
  render() {
    return (
      <div className="home">
        <header className="home-header">
          <h1 className="home-title">Welcome to your to-do list.</h1>
        </header>
        <div className="content">
          {this.state.showNewListForm
            ? <NewListForm
                toggleShowNewList={this.toggleShowNewList}
                userId={this.props.userId}/>
            : <NewList toggleShowNewList={this.toggleShowNewList}/>}

          {this.state.lists.length && this.state.lists.map(ele => {
            return <List key={ele.id} info={ele} userId={this.props.userId}/>
          })}
        </div>
      </div>
    );
  }
}

export default Home;