import React from 'react';
import EnrollmentForm from './EnrollmentForm';
import StartLearning from './StartLearning';


const StudentDashboard = ({userId}) => {
  return (
    <div>
      <h2>Student Dashboard</h2>
     <EnrollmentForm userId={userId}/>
     <StartLearning userId={userId}/>
    </div>
  );
};

export default StudentDashboard;
