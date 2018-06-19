import React, { Component } from 'react';
import ListItem from './ListItem'
class List extends Component {
  constructor(props){
    super(props)
    this.state = {
      items: []
    }
  }
  componentDidMount(){
    console.log(this.props.info.id)
    fetch(`/api/users/${this.props.userId}/lists/${this.props.info.id}/items`)
    .then(res => res.json())
    .then(items => {
      this.setState({items: items})
    })
  }
  // handleItemDescriptionUpdate=(e, id)=>{
  //   fetch(`/api/users/${this.props.userId}/lists/${listId}/items/${info.id}`, {
  //     method: 'POST', // or 'PUT'
  //     body: JSON.stringify({item: item}),
  //     headers: {
  //         'Content-Type': 'application/json'
  //     }
  //   })
  // }
  // handleItemCompletedUpdate=(e, info)=>{

  //   fetch(`/api/users/${this.props.userId}/lists/${listId}/items/${info.id}`, {
  //     method: 'POST', // or 'PUT'
  //     body: JSON.stringify({item: item}),
  //     headers: {
  //         'Content-Type': 'application/json'
  //     }
  //   })
  // }
  render() {
    const {title, description, created_at} = this.props.info
    return (
      <div className="list">
        <header className="list-header">
          <h4 className="list-title">{title}</h4>
        </header>
        <p className="list-description">
          {description}
          Created at: {created_at}
        </p>
        {this.state.items.map(ele => {
          return <ListItem info={ele} key={ele.id}/>
        })}
      </div>
    );
  }
}

export default List;