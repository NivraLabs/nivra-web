import './CardSlider.css';
import { createSignal, onMount, For, Show } from "solid-js";
import GrowFadeIn from './GrowFadeIn';


function CardSlider(props) {
  const cardsCount = props.cards.length;

  // Clone last and first cards to create the infinite loop effect
  const slides = cardsCount > 1
    ? [...props.cards]
    : [...props.cards];

  const [currentIndex, setCurrentIndex] = createSignal(0); // logical index (0-based)
  const [slidePosition, setSlidePosition] = createSignal(cardsCount > 1 ? 0 : 0); // physical index in slides
  const [isDragging, setIsDragging] = createSignal(false);
  const [isTransitioning, setIsTransitioning] = createSignal(true);

  let startX = 0;
  let dragOffset = 0;
  let containerWidth = 0;
  let trackRef;

  onMount(() => {
    // Measure the width of the slider container once mounted
    if (trackRef && trackRef.parentElement) {
      containerWidth = trackRef.parentElement.offsetWidth;
    }
  });

  const goToIndex = (index) => {
    if (cardsCount <= 1) return;
    const newIndex = (index + cardsCount) % cardsCount;
    let newSlidePos = newIndex;

    // Handle wrap from last to first
    if (currentIndex() === cardsCount - 1 && newIndex === 0) {
      newSlidePos = 0;
    }
    // Handle wrap from first to last
    if (currentIndex() === 0 && newIndex === cardsCount - 1) {
      newSlidePos = slides.length - 1;
    }

    const textBody = document.getElementById("animate-text");
    const img = document.getElementById("animate-img");

    textBody.classList.remove('animate2');
    void textBody.offsetWidth;
    textBody.classList.add('animate2');

    img.classList.remove('animate2');
    void img.offsetWidth;
    img.classList.add('animate2');

    setIsTransitioning(true);
    setCurrentIndex(newIndex);
    setSlidePosition(newSlidePos);
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

    const threshold = containerWidth * 0.3;

    if (dragOffset < threshold) {
      nextSlide();
    } else if (dragOffset > threshold) {
      prevSlide();
    }

    setIsDragging(false);
    e.currentTarget.releasePointerCapture(e.pointerId);
  };

  const handleTransitionEnd = () => {
    if (slidePosition() === slides.length - 1) {
      setIsTransitioning(false);
      setSlidePosition(0);
      requestAnimationFrame(() => setIsTransitioning(true));
    }

    if (slidePosition() === 0) {
      setIsTransitioning(false);
      setSlidePosition(cardsCount - 1);
      requestAnimationFrame(() => setIsTransitioning(true));
    }
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
          <div class="card-slider" classList={{ dragging: isDragging() }}>
            <div
              class="slider-track"
              ref={trackRefElement => (trackRef = trackRefElement)}
              on:pointerdown={handlePointerDown}
              on:pointermove={handlePointerMove}
              on:pointerup={handlePointerUp}
              on:pointercancel={handlePointerUp}
            >
              <Show when={isTransitioning()}>
                <div id="animate-text">
                {slides[slidePosition()]}
                </div>
              </Show>
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
      <Show when={isTransitioning()}>
        <div class="cd-img-cont" id="animate-img">
          {props.imgs[slidePosition()]}
        </div>
      </Show>
      </GrowFadeIn>
    </div>
  );
}

export default CardSlider;