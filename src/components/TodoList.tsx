// TodoList.tsx

import React from 'react';
import { Task } from '../utils/types';

interface TodoListProps {
  tasks: Task[];
  toggleTask: (id: string) => void;
  deleteTask: (id: string) => void;
  filter: 'all' | 'completed' | 'incomplete'; // Add this line
}

const TodoList: React.FC<TodoListProps> = ({ tasks, toggleTask, deleteTask, filter }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <label>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(task.id)}
            />
            {task.text}
          </label>
          <button onClick={() => deleteTask(task.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
