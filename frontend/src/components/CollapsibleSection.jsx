import { Show, createSignal } from 'solid-js';
import './CollapsibleSection.css';


export default function CollapsibleSection(props) {
  const [collapsed, setCollapsed] = createSignal(false);

  const collapse = () => {
    setCollapsed(!collapsed());
  }

  return (
    <div class="coll-cont">
      <div class="coll-head" onClick={collapse}>
        <p class="text">{props.title}</p>
      </div>
      <Show when={collapsed()}>
        <div class="coll-body">
          <p class="text">{props.body}</p>
        </div>
      </Show>
    </div>
  );
}