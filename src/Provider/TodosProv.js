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
              {...this.props} />
          }}
        </Consumer>
      )
    }    
  }
}

 class TodosProv extends Component {
  state = {
    todos: []
  }

  componentDidMount(){
    this.getAllTodos()
  }

  getAllTodos = async () => {
    try {
      const todos = await todoService.getTodos();
      this.setState({
        todos: [...todos]
      })
      console.log(todos)
    } catch(error) {
      console.log(error)
    }
  }

  render() {
      const { children } = this.props;
      const { todos } = this.state;
        return (
          <Provider value={{
            getAllTodos: this.getAllTodos,
            todos
            }}>
            {children}
          </Provider>    
        );
    }
  }

  export default TodosProv;
