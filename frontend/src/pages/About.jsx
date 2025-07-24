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
          <h2 class="head-3">Problem Statement</h2>
          <p class="text-black">The absence of a truly decentralized arbitration layer undermines both conventional arbitration and blockchain ecosystems. Traditional dispute resolution remains slow, expensive, and opaque. In the blockchain realm, the lack of an on‑chain dispute mechanism limits developers’ ability to build innovations that would otherwise be technically possible.</p>

          <div class="problem-wrapper">
          <h3 class="head-4-c">Problems with traditional arbitration</h3>

          <div class="mission-body">

          <FadeIn class="mission-card">
            <p class="text">Slow and expensive dispute‑resolution processes create high barriers to participation for individuals and small entities, and render resolving minor disputes unprofitable.</p>
          </FadeIn>

          <FadeIn class="mission-card">
            <p class="text">Dependence on third parties and the need to trust centralized bodies creates single points of failure and undermines neutrality.</p>
          </FadeIn>

          <FadeIn class="mission-card">
            <p class="text">Lack of transparency and difficulty monitoring the process in real time hinders accountability.</p>
          </FadeIn>

          <FadeIn class="mission-card">
            <p class="text">Centralized maintenance and updates prevent rapid adaptation to evolving needs.</p>
          </FadeIn>

          <FadeIn class="mission-card">
            <p class="text">Potential for bias or conflicts of interest in appointments and decision making erodes trust.</p>
          </FadeIn>

          <FadeIn class="mission-card">
            <p class="text">Jurisdictional and legal challenges in cross‑border disputes complicate enforcement.</p>
          </FadeIn>

          <FadeIn class="mission-card">
            <p class="text">Challenges in follow‑up and enforcement without a reliable decentralized network leave resolutions unresolved.</p>
          </FadeIn>

          </div>
          </div>

          <div class="problem-wrapper">
          <h3 class="head-4-c">Why Web3 Needs Decentralized Arbitration</h3>

          <div class="mission-body">
          
          <FadeIn class="mission-card">
            <p class="text">The absence of decentralized arbitration limits dApps’ potential, as various dispute scenarios cannot be resolved.</p>
          </FadeIn>

          <FadeIn class="mission-card">
            <p class="text">Traditional dispute‑resolution processes fail to meet blockchain’s demand for rapid, low‑cost arbitration.</p>
          </FadeIn>

          <FadeIn class="mission-card">
            <p class="text">Unpredictable dispute costs inflate risk premiums and force overcharging or underdelivering.</p>
          </FadeIn>

          <FadeIn class="mission-card">
            <p class="text">Fragmented dispute solutions isolate projects and hinder interoperability through proprietary or centralized mechanisms.</p>
          </FadeIn>

          <FadeIn class="mission-card">
            <p class="text">Diminished user confidence, with end users reluctant to commit assets when conflict resolution is unclear.</p>
          </FadeIn>

          <FadeIn class="mission-card">
            <p class="text">Arbitration backdoors such as kill‑switch mechanisms or privileged admin rights reintroduce centralization, running counter to blockchain principles.</p>
          </FadeIn>

          <FadeIn class="mission-card">
            <p class="text">Inhibited innovation and collaboration, as the lack of a shared arbitration layer discourages modular design and cross‑team development.</p>
          </FadeIn>

          </div>
          </div>

        </div>
      </div>

      <div class="mission-wrapper">
        <div class="mission-slide">
          <h2 class="head-3-white">Our Mission</h2>
          <p class="text-white">We provide transparent, unbiased dispute resolution for all, regardless of location or status, ensuring equitable, decentralized justice built on trust.</p>

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
            <p class="text exp-text">Traditional courts and arbitral bodies price out small claims and bog parties down in multi-layered procedures. Nivra’s hybrid AI + human model slashes administrative overhead so even micro-disputes can be solved quickly.</p>
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
            <p class="text-white-n">Nivra is steered by a Nordic team of passionate blockchain experts, united by the goal of re‑imagining dispute resolution. We fuse Web3 engineering, AI research, and game‑theoretic economics to build a decentralized arbitration protocol rooted in the Scandinavian ideals of openness, fairness, and user‑centric design.</p>
            <p class="text-white-n">Leveraging our solid background in Rust, whose ownership and resource‑safety model closely mirrors Move, we found it a breeze to begin Nivra’s journey on Sui.</p>
          </div>
        </div>
      </div>
    </>
  );
}