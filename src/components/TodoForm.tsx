import React from 'react';
import { useForm } from 'react-hook-form';
import { Task } from '../utils/types';

interface TodoFormProps {
  addTask: (task: Task) => void;
}

const TodoForm: React.FC<TodoFormProps> = ({ addTask }) => {
  const { register, handleSubmit, reset } = useForm<{ taskText: string }>();

  const onSubmit = (data: { taskText: string }) => {
    const newTask: Task = {
      id: new Date().toISOString(),
      text: data.taskText,
      completed: false,
    };
    addTask(newTask);
    reset(); // Reset the form after submission
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="Add a new task"
        {...register('taskText', { required: true })}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default TodoForm;
