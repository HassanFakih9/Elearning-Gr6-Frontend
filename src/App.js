import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './Login';
import StudentDashboard from './StudentDashboard';
import TeacherDashboard from './TeacherDashboard';
import AdminDashboard from './AdminDashboard';
import About from './Components/About'
import Languages from './Components/Langauges';
import axios from 'axios';
import HeroSection from './Components/HeroSection';
import Teachers from './Components/Teachers';



function App() {
 

  const [userRole, setUserRole] = useState(null);

  const handleSetUserRole = (role) => {
    setUserRole(role);
  };

  function RedirectToLogin() {
    // Use the navigate function to redirect to the login page
    return <Navigate to="/login" replace />;
  }

  const [languagesdata, setLanguagesData] = useState([]);

  const fetchLanguagedata = () => {
    axios.get('http://localhost:5000/languages/getAll')
      .then((response) => {
        setLanguagesData(response.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  
  useEffect(() => {
    fetchLanguagedata();
  }, []);

  return (
    <div>
      <HeroSection/>
      <About/>
      <h1 className="language-title">Languages</h1>
      <div className="language-container">
      
        {languagesdata && languagesdata.map((languages) => (
          <Languages
            key={languages._id}
            language_name={languages.language_name}
            language_img={languages.language_img}
          />
        ))}
        </div>
        <Teachers/>
     {/* <DashboardSidebar/> */}
          
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
