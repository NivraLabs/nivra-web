import nivra_pool from '../assets/NIVRA POOL.png';
import './NRVToken.css';


export default function Docs() {
  return(
    <div class="nrv-wrapper">
      <div class="nrv-slide">
        <h2 class="head-3">NVR Token</h2>
        <img class="nrv-img" src={nivra_pool} />
        <h3 class="head-4">The NVR Token is a central element of Nivra, serving multiple essential functions.</h3>
      </div>
      <div class="nrv-slide-w">

        <div class="nrv-wrap">
          <svg class="icon-n" viewBox="0 0 256 256">
            <path fill="currentColor" d="M232,128A104,104,0,1,1,128,24,104.12041,104.12041,0,0,1,232,128Z"/>
          </svg>
          <h3 class="head-4 nrv-head">Selection of Nivsters</h3>
          <p class="text nrv-text">Stake NVR to qualify as a Nivster for dispute resolution.</p>
        </div>

        <div class="nrv-wrap">
          <svg class="icon-n" viewBox="0 0 256 256">
            <path fill="currentColor" d="M232,128A104,104,0,1,1,128,24,104.12041,104.12041,0,0,1,232,128Z"/>
          </svg>
          <h3 class="head-4 nrv-head">Incentives</h3>
          <p class="text nrv-text">Active Nivsters earn NVR rewards by voting with the majority.</p>
        </div>

        <div class="nrv-wrap">
          <svg class="icon-n" viewBox="0 0 256 256">
            <path fill="currentColor" d="M232,128A104,104,0,1,1,128,24,104.12041,104.12041,0,0,1,232,128Z"/>
          </svg>
          <h3 class="head-4 nrv-head">Network Defense</h3>
          <p class="text nrv-text">Staked NVR tokens safeguard the protocol from malicious actors.</p>
        </div>

        <div class="nrv-wrap">
          <svg class="icon-n" viewBox="0 0 256 256">
            <path fill="currentColor" d="M232,128A104,104,0,1,1,128,24,104.12041,104.12041,0,0,1,232,128Z"/>
          </svg>
          <h3 class="head-4 nrv-head">Governance</h3>
          <p class="text nrv-text">NVR acts as the native token for voting on governance proposals.</p>
        </div>
        
      </div>
    </div>
  );
}