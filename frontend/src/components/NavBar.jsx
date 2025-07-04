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
        <a class="navbar-link" href="/">
          <img class="logo" src={logo} alt="logo"/>
          <img class="logo" src={nivra} alt="nivra"/>
        </a>
      </header>
      <div class="nav-cont">
        <nav class="nav-menu">
          <a href="/documentation" class="nav-link">Docs</a>
          <a href="/roadmap" class="nav-link">Roadmap</a>
          <a href="/about" class="nav-link">About</a>
          <a href="/nrv-token" class="nav-link">NRV Token</a>
          <a href="/join" class="nav-link">Join us</a>
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
          <a href="/documentation" class="nav-link">Docs</a>
          <a href="/roadmap" class="nav-link">Roadmap</a>
          <a href="/about" class="nav-link">About</a>
          <a href="/nrv-token" class="nav-link">NRV Token</a>
          <a href="/join" class="nav-link">Join us</a>
        </div>
      </Show>
    </nav>
  );
}