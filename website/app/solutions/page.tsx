import type { Metadata } from "next";
import { SiteChrome } from "../components/SiteChrome";

export const metadata: Metadata = {
  title: "Solutions | Zetazi",
  description: "Heimdall inspection intelligence and Odin private agentic intelligence, built on the Zetazi edge foundation.",
};

export default function Solutions() {
  return (
    <SiteChrome>
      <main>
        <section className="page-hero solutions-hero">
          <p className="eyebrow">ZETAZI SOLUTIONS</p>
          <h1>Two systems.<br />Built for the <em>edge.</em></h1>
          <p>Heimdall for inspections. Odin for private agentic work.</p>
        </section>

        <section id="heimdall" className="solution-detail solution-detail--modern page-pad">
          <div className="solution-title">
            <p>INSPECTION INTELLIGENCE</p>
            <h2>Heimdall</h2>
          </div>
          <div className="solution-body">
            <p className="lead">Guided inspection. Complete evidence. Offline.</p>
            <div className="use-cases">
              <span>Guided capture</span><span>Offline workflow</span><span>Source-linked output</span>
            </div>
          </div>
          <div className="solution-visual heimdall-visual tilt-card">
            <div className="evidence-panel">
              <div className="evidence-head"><span>HEIMDALL / FIELD</span><b>OFFLINE</b></div>
              <div className="evidence-score"><strong>86<small>%</small></strong><div><span>EVIDENCE COVERAGE</span><i><b /></i><small>2 ITEMS BEFORE READY</small></div></div>
              <div className="evidence-row is-complete"><i /><span><b>CAPTURE PLAN</b><small>REQUIRED VIEWS COMPLETE</small></span><em>✓</em></div>
              <div className="evidence-row is-review"><i /><span><b>FINDING</b><small>SCALE VIEW REQUIRED</small></span><em>!</em></div>
              <div className="evidence-gate"><span>READY-TO-LEAVE GATE</span><b>NOT READY</b></div>
            </div>
          </div>
        </section>

        <section id="odin" className="solution-detail solution-detail--modern solution-detail--blue page-pad">
          <div className="solution-title">
            <p>PRIVATE AGENTIC INTELLIGENCE</p>
            <h2>Odin</h2>
          </div>
          <div className="solution-body">
            <p className="lead">Private context. Controlled tools. Visible action.</p>
            <div className="use-cases">
              <span>Private memory</span><span>Policy controls</span><span>Auditable actions</span>
            </div>
          </div>
          <div className="solution-visual odin-visual tilt-card">
            <div className="odin-boundary">
              <div className="odin-head"><span>ODIN / LOCAL AGENT</span><b>BOUNDARY SEALED</b></div>
              <div className="odin-core-modern"><i /><i /><span>ODIN</span></div>
              <div className="odin-actions"><span>CONTEXT / LOCAL</span><span>TOOLS / ALLOWED</span><span>ACTION / REVIEW</span></div>
            </div>
          </div>
        </section>

        <section className="minimal-cta page-pad">
          <p className="eyebrow">DEPLOYMENT</p>
          <h2>Bring the constraint.</h2>
          <a className="primary-button" href="/contact">Talk to us <span>↗</span></a>
        </section>
      </main>
    </SiteChrome>
  );
}
