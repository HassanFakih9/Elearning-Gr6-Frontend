import React from 'react';
import '../CSS/Teachers.css';

function Teachers() {
    return (
        <div>
            <h3 className="Teachers-heading">Teachers</h3>
            <div className="Teachers-grid">
                <div className='Teachers-background'>
                    <img className="Teachers-image" src="../Images/Teacher_1.jpg" alt="" />
                    <p className='Teachers-name'> Ms. W </p>
                </div>
                <div>
                    <img className="Teachers-image" src="../Images/Teacher_2.png" alt="" />
                    <p className='Teachers-name'> Ms. X </p>
                </div>
                <div>
                    <img className="Teachers-image1" src="../Images/Teacher_4.jpg" alt="" />
                    <p className='Teachers-name'> Mr. Y </p>
                </div>
                <div>
                    <img className="Teachers-image" src="../Images/Teacher_6.png" alt="" />
                    <p className='Teachers-name'> Mr. X </p>
                </div>
            </div>
        </div>
    );
}

export default Teachers;