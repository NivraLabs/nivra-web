import { onMount, onCleanup } from "solid-js";

export default function FadeIn(props) {
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
    <div ref={el => (ref = el)} class={`fade-in ${props.class}`}>
      {props.children}
    </div>
  );
}