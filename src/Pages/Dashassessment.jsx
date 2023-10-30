import React from 'react';
import '../CSS/Dashboardteacher.css';

const Dashassessment = () => {
  return (
    <div>
      <h1>assessment</h1>
      <div className="lessons">
    <div className="lesson-row">
        <p className="list-of-lessons">Assessment 1</p>
    <img className="svg-teach-dash" src="./Images/sign-out-svgrepo-com.svg"/>
    <img src="./Images/bin-svgrepo-com.svg"  className="svg-teach-dash"/>
</div>
<div className="lesson-row">
    <p className="list-of-lessons">Assessment 2</p>
    <img className="svg-teach-dash" src="./Images/sign-out-svgrepo-com.svg"/>
    <img src="./Images/bin-svgrepo-com.svg"  className="svg-teach-dash"/>
    </div>
    <div className="lesson-row">
    <p className="list-of-lessons">Assessment 3</p>
    <img className="svg-teach-dash" src="./Images/sign-out-svgrepo-com.svg"/>
    <img src="./Images/bin-svgrepo-com.svg"  className="svg-teach-dash"/>
    </div>
    <div className="lesson-row">
        <p className="list-of-lessons">Assessment 4</p>
        <img className="svg-teach-dash" src="./Images/sign-out-svgrepo-com.svg"/>
        <img src="./Images/bin-svgrepo-com.svg"  className="svg-teach-dash"/>
        </div>
</div>
<h4 className="profile">Assessment</h4>
<div className="line1"></div>
<div className="assessment-div">
<label  for="lesson">Question:</label>
<input type="text" className="input-lesson" />
<label for="Answer">Answer:</label>
<textarea name="" className="input-lesson" cols="30" rows="10"></textarea>
</div>
</div>
   
    
  )
}

export default Dashassessment
