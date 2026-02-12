import nivra_p17 from '../assets/Nivra ekakortti (1).png';
import nivra_dispute from '../assets/Nivra Disputex (1).png';
import nivra_p19 from '../assets/Nivra_laki.png';
import nivra_p11 from '../assets/NIVRA BOX.png';
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
import img_4220 from '../assets/Nivra contract (1).png';
import './Home.css';
import GrowFadeIn from '../components/GrowFadeIn';
import FadeInSlow from '../components/FadeInSlow';
import CardSlider from '../components/CardSlider';


export default function Home() {
  return(
    <>
      <div class="intro-slide">
        <p class="pre-heading-1">A decentralized dispute resolution protocol for fast, transparent outcomes in digital conflicts.</p>
        <h2 class="slogan-1 heading-1">Nivra</h2>
        <p class="pre-heading-1">Resolve Web3 and Web2 disputes with human experts and AI agents.</p>
      </div>

      <div class="subscribe-slide">
        <h1>Subscribe for early access</h1>
        <a class="sub-link" href="https://nivra.kit.com/cc122bc2c6">Subscribe</a>
      </div>

      <CardSlider 
        cards={[
          <p class="text">Traditional dispute resolution methods don’t meet the needs of today’s global, digital economy. Nivra offers an alternative approach that helps businesses reduce dispute-handling costs and resolution times, while improving customer satisfaction.</p>,
          <p class="text">In Web3, disputes still arise when outcomes depend on off-chain facts or subjective interpretation. Nivra provides a transparent, on-chain way to resolve these cases.</p>
        ]}
        imgs={[nivra_p17,img_4220]} 
        title="Dispute Resolution for Web2 and Web3"
      />

      <div class="desc-slide-2">
        <div class="desc-card-2">
          <GrowFadeIn>
          <img src={nivra_dispute} class="nivra-g-2"/>
          </GrowFadeIn>
          <GrowFadeIn>
          <div class="card-2-text">
            <h3 class="heading-3-2">Revolutionizing Conflict Management</h3>
            <p class="pre-heading-2">
              When a dispute arises, each case is assigned to a specialized court. Jurors are then randomly selected based on their token-stake weight. Incentive-aligned voting makes honest decisions the rational choice.
            </p>
          </div>
          </GrowFadeIn>
        </div>

        <div class="desc-card-3">
          <GrowFadeIn>
          <div class="card-2-text">
            <h3 class="heading-3-2">AI and Human Synergy</h3>
            <p class="pre-heading-2">
              Nivra brings AI agents into the decision-making process. 
              Human arbitrators contribute nuanced, subjective insight to complex disputes, 
              while the AI agents make it possible to resolve smaller cases with exceptional speed and efficiency.
            </p>
          </div>
          </GrowFadeIn>
          <GrowFadeIn>
          <img src={nivra_p19} class="nivra-g-2"/>
          </GrowFadeIn>
        </div>

        <div class="desc-card-2">
          <GrowFadeIn>
            <img src={nivra_p11} class="nivra-g-2"/>
          </GrowFadeIn>
          <GrowFadeIn>
          <div class="card-2-text">
            <h3 class="heading-3-2">Streamlined Resolution Process</h3>
            <p class="pre-heading-2">
              Nivsters vote based on the evidence submitted in the case. They cast encrypted votes independently on-chain, without access to others’ choices. The final outcome is determined by the majority ruling.
            </p>
          </div>
          </GrowFadeIn>
        </div>
      </div>

      <div class="q-slide">
      <GrowFadeIn>
        <div class="text-cont">
          <h2 class="head-3-white-c">Unlocking Possibilities</h2>
          <p class="pre-heading-1">Nivra’s on-chain justice brings tangible benefits to a wide range of real-world applications.</p>
        </div>
      </GrowFadeIn>
      </div>

      <div class="q-slide-2">
        <div class="card-grid">
        <FadeInSlow>
          <div class="g-card">
            <p class="text">AI Agent Disputes</p>
            <img src={nivra_icon_16} class="g-icon"/>
          </div>
        </FadeInSlow>
        <FadeInSlow>
          <div class="g-card">
            <p class="text">E-commerce</p>
            <img src={nivra_icon_11} class="g-icon"/>
          </div>
        </FadeInSlow>
        <FadeInSlow>
          <div class="g-card">
            <p class="text">Gaming</p>
            <img src={nivra_icon_15} class="g-icon"/>
          </div>
        </FadeInSlow>
        <FadeInSlow>
          <div class="g-card">
            <p class="text">Micro-justice</p>
            <img src={nivra_icon_10} class="g-icon"/>
          </div>
        </FadeInSlow>
        <FadeInSlow>
          <div class="g-card">
            <p class="text">Content Moderation</p>
            <img src={nivra_icon_8} class="g-icon"/>
          </div>
        </FadeInSlow>
        <FadeInSlow>
          <div class="g-card">
            <p class="text">Carbon Credits</p>
            <img src={nivra_icon_13} class="g-icon"/>
          </div>
        </FadeInSlow>
        <FadeInSlow>
          <div class="g-card">
            <p class="text">Escrow</p>
            <img src={nivra_icon_14} class="g-icon"/>
          </div>
        </FadeInSlow>
        <FadeInSlow>
          <div class="g-card">
            <p class="text">License Compliance</p>
            <img src={nivra_icon_3} class="g-icon"/>
          </div>
        </FadeInSlow>
        <FadeInSlow>
          <div class="g-card">
            <p class="text">Insurance</p>
            <img src={nivra_icon_12} class="g-icon"/>
          </div>
        </FadeInSlow>
        <FadeInSlow>
          <div class="g-card">
            <p class="text">Oracle Aggregator</p>
            <img src={nivra_icon_5} class="g-icon"/>
          </div>
        </FadeInSlow>
        <FadeInSlow>
          <div class="g-card">
            <p class="text">Prediction Market</p>
            <img src={nivra_icon_9} class="g-icon"/>
          </div>
        </FadeInSlow>
        <FadeInSlow>
          <div class="g-card">
            <p class="text">Freelancing</p>
            <img src={nivra_icon_7} class="g-icon"/>
          </div>
        </FadeInSlow>
        <FadeInSlow>
          <div class="g-card">
            <p class="text">DAO Disputes</p>
            <img src={nivra_icon_18} class="g-icon"/>
          </div>
        </FadeInSlow>
        <FadeInSlow>
          <div class="g-card">
            <p class="text">Further Possibilities</p>
            <img src={nivra_icon_17} class="g-icon"/>
          </div>
        </FadeInSlow>

        </div>
      </div>
    </>
  );
}