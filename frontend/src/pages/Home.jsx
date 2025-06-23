import nivra_p17 from '../assets/Nivra_p17_v2-min.jpg';
import nivra_dispute from '../assets/nivra_dispute.jpg';
import nivra_p19 from '../assets/nivra-p19.jpg';
import nivra_p11 from '../assets/nivra_p11.jpg';
import nivra_icon_16 from '../assets/Nivra icons-16.jpg';
import nivra_icon_11 from '../assets/Nivra icons-11.jpg';
import nivra_icon_15 from '../assets/Nivra icons-15.jpg';
import nivra_icon_10 from '../assets/Nivra icons-10.jpg';
import nivra_icon_8 from '../assets/Nivra icons-08.jpg';
import nivra_icon_13 from '../assets/Nivra icons-13.jpg';
import nivra_icon_14 from '../assets/Nivra icons-14.jpg';
import nivra_icon_3 from '../assets/Nivra icons-03.jpg';
import nivra_icon_12 from '../assets/Nivra icons-12.jpg';
import nivra_icon_5 from '../assets/Nivra icons-05.jpg';
import nivra_icon_9 from '../assets/Nivra icons-09.jpg';
import nivra_icon_7 from '../assets/Nivra icons-07.jpg';
import nivra_icon_18 from '../assets/Nivra icons-18.jpg';
import nivra_icon_17 from '../assets/Nivra icons-17.jpg';
import './Home.css';
import CollapsibleSection from '../components/CollapsibleSection';


export default function Home() {
  return(
    <>
      <div class="intro-slide">
        <p class="pre-heading-1">Fast & fair on-chain justice</p>
        <h2 class="slogan-1">Settle<br />Web3<br />Dispute</h2>
        <p class="pre-heading-1">Nivra is a modular arbitration protocol delivering transparent on-chain verdicts.</p>
      </div>

      <div class="desc-slide">
        <div class="desc-card">
          <h3 class="heading-3">Fast, Tamper-Proof Arbitration for Sui Smart Contracts</h3>
          <p class="text">
            The global economy is rapidly shifting online. As value migrates to blockchains, 
            smart contracts now manage treasuries, escrows, royalties, and entire supply chains. 
            Although they execute exactly as coded, 
            the disputes that arise demand a new breed of resolution.<br/><br/>
            Nivra integrates a tamper-proof arbitration layer directly into Sui smart contracts. 
            The protocol can swiftly issue a cryptographically verifiable ruling, redistribute funds, 
            and complete the process quickly, securely, and in a decentralized manner. 
            All evidence, votes, and verdicts remain on-chain for anyone to audit.
          </p>
        </div>
        <img src={nivra_p17} class="nivra-g-1"/>
      </div>

      <div class="desc-slide-2">
        <div class="desc-card-2">
          <img src={nivra_dispute} class="nivra-g-2"/>
          <div class="card-2-text">
            <h3 class="heading-3-2">Revolutionizing Conflict Management</h3>
            <p class="pre-heading-2">
              When a conflict arises, Nivra Court randomly selects autonomous Nivsters. 
              Their incentive-aligned voting makes honesty the rational choice. 
            </p>
          </div>
        </div>

        <div class="desc-card-3">
          <div class="card-2-text">
            <h3 class="heading-3-2">AI and Human Synergy</h3>
            <p class="pre-heading-2">
              Nivra brings AI agents into the decision-making process. 
              Human arbitrators contribute nuanced, subjective insight to complex disputes, 
              while the AI agents make it possible to resolve smaller cases with exceptional speed and efficiency.
            </p>
          </div>
          <img src={nivra_p19} class="nivra-g-2"/>
        </div>

        <div class="desc-card-2">
          <img src={nivra_p11} class="nivra-g-2"/>
          <div class="card-2-text">
            <h3 class="heading-3-2">Streamlined Resolution Process</h3>
            <p class="pre-heading-2">
              Once a majority verdict is reached, the smart contract enforces it instantly and delivers swift, 
              incorruptible finality without any central authority. 
            </p>
          </div>
        </div>
      </div>

      <div class="q-slide">
        <div class="text-cont">
          <h2 class="heading-2">Unlocking Possibilities</h2>
          <p class="pre-heading-1">Nivra’s on-chain justice brings tangible benefits to a wide range of real-world applications.</p>
        </div>
      </div>

      <div class="q-slide-2">
        <div class="card-grid">
          <div class="g-card">
            <p class="text">AI Agent Disputes</p>
            <img src={nivra_icon_16} class="g-icon"/>
          </div>
          <div class="g-card">
            <p class="text">E-commerce</p>
            <img src={nivra_icon_11} class="g-icon"/>
          </div>
          <div class="g-card">
            <p class="text">Gaming</p>
            <img src={nivra_icon_15} class="g-icon"/>
          </div>
          <div class="g-card">
            <p class="text">Micro-justice</p>
            <img src={nivra_icon_10} class="g-icon"/>
          </div>
          <div class="g-card">
            <p class="text">Content Moderation</p>
            <img src={nivra_icon_8} class="g-icon"/>
          </div>
          <div class="g-card">
            <p class="text">Carbon Credits</p>
            <img src={nivra_icon_13} class="g-icon"/>
          </div>
          <div class="g-card">
            <p class="text">Escrow</p>
            <img src={nivra_icon_14} class="g-icon"/>
          </div>
          <div class="g-card">
            <p class="text">License Compliance</p>
            <img src={nivra_icon_3} class="g-icon"/>
          </div>
          <div class="g-card">
            <p class="text">Insurance</p>
            <img src={nivra_icon_12} class="g-icon"/>
          </div>
          <div class="g-card">
            <p class="text">Oracle Aggregator</p>
            <img src={nivra_icon_5} class="g-icon"/>
          </div>
          <div class="g-card">
            <p class="text">Bug Hunting</p>
            <img src={nivra_icon_9} class="g-icon"/>
          </div>
          <div class="g-card">
            <p class="text">Freelancing</p>
            <img src={nivra_icon_7} class="g-icon"/>
          </div>
          <div class="g-card">
            <p class="text">DAO Disputes</p>
            <img src={nivra_icon_18} class="g-icon"/>
          </div>
          <div class="g-card">
            <p class="text">Further Possibilities</p>
            <img src={nivra_icon_17} class="g-icon"/>
          </div>

        </div>
      </div>

      <div class="qa-slide">
        <div class="qa-cont">
          <p class="qa-heading">Key Protocol Questions</p>
          <CollapsibleSection 
            title="How does Nivra's on-chain arbitration process work?" 
            body="Parties embed a Nivra clause at contract deployment. When a dispute arises, 
            Nivra Court opens a case. Nivsters commit votes using a cryptographic commit-and-reveal scheme, 
            and the majority verdict directs the smart contract to redistribute funds entirely on-chain." 
          />
          <CollapsibleSection 
            title="How are Nivsters selected and incentivized?" 
            body="Nivsters stake NVR tokens to join domain-specific courts. 
            Each stake creates a selection interval on-chain. When a dispute arises, 
            a verifiable random number is drawn; if it falls within an interval, 
            its owner is appointed as a juror for that case. 
            Nivsters cast their decisions using a zero-knowledge commit-and-reveal scheme, 
            then unveil their votes. Those who align with the majority earn fees, 
            while minority voters forfeit part of their stake, making honesty the only rational strategy." 
          />
          <CollapsibleSection 
            title="What functions does the NVR token serve?" 
            body="The NVR Token is a central element of Nivra, serving multiple essential functions. 
            It is used for staking in domain-specific pools, 
            making Nivsters eligible for jury selection and providing strong Sybil resistance. 
            Beyond staking, NVR drives the protocol’s incentive system: 
            jurors whose votes align with the majority earn arbitration fees and a share of slashed stakes, 
            while minority voters lose part of their deposit, so truthful rulings are the most profitable strategy. 
            NVR also underpins Nivra’s on-chain governance." 
          />
          <CollapsibleSection 
            title="How does Nivra ensure transparency and security?" 
            body="Every piece of evidence, each vote commitment, and the final reveal proof are recorded on Sui. 
            The commit-and-reveal protocol prevents front-running, guarantees privacy during voting, 
            and makes every outcome auditable by anyone." 
          />
        </div>
      </div>
    </>
  );
}