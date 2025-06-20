import logo from '../assets/nivra_logo.svg';
import nivra from '../assets/nivra.svg';
import menu from '../assets/menu.svg';
import './NavBar.css';


export default function NavBar() {
  return (
    <div class="navbar">
      <header class="navbar-head">
        <img src={logo} alt="logo"/>
        <img src={nivra} alt="nivra"/>
      </header>
      <div class="nav-cont">
        <nav class="nav-menu">
          <a class="nav-link">Docs</a>
          <a class="nav-link">Roadmap</a>
          <a class="nav-link">About</a>
          <a class="nav-link">Join us</a>
        </nav>
        <nav class="nav-menu-mobile">
          <img class="hb-menu-icon" src={menu} alt="menu" />
        </nav>
      </div>
    </div>
  );
}

