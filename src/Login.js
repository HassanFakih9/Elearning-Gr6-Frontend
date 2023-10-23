import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login({ setUserRole, setUserId }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    fetch('http://localhost:5000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.role && data.userId) {
          setUserRole(data.role);
          setUserId(data.userId);
          // Redirect to the appropriate dashboard based on the user's role
          if (data.role === 'student') {
            navigate('/student');
          } else if (data.role === 'teacher') {
            navigate('/teacher');
          } else if (data.role === 'admin') {
            navigate('/admin');
          }
        } else {
          alert('Invalid email or password');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [signupRole, setSignupRole] = useState('');

  const handleSignup = () => {

    if (!signupEmail || !signupPassword || !confirmPassword || !name || !signupRole) {
      setMessage('Please fill in all fields!');
      return;
    }

    if (signupPassword !== confirmPassword) {
      setMessage("Passwords don't match!");
      return;
    }

    fetch('http://localhost:5000/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: signupEmail, password: signupPassword, name, role: signupRole }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message) {
          setMessage(data.message);
        } else {
          setMessage('Signup successful! Please login.');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };
  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      <h2>Sign Up</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={signupEmail}
        onChange={(e) => setSignupEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={signupPassword}
        onChange={(e) => setSignupPassword(e.target.value)}
      />
      <input
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <select
        value={signupRole}
        onChange={(e) => setSignupRole(e.target.value)}
      >
        <option value="">Select Role</option>
        <option value="student">Student</option>
        <option value="teacher">Teacher</option>
        <option value="admin">Admin</option>
      </select>
      <button onClick={handleSignup}>Sign Up</button>

      {message && <p>{message}</p>}
    </div>
  );
}

export default Login;
