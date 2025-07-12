import logo from '../assets/NIVRALOGO (1).png';
import nivra from '../assets/nivra.svg';
import './NavBar.css';
import MobileMenu from './MobileMenu';
import JoinUsButton from './JoinUsButton';


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
          <a href="/nvr-token" class="nav-link">NVR Token</a>
          <JoinUsButton />
        </nav>
        <MobileMenu />
      </div>
      </div>
    </div>
  );
}