//import React from 'react';
import './Profil.css'; // Assurez-vous de spécifier le bon chemin vers votre fichier CSS

function UserProfile() {
  const user = {
    username: 'utilisateur123',
    description: 'Bienvenue sur mon profil !',
    profileImage: 'https://via.placeholder.com/150', // URL de l'image de profil (à remplacer)
  };

  return (
    <div className="user-profile">
      <div className="profile-header">
        <img
          src={user.profileImage}
          alt="Image de profil"
          className="profile-image"
        />
        <h2 className="username">{user.username}</h2>
      </div>
      <p className="description">{user.description}</p>
    </div>
  );
}

export default UserProfile;
