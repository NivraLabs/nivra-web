import { createSignal, onCleanup, onMount } from 'solid-js';

export default function CircularProgress(props) {
  const {
    start = 0,
    percent = 75,
    size = 120,
    strokeWidth = 10,
    circleOneStroke = '#e6e6e6',
    circleTwoStroke = '#473a87',
    animationDuration = 1000, // in ms
  } = props;

  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const [dashOffset, setDashOffset] = createSignal(circumference);
  let svgRef;

  onMount(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const offset = ((100 - percent) / 100) * circumference;
          setDashOffset(offset);
          observer.disconnect(); // Trigger only once
        }
      },
      { threshold: 0.1 } // Adjust as needed
    );

    if (svgRef) observer.observe(svgRef);

    onCleanup(() => observer.disconnect());
  });

  const center = size / 2;

  return (
    <svg
      ref={el => (svgRef = el)}
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
    >
      {/* Track circle */}
      <circle
        cx={center}
        cy={center}
        r={radius}
        fill="transparent"
        stroke={circleOneStroke}
        stroke-width={strokeWidth}
      />
      {/* Animated progress circle */}
      <circle
        cx={center}
        cy={center}
        r={radius}
        fill="transparent"
        stroke={circleTwoStroke}
        stroke-width={strokeWidth}
        stroke-dasharray={circumference}
        stroke-dashoffset={dashOffset()}
        stroke-linecap="round"
        transform={`rotate(${-90 + (start * 3.6)} ${center} ${center})`}
        style={{
          transition: `stroke-dashoffset ${animationDuration}ms ease`
        }}
      />
    </svg>
  );
}