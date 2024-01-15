import {} from 'react';
import { Link } from "react-router-dom";
import "./Menu.css"

export default function Menu() {
  return (
    <header>
      <nav>
        <ul>
          {/* ta o "*" para qual ser igual o do main e n der o erro 404 */}
          <li><Link to="/">Home</Link></li> 
          <li><Link  to="/sobre">Sobre</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/Formulario">Formulario</Link></li>
          <li><Link to="/Retirada">Retirada</Link></li>
          {/* <li><Link  to="/equipamentos">equipamentos</Link></li> */}
        </ul>
      </nav>
    </header>
    
  );
}
