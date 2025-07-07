import { onMount, onCleanup } from "solid-js";
import './GrowFadeIn.css';

export default function GrowFadeIn(props) {
  let ref;
  let observer;

  onMount(() => {
    observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    });

    observer.observe(ref);
  });

  onCleanup(() => {
    if (observer && ref) observer.unobserve(ref);
  });

  return (
    <div ref={el => (ref = el)} class="grow-fade-in">
      {props.children}
    </div>
  );
}