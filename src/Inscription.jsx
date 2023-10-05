import { useState } from 'react';
import './Connexion'; 
//import AlertePage from './Alerte' (./alerte correspond à la page de déclaration des incidents);

import { Link } from 'react-router-dom';

function SignupForm() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // logique pour traiter les données du formulaire.
    
    console.log(formData);
  };

  return (
    <div className="login-page">
      <div className="login-form">
      <img src="/images/logo-couleur.png" alt="Logo Couleur" height={150}/>
        <form onSubmit={handleSubmit}>
          
          <div className="form-group">          
            <input
              type="email"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Nom"
              required
            />
          </div>
          
          <div className="form-group">          
            <input
              type="email"
              id="lastname"
              name="lastname"
              value={formData.lastname}
              onChange={handleChange}
              placeholder="Prénom"
              required
            />
          </div>
          <div className="form-group">          
            <input
              type="email"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Pseudo"
              required
            />
          </div>

          <div className="form-group">
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
            />
          </div>

          <div className="form-group">
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Mot de passe"
              required
            />
          </div>

          <div className="form-group">
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirmer le mot de passe"
              required
            />
          </div>

          <button className="login-button" type="submit">
            <Link to='/User'>Créer un compte</Link>
          </button> 
        </form>
      </div>
    </div>
  );
}

export default SignupForm;
