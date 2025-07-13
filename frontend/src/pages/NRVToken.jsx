import nivra_court from '../assets/IMG_5043.png';
import CircularProgress from '../components/CircularProgress';
import './NRVToken.css';


export default function Docs() {
  return(
    <div class="nrv-wrapper">
      <div class="nrv-slide">
        <h2 class="head-3 hero-title">NVR Token</h2>
        <img class="hero-image nrv-img" src={nivra_court} />
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

      <div class="nrv-slide">
        <h2 class="head-3">Tokenomics</h2>
        <h3 class="head-4">Supply cap. <span class="nvr-highlight">1,000,000,000 $NVR</span></h3>
        <div class="nvr-card-display">
          <div class="nvr-card">
            <CircularProgress start={0} percent={35} size={90} animationDuration={2000}/>
            <div class="nvr-card-text">
              <h3 class="head-4 nrv-head"><span class="nvr-highlight">350,000,000</span> / 1,000,000,000 (35%)</h3>
              <p class="text nrv-text">Community reserve.</p>
            </div>
          </div>

          <div class="nvr-card">
            <CircularProgress start={35} percent={20} size={90} animationDuration={2000}/>
            <div class="nvr-card-text">
              <h3 class="head-4 nrv-head"><span class="nvr-highlight">200,000,000</span> / 1,000,000,000 (20%)</h3>
              <p class="text nrv-text">Team and advisors.</p>
            </div>
          </div>

          <div class="nvr-card">
            <CircularProgress start={55} percent={15} size={90} animationDuration={2000}/>
            <div class="nvr-card-text">
              <h3 class="head-4 nrv-head"><span class="nvr-highlight">150,000,000</span> / 1,000,000,000 (15%)</h3>
              <p class="text nrv-text">Initial dex offering (IDO).</p>
            </div>
          </div>

          <div class="nvr-card">
            <CircularProgress start={70} percent={15} size={90} animationDuration={2000}/>
            <div class="nvr-card-text">
              <h3 class="head-4 nrv-head"><span class="nvr-highlight">150,000,000</span> / 1,000,000,000 (15%)</h3>
              <p class="text nrv-text">Private investors.</p>
            </div>
          </div>

          <div class="nvr-card">
            <CircularProgress start={85} percent={10} size={90} animationDuration={2000}/>
            <div class="nvr-card-text">
              <h3 class="head-4 nrv-head"><span class="nvr-highlight">100,000,000</span> / 1,000,000,000 (10%)</h3>
              <p class="text nrv-text">Initial liquidity.</p>
            </div>
          </div>

          <div class="nvr-card">
            <CircularProgress start={95} percent={5} size={90} animationDuration={2000}/>
            <div class="nvr-card-text">
              <h3 class="head-4 nrv-head"><span class="nvr-highlight">50,000,000</span> / 1,000,000,000 (5%)</h3>
              <p class="text nrv-text">Marketing and launchpool.</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}