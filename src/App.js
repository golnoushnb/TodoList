import React, { useState } from "react";
import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import "./App.css";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [edit, setEdit] = useState(null);

  return (
    <div className="container">
      <div>
        <Header />
      </div>
      <div className="todo-form">
        <TodoForm
          todos={todos}
          setTodos={setTodos}
          edit={edit}
          setEdit={setEdit}
        />
      </div>
      <div className="todo-list">
        <TodoList todos={todos} setTodos={setTodos} setEdit={setEdit} />
      </div>
    </div>
  );
};

export default App;
