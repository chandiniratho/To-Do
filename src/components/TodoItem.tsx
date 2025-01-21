import React from 'react';
import { Task } from '../utils/types';

interface TodoItemProps {
  task: Task;
  toggleTask: (id: string) => void;
  deleteTask: (id: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ task, toggleTask, deleteTask }) => {
  return (
    <div>
      <span
        style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
        onClick={() => toggleTask(task.id)}
      >
        {task.text}
      </span>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </div>
  );
};

export default TodoItem;
