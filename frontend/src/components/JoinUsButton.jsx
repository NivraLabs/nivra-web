import { createSignal, onCleanup, onMount } from "solid-js";
import './JoinUsButton.css';

function JoinUsButton() {
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
    <div class="join-container" ref={menuRef}>
      <a class={isOpen() ? "nav-link nav-link-active" : "nav-link"} onClick={toggleMenu}>Join Us</a>

      {isOpen() && (
        <div>
          <nav class="collapse-menu-join">
            <a href="https://discord.gg/MpZcfEAW" class="nav-link join-us-link">Discord</a>
            <a href="https://x.com/nivracourt?s=21" class="nav-link join-us-link">x</a>
            <a href="https://github.com/NivraLabs" class="nav-link join-us-link">Github</a>
          </nav>
        </div>
      )}
    </div>
  );
}

export default JoinUsButton;