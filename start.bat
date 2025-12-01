@echo off
echo ================================================
echo    Project Management Dashboard Starter
echo ================================================
echo.
echo This will start both the backend and frontend servers.
echo Make sure MongoDB is running on your system.
echo.
echo Backend will run on: http://localhost:5000
echo Frontend will run on: http://localhost:3000
echo.
pause

echo Starting Backend Server...
start "Backend Server" cmd /k "cd backend && npm install && npm start"

echo Waiting for backend to start...
timeout /t 5

echo Starting Frontend Server...
start "Frontend Server" cmd /k "cd frontend && npm install && npm start"

echo.
echo ================================================
echo Both servers are starting in separate windows.
echo The frontend will automatically open in your browser.
echo ================================================