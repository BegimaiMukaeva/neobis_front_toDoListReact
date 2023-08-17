import React, { useState } from 'react';

function TodoItem({ task, toggleTask, editTask, deleteTask }) {
  const [editing, setEditing] = useState(false);
  const [editedText, setEditedText] = useState(task.name);

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleSaveClick = () => {
    editTask(task.id, editedText);
    setEditing(false);
  };

  return (
    <li className={task.completed ? 'completed' : ''}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTask(task.id)}
        data-category={task.category}
      />
      {editing ? (
        <>
          <input
            className="change-text"
            type="text"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
          />
          <button className="save-button" onClick={handleSaveClick}>
            Save
          </button>
        </>
      ) : (
        <>
          <span
            className={task.completed ? 'task-completed' : ''}
            onClick={() => toggleTask(task.id)}
          >
            {task.name}
          </span>
          <button className="edit-button" onClick={handleEditClick}>
            Edit
          </button>
        </>
      )}
      <button className="delete-button" onClick={() => deleteTask(task.id)}>
        Delete
      </button>
    </li>
  );
}

export default TodoItem;
