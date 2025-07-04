import { Show, createSignal } from 'solid-js';
import './SlideCards.css';
import FadeIn from './FadeIn';
import GrowFadeIn from './GrowFadeIn';

export default function SlideCards(props) {
  const [page, setPage] = createSignal(1);

  const swapPages = () => {
    if (page() === 1) {
      setPage(2);
    } else {
      setPage(1);
    }

    const textBody = document.querySelector('.slide-card-text-body');
    const img = document.querySelector('.slide-card-image-container');

    textBody.classList.remove('animate');
    void textBody.offsetWidth;
    textBody.classList.add('animate');

    img.classList.remove('animate');
    void img.offsetWidth;
    img.classList.add('animate');
  }

  return (
    <div class="slide-card-wrapper">
      <GrowFadeIn>
      <div class="slide-card" onClick={swapPages}>
        <svg class="icon"viewBox="0 -960 960 960" >
          <path fill="currentColor" d="M640-80 240-480l400-400 71 71-329 329 329 329-71 71Z"/>
        </svg>
        <div class="slide-card-text">
          <h3 class="heading-3">{props.title}</h3>
          <div class="slide-card-text-body">
          <Show when={page() === 1}>
            <p class="text">{props.text1}</p>
          </Show>
          <Show when={page() === 2}>
            <p class="text">{props.text2}</p>
          </Show>
          </div>
        </div>
        <svg class="icon" viewBox="0 -960 960 960">
          <path fill="currentColor" d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"/>
        </svg>
      </div>
      </GrowFadeIn>
      <GrowFadeIn>
      <div class="slide-card-image-container">
      <Show when={page() === 1}>
      <img src={props.img1} class="slide-card-image"/>
      </Show>
      <Show when={page() === 2}>
      <img src={props.img2} class="slide-card-image"/>
      </Show>
      </div>
      </GrowFadeIn>
    </div>
  )
}