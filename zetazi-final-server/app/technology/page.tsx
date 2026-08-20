import type { Metadata } from "next";
import { EcosystemMarquee } from "../components/EcosystemMarquee";
import { SiteChrome } from "../components/SiteChrome";

export const metadata: Metadata = {
  title: "Technology | Zetazi",
  description: "The Zetazi edge runtime brings local inference, multimodal sensor fusion, policy and traceability into one controlled architecture.",
};

const signals = [
  ["VISION", "Image + video", "signal-vision"],
  ["SOUND", "Voice + acoustics", "signal-sound"],
  ["MOTION", "Movement + vibration", "signal-motion"],
  ["ENVIRONMENT", "Time + connected sensors", "signal-context"],
];

const runtimeProperties = ["ON-DEVICE", "MULTIMODAL", "POLICY-BOUND", "TRACEABLE"];

export default function Technology() {
  return (
    <SiteChrome>
      <main>
        <section className="page-hero page-hero--tech">
          <p className="eyebrow">OUR TECHNOLOGY</p>
          <h1>Multimodal AI.<br /><em>Fused locally.</em></h1>
          <p>Vision, sound, motion and context inside your boundary.</p>
        </section>

        <section className="fusion-section page-pad">
          <div className="fusion-copy">
            <p className="eyebrow">MULTIMODAL EDGE INTELLIGENCE</p>
            <h2>Sense together.<br />Decide locally.</h2>
            <p>Vision, sound, motion and context aligned at the edge.</p>
            <p className="fusion-note">Inputs and thresholds are selected per deployment.</p>
          </div>

          <div className="fusion-instrument tilt-card" aria-label="Multimodal edge fusion diagram">
            <div className="fusion-head"><span>ZTZI / SIGNAL FUSION</span><b><i /> ON DEVICE</b></div>
            <div className="fusion-body">
              <div className="signal-stack">
                {signals.map(([title, copy, visual]) => <div className="signal-row" key={title}><span className={`signal-visual ${visual}`}><i /><i /><i /></span><span><b>{title}</b><small>{copy}</small></span><em /></div>)}
              </div>
              <div className="fusion-core"><i /><i /><strong>ζ</strong><span>LOCAL FUSION</span></div>
              <div className="output-stack">
                <div><b>GUIDANCE</b></div>
                <div><b>EVIDENCE</b></div>
                <div><b>ACTION</b></div>
              </div>
            </div>
            <div className="fusion-foot"><span>SOURCES PRESERVED</span><span>POLICY APPLIED</span><span>OUTPUT TRACEABLE</span></div>
          </div>
        </section>

        <EcosystemMarquee />

        <section className="technology-principles page-pad">
          <p className="eyebrow">EDGE RUNTIME</p>
          <div>{runtimeProperties.map((title) => <span key={title}>{title}</span>)}</div>
        </section>
      </main>
    </SiteChrome>
  );
}
