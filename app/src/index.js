import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './views/pages/Home';
import Ingredientes from './views/pages/Ingredientes'
import Receitas from './views/pages/Receitas'
import Pedidos from './views/pages/Pedidos'
import Clientes from './views/pages/Clientes'
import Estatisticas from './views/pages/Estatisticas'
import CadastrarIngredientes from './views/pages/cadastros/ingredientes/CadastrarIngredientes'
import App from './App';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//   },
//   {
//     path: "/ingredientes",
//     element: <ingredientes />,
//   }
// ])

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[
      {
            path: "/",
            element: <Home />,
          },
          {
            path: "/ingredientes",
            element: <Ingredientes />,
          },
          {
            path: "/receitas",
            element: <Receitas />,
          },
          {
            path: "/pedidos",
            element: <Pedidos />,
          },
          {
            path: "/clientes",
            element: <Clientes />,
          },
          {
            path: "/estatisticas",
            element: <Estatisticas />,
          },
          {
            path: "/cadastrarIngredientes",
            element: <CadastrarIngredientes />,
          },
    ]
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
