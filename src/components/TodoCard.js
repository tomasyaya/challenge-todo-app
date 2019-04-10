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

  handleDone = async () => {
    const { id, title, body, getAllTodos } = this.props;
    const done = {
      done: true,
      title,
      body
    }
    try {
      await todoService.doneTodo(id, done)
      getAllTodos()
    } catch(error) {
      console.log(error)
    }
  }

  render() {
    const { title, body } = this.props
    return (
      <div className="todo-card">
        <h4>{title}</h4>
        <p>{body}</p>
        <button onClick={this.handleClick}>X</button>
        <button onClick={this.handleDone}>Done</button>
      </div>
    );
  }
}

export default withTodos(TodoCard);