import logo from '../assets/nivra_logo.svg';
import nivra from '../assets/nivra.svg';
import menu from '../assets/menu.svg';
import './NavBar.css';
import { Show, createSignal } from 'solid-js';


export default function NavBar() {
  return (
    <div class="navbar">
      <div class="nav-wrap">
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
        <BMenu />
      </div>
      </div>
    </div>
  );
}

function BMenu() {
  const [collapsed, setCollapsed] = createSignal(false);

  const showMenu = () => {
    setCollapsed(!collapsed());
  }

  return (
    <nav class="nav-menu-mobile">
      <img class="hb-menu-icon" src={menu} onClick={showMenu} alt="menu" />
      <Show when={collapsed()}>
        <div class="collapse-menu">
          <a class="nav-link">Docs</a>
          <a class="nav-link">Roadmap</a>
          <a class="nav-link">About</a>
          <a class="nav-link">Join us</a>
        </div>
      </Show>
    </nav>
  );
}