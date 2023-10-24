import React from 'react';
import '../CSS/Teachers.css';

function Teachers() {
    return (
        <div>
            <h3 className="Teachers-heading">Teachers</h3>
            <div className="Teachers-grid">
                <div className='Teachers-Tablets'>
                    <div className='Teachers-background'>
                        <img className="Teachers-image" src="../Images/Teacher 1.png" alt="" />
                        <p className='Teachers-name'> Ms. W </p>
                    </div>
                    <div className='Teachers-background'>
                        <img className="Teachers-image" src="../Images/Teacher 2.png" alt="" />
                        <p className='Teachers-name'> Ms. X </p>
                    </div>
                </div>
                <div className='Teachers-Tablets'>
                    <div className='Teachers-background'>
                        <img className="Teachers-image" src="../Images/Teacher 3.png" alt="" />
                        <p className='Teachers-name'> Mr. Y </p>
                    </div>
                    <div className='Teachers-background'>
                        <img className="Teachers-image" src="../Images/Teacher 4.png" alt="" />
                        <p className='Teachers-name'> Mr. X </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Teachers;