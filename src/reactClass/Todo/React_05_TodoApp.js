import React, { Component } from 'react';
import TodoInput from './TodoInput';
import TodoItem from './TodoItem';
import axios from 'axios';
import { API_URL_CONST } from '../lyricSearch/constants';

class Todo extends Component {
  // state = {
  //   todos: [
  //     {
  //       id: 1,
  //       name: 'To get things done',
  //       isCompleted: true
  //     }
  //   ]
  // };

  state = {
    todos: []
  };
  componentDidMount() {
    this.getAllTodosFromApi();
  }

  getAllTodosFromApi = () => {
    axios
      .get(`${API_URL_CONST}/get`)
      .then(res => this.setState({ todos: res.data }))
      .catch(err => console.log(err));
  };

  handleItemAdd = value => {
    // this.setState(prevState => {
    //   return {
    //     todos: prevState.todos.concat([
    //       {
    //         id: Math.random(),
    //         name: value,
    //         isCompleted: false
    //       }
    //     ])
    //   };
    // });
    axios
      .post(`${API_URL_CONST}/add`, { title: value, is_completed: false })
      .then(res => {
        if (res.status === 200) {
          this.getAllTodosFromApi();
        } else {
          alert('Failed');
        }
      });
  };

  handleItemDelete = id => {
    // Never muatate the state
    // this.setState(prevState => {
    //   return {
    //     todos: prevState.todos.filter(item => item._id !== id)
    //   };
    // });

    axios.delete(`${API_URL_CONST}/delete/${id}`).then(res => {
      if (res.status === 200) {
        this.getAllTodosFromApi();
      } else {
        alert('Failed');
      }
    });
  };

  render() {
    return (
      <div>
        <TodoInput onTodoItemAdd={value => this.handleItemAdd(value)} />
        {this.state.todos.map((item, index) => (
          <TodoItem
            name={item.title}
            tips="This is todo"
            handleDeleteItem={() => this.handleItemDelete(item._id)}
            key={`${index} - ${item._id}`}
          />
        ))}
      </div>
    );
  }
}

export default Todo;

// Higher Order Function -> a function that takes a function and returns a function
// Higher Order Component ->  a function take takes component and returns a component

// TO impleted complete
// Update the Todo
