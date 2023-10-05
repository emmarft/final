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
   <div className={`wrapper ${isSidebarExpanded ? 'expanded' : ''}`}>
  <div className={`sidebar ${isSidebarExpanded ? 'expanded' : ''}`} onClick={handleSidebarToggle}>
    <div className="icon">&#9776;</div>
    <div className="content">
      <ul>
        <li>
          <img
            src="/images/mon-compte.png"
            alt="Mon compte"
            style={{ width: '30px' }}

          />
          {isSidebarExpanded && <Link to='/Connexion'> &nbsp; Mon compte</Link>}
        </li>
        <li>
          <img
            src="/images/logo-signalement.png"
            alt="Signalement"
            style={{ width: '30px'}}
          />
          {isSidebarExpanded && <Link to='/Signalement'> &nbsp; Signalement</Link>}
        </li>
        <li>
          <img
            src="/images/logo-déco.png"
            alt="Se déconnecter"
            style={{ width: '26px' }}
          />
          {isSidebarExpanded && <span>&nbsp; Deconnexion</span>}
        </li>
        {/* Ajoutez d'autres logos ici */}
      </ul>
    </div>
  </div>
  
      {}
      <Map/>
      <User/>
    </div>

   </>
  )
}

export default App;

