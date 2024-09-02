import React, { useState } from 'react';
import TodoList from './components/TodoList';
import TaskForm from './components/TaskForm';

const App: React.FC = () => {
  const [selectedTask, setSelectedTask] = useState<any | null>(null);

  const handleFormSubmit = () => {
    setSelectedTask(null);
  };

  const handleEditTask = (task: any) => {
    setSelectedTask(task);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <TaskForm existingTask={selectedTask} onFormSubmit={handleFormSubmit} />
      <TodoList onEditTask={handleEditTask} />
    </div>
  );
};

export default App;
