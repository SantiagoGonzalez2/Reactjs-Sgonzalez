import logo from "../../imagenes/milogo.png";
import './navbar.css';
import '../CartWidget/Cartwidget'
import Cartwidget from "../CartWidget/Cartwidget";
import { Link, NavLink } from 'react-router-dom'


export default function Navbar() {
    return (
      <div className="App">
        <header className="App-header">
       <Link to={'/'} ><img id="logo" src={logo} alt="logo" /> </Link>
        
           
            
          <nav className="navegador">
          <span><Cartwidget/></span>
          
          
          <span>Santiago Productos</span>
        
          <div id="lista">
            

           <NavLink id="buttonL" to={'/category/tazas'} className='botones'> Tazas</NavLink>

           <NavLink id="buttonL" to={'/category/indumentaria'} className='botones'> Indumentaria</NavLink>

           <NavLink id="buttonL" to={'/category/temporadas'} className='botones'> Temporadas</NavLink>

          
           
          
          </div>
        
          </nav>
          
        </header>
        
      </div>
    );
  }

  



