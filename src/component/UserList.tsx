import React from 'react';

interface User {
  id: number;
  firstName: string;
  lastName: string;
  city: string;
  age: number;
}

interface UserListProps {
  users: User[];
}

const UserList: React.FC<UserListProps> = ({ users }) => {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          {user.firstName} {user.lastName} - {user.city} - {user.age} years old
        </li>
      ))}
    </ul>
  );
};

export default UserList;
