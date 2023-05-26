import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './Home.tsx'
import Frontend from './Frontend.tsx';
import Photography from './Photography.tsx';
import Makeup from './Makeup';
import Cooking from './Cooking.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "frontend",
        element: <Frontend />
      },
      {
        path: "photography",
        element: <Photography />
      },
      {
        path: "makeup",
        element: <Makeup />
      },
      {
        path: "cooking",
        element: <Cooking />
      },
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

