import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
//import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import SignupForm from './Inscription';
import LoginPage from './Connexion';
import Jsp from './Incident';
//import AlertePage from './Alerte' (./Alerte correspond à la page de déclaration des incidents);
import Root from './root.jsx';
import ErrorPage from './pageErreur.jsx';
import UserProfile from './Profil.jsx';
import User from './User.jsx';

const router = createBrowserRouter([
  {
    path: "/App",
    element: <App />,
  },
  {
    path: "/Incident",
    element: <Jsp />,
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
  {
    path: "/Profil",
    element: <UserProfile />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/pageErreur",
    element: <ErrorPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/User",
    element: <User />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);