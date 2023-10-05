import { useState } from 'react';
import './Connexion.css'; 
import { Link } from 'react-router-dom';


function LoginPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
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
    // Ne pas oublier d'ajouter la logique de traitement des données du formulaire de connexion. 
    //Si tu as une idée n'hésites pas.
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

          <button className="login-button" type="submit">
            <Link to ='/Alerte'>Se connecter</Link>
          </button>

        </form>
      </div>
    </div>
  );
}

export default LoginPage;
