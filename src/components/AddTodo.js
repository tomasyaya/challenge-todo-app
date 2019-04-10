import React, { Component } from 'react';
import todoService from '../service/todoService';
import { withTodos } from '../Provider/TodosProv';

class AddTodo extends Component {

  state = {
    title: '',
    body: '',
    validation: false,
    message: 'Please complete all fields'
  }

  handleChange = (event) => {
    const { name, value } = event.target
    this.setState({
      [name]: value,
      validation: false
    })
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { body, title } = this.state;
    const { getAllTodos } = this.props;
    if(!body.length || !title.length) {
      this.setState({
        validation: true
      })
      return
    }
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
    const { title, body, validation, message } = this.state;
    console.log(this.props)
    return (
      <div className="add-todo-container">
        <h1>Todo List</h1>
        <form onSubmit={this.handleSubmit}>
          {validation ? <p id="validation">{message}</p> : null}
          <input type="text" name="title" placeholder="title" value={title} onChange={this.handleChange}/>
          <input type="text" name="body" placeholder="message" value={body} onChange={this.handleChange}/>
          <button type="submit">Add Todo</button>
        </form>
      </div>
    );
  }
}

export default withTodos(AddTodo);