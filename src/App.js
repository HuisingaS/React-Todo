import React from 'react';
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import "./components/Todo.css";

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
    constructor() {
      super();
      this.state = {
        taskList:[],
        toggleCompleted: () => {}
      }; 
    } 

    toggleCompleted = (clickedTaskId) => {
      this.setState({
        taskList: this.state.taskList.map((task) => {
          if (task.id === clickedTaskId) {
            return {
              ...task,
              completed: !task.completed
            }
          } else {
            return task;
          }
        })
      });
    };

    addTodo = (todoName) => {
      const newTodo = {
        task: todoName,
        id: Date.now(),
        completed: false
      };
      this.setState({
        taskList: [...this.state.taskList, newTodo]
      });
    };

    render() {
      return (
        <div className="App">
          <div className="header">
            <h1>Do it now!</h1>
            <TodoForm addTodo={this.addTodo} />
          </div>
          <TodoList 
          taskList={this.state.taskList}
          toggleCompleted={this.toggleCompleted}
          />
        </div>
      );
    } 
}

export default App;