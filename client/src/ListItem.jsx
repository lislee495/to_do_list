import React, { Component } from 'react';

class ListItem extends Component {
  render() {
    return (
      <div className="list-item">
        <input type="checkbox" onChange={(e)=>this.props.handleItemCompleted(e, this.props.index)}/>
        <input type="text" name="What to do..." onChange={(e)=>this.props.handleItemDescription(e, this.props.index)}/>
      </div>
    );
  }
}

export default ListItem;