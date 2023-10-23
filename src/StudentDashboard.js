import React from 'react';
import EnrollmentForm from './EnrollmentForm';
import LanguageSelection from './LanguageSelection';

const StudentDashboard = ({userId}) => {
  return (
    <div>
      <h2>Student Dashboard</h2>
     <EnrollmentForm userId={userId}/>
     <LanguageSelection userId={userId}/>
    </div>
  );
};

export default StudentDashboard;
