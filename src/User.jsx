// User.jsx
import React, { useState, useRef } from 'react';
import './User.css'; // Importez le fichier de style

const User = () => {
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const contentEditableRef = useRef(null);

  const handleInput = (e) => {
    setPrenom(e.target.textContent);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Traitez les données du formulaire ici, par exemple, envoyez-les à un serveur ou effectuez d'autres actions.
  };

  const handleInputChange = (e) => {
    setPrenom(e.target.textContent);
  };

  const clearPlaceholder = () => {
    if (contentEditableRef.current.textContent === "Décrivez en quelques lignes la situation...") {
      contentEditableRef.current.textContent = "";
    }
  };

  return (
    <form className="centered-user" onSubmit={handleSubmit}>
      <img src="/images/logo-couleur.png" alt="Logo Couleur" height={100}/>
      <div className="input-container">
        <div
          contentEditable
          onInput={handleInput}
          className={`custom-input ${prenom ? 'has-content' : ''}`}
        >
          <div className="placeholder-container">
            {!prenom && <img className="placeholder" src="/images/app-photo.png" alt="Placeholder" height={50} />}
            {prenom}
          </div>
        </div>
      </div>
      <div className="input-container">
        <div
          ref={contentEditableRef}
          contentEditable
          onFocus={clearPlaceholder}
          onInput={handleInputChange}
          className="custom-input"
        >
          Décrivez en quelques lignes la situation...
        </div>
      </div>
      <button type="submit" className="custom-button button1">Valider</button>
      <button type="reset" className="custom-button button2">Annuler</button>
    </form>
  );  
};

export default User;
