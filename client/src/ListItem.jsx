import React, { Component } from 'react';

class ListItem extends Component {
    constructor(props) {
        super(props)
        
    }
  render() {
    return (
      <div className="list-item">
        <input type="text" name="What to do..." onChange={()=>this.props.handleItemUpdate(this.props.index)}/>
      </div>
    );
  }
}

export default ListItem;