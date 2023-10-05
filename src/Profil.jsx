import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Profil.css';

function UserProfile() {
  const [user] = useState({
    username: 'EPSI_B3_G4',
    email: 'G4@gmail.com',
  });

  const [alerts] = useState([
    {
      id: 1,
      message: 'Feux tricolores',
      date: '2023-10-04',
    },
    {
      id: 2,
      message: 'Dégats des eaux',
      date: '2023-10-05',
    },
  ]);

  return (
    <div>
      <h1>Profil utilisateur</h1>
      <div>
        <h2>Paramètres du compte</h2>
        <p>Nom d'utilisateur : {user.username}</p>
        <p>Email : {user.email}</p>
        {/* Affichez d'autres paramètres du compte ici */}
      </div>
      <div>
        <h2>Historique des alertes</h2>
        <ul>
          {alerts.map((alert) => (
            <li key={alert.id}>
              {alert.message} (Date : {alert.date})
            </li>
          ))}
        </ul>
      </div>
      <button className="login-button" type="submit">
        <Link to='/Connexion'>Supprimez votre compte</Link>
      </button>
    </div>
  );
}

export default UserProfile;
