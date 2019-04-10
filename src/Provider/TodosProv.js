import React, { Component } from 'react';
import todoService from '../service/todoService';

export const StateContext = React.createContext();

const { Provider, Consumer }  = StateContext;

export const withTodos = (Comp) => {
  return class WithTodos extends Component {
    render() {
      return (
        <Consumer>
          {(todoStore) => {
            return <Comp 
              getAllTodos={todoStore.getAllTodos}
              todos={todoStore.todos}
              doneTodos={todoStore.doneTodos}
              {...this.props} />
          }}
        </Consumer>
      )
    }    
  }
}

 class TodosProv extends Component {
  state = {
    todos: [],
    doneTodos: [],
    undoneTodos: []
  }

  componentDidMount(){
    this.getAllTodos()
  }

  getAllTodos = async () => {
    // const { todos: allTodos, doneTodos, undoneTodos } = this.state;
    try {
      const todos = await todoService.getTodos();
      this.setState({
        doneTodos: [...todos].filter(todo => todo.done),
        todos: [...todos].filter(todo => !todo.done)
      })
      
    } catch(error) {
      console.log(error)
    }
  }

  render() {
      const { children } = this.props;
      const { todos, doneTodos } = this.state;
        return (
          <Provider value={{
            getAllTodos: this.getAllTodos,
            todos,
            doneTodos
            }}>
            {children}
          </Provider>    
        );
    }
  }

  export default TodosProv;
