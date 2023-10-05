import { useState, useRef } from 'react';
import './User.css'; 


function User () {
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const contentEditableRef = useRef(null);

  const handleInput = (e) => {
    setPrenom(e.target.textContent);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Envoi des données vers le serveur. Voir avec l'équipe back/réseau
  };

  const handleInputChange = (e) => {
    setPrenom(e.target.textContent);
  };

  const clearPlaceholder = () => {
    if (contentEditableRef.current.textContent === "Décrivez en quelques lignes la situation...") {
      contentEditableRef.current.textContent = "";
    }
  };

  const fileInputRef = useRef(null);

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    // Faites quelque chose avec le fichier, par exemple, l'envoyer au serveur ou le traiter côté client
  };

  return (
    <form className="centered-user" onSubmit={handleSubmit}>
      <img src="/images/logo-couleur.png" alt="Logo Couleur" height={100}/>
      <div className="input-container">
        <div
          onClick={handleImageClick}
          className="custom-input"
        >
          <div className="placeholder-container">
            {!prenom && <img className="placeholder" src="/images/app-photo.png" alt="Placeholder" height={50} />}
            {prenom}
          </div>
        </div>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          style={{ display: 'none' }}
          onChange={handleFileChange}
        />
      </div>
      <div className="input-container2">
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
