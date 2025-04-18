import React, { useState } from 'react';

const TodoList = () => {
  const [task, setTask] = useState('');
  const [todos, setTodos] = useState([]);

  const handleAdd = () => {
    if (task.trim() === '') return;
    const newTodo = {
      id: Date.now(),
      text: task,
    };
    setTodos([newTodo, ...todos]);
    setTask('');
  };

  const handleDelete = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">📝 To-Do List</h2>
      
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter a task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button className="btn btn-primary" onClick={handleAdd}>
          Add Task
        </button>
      </div>

      {todos.length === 0 ? (
        <p>No tasks added yet.</p>
      ) : (
        <ul className="list-group">
          {todos.map((todo, index) => (
            <li key={todo.id} className="list-group-item d-flex justify-content-between align-items-center">
              {index + 1}. {todo.text}
              <button
                className="btn btn-sm btn-danger"
                onClick={() => handleDelete(todo.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TodoList;
