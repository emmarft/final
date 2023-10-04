import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Map from "./Map.jsx"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const [isSidebarExpanded, setSidebarExpanded] = useState(false);

  const handleSidebarToggle = () => {
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
            <li>Mon compte</li>
            <li>Incident</li>
            <li>Paramètres</li>
            </ul>
          </div>
        )}
      </div>
      {/* Contenu principal de votre application */}
      <Map/>
    </div>
   </>
  )
}

export default App

