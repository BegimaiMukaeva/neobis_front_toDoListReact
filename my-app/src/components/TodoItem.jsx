import React from 'react';

function TodoItem({ task, toggleTask, editTask, deleteTask }) {
  return (
    <li className={task.completed ? 'completed' : ''}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTask(task.id)}
        data-category={task.category}
      />
      <span>{task.name}</span>
      <button className="edit-button" onClick={() => editTask(task.id, task.name)}>
        Edit
      </button>
      <button className="delete-button" onClick={() => deleteTask(task.id)}>
        Delete
      </button>
    </li>
  );
}

export default TodoItem;
