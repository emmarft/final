// User.jsx
import React, { useState } from 'react';
import './User.css'; // Importez le fichier de style

const User = () => {
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Traitez les données du formulaire ici, par exemple, envoyez-les à un serveur ou effectuez d'autres actions.
  };

  return (
    <form className="centered-user" onSubmit={handleSubmit}>
      <div>
        <label>Nom :</label>
        <input type="text" value={nom} onChange={(e) => setNom(e.target.value)} />
      </div>
      <div>
        <label>Prénom :</label>
        <input type="text" value={prenom} onChange={(e) => setPrenom(e.target.value)} />
      </div>
      {/* Ajoutez d'autres champs ici */}
      <button type="submit">Enregistrer</button>
    </form>
  );
};

export default User;
