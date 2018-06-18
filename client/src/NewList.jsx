import React, { Component } from 'react';



class NewList extends Component {
  render() {
    return (
      <div className="new-list" onClick={this.props.toggleShowNewList}>+</div>
    );
  }
}

export default NewList;