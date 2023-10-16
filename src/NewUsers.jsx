import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserTable = ({ users, role }) => {
  const [editUserId, setEditUserId] = useState(null);
  const [updatedUserData, setUpdatedUserData] = useState({ id: '', name: '', email: '' });

  const deleteUser = (id) => {
    axios
      .delete(`http://localhost:5000/users/${id}`, { params: { role } })
      .then((response) => {

        console.log('User deleted successfully');

      })
      .catch((error) => {

        console.error('Error deleting user', error);
      });
  };


  const updateUser = (id) => {

    if (editUserId === id) {

      const { name, email, password } = updatedUserData;


      axios
        .put(`http://localhost:5000/users/${id}`, { name, email, password })
        .then((response) => {

          console.log('User updated successfully');

          setEditUserId(null);
        })
        .catch((error) => {

          console.error('Error updating user', error);
        });
    } else {

      setEditUserId(id);

      const userToEdit = users.find((user) => user.id === id);
      setUpdatedUserData(userToEdit);
    }
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>
              {editUserId === user.id ? (
                <input
                  type="text"
                  value={updatedUserData.name}
                  onChange={(e) => setUpdatedUserData({ ...updatedUserData, name: e.target.value })}
                />
              ) : (
                user.name
              )}
            </td>
            <td>
              {editUserId === user.id ? (
                <input
                  type="text"
                  value={updatedUserData.email}
                  onChange={(e) => setUpdatedUserData({ ...updatedUserData, email: e.target.value })}
                />
              ) : (
                user.email
              )}
            </td>
            <td>
              <button onClick={() => deleteUser(user.id)}>Delete</button>
              <button onClick={() => updateUser(user.id)}>
                {editUserId === user.id ? 'Save' : 'Edit'}
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const NewUsers = () => {
  const [users, setUsers] = useState([]);
  const [role, setRole] = useState('student');

  const fetchUsersByRole = async (role, usersState) => {
    try {
      const response = await axios.get(`http://localhost:5000/users/${role}`);
      const users = response.data;
      usersState(users);
      return users;
    } catch (error) {
      console.error('Failed to fetch users:', error);
      return [];
    }
  };

  useEffect(() => {
    fetchUsersByRole(role, setUsers);
  }, [role]);

  return (
    <div>
      <h1>Users</h1>
      <select value={role} onChange={(e) => setRole(e.target.value)}>
        <option value="student">Students</option>
        <option value="teacher">Teachers</option>
        <option value="admin">Admins</option>
      </select>
      <UserTable users={users} role={role} />
    </div>
  );
};

export default NewUsers;
