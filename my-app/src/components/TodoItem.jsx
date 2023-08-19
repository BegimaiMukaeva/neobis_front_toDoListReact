import React, { useEffect, useState, useRef } from 'react';

function TodoItem({ task, toggleTask, editTask, deleteTask }) {
  const [editing, setEditing] = useState(false);
  const [editedText, setEditedText] = useState(task.name);

  const inpRef = useRef(null);

  const handleEditClick = () => {
    setEditing(true);
  };

  useEffect(() => {
    if (inpRef.current && editing) {
      inpRef.current.focus();
    }
  }, [editing]);

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
            ref={inpRef}
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
