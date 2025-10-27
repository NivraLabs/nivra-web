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
            <div class="circular-progress">
            <CircularProgress start={0} percent={43} size={75} strokeWidth={9} animationDuration={2000}/>
            </div>
            <div class="nvr-card-text">
              <h3 class="head-4 nrv-head"><span class="nvr-highlight">430,000,000</span> (43 %)</h3>
              <p class="text nrv-text">Community Reserve</p>
              <p class="text nvr-text">• Long-term ecosystem fund (grants, dev support, research)</p>
              <p class="text nvr-text">• Vesting: 5% unlocked at TGE, linear release over 60 months</p>
            </div>
          </div>

          <div class="nvr-card">
            <div class="circular-progress">
              <CircularProgress start={43} percent={2} size={75} strokeWidth={9} animationDuration={2000}/>
            </div>
            <div class="nvr-card-text">
              <h3 class="head-4 nrv-head"><span class="nvr-highlight">20,000,000</span> (2 %)</h3>
              <p class="text nrv-text">Initial Liquidity</p>
              <p class="text nvr-text">• 100% Release at TGE, 12 month lock</p> 
            </div>
          </div>

          <div class="nvr-card">
            <div class="circular-progress">
              <CircularProgress start={45} percent={23} size={75} strokeWidth={9} animationDuration={2000}/>
            </div>
            <div class="nvr-card-text">
              <h3 class="head-4 nrv-head"><span class="nvr-highlight">230,000,000</span> (23 %)</h3>
              <p class="text nrv-text">Core Contributors</p>
              <p class="text nvr-text">• Team members’ and advisors’ incentives</p>
              <p class="text nvr-text">• Vesting: 6-month cliff, then linear release over 24 months</p> 
            </div>
          </div>

          <div class="nvr-card">
            <div class="circular-progress">
              <CircularProgress start={68} percent={3} size={75} strokeWidth={9} animationDuration={2000}/>
            </div>
            <div class="nvr-card-text">
              <h3 class="head-4 nrv-head"><span class="nvr-highlight">30,000,000</span> (3 %)</h3>
              <p class="text nrv-text">Initial Dex Offering (IDO)</p>
              <p class="text nvr-text">• Public sale to bootstrap decentralization</p>
              <p class="text nvr-text">• No vesting</p>
            </div>
          </div>

          <div class="nvr-card">
            <div class="circular-progress">
              <CircularProgress start={71} percent={17} size={75} strokeWidth={9} animationDuration={2000}/>
            </div>
            <div class="nvr-card-text">
              <h3 class="head-4 nrv-head"><span class="nvr-highlight">170,000,000</span> (17 %)</h3>
              <p class="text nrv-text">Private Investors</p>
              <p class="text nvr-text">• Seed & strategic backers</p>
              <p class="text nvr-text">• Vesting: 3-month cliff, then linear release over 12 months</p>
            </div>
          </div>

          <div class="nvr-card">
            <div class="circular-progress">
              <CircularProgress start={88} percent={10} size={75} strokeWidth={9} animationDuration={2000}/>
            </div>
            <div class="nvr-card-text">
              <h3 class="head-4 nrv-head"><span class="nvr-highlight">100,000,000</span> (10 %)</h3>
              <p class="text nrv-text">Incentives</p>
              <p class="text nvr-text">• Community events, governance participation, arbitration rewards, bug bounty and participation rewards</p>
              <p class="text nvr-text">• Vesting:  5% unlocked at TGE, linear release over 36 months </p>
            </div>
          </div>

          <div class="nvr-card">
            <div class="circular-progress">
              <CircularProgress start={98} percent={2} size={75} strokeWidth={9} animationDuration={2000}/>
            </div>
            <div class="nvr-card-text">
              <h3 class="head-4 nrv-head"><span class="nvr-highlight">20,000,000</span> (2 %)</h3>
              <p class="text nrv-text">Marketing</p>
              <p class="text nvr-text">• Campaigns & affiliates</p>
              <p class="text nvr-text">• Vesting: linear release over 12 months</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}