import React, { Component } from 'react';



class NewListItem extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div className="new-list-item" onClick={this.props.handleAddNewListItem}>+
      </div>
    );
  }
}

export default NewListItem;