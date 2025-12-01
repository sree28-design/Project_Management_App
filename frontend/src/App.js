import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import Dashboard from './components/Dashboard';

function App() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      setLoading(true);
      const response = await axios.get('/api/tasks');
      setTasks(response.data);
      setError('');
    } catch (err) {
      setError('Failed to fetch tasks. Please make sure the backend server is running.');
      console.error('Error fetching tasks:', err);
    } finally {
      setLoading(false);
    }
  };

  const createTask = async (taskData) => {
    try {
      const response = await axios.post('/api/tasks', taskData);
      setTasks([response.data, ...tasks]);
      setSuccess('Task created successfully!');
      setError('');
      setTimeout(() => setSuccess(''), 3000);
    } catch (err) {
      setError('Failed to create task.');
      console.error('Error creating task:', err);
    }
  };

  const updateTask = async (taskId, taskData) => {
    try {
      const response = await axios.put(`/api/tasks/${taskId}`, taskData);
      setTasks(tasks.map(task => 
        task._id === taskId ? response.data : task
      ));
      setSuccess('Task updated successfully!');
      setError('');
      setTimeout(() => setSuccess(''), 3000);
    } catch (err) {
      setError('Failed to update task.');
      console.error('Error updating task:', err);
    }
  };

  const deleteTask = async (taskId) => {
    try {
      await axios.delete(`/api/tasks/${taskId}`);
      setTasks(tasks.filter(task => task._id !== taskId));
      setSuccess('Task deleted successfully!');
      setError('');
      setTimeout(() => setSuccess(''), 3000);
    } catch (err) {
      setError('Failed to delete task.');
      console.error('Error deleting task:', err);
    }
  };

  return (
    <div className="container">
      <header className="header">
        <h1>Project Management Dashboard</h1>
        <p>Manage your tasks efficiently and track project progress</p>
      </header>

      {error && <div className="error">{error}</div>}
      {success && <div className="success">{success}</div>}

      <Dashboard tasks={tasks} />

      <div className="main-content">
        <TaskForm onSubmit={createTask} />
        <TaskList 
          tasks={tasks}
          onUpdate={updateTask}
          onDelete={deleteTask}
          loading={loading}
        />
      </div>
    </div>
  );
}

export default App;