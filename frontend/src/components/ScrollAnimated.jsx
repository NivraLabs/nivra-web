import { onMount, onCleanup } from "solid-js";
import './ScrollAnimated.css';


function ScrollAnimated(props) {
  let el;  // reference to the DOM element that will be animated

  onMount(() => {
    // Create an IntersectionObserver to watch when `el` enters the viewport
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Element has entered the viewport, trigger the animation
          entry.target.classList.add("animate-slide-up");
          // If you want to use the fade+scale animation instead:
          //entry.target.classList.add("animate-fade-scale");
          
          // Unobserve the element so the animation class is added only once
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0 }); 
    // threshold: 0.1 means the callback triggers when 10% of the element is visible.
    // You can adjust threshold or use rootMargin for earlier/later triggering.

    observer.observe(el);              // start observing our element
    onCleanup(() => observer.disconnect());  // cleanup observer on component unload
  });

  return (
    <div ref={el} class="animate-on-scroll">
      {props.children /* content that will appear after animation */}
    </div>
  );
}

export default ScrollAnimated;