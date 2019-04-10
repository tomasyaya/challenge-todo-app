import React, { Component } from 'react';
import { withTodos } from '../Provider/TodosProv';
import TodoCard from '../components/TodoCard';

class DisplayTodo extends Component {


  state = {
    isLoaded: false
  }

  componentDidMount(){
    this.setState({
      isLoaded: true
    })
  }

   paintTodos = () => {
    const { todos } = this.props;
    return todos.map(todo => {
      const { title, body, _id } = todo;
      return (
        <TodoCard
        key={_id}
        title={title}
        body={body}
        id={_id}
        />
      )
    })
  }

  paintDoneTodos = () => {
    const { doneTodos } = this.props;
    return doneTodos.map(todo => {
      const { title, body, _id, done } = todo;
      return (
        <TodoCard
        key={_id}
        title={title}
        body={body}
        id={_id}
        done={done}
        />
      )
    })
  }

  render() {
    const { isLoaded } = this.state;
    return (
      <div className="display-todos-container">
        <h2>Todos</h2>
        {isLoaded ? this.paintTodos() : null}
        <h2>Done</h2>
        {isLoaded ? this.paintDoneTodos() : null}
      </div>
    );
  }
}

export default withTodos(DisplayTodo);