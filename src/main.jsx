import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
//import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import SignupForm from './Inscription';
import LoginPage from './Connexion';
//import AlertePage from './Alerte' (./Alerte correspond à la page de déclaration des incidents);
import Root from './root.jsx';
import ErrorPage from './pageErreur.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Connexion",
    element: <LoginPage />,
  },
  
  {
    path: "/Inscription",
    element: <SignupForm />,
  },
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);