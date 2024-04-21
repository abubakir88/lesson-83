import React from "react";
import TodoList from "./components/Todo.jsx";
// import AddTodoForm from "./components/AddTodoForm";
import "./App.css";

function App() {
  return (
    <div className="app">
      <h1>Todo Uygulaması</h1>

      <TodoList />
    </div>
  );
}

export default App;
