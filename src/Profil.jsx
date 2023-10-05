import  { Component } from 'react';
import './Profil.css';

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        username: 'EPSI_B3_G4',
        email: 'G4@gmail.com',
        
      },
      alerts: [
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
        
      ],
    };
  }

  render() {
    const { user, alerts } = this.state;

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
        
      </div>
    );
  }
}

export default UserProfile;
