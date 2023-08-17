import React, { useState } from 'react';

function TodoForm({ addTask, businessChecked, personalChecked, onBusinessCheckedChange, onPersonalCheckedChange }) {
  const [todoName, setTodoName] = useState('');

  const handleCategoryChange = (category) => {
    if (category === 'Business') {
      onBusinessCheckedChange(!businessChecked);
      onPersonalCheckedChange(false);
    } else if (category === 'Personal') {
      onPersonalCheckedChange(!personalChecked);
      onBusinessCheckedChange(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (todoName.trim() !== '') {
      addTask(todoName, businessChecked ? 'Business' : 'Personal');
      setTodoName('');
      onBusinessCheckedChange(false);
      onPersonalCheckedChange(false);
    }
  };

  return (
    <form id="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        id="todo-name"
        placeholder="Task name"
        value={todoName}
        onChange={(e) => setTodoName(e.target.value)}
        required
      />
      <p className="category-text">Pick a category</p>
      <div className="radio-boxes">
        <div className={`radio-box ${businessChecked ? 'checked' : ''}`}>
          <label className="business">
            <input
              type="radio"
              name="category"
              value="Business"
              checked={businessChecked}
              onChange={() => handleCategoryChange('Business')}
            />
            Business
          </label>
        </div>
        <div className={`radio-box ${personalChecked ? 'checked' : ''}`}>
          <label className="personal">
            <input
              type="radio"
              name="category"
              value="Personal"
              checked={personalChecked}
              onChange={() => handleCategoryChange('Personal')}
            />
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
