import React from "react";

const TodoList = ({ todos, setTodos, setEdit }) => {
  const handleComplete = (todo) => {
    setTodos(
      todos.map((task) => {
        if (task.id === todo.id) {
          return { ...task, completed: !task.completed };
        }
        return task;
      })
    );
  };

  const handleEdit = ({ id }) => {
    const foundTodo = todos.find((todo) => todo.id === id);
    setEdit(foundTodo);
  };

  const handleDelete = ({ id }) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      {todos.map((todo) => (
        <li key={todo.id}>
          <input
            type="text"
            value={todo.title}
            className={todo.completed ? "complete" : "list"}
          />
          <div>
            <button
              onClick={() => handleComplete(todo)}
              className="btn-complete"
            >
              <i className="fa fa-check-circle"></i>
            </button>
            <button onClick={() => handleEdit(todo)} className="btn-edit">
              <i className="fa fa-edit"></i>
            </button>
            <button onClick={() => handleDelete(todo)} className="btn-delete">
              <i className="fa fa-trash"></i>
            </button>
          </div>
        </li>
      ))}
    </div>
  );
};

export default TodoList;
