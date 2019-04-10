import React, { Component } from 'react';
import todoService from '../service/todoService';
import { withTodos } from '../Provider/TodosProv'; 

class TodoCard extends Component {


  deleteTodo = async () => {
    const { id, getAllTodos } = this.props
    try {
      await todoService.deleteTodo(id);
      getAllTodos()
    } catch(error) {
      console.log(error)
    }
  }

  handleClick = () => {
    this.deleteTodo()
  }


  render() {
    const { title, body } = this.props
    return (
      <div className="todo-card">
        <h4>{title}</h4>
        <p>{body}</p>
        <button onClick={this.handleClick}>X</button>
      </div>
    );
  }
}

export default withTodos(TodoCard);