import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './Login';
import StudentDashboard from './StudentDashboard';
import TeacherDashboard from './TeacherDashboard';
import AdminDashboard from './AdminDashboard';
import About from './Components/About'
import HeroSection from './Components/HeroSection';

function App() {
  const [userRole, setUserRole] = useState(null);

  const handleSetUserRole = (role) => {
    setUserRole(role);
  };

  function RedirectToLogin() {
    // Use the navigate function to redirect to the login page
    return <Navigate to="/login" replace />;
  }

  return (
    <div>
      <HeroSection />
      <About />
      <Router>
        <Routes>
          <Route path="/login" element={<Login setUserRole={handleSetUserRole} />} />

          <Route path="/student" element={userRole === 'student' ? <StudentDashboard /> : <RedirectToLogin />} />
          <Route path="/teacher" element={userRole === 'teacher' ? <TeacherDashboard /> : <RedirectToLogin />} />
          <Route path="/admin" element={userRole === 'admin' ? <AdminDashboard /> : <RedirectToLogin />} />

          <Route path="*" element={<RedirectToLogin />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
