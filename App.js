import React from "react";
import "./styles.css";

const todos = [
  {
    isComplete: false,
    task: "Mow the yard"
  },
  {
    isComplete: true,
    task: "Clean the kitchen"
  },
  {
    isComplete: false,
    task: "Cook dinner"
  }
];
const todoList = todos.map((todo) => {
  const isComplete = todo.isComplete;
  return(
    <li key={todo.task} 
        style={{textDecoration: isComplete ? 'line-through' : undefined}}>
      {todo.task}</li> 
    );
  }
)


export default function App() {
  return (
    <div className="App">
      <h1>My Todos</h1>
      <ul>
        {todoList}
        </ul>
    </div>
  );
}
