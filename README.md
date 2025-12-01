# Project Management Dashboard

A simple and efficient project management dashboard built with the MERN stack (MongoDB, Express.js, React, Node.js).

## Features

- **Task Management**: Create, update, and delete tasks
- **Status Tracking**: Track task progress with three statuses:
  - Pending
  - In Progress
  - Completed
- **Priority Levels**: Set task priorities (Low, Medium, High)
- **Dashboard Statistics**: View real-time statistics about your tasks
- **Filter Tasks**: Filter tasks by status for better organization
- **Responsive Design**: Works on desktop and mobile devices

## Prerequisites

Before running this application, make sure you have the following installed:

1. **Node.js** (version 14 or higher)
   - Download from [https://nodejs.org/](https://nodejs.org/)
   
2. **MongoDB**
   - Download and install from [https://www.mongodb.com/try/download/community](https://www.mongodb.com/try/download/community)
   - Or use MongoDB Atlas (cloud database)

## Installation & Setup

### Method 1: Quick Start (Recommended)

1. **Clone or download** this project to your computer

2. **Start MongoDB** (if using local installation):
   ```
   mongod
   ```

3. **Run the application**:
   - Double-click `start.bat` file
   - This will automatically install dependencies and start both backend and frontend servers

### Method 2: Manual Setup

1. **Backend Setup**:
   ```bash
   cd backend
   npm install
   npm start
   ```

2. **Frontend Setup** (in a new terminal):
   ```bash
   cd frontend
   npm install
   npm start
   ```

## How to Run

### Option 1: Using Batch Files (Windows)

- **Start Everything**: Double-click `start.bat`
- **Backend Only**: Double-click `start-backend.bat`
- **Frontend Only**: Double-click `start-frontend.bat`

### Option 2: Using Command Line

1. **Start Backend**:
   ```bash
   cd backend
   npm start
   ```

2. **Start Frontend** (new terminal):
   ```bash
   cd frontend
   npm start
   ```

## Accessing the Application

Once both servers are running:

- **Frontend (React App)**: [http://localhost:3000](http://localhost:3000)
- **Backend (API)**: [http://localhost:5000](http://localhost:5000)

The React app will automatically open in your default web browser.

## Using the Dashboard

### Adding a New Task

1. Fill in the "Add New Task" form on the left side
2. Enter a task title and description
3. Select a priority level (Low, Medium, High)
4. Click "Add Task"

### Managing Tasks

1. **View Tasks**: All tasks are displayed in the task list on the right
2. **Filter Tasks**: Use the filter buttons (All, Pending, In Progress, Completed) to filter tasks by status
3. **Change Status**: Use the dropdown in each task to change its status
4. **Delete Tasks**: Click the "Delete" button to remove a task (with confirmation)

### Dashboard Statistics

The top of the page shows:
- Total number of tasks
- Count of tasks by status
- Completion rate percentage

## Project Structure

```
ProjectManagement/
├── backend/
│   ├── package.json
│   └── server.js          # Express server with MongoDB integration
├── frontend/
│   ├── package.json
│   ├── public/
│   │   └── index.html
│   └── src/
│       ├── App.js         # Main React component
│       ├── index.js       # React entry point
│       ├── index.css      # Styles
│       └── components/
│           ├── Dashboard.js    # Statistics dashboard
│           ├── TaskForm.js     # Form to add new tasks
│           └── TaskList.js     # List and manage tasks
├── start.bat              # Start both servers
├── start-backend.bat      # Start backend only
├── start-frontend.bat     # Start frontend only
└── README.md
```

## API Endpoints

The backend provides the following REST API endpoints:

- `GET /api/tasks` - Get all tasks
- `POST /api/tasks` - Create a new task
- `PUT /api/tasks/:id` - Update a task
- `DELETE /api/tasks/:id` - Delete a task
- `GET /api/stats` - Get task statistics

## Database Schema

Tasks are stored with the following structure:

```javascript
{
  title: String (required),
  description: String (required),
  status: String (Pending/InProgress/Completed),
  priority: String (Low/Medium/High),
  createdAt: Date,
  updatedAt: Date
}
```

## Troubleshooting

### Common Issues

1. **MongoDB Connection Error**:
   - Make sure MongoDB is running
   - Check if MongoDB is installed correctly
   - Default connection: `mongodb://localhost:27017/projectmanagement`

2. **Port Already in Use**:
   - Backend uses port 5000
   - Frontend uses port 3000
   - Make sure these ports are available

3. **Dependencies Not Installing**:
   - Make sure you have Node.js installed
   - Try deleting `node_modules` folder and running `npm install` again

4. **Page Not Loading**:
   - Make sure both backend and frontend servers are running
   - Check browser console for errors
   - Verify URLs: http://localhost:3000 (frontend), http://localhost:5000 (backend)

### Getting Help

If you encounter any issues:

1. Check that all prerequisites are installed
2. Make sure MongoDB is running
3. Verify that both servers start without errors
4. Check the browser console for any error messages

## Features in Detail

### Task Status Management
- **Pending**: Newly created tasks
- **In Progress**: Tasks currently being worked on
- **Completed**: Finished tasks

### Priority System
- **High**: Urgent tasks that need immediate attention
- **Medium**: Regular tasks with normal priority
- **Low**: Tasks that can be done when time permits

### Real-time Updates
- Dashboard statistics update automatically when tasks are modified
- Task list refreshes when tasks are added, updated, or deleted

## Technology Stack

- **Frontend**: React.js, CSS3, Axios
- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose ODM
- **Development**: Create React App, Nodemon

This project provides a solid foundation for a project management system and can be extended with additional features like user authentication, team collaboration, file attachments, and more.