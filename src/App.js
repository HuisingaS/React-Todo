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

    clearCompleted = () => {
      this.setState({
        taskList: this.state.taskList.filter((task) => {
          return task.completed === false;
        })
      }
      );
    }

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
            <h1>Do it Now!</h1>
            <h4>It's simple</h4>
            <ul>
              <li>Type a task in the box and click "Add Task"</li>
              <li>Click the task in the list when the task is complete</li>
              <li>Click the "Clear Completed" button to start over again. Yeh for chores!</li>
            </ul>
            <TodoForm addTodo={this.addTodo} />
          </div>
          <TodoList 
          taskList={this.state.taskList}
          toggleCompleted={this.toggleCompleted}
          clearCompleted={this.clearCompleted}
          />
        </div>
      );
    } 
}

export default App;