import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MapComponent from './MapComponent';

function ProfileDetails() {
  const { id } = useParams();
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    // Replace with your custom API endpoint
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => response.json())
      .then((user) => {
        setProfile({
          id: user.id,
          name: user.name,
          photo: user.photo || 'https://via.placeholder.com/150',
          description: `A professional from ${user.address.city}`,
          address: `${user.address.city}, ${user.address.street}`,
        });
      });
  }, [id]);

  if (!profile) return <p>Loading...</p>;

  return (
    <div>
      <h2>{profile.name}</h2>
      <img src={profile.photo} alt={profile.name} />
      <p>{profile.description}</p>
      {/* Pass the address to the MapComponent */}
      <MapComponent address={profile.address} />
    </div>
  );
}

export default ProfileDetails;






