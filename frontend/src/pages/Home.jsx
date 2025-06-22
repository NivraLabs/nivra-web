import nivra_p17 from '../assets/Nivra_p17_v2-min.jpg';
import nivra_dispute from '../assets/nivra_dispute.jpg';
import nivra_p19 from '../assets/nivra-p19.jpg';
import nivra_p11 from '../assets/nivra_p11.jpg';
import './Home.css';


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
    </>
  );
}