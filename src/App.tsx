import React, { useState, useEffect } from "react";
import axios from "axios";

interface User {
  id: number;
  firstName: string;
  lastName: string;
  city: string;
  age: number;
}

const App: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const [nameFilter, setNameFilter] = useState("");
  const [cityFilter, setCityFilter] = useState("");
  const [highlightOldest, setHighlightOldest] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await axios.get("https://dummyjson.com/users");
      setUsers(response.data.users);
      setFilteredUsers(response.data.users);
    };

    fetchUsers();
  }, []);

  useEffect(() => {
    const filtered = users.filter(
      (user) =>
        (user.firstName.toLowerCase().includes(nameFilter.toLowerCase()) ||
          user.lastName.toLowerCase().includes(nameFilter.toLowerCase())) &&
        (cityFilter ? user.city === cityFilter : true)
    );

    if (highlightOldest) {
      const oldestUsers = filtered.reduce(
        (acc: { [key: string]: User }, user) => {
          if (!acc[user.city] || acc[user.city].age < user.age) {
            acc[user.city] = user;
          }
          return acc;
        },
        {}
      );

      setFilteredUsers(Object.values(oldestUsers));
    } else {
      setFilteredUsers(filtered);
    }
  }, [nameFilter, cityFilter, highlightOldest, users]);

  const uniqueCities = [...new Set(users.map((user) => user.city))];

  const handleNameFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNameFilter(e.target.value);
  };

  const handleCityFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCityFilter(e.target.value);
  };

  const handleHighlightOldestChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setHighlightOldest(e.target.checked);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search by name"
        value={nameFilter}
        onChange={handleNameFilterChange}
      />
      <select value={cityFilter} onChange={handleCityFilterChange}>
        <option value="">All Cities</option>
        {uniqueCities.map((city) => (
          <option key={city} value={city}>
            {city}
          </option>
        ))}
      </select>
      <label>
        Highlight Oldest
        <input
          type="checkbox"
          checked={highlightOldest}
          onChange={handleHighlightOldestChange}
        />
      </label>
      <ul>
        {filteredUsers.map((user) => (
          <li key={user.id}>
            {user.firstName} {user.lastName} - {user.city} - {user.age} years
            old
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
