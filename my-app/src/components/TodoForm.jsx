import React, { useState } from 'react';

function TodoForm({ addTask }) {
  const [todoName, setTodoName] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (todoName !== '' && category !== '') {
      addTask(todoName, category);
      setTodoName('');
      setCategory('');
    }
  };

  return (
    <form id="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        id="todo-name"
        placeholder="Task name"
        value={todoName}
        onChange={(event) => setTodoName(event.target.value)}
        required
      />
      <p className="category-text">Pick a category</p>
      <div className="radio-boxes">
        <div className="radio-box">
          <label>
            <input
              type="radio"
              name="category"
              value="Business"
              id="business-radio"
              checked={category === 'Business'}
              onChange={() => setCategory('Business')}
            />{' '}
            Business
          </label>
        </div>
        <div className="radio-box">
          <label>
            <input
              type="radio"
              name="category"
              value="Personal"
              id="personal-radio"
              checked={category === 'Personal'}
              onChange={() => setCategory('Personal')}
            />{' '}
            Personal
          </label>
        </div>
      </div>
      <button className="add-button" type="submit">
        Add todo
      </button>
    </form>
  );
}

export default TodoForm;
