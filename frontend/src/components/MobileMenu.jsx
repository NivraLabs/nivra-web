import { createSignal, onCleanup, onMount } from "solid-js";
import menu from '../assets/menu.svg';

function MobileMenu() {
  const [isOpen, setIsOpen] = createSignal(false);
  let menuRef;

  const toggleMenu = () => setIsOpen(!isOpen());

  const handleClickOutside = (event) => {
    if (menuRef && !menuRef.contains(event.target)) {
      setIsOpen(false);
    }
  };

  onMount(() => {
    document.addEventListener("mousedown", handleClickOutside);
  });

  onCleanup(() => {
    document.removeEventListener("mousedown", handleClickOutside);
  });

  const handleNavClick = () => setIsOpen(false);

  return (
    <div class="nav-menu-mobile" ref={menuRef}>
      <img class="hb-menu-icon" src={menu} onClick={toggleMenu} alt="menu" />

      {isOpen() && (
        <div>
          <nav class="collapse-menu">
            <a href="/documentation" class="nav-link" onClick={handleNavClick}>Docs</a>
            <a href="/roadmap" class="nav-link" onClick={handleNavClick}>Roadmap</a>
            <a href="/about" class="nav-link" onClick={handleNavClick}>About</a>
            <a href="/nrv-token" class="nav-link" onClick={handleNavClick}>NRV Token</a>
            <a href="/join" class="nav-link" onClick={handleNavClick}>Join us</a>
          </nav>
        </div>
      )}
    </div>
  );
}

export default MobileMenu;