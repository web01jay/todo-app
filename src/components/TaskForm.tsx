import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo, updatePriority } from '../store';
import { v4 as uuidv4 } from 'uuid';

interface TaskFormProps {
  existingTask?: {
    id: string;
    title: string;
    description: string;
    completionTime: string;
    priority: number;
  };
  onFormSubmit?: () => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ existingTask, onFormSubmit }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [completionTime, setCompletionTime] = useState('');
  const [priority, setPriority] = useState(1);

  const dispatch = useDispatch();

  useEffect(() => {
    if (existingTask) {
      setTitle(existingTask.title);
      setDescription(existingTask.description);
      setCompletionTime(existingTask.completionTime);
      setPriority(existingTask.priority);
    }
  }, [existingTask]);

  const handleSubmit = () => {
    if (existingTask) {
      dispatch(
        updatePriority({
          id: existingTask.id,
          priority: priority,
        })
      );
    } else {
      const newTask = {
        id: uuidv4(),
        title,
        description,
        completionTime,
        priority,
        archived: false,
      };
      dispatch(addTodo(newTask));
    }

    if (onFormSubmit) {
      onFormSubmit();
    }

    setTitle('');
    setDescription('');
    setCompletionTime('');
    setPriority(1);
  };

  return (
    <div>
      <h2>{existingTask ? 'Update Task' : 'Add New Task'}</h2>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      />
      <input
        type="datetime-local"
        value={completionTime}
        onChange={(e) => setCompletionTime(e.target.value)}
      />
      <input
        type="number"
        value={priority}
        onChange={(e) => setPriority(Number(e.target.value))}
        placeholder="Priority"
      />
      <button onClick={handleSubmit}>{existingTask ? 'Update' : 'Add'}</button>
    </div>
  );
};

export default TaskForm;
