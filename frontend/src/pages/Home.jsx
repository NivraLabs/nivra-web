import nivra_p17 from '../assets/Nivra_p17_v2-min.jpg';
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
    </>
  );
}