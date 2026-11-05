import { CinematicHero } from "./components/CinematicHero";
import { SiteChrome } from "./components/SiteChrome";

const principles = ["LOCAL", "MULTIMODAL", "CONTROLLED"];

export default function Home() {
  return (
    <SiteChrome>
      <main>
        <CinematicHero />

        <section className="brand-position page-pad" data-reveal>
          <p className="eyebrow">WHAT WE ARE</p>
          <h2 className="scroll-fill">Edge AI for work<br />that cannot leave the edge.</h2>
          <div className="brand-position-side">
            <p>We build private AI systems that understand real-world signals and operate inside the client boundary.</p>
            <div className="brand-principles">{principles.map((item) => <span key={item}>{item}</span>)}</div>
          </div>
        </section>

        <section className="solution-tease home-solutions page-pad" data-reveal>
          <div>
            <p className="eyebrow">SOLUTIONS</p>
            <h2>Two systems.<br />One edge.</h2>
          </div>
          <div className="tease-grid">
            <a className="tilt-card solution-card solution-card--heimdall" href="/solutions#heimdall">
              <span>FIELD EVIDENCE</span>
              <h3>Heimdall</h3>
              <p>Guided inspection. Complete evidence.</p>
              <b>View Heimdall</b>
            </a>
            <a className="tilt-card solution-card solution-card--odin" href="/solutions#odin">
              <span>PRIVATE AGENTS</span>
              <h3>Odin</h3>
              <p>Local context. Controlled action.</p>
              <b>View Odin</b>
            </a>
          </div>
        </section>

        <section className="runtime-specs home-runtime page-pad" data-reveal>
          <div className="runtime-copy">
            <p className="eyebrow">TECHNOLOGY</p>
            <h2>Models. Signals.<br /><em>One edge runtime.</em></h2>
            <p>Vision, sound, motion and private context combine where the work happens.</p>
            <a href="/technology" className="text-button">Explore technology</a>
          </div>
          <div className="runtime-console runtime-assembly platform-window">
            <div className="console-top"><span>ZTZI / EDGE RUNTIME</span><b><i /> LOCAL</b></div>
            <div className="runtime-flow" aria-label="Signals and context combine with models and policy inside one local runtime">
              <div className="flow-inputs"><small>INPUTS</small><div><span>VISION</span><span>SOUND</span><span>MOTION</span><span>CONTEXT</span></div></div>
              <div className="flow-engine"><i /><i /><strong>ζ</strong><span>LOCAL FUSION</span><small>MODEL + POLICY</small></div>
              <div className="flow-outputs"><small>CONTROLLED OUTPUTS</small><span>GUIDANCE</span><span>EVIDENCE</span><span>ACTION</span></div>
              <i className="flow-pulse flow-pulse--one" /><i className="flow-pulse flow-pulse--two" />
            </div>
            <div className="console-log"><span>INPUT / LOCAL</span><span>INFERENCE / ACTIVE</span><span>OUTPUT / CONTROLLED</span></div>
          </div>
        </section>

        <section className="minimal-cta page-pad">
          <p className="eyebrow">DEPLOYMENT</p>
          <h2>Bring the constraint.</h2>
          <a className="primary-button" href="/contact">Talk to us</a>
        </section>
      </main>
    </SiteChrome>
  );
}
