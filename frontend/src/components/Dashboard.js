import React from 'react';

const Dashboard = ({ tasks }) => {
  const totalTasks = tasks.length;
  const pendingTasks = tasks.filter(task => task.status === 'Pending').length;
  const inProgressTasks = tasks.filter(task => task.status === 'InProgress').length;
  const completedTasks = tasks.filter(task => task.status === 'Completed').length;
  
  const completionRate = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;

  const stats = [
    {
      title: 'Total Tasks',
      value: totalTasks,
      color: '#667eea'
    },
    {
      title: 'Pending',
      value: pendingTasks,
      color: '#ffc107'
    },
    {
      title: 'In Progress',
      value: inProgressTasks,
      color: '#17a2b8'
    },
    {
      title: 'Completed',
      value: completedTasks,
      color: '#28a745'
    },
    {
      title: 'Completion Rate',
      value: `${completionRate}%`,
      color: '#6f42c1'
    }
  ];

  return (
    <div className="dashboard-stats">
      {stats.map((stat, index) => (
        <div key={index} className="stat-card" style={{ borderLeftColor: stat.color }}>
          <h3>{stat.title}</h3>
          <div className="stat-number" style={{ color: stat.color }}>
            {stat.value}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;