import React from 'react';

interface User {
  id: number;
  firstName: string;
  lastName: string;
  city: string;
  birthDate: string;
}

interface UserListProps {
  users: User[];
}

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0'); 
  const year = date.getFullYear();
  return `${day}.${month}.${year}`;
};

const UserList: React.FC<UserListProps> = ({ users }) => {
  return (
    <table className="table-container">
      <thead>
        <tr>
          <th>Name</th>
          <th>City</th>
          <th>Birth Date</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.firstName} {user.lastName}</td>
            <td>{user.city}</td>
            <td>{formatDate(user.birthDate)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserList;
