import type { Metadata } from "next";
import { SiteChrome } from "../components/SiteChrome";

export const metadata: Metadata = {
  title: "About | Zetazi",
  description: "A Norwegian edge-intelligence company building private AI for critical environments.",
};

const leadership = [
  ["Lars Hansen", "Chief Executive Officer"],
  ["Henrik Olsen", "Chief Technology Officer"],
  ["Sofie Larsen", "Chief AI Officer"],
  ["Magnus Haugen", "Chief Operating Officer"],
  ["Jonas Bakke", "Chief Revenue Officer"],
  ["Line Halvorsen", "Chief Product Officer"],
];

const advisors = [
  ["Astrid Hagen", "Strategic AI & Research Advisor"],
  ["Ole Solberg", "Silicon & Hardware Architecture Advisor"],
  ["Ingrid Johansen", "Regulatory, Privacy & Edge Security Advisor"],
  ["Nora Berg", "Industrial Vertical & GTM Advisor"],
];

const people = [
  ...leadership.map(([name, role]) => ({ name, role, group: "LEADERSHIP" })),
  ...advisors.map(([name, role]) => ({ name, role, group: "ADVISORY" })),
];

export default function About() {
  return <SiteChrome><main>
    <section className="page-hero about-hero">
      <p className="eyebrow">ABOUT ZETAZI</p>
      <h1>Norwegian edge AI.<br /><em>Built for reality.</em></h1>
      <p>Private intelligence. Real operating environments.</p>
    </section>

    <section className="about-position page-pad">
      <p className="eyebrow">ZETAZI / OSLO</p>
      <h2 className="scroll-fill">We move intelligence closer to the decision without moving critical data away.</h2>
      <div><span>EDGE AI</span><span>CLIENT CONTROLLED</span><span>MULTIMODAL</span><a href="https://www.linkedin.com/company/zetazi/" target="_blank" rel="noreferrer">LinkedIn ↗</a></div>
    </section>

    <section className="people-directory page-pad">
      <div className="people-directory-head"><p className="eyebrow">PEOPLE</p><h2>Leadership<br />& advisory.</h2></div>
      <div className="people-directory-body"><div className="people-grid team-roster">{people.map(({ name, role, group }) => <article className="team-card team-card--editorial" data-reveal key={name}><span className="team-group">{group}</span><div className="team-card-copy"><p>{role}</p><h3>{name}</h3></div><span className="team-rule" aria-hidden="true" /></article>)}</div></div>
    </section>
  </main></SiteChrome>;
}
