import React, { Component } from 'react';



class NewList extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div className="new-list" onClick={this.props.toggleShowNewList}>+
      </div>
    );
  }
}

export default NewList;