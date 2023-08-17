import React, { useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './styles/app.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [businessChecked, setBusinessChecked] = useState(false);
  const [personalChecked, setPersonalChecked] = useState(false);

  const addTask = (newTaskName, newTaskCategory) => {
    const newTask = {
      id: Date.now(),
      name: newTaskName,
      category: newTaskCategory,
      completed: false,
    };
    setTasks([...tasks, newTask]);
    setBusinessChecked(false);
    setPersonalChecked(false);
  };

  const toggleTask = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const editTask = (taskId, newName) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, name: newName } : task
      )
    );
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div className="container">
      <NameHere />
      <TodoTitle />
      <TodoListText />
      <TodoForm
        addTask={addTask}
        businessChecked={businessChecked}
        personalChecked={personalChecked}
        onBusinessCheckedChange={setBusinessChecked}
        onPersonalCheckedChange={setPersonalChecked}
      />
      <TodoList
        tasks={tasks}
        toggleTask={toggleTask}
        editTask={editTask}
        deleteTask={deleteTask}
      />
    </div>
  );
}

function NameHere() {
  return (
    <div className="name-here">
      What's up , <input className="user-name" type="text" placeholder="Name here" />
    </div>
  );
}

function TodoTitle() {
  return <p className="todo-title">Create a todo</p>;
}

function TodoListText() {
  return <p className="todo-list-text">What's on your todo list?</p>;
}

export default App;
