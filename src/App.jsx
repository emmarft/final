import { useState } from 'react'
//import reactLogo from './assets/react.svg'
import Map from "./Map.jsx"
import User from "./User.jsx"
import './App.css'
import { Link } from 'react-router-dom';

function App() {
 Pages
  //const [count, setCount] = useState(0)

 main

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
        {isSidebarExpanded && (
          <div className="content">
            <ul>
            <li>
              <Link to= '/Connexion'>Se connecter</Link></li>
            <li>Incident</li>
            <li>Paramètres</li>
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

