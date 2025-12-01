import React, { useState } from 'react';

const TaskList = ({ tasks, onUpdate, onDelete, loading }) => {
  const [filter, setFilter] = useState('All');

  const filteredTasks = tasks.filter(task => {
    if (filter === 'All') return true;
    return task.status === filter;
  });

  const handleStatusChange = (taskId, newStatus) => {
    const task = tasks.find(t => t._id === taskId);
    if (task) {
      onUpdate(taskId, { ...task, status: newStatus });
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (loading) {
    return (
      <div className="task-list">
        <div className="loading">Loading tasks...</div>
      </div>
    );
  }

  return (
    <div className="task-list">
      <h2>Task List ({filteredTasks.length})</h2>
      
      <div className="task-filters">
        {['All', 'Pending', 'InProgress', 'Completed'].map(status => (
          <button
            key={status}
            className={`filter-btn ${filter === status ? 'active' : ''}`}
            onClick={() => setFilter(status)}
          >
            {status === 'InProgress' ? 'In Progress' : status}
          </button>
        ))}
      </div>

      {filteredTasks.length === 0 ? (
        <div className="empty-state">
          <h3>No tasks found</h3>
          <p>
            {filter === 'All' 
              ? 'Add your first task to get started!' 
              : `No tasks with status "${filter}"`
            }
          </p>
        </div>
      ) : (
        filteredTasks.map(task => (
          <div key={task._id} className="task-item">
            <div className="task-header">
              <h3 className="task-title">{task.title}</h3>
              <span className={`task-priority priority-${task.priority.toLowerCase()}`}>
                {task.priority}
              </span>
            </div>
            
            <p className="task-description">{task.description}</p>
            
            <div className="task-footer">
              <div>
                <span className={`task-status status-${task.status.toLowerCase()}`}>
                  {task.status === 'InProgress' ? 'In Progress' : task.status}
                </span>
                <div style={{ fontSize: '0.875rem', color: '#666', marginTop: '0.5rem' }}>
                  Created: {formatDate(task.createdAt)}
                  {task.updatedAt !== task.createdAt && (
                    <span> • Updated: {formatDate(task.updatedAt)}</span>
                  )}
                </div>
              </div>
              
              <div className="task-actions">
                <select
                  value={task.status}
                  onChange={(e) => handleStatusChange(task._id, e.target.value)}
                  className="btn btn-sm"
                  style={{ marginRight: '0.5rem' }}
                >
                  <option value="Pending">Pending</option>
                  <option value="InProgress">In Progress</option>
                  <option value="Completed">Completed</option>
                </select>
                
                <button
                  onClick={() => {
                    if (window.confirm('Are you sure you want to delete this task?')) {
                      onDelete(task._id);
                    }
                  }}
                  className="btn btn-sm btn-danger"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default TaskList;