import './CardSlider.css';
import { createSignal, onMount, For, Show } from "solid-js";
import GrowFadeIn from './GrowFadeIn';


function CardSlider(props) {
  const cardsCount = props.cards.length;
  const slides = [...props.cards];

  const [currentIndex, setCurrentIndex] = createSignal(0);
  const [isDragging, setIsDragging] = createSignal(false);

  let startX = 0;
  let dragOffset = 0;
  let trackRef;

  const goToIndex = (index) => {
    if (cardsCount <= 1) return;
    const newIndex = (index + cardsCount) % cardsCount;

    const textBody = document.getElementById("animate-text");
    const img = document.getElementById("animate-img");

    textBody.classList.remove('animate2');
    void textBody.offsetWidth;
    textBody.classList.add('animate2');

    img.classList.remove('animate2');
    void img.offsetWidth;
    img.classList.add('animate2');

    setCurrentIndex(newIndex);
  };

  const nextSlide = () => goToIndex(currentIndex() + 1);
  const prevSlide = () => goToIndex(currentIndex() - 1);

  const handlePointerDown = (e) => {
    if (cardsCount <= 1) return;
    e.currentTarget.setPointerCapture(e.pointerId);
    startX = e.clientX;
    dragOffset = 0;
    setIsDragging(true);
  };

  const handlePointerMove = (e) => {
    if (!isDragging()) return;
    const pointerX = e.clientX;
    dragOffset = pointerX - startX;

    if (trackRef) {
      trackRef.style.transform = `translateX(${dragOffset}px)`;
    }
  };

  const handlePointerUp = (e) => {
    if (!isDragging()) return;

    if (trackRef) {
      trackRef.style.transform = `translateX(${0})`;
    }

    const threshold = 0;

    if (dragOffset < -threshold) {
      nextSlide();
    } else if (dragOffset > threshold) {
      prevSlide();
    }

    setIsDragging(false);
    e.currentTarget.releasePointerCapture(e.pointerId);
  };

  return (
    <div class="slider-card-img-wrapper">
      <GrowFadeIn>
      <div class="slider-body">
        <svg class="nav" onclick={nextSlide} viewBox="0 -960 960 960" >
          <path fill="currentColor" d="M640-80 240-480l400-400 71 71-329 329 329 329-71 71Z"/>
        </svg>
        <div class="card-slider-wrapper">
          <div class="card-slider-wrapper-text">
          <h3 class="heading-3">{props.title}</h3>
          <div class="card-slider">
            <div
              class="slider-track"
              ref={trackRefElement => (trackRef = trackRefElement)}
              on:pointerdown={handlePointerDown}
              on:pointermove={handlePointerMove}
              on:pointerup={handlePointerUp}
              on:pointercancel={handlePointerUp}
            >
              <div id="animate-text">
              {slides[currentIndex()]}
              </div>
            </div>
          </div>
          </div>
          <div class="dots">
            <For each={props.cards}>
              {(item, index) => (
                <span
                  class="dot"
                  classList={{ active: index() === currentIndex() }}
                  onClick={() => goToIndex(index())}
                />
              )}
            </For>
          </div>
        </div>
        <svg class="nav" onclick={prevSlide} viewBox="0 -960 960 960">
          <path fill="currentColor" d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"/>
        </svg>
      </div>
      </GrowFadeIn>
      <GrowFadeIn>
        <div class="cd-img-cont" id="animate-img">
          {props.imgs[currentIndex()]}
        </div>
      </GrowFadeIn>
    </div>
  );
}

export default CardSlider;