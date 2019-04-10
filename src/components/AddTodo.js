import React, { Component } from 'react';
import todoService from '../service/todoService';
import { withTodos } from '../Provider/TodosProv';

class AddTodo extends Component {

  state = {
    title: '',
    body: ''
  }

  handleChange = (event) => {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { body, title } = this.state;
    const { getAllTodos } = this.props;
    const newTodo = {
      title,
      body,
      done: false
    }
    try {
      await todoService.createTodo(newTodo);
      this.setState({
        title: '',
        body: ''
      })
      getAllTodos()
    } catch(error) {
      console.log(error)
    }
  }

  render() {
    const { title, body } = this.state;
    console.log(this.props)
    return (
      <div className="add-todo-container">
        <h1>Todo List</h1>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="title" placeholder="title" value={title} onChange={this.handleChange}/>
          <input type="text" name="body" placeholder="message" value={body} onChange={this.handleChange}/>
          <button type="submit">Add Todo</button>
        </form>
      </div>
    );
  }
}

export default withTodos(AddTodo);