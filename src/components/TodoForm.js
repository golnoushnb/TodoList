import React, { useState } from "react";
import { useEffect } from "react";

const TodoForm = ({ todos, setTodos, edit, setEdit }) => {
  const [input, setInput] = useState("");

  useEffect(() => {
    edit ? setInput(edit.title) : setInput("");
  }, [setInput, edit]);

  const updateTodo = (id, title, completed) => {
    const newTodo = todos.map((todo) =>
      todo.id === id ? { id, title, completed } : todo
    );
    setTodos(newTodo);
    setEdit("");
    setInput("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!edit) {
      setTodos([
        ...todos,
        {
          id: Math.floor(Math.random() * 1000000),
          title: input,
          completed: false,
        },
      ]);
      setInput("");
    } else {
      updateTodo(edit.id, input, edit.completed);
    }
  };

  const handleChange = (event) => {
    setInput(event.target.value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        calssName="todo-input"
        type="text"
        placeholder="Add a Todo"
        value={input}
        onChange={handleChange}
        required
      />
      <button className="todo-btn" type="submit">
        {edit ? "edit" : "Add"}
      </button>
    </form>
  );
};

export default TodoForm;
