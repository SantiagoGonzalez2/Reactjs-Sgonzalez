import logo from "../../imagenes/milogo.png";
import './navbar.css';
import '../CartWidget/Cartwidget'
import Cartwidget from "../CartWidget/Cartwidget";


export default function Navbar() {
    return (
      <div className="App">
        <header className="App-header">
        <img id="logo" src={logo} alt="logo" />
        
           
            
          <nav className="navegador">
          <span><Cartwidget/></span>
          
          
          <span>Santiago Productos</span>
        
          <ul id="lista">
          
            <button> Mis cosas</button>
            <button> Las que necesitas</button>
            <button> Las que no</button>
          
          </ul>
        
          </nav>
          
        </header>
        
      </div>
    );
  }

  



