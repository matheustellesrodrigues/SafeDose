import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';


//ROTAS
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home/Home.jsx';
import Sobre from './pages/Sobre/Sobre.jsx';
import Login from './pages/Login/Login.jsx';
import Erro from './pages/Erro/Erro.jsx';
import Cadastro from './pages/Cadastro/Cadastro.jsx';
import Formulario from './pages/Formulario/Formulario.jsx';
import Retirada from './pages/Retirada/Retirada.jsx';





const routes = createBrowserRouter([
  { path: "/" , element: <App/>,errorElement: <Erro />,
   children: [
    
      {path: "/", element: <Home/>}, 
      {path: "/login", element: <Login/>},
      {path: "/sobre", element: <Sobre/>},
      {path: "/cadastro", element: <Cadastro/>},
      {path: "/Formulario", element: <Formulario/>},
      {path: "/Retirada", element: <Retirada/>},
      {path: "*", element: <Erro/>} //pra aparecer o menu e rodape tbm
      
      
   ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={routes} />
  </React.StrictMode>,
)

