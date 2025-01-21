import React, { useState, useEffect } from 'react';
import './App.css';

interface Task {
  id: string;
  text: string;
  completed: boolean;
}

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [taskText, setTaskText] = useState<string>('');
  const [filter, setFilter] = useState<'all' | 'completed' | 'incomplete'>('all');

  // Load tasks from Local Storage on initial render
  useEffect(() => {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  // Update Local Storage when tasks change
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (taskText.trim()) {
      const newTask: Task = {
        id: Date.now().toString(),
        text: taskText,
        completed: false
      };
      setTasks([...tasks, newTask]);
      setTaskText('');
    }
  };

  const toggleTask = (id: string) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id: string) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const editTask = (id: string, newText: string) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, text: newText } : task
    ));
  };

  const filteredTasks = tasks.filter(task => 
    filter === 'all' ? true :
    filter === 'completed' ? task.completed : 
    !task.completed
  );

  return (
    <div className="container">
      <h1>Todo App</h1>
      
      {/* Add Task Section */}
      <div className="add-task">
        <input 
          type="text" 
          value={taskText} 
          onChange={(e) => setTaskText(e.target.value)} 
          placeholder="Enter a task" 
        />
        <button onClick={addTask}>Add Task</button>
      </div>
      
      {/* Task List */}
      <ul>
        {filteredTasks.map((task) => (
          <li key={task.id} className={task.completed ? 'completed' : ''}>
            {/* Checkbox to toggle task completion */}
            <input 
              type="checkbox" 
              checked={task.completed} 
              onChange={() => toggleTask(task.id)} 
            />
            <span>{task.text}</span>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
            <button onClick={() => {
              const newText = prompt('Edit task:', task.text);
              if (newText) {
                editTask(task.id, newText);
              }
            }}>
              Edit
            </button>
          </li>
        ))}
      </ul>
      
      {/* Filter Buttons */}
      <div className="filter-buttons">
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('completed')}>Completed</button>
        <button onClick={() => setFilter('incomplete')}>Incomplete</button>
      </div>
    </div>
  );
}

export default App;
