import React, { Component } from 'react';

class ListItem extends Component {
  render() {
    return (
      <div className="list-item">
        <input type="checkbox" 
        onChange={(e)=>this.props.handleItemCompleted(e, this.props.index)}
        checked={this.props.info ? this.props.info.completed : undefined}/>
        <input type="text"
        onChange={(e)=>this.props.handleItemDescription(e, this.props.index)}
        value={this.props.info ? this.props.info.description : undefined}/>
      </div>
    );
  }
}

export default ListItem;