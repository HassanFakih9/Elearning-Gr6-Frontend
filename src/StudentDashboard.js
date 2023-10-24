import React from 'react';
import EnrollmentForm from './EnrollmentForm';
import NewLanguageSelection from './NewLanguageSelection';


const StudentDashboard = ({userId}) => {
  return (
    <div>
      <h2>Student Dashboard</h2>
     <EnrollmentForm userId={userId}/>
     <NewLanguageSelection userId={userId}/>
    </div>
  );
};

export default StudentDashboard;
