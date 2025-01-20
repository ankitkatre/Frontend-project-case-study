import React, { useState } from 'react';

function AdminDashboard() {
  const [profiles, setProfiles] = useState([]);
  const [editing, setEditing] = useState(null);
  const [formData, setFormData] = useState({ name: '', address: '', description: '', photo: '' });

  const addProfile = () => {
    setProfiles([...profiles, { id: Date.now(), ...formData }]);
    setFormData({ name: '', address: '', description: '', photo: '' });
  };

  const deleteProfile = (id) => {
    setProfiles(profiles.filter((profile) => profile.id !== id));
  };

  const editProfile = (id) => {
    const profile = profiles.find((p) => p.id === id);
    setFormData(profile);
    setEditing(id);
  };

  const saveProfile = () => {
    setProfiles(
      profiles.map((profile) =>
        profile.id === editing ? { ...profile, ...formData } : profile
      )
    );
    setEditing(null);
    setFormData({ name: '', address: '', description: '', photo: '' });
  };

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <input
        type="text"
        placeholder="Name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />
      <input
        type="text"
        placeholder="Address"
        value={formData.address}
        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
      />
      <input
        type="text"
        placeholder="Description"
        value={formData.description}
        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
      />
      <input
        type="text"
        placeholder="Photo URL"
        value={formData.photo}
        onChange={(e) => setFormData({ ...formData, photo: e.target.value })}
      />
      {editing ? (
        <button onClick={saveProfile}>Save</button>
      ) : (
        <button onClick={addProfile}>Add Profile</button>
      )}
      <ul>
        {profiles.map((profile) => (
          <li key={profile.id}>
            {profile.name} ({profile.address}){' '}
            <button onClick={() => editProfile(profile.id)}>Edit</button>
            <button onClick={() => deleteProfile(profile.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AdminDashboard;
