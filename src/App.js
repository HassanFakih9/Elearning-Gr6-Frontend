import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './Login';
import StudentDashboard from './StudentDashboard';
import TeacherDashboard from './TeacherDashboard';
import AdminDashboard from './AdminDashboard';
import About from './Components/About'

function App() {
  const [userRole, setUserRole] = useState(null);
  const [userId, setUserId] = useState('');

  const handleSetUserRole = (role, id) => {
    setUserRole(role);
    setUserId(id);
  };

  function RedirectToLogin() {
    // Use the navigate function to redirect to the login page
    return <Navigate to="/login" replace />;
  }

  return (
    <div>
      <About/>
    <Router>
      <Routes>
        <Route path="/login" element={<Login setUserRole={handleSetUserRole} setUserId={setUserId} />} />
        <Route
          path="/student"
          element={userRole === 'student' ? <StudentDashboard userId={userId} /> : <RedirectToLogin />}
        />
        <Route
          path="/teacher"
          element={userRole === 'teacher' ? <TeacherDashboard userId={userId} /> : <RedirectToLogin />}
        />
        <Route
          path="/admin"
          element={userRole === 'admin' ? <AdminDashboard userId={userId} /> : <RedirectToLogin />}
        />
        <Route path="*" element={<RedirectToLogin />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;





