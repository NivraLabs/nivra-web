import { onCleanup, onMount } from 'solid-js';
import ScrollAnimated from '../components/ScrollAnimated';
import './Roadmap.css';


export default function Roadmap() {

  onMount(() => {
    let items = document.querySelectorAll(".animation-item");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("slide-up");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0 });

    items.forEach(item => {
      observer.observe(item);
    });

    onCleanup(() => observer.disconnect());
  })

  return(
    <>
      <div class="roadmap-wrapper">
        <h2 class="head-3">Roadmap</h2>
        <div class="roadmap-grid">
          <div class="roadmap-tree"></div>

          <div class="roadmap-item animation-item" id="roadmap-point1">
            <div class="roadmap-item-head">
              <h3 class="head-3 no-wrap">2025 Q3</h3>
              <div class="roadmap-tree-fork"></div>
            </div>
            <ul class="roadmap-list">
              <li class="text-4">Incorporate the company</li>
              <li class="text-4">Form the core team</li>
              <li class="text-4">Kick off social media</li>
              <li class="text-4">Launch GitHub</li>
              <li class="text-4">Define tokenomics</li>
              <li class="text-4">Launch the website</li>
              <li class="text-4">Publish white paper</li>
            </ul>
          </div>

          <div class="roadmap-item-right animation-item" id="roadmap-point2">
            <div class="roadmap-fork-right"></div>
            <h3 class="head-3 head-3-right no-wrap">2025 Q4</h3>
            <ul class="roadmap-list roadmap-list-right">
              <li class="text-4">Conduct smart contract audit</li>
              <li class="text-4">Private sale</li>
              <li class="text-4">IDO</li>
              <li class="text-4">Establish community ambassador program</li>
              <li class="text-4">Form strategic partnerships</li>
              <li class="text-4">Publish protocol usage guide for end-users</li>
              <li class="text-4">Initiate development of smart contracts</li>
              <li class="text-4">Initiate development of protocol integration APIs</li>
            </ul> 
          </div>

          <div class="roadmap-item animation-item" id="roadmap-point3">
            <div class="roadmap-item-head">
              <h3 class="head-3 no-wrap">2026 Q1</h3>
              <div class="roadmap-tree-fork"></div>
            </div>
            <ul class="roadmap-list">
              <li class="text-4">Initiate development of CLI and deployment scripts</li>
              <li class="text-4">Initiate development of protocol data indexer</li>
              <li class="text-4">Initiate development of developer SDKs and integration libraries</li>
            </ul> 
          </div>

          <div class="roadmap-item-right animation-item" id="roadmap-point4">
            <div class="roadmap-fork-right"></div>
            <h3 class="head-3 head-3-right no-wrap">2026 Q2</h3>
            <ul class="roadmap-list roadmap-list-right">
              <li class="text-4">Initiate development of mobile/web UI</li>
              <li class="text-4">Publish developer integration guide for embedding the arbitration protocol</li>
              <li class="text-4">Launch testnet</li>
              <li class="text-4">Conduct UX/UI workshop and feedback round</li>
            </ul> 
          </div>

          <div class="roadmap-item animation-item" id="roadmap-point5">
            <div class="roadmap-item-head">
              <h3 class="head-3 no-wrap">2026 Q3</h3>
              <div class="roadmap-tree-fork"></div>
            </div>
            <ul class="roadmap-list">
              <li class="text-4">Fix bugs and make adjustments</li>
              <li class="text-4">Conduct smart contract audits</li>
              <li class="text-4">Launch mainnet</li>
              <li class="text-4">Initiate bug bounty program</li>
            </ul> 
          </div>

          <div class="roadmap-item-right animation-item" id="roadmap-point6">
            <div class="roadmap-fork-right"></div>
            <h3 class="head-3 head-3-right no-wrap">2026 Q4</h3>
            <ul class="roadmap-list roadmap-list-right">
              <li class="text-4">AI Agents as Nivsters</li>
              <li class="text-4">Launch governance</li>
            </ul> 
          </div>

        </div>

        <div class="roadmap-grid-mobile">
          <div class="roadmap-tree-mobile"></div>

          <div class="roadmap-item-right animation-item" id="roadmap-point1">
            <div class="roadmap-fork-right"></div>
            <h3 class="head-3 head-3-right no-wrap">2025 Q3</h3>
            <ul class="roadmap-list roadmap-list-right">
              <li class="text-4">Incorporate the company</li>
              <li class="text-4">Form the core team</li>
              <li class="text-4">Kick off social media</li>
              <li class="text-4">Launch GitHub</li>
              <li class="text-4">Define tokenomics</li>
              <li class="text-4">Launch the website</li>
              <li class="text-4">Publish white paper</li>
            </ul> 
          </div>

          <div class="roadmap-item-right animation-item" id="roadmap-point2">
            <div class="roadmap-fork-right"></div>
            <h3 class="head-3 head-3-right no-wrap">2025 Q4</h3>
            <ul class="roadmap-list roadmap-list-right">
              <li class="text-4">Conduct smart contract audit</li>
              <li class="text-4">Private sale</li>
              <li class="text-4">IDO</li>
              <li class="text-4">Establish community ambassador program</li>
              <li class="text-4">Form strategic partnerships</li>
              <li class="text-4">Publish protocol usage guide for end-users</li>
              <li class="text-4">Initiate development of smart contracts</li>
              <li class="text-4">Initiate development of protocol integration APIs</li>
            </ul> 
          </div>

          <div class="roadmap-item-right animation-item" id="roadmap-point3">
            <div class="roadmap-fork-right"></div>
            <h3 class="head-3 head-3-right no-wrap">2026 Q1</h3>
            <ul class="roadmap-list roadmap-list-right">
              <li class="text-4">Initiate development of CLI and deployment scripts</li>
              <li class="text-4">Initiate development of protocol data indexer</li>
              <li class="text-4">Initiate development of developer SDKs and integration libraries</li>
            </ul> 
          </div>

          <div class="roadmap-item-right animation-item" id="roadmap-point4">
            <div class="roadmap-fork-right"></div>
            <h3 class="head-3 head-3-right no-wrap">2026 Q2</h3>
            <ul class="roadmap-list roadmap-list-right">
              <li class="text-4">Initiate development of mobile/web UI</li>
              <li class="text-4">Publish developer integration guide for embedding the arbitration protocol</li>
              <li class="text-4">Launch testnet</li>
              <li class="text-4">Conduct UX/UI workshop and feedback round</li>
            </ul> 
          </div>

          <div class="roadmap-item-right animation-item" id="roadmap-point5">
            <div class="roadmap-fork-right"></div>
            <h3 class="head-3 head-3-right no-wrap">2026 Q3</h3>
            <ul class="roadmap-list roadmap-list-right">
              <li class="text-4">Fix bugs and make adjustments</li>
              <li class="text-4">Conduct smart contract audits</li>
              <li class="text-4">Launch mainnet</li>
              <li class="text-4">Initiate bug bounty program</li>
            </ul> 
          </div>

          <div class="roadmap-item-right animation-item" id="roadmap-point6">
            <div class="roadmap-fork-right"></div>
            <h3 class="head-3 head-3-right no-wrap">2026 Q4</h3>
            <ul class="roadmap-list roadmap-list-right">
              <li class="text-4">AI Agents as Nivsters</li>
              <li class="text-4">Launch governance</li>
            </ul> 
          </div>

        </div>
      </div>
    </>
  );
}