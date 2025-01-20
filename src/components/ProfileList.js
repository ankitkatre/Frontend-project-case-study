import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function ProfileList() {
  const [profiles, setProfiles] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => {
        setProfiles(data.map((user) => ({
          id: user.id,
          name: user.name,
          photo: user.photo || 'https://via.placeholder.com/150',
          description: `A professional from ${user.address.city}`,
          address: `${user.address.city}, ${user.address.street}`,
        })));
      });
  }, []);

  const filteredProfiles = profiles.filter((profile) =>
    profile.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search Profiles..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ul>
        {filteredProfiles.map((profile) => (
          <li key={profile.id}>
            <img src={profile.photo} alt={profile.name} />
            <h3>{profile.name}</h3>
            <p>{profile.description}</p>
            <Link to={`/profile/${profile.id}`}>View Details</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProfileList;
