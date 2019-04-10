import axios from 'axios';

class TodoService {
  constructor() {
    this.api = axios.create({
      baseURL: 'http://localhost:4000/api/v1',
      withCredentials: true
    });
  }

  getTodos = () => {
    return this.api.get(`/todos`)
      .then(({data}) => data)
  }
 
  createTodo = (body) => {
    return this.api.post(`/todos`, body)
      .then(({data}) => data)
  }
  
}

const todoService = new TodoService();
export default todoService;