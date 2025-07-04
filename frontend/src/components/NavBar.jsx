import logo from '../assets/nivra_logo.svg';
import nivra from '../assets/nivra.svg';
import menu from '../assets/menu.svg';
import './NavBar.css';
import { Show, createSignal } from 'solid-js';
import MobileMenu from './MobileMenu';


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
        <MobileMenu />
      </div>
      </div>
    </div>
  );
}