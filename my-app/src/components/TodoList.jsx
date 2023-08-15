import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ tasks, toggleTask, editTask, deleteTask }) {
  return (
    <ul id="todo-list">
      {tasks.map((task) => (
        <TodoItem
          key={task.id}
          task={task}
          toggleTask={toggleTask}
          editTask={editTask}
          deleteTask={deleteTask}
        />
      ))}
    </ul>
  );
}

export default TodoList;
