import nivra_pool from '../assets/NIVRA POOL.png';
import './NRVToken.css';


export default function Docs() {
  return(
    <div class="nrv-wrapper">
      <div class="nrv-slide">
        <h2 class="head-3">NVR Token</h2>
        <h3 class="head-4">The NVR Token is a central element of Nivra, serving multiple essential functions.</h3>
      </div>
      <div class="nrv-slide-w">
        <img class="nrv-img" src={nivra_pool} />
        <div class="nrv-body">
          <h3 class="head-4">Selection of Nivsters</h3>
          <p class="text">Stake NVR to qualify as a Nivster for dispute resolution.</p>
          <h3 class="head-4">Incentives</h3>
          <p class="text">Active Nivsters earn NVR rewards by voting with the majority.</p>
          <h3 class="head-4">Network Defense</h3>
          <p class="text">Staked NVR tokens safeguard the protocol from malicious actors.</p>
          <h3 class="head-4">Governance</h3>
          <p class="text">NVR acts as the native token for voting on governance proposals.</p>
        </div>
      </div>
    </div>
  );
}