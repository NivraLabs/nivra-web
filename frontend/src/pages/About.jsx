import nivra_vote from '../assets/NIVRA VOTE.png';
import nivra_team from '../assets/Nivra team.png';
import FadeIn from '../components/FadeIn';
import ScrollAnimated from '../components/ScrollAnimated';
import './About.css';


export default function About() {



  return(
    <>
      <div class="about-wrapper">
        <div class="problem-slide">
          <h2 class="head-3">Problems with traditional arbitration</h2>

          <div class="prob-grid">

            <div class="prob-exp-wrap">
              <svg class="icon-p" viewBox="0 0 256 256">
                <path fill="currentColor" d="M232,128A104,104,0,1,1,128,24,104.12041,104.12041,0,0,1,232,128Z"/>
              </svg>
              <h3 class="head-4 exp-head">It’s centralised</h3>
              <p class="text exp-text">A single arbitral institution keeps every document, piece of evidence, and procedural decision in one silo.</p>
            </div>

            <div class="prob-exp-wrap">
              <svg class="icon-p" viewBox="0 0 256 256">
                <path fill="currentColor" d="M232,128A104,104,0,1,1,128,24,104.12041,104.12041,0,0,1,232,128Z"/>
              </svg>
              <h3 class="head-4 exp-head">It requires blind trust</h3>
              <p class="text exp-text">Parties must simply trust that the institution will manage evidence securely and act impartially. There is no cryptographic audit trail or code-enforced guarantee.</p>
            </div>

            <div class="prob-exp-wrap">
              <svg class="icon-p" viewBox="0 0 256 256">
                <path fill="currentColor" d="M232,128A104,104,0,1,1,128,24,104.12041,104.12041,0,0,1,232,128Z"/>
              </svg>
              <h3 class="head-4 exp-head">It’s expensive</h3>
              <p class="text exp-text">A handful of dominant institutions set filing, administrative, and tribunal fees, leaving little market pressure to keep costs down.</p>
            </div>

            <div class="prob-exp-wrap">
              <svg class="icon-p" viewBox="0 0 256 256">
                <path fill="currentColor" d="M232,128A104,104,0,1,1,128,24,104.12041,104.12041,0,0,1,232,128Z"/>
              </svg>
              <h3 class="head-4 exp-head">It takes a long time</h3>
              <p class="text exp-text">multi-layered procedures, docket backlogs, and manual case management often mean disputes drag on for months or even years before a final award is issued.</p>
            </div>

            <div class="prob-exp-wrap">
              <svg class="icon-p" viewBox="0 0 256 256">
                <path fill="currentColor" d="M232,128A104,104,0,1,1,128,24,104.12041,104.12041,0,0,1,232,128Z"/>
              </svg>
              <h3 class="head-4 exp-head">You’re not in control</h3>
              <p class="text exp-text">The institution decides who can access the record, how long it is retained, and can even suspend or withhold an award, leaving parties powerless.</p>
            </div>

            <div class="prob-exp-wrap">
              <svg class="icon-p" viewBox="0 0 256 256">
                <path fill="currentColor" d="M232,128A104,104,0,1,1,128,24,104.12041,104.12041,0,0,1,232,128Z"/>
              </svg>
              <h3 class="head-4 exp-head">It lacks transparency</h3>
              <p class="text exp-text">Key procedural steps, deliberations, and data policies are typically opaque, making it difficult for parties to audit what happens behind closed doors or to verify that rules are being applied consistently.</p>
            </div>

          </div>
        </div>
      </div>

      <div class="mission-wrapper">
        <div class="mission-slide">
          <h2 class="head-3-white">Our Mission</h2>
          <p class="text-white">Democratizing justice through a decentralized hybrid court that delivers fast, fair, transparent dispute resolution, empowering anyone to settle conflicts securely and affordably.</p>

          <FadeIn>
            <img class="mission-img" src={nivra_vote} />
          </FadeIn>

        </div>
      </div>

      <div class="exist-wrapper">
        <div class="exist-slide">
          <h2 class="head-3">Why We Exist</h2>
          <div class="mission-body">

          <div class="prob-exp-wrap">
            <svg class="icon-p" viewBox="0 0 256 256">
              <path fill="currentColor" d="M232,128A104,104,0,1,1,128,24,104.12041,104.12041,0,0,1,232,128Z"/>
            </svg>
            <h3 class="head-4 exp-head">Justice shouldn’t be gated by cost or bureaucracy</h3>
            <p class="text exp-text">Traditional courts and arbitral bodies price out small claims and bog parties down in multi-layered procedures. Nivra’s hybrid AI + human model slashes administrative overhead so even micro-disputes can be decided in hours, not months or years.</p>
          </div>

          <div class="prob-exp-wrap">
            <svg class="icon-p" viewBox="0 0 256 256">
              <path fill="currentColor" d="M232,128A104,104,0,1,1,128,24,104.12041,104.12041,0,0,1,232,128Z"/>
            </svg>
            <h3 class="head-4 exp-head">Honesty should pay, misconduct should hurt</h3>
            <p class="text exp-text">Staking, majority-aligned rewards and minority penalties create a self-enforcing equilibrium in which the rational strategy is to vote truthfully, deterring collusion or fraudulent appeals.</p>
          </div>

          <div class="prob-exp-wrap">
            <svg class="icon-p" viewBox="0 0 256 256">
              <path fill="currentColor" d="M232,128A104,104,0,1,1,128,24,104.12041,104.12041,0,0,1,232,128Z"/>
            </svg>
            <h3 class="head-4 exp-head">Trust must be earned, not assumed</h3>
            <p class="text exp-text">Every vote is committed on-chain, revealed later, and economically bonded.</p>
          </div>

          <div class="prob-exp-wrap">
            <svg class="icon-p" viewBox="0 0 256 256">
              <path fill="currentColor" d="M232,128A104,104,0,1,1,128,24,104.12041,104.12041,0,0,1,232,128Z"/>
            </svg>
            <h3 class="head-4 exp-head">Global inclusion is the end-state</h3>
            <p class="text exp-text">By removing language barriers with AI agents, selecting jurors pseudonymously, and pricing fees proportionally, Nivra opens a neutral courtroom to anyone .</p>
          </div>

          </div>
        </div>
      </div>

      <div class="team-wrapper">
        <div class="team-slide">
          <div class="team-slide-body">
            <h2 class="head-3-white">Team</h2>
            <ScrollAnimated>
            <img class="team-img" src={nivra_team} />
            </ScrollAnimated>
            <p class="text-white">Nivra is steered by a Nordic team of passionate blockchain experts. United by the goal of re-imagining dispute resolution, we fuse Web3 engineering, AI research, game-theoretic economics and practical arbitration expertise to build a fast, transparent and decentralised court rooted in the Scandinavian ideals of openness, privacy and user-centric design.</p>
          </div>
        </div>
      </div>
    </>
  );
}