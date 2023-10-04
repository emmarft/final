
import { useState } from 'react';
import './User.css'; 

const User = () => {
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Envoi des données vers le serveur. Voir avec l'équipe back/réseau
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
