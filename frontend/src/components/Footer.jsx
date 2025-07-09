import logo from '../assets/NIVRALOGO (1).png';
import nivra from '../assets/nivra.svg';
import './Footer.css';


export default function Footer() {
  return (
    <footer class="main-footer">
      <h3 class="f-email">contact@nivracourt.io</h3>
      <div class="f-nav-cont">
        <nav class="f-nav">
          <p class="f-text">Knowledge base</p>
          <a class="pre-heading-3">Introduction</a>
          <a class="pre-heading-3">Offerings</a>
          <a class="pre-heading-3">Research</a>
          <a class="pre-heading-3">Assistance</a>
          <a class="pre-heading-3">Reach us</a>
        </nav>
        <nav class="f-nav">
          <p class="f-text">Our team</p>
          <a class="pre-heading-3">Our story</a>
          <a class="pre-heading-3">Join us</a>
          <a class="pre-heading-3">Updates</a>
          <a class="pre-heading-3">Gatherings</a>
          <a class="pre-heading-3">Articles</a>
        </nav>
        <nav class="f-nav">
          <p class="f-text">Policies</p>
          <a class="pre-heading-3">Conditions</a>
          <a class="pre-heading-3">Data use</a>
          <a class="pre-heading-3">Tracking</a>
          <a class="pre-heading-3">Standards</a>
          <a class="pre-heading-3">Protection</a>
        </nav>
        <nav class="f-nav">
          <p class="f-text">Engage</p>
          <a class="pre-heading-3">Facebook</a>
          <a class="pre-heading-3">Instagram</a>
          <a class="pre-heading-3">Twitter</a>
          <a class="pre-heading-3">LinkedIn</a>
          <a class="pre-heading-3">Youtube</a>
        </nav>
      </div>
      <div class="f-copyright">
        <div class="f-logo">
          <img class="footer-logo" src={logo} alt="logo"/>
          <img src={nivra} alt="nivra"/>
        </div>
      </div>
      <p class="f-cr-text">© 2025 Nivra Labs. All Rights Reserved.</p>
    </footer>
  );
}