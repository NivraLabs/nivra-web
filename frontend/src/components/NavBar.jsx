import logo from '../assets/nivra_logo.svg';
import nivra from '../assets/nivra.svg';
import './NavBar.css';


export default function NavBar() {
  return (
    <div class="navbar">
      <header class="navbar-head">
        <img src={logo} alt="logo"/>
        <img src={nivra} alt="nivra"/>
      </header>
    </div>
  );
}

