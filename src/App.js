import React, { Component } from 'react';
import DisplayTodo from './components/DisplayTodo';
import AddTodo from './components/AddTodo';
import TodosProv from './Provider/TodosProv';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <TodosProv>
          <AddTodo />
          <DisplayTodo />
        </TodosProv>
      </div>
    );
  }
}

export default App;
