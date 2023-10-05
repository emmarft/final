import { useState } from 'react'
//import reactLogo from './assets/react.svg'
import Map from "./Map.jsx"
import User from "./User.jsx"
import './App.css'
import { Link } from 'react-router-dom';

function App() {

  const [isSidebarExpanded, setSidebarExpanded] = useState(false);

  const handleSidebarToggle = () => {
    console.log(isSidebarExpanded);
    setSidebarExpanded(!isSidebarExpanded);

  };

  return (
   <>
     <div className={`wrapper ${isSidebarExpanded ? 'expanded' : ''}}`}>
      <div className={`sidebar ${isSidebarExpanded ? 'expanded' : ''}`} onClick={handleSidebarToggle}>
        <div className="icon">&#9776;</div>
        <img src="/images/6229505.png" alt="Logo Couleur" height={50} color='white'/>
        {isSidebarExpanded && (
          <div className="content">
            <ul>
            <img src="/images/6229505.png" alt="Logo Couleur" height={50} color='white'/>

            <li>Mon compte</li>
            <li><Link to= '/Connexion'>Se connecter</Link></li>
            <li><Link to= '/User'>Incident</Link></li>
            <li><Link to= '/Inscription'>Créer un compte</Link></li>

            </ul>
          </div>
        )}
      </div>
      {}
      <Map/>
      <User/>
    </div>
   </>
  )
}

export default App;

