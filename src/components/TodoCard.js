import React, { Component } from 'react';

class TodoCard extends Component {
  render() {
    const { title, body } = this.props
    return (
      <div>
        <h4>{title}</h4>
        <p>{body}</p>
      </div>
    );
  }
}

export default TodoCard;