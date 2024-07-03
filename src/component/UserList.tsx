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
		<table className="table-container">
			<thead>
				<tr>
					<th>Name</th>
					<th>City</th>
					<th>Age</th>
				</tr>
			</thead>
			<tbody>
				{users.map((user) => (
					<tr key={user.id}>
						<td>
							{user.firstName} {user.lastName}
						</td>
						<td>{user.city}</td>
						<td>{user.age}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default UserList;
