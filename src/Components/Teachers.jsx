import React from 'react';
import '../CSS/Teachers.css';

function Teachers() {
    return (
        <div>
            <h3 className="Teachers-heading">Teachers</h3>
            <div className="Teachers-grid">
                <div>
                    <img className="Teachers-image" src="../Images/Teacher_1.jpg" alt="" />
                </div>
                <div>
                    <img className="Teachers-image" src="../Images/Teacher_2.png" alt="" />
                </div>
                <div>
                    <img className="Teachers-image1" src="../Images/Teacher_4.jpg" alt="" />
                </div>
                <div>
                    <img className="Teachers-image" src="../Images/Teacher_6.png" alt="" />
                </div>
            </div>
        </div>
    );
}

export default Teachers;
