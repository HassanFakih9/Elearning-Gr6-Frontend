import React from 'react';
import '../CSS/Dashboardteacher.css';

const Dashattendance = () => {
  return (
    <div>
      <h1>attendance</h1>
      <div className="line1"></div>
    <h1>insert react-calendar</h1>
    <div className="line1"></div>

        <table>
            <thead>
                <tr>
                    <th className="name-col">Student Name</th>
                    <th>1</th>
                    <th>2</th>
                    <th>3</th>
                    <th>4</th>
                    <th>5</th>
                    <th>6</th>
                    <th>7</th>
                    
                </tr>
            </thead>
            <tbody>
                <tr className="student">
                    <td className="name-col">Joya Abou Jaoude</td>
                    <td className="attend-col"><input type="checkbox"/></td>
                    <td className="attend-col"><input type="checkbox"/></td>
                    <td className="attend-col"><input type="checkbox"/></td>
                    <td className="attend-col"><input type="checkbox"/></td>
                    <td className="attend-col"><input type="checkbox"/></td>
                    <td className="attend-col"><input type="checkbox"/></td>
                    <td className="attend-col"><input type="checkbox"/></td>
                    
                </tr>
                <tr className="student">
                    <td className="name-col">Hassan Fakih</td>
                    <td className="attend-col"><input type="checkbox"/></td>
                    <td className="attend-col"><input type="checkbox"/></td>
                    <td className="attend-col"><input type="checkbox"/></td>
                    <td className="attend-col"><input type="checkbox"/></td>
                    <td className="attend-col"><input type="checkbox"/></td>
                    <td className="attend-col"><input type="checkbox"/></td>
                    <td className="attend-col"><input type="checkbox"/></td>
                    
                </tr>
                <tr className="student">
                    <td className="name-col">Mayssae Ahmadie</td>
                    <td className="attend-col"><input type="checkbox"/></td>
                    <td className="attend-col"><input type="checkbox"/></td>
                    <td className="attend-col"><input type="checkbox"/></td>
                    <td className="attend-col"><input type="checkbox"/></td>
                    <td className="attend-col"><input type="checkbox"/></td>
                    <td className="attend-col"><input type="checkbox"/></td>
                    <td className="attend-col"><input type="checkbox"/></td>
                    
                </tr>
                <tr className="student">
                    <td className="name-col">Assala Meslmani</td>
                    <td className="attend-col"><input type="checkbox"/></td>
                    <td className="attend-col"><input type="checkbox"/></td>
                    <td className="attend-col"><input type="checkbox"/></td>
                    <td className="attend-col"><input type="checkbox"/></td>
                    <td className="attend-col"><input type="checkbox"/></td>
                    <td className="attend-col"><input type="checkbox"/></td>
                    <td className="attend-col"><input type="checkbox"/></td>
                    
                </tr>
            </tbody>
        </table>

</div>
    
  )
}

export default Dashattendance
