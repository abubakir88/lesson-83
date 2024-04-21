import React from "react";

const Todo = ({ todo, toggleTodo, deleteTodo }) => {
  return (
    <div className={`todo ${todo.completed ? "completed" : ""}`}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
      />
      <span className="text">{todo.text}</span>
      <button onClick={() => deleteTodo(todo.id)}>O'chirish</button>
    </div>
  );
};

export default Todo;
