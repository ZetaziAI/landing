const ecosystems = ["apple", "microsoft", "nvidia", "amd", "intel", "google", "arm", "qualcomm", "samsung"];

function Logo({ name }: { name: string }) {
  if (name === "microsoft") return <i className="microsoft-mark" aria-hidden="true"><b /><b /><b /><b /></i>;
  return <img src={`/hardware/${name}.svg`} alt="" />;
}

export function EcosystemMarquee() {
  return <section className="ecosystem" data-reveal>
    <div className="ecosystem-head">
      <div><span>PLATFORM ECOSYSTEMS</span><h2>Built across platforms.</h2></div>
      <p>Selected per deployment.</p>
    </div>
    <div className="ecosystem-rail">
      <div className="ecosystem-track">
        {[...ecosystems, ...ecosystems].map((name, index) => <div className="ecosystem-logo" data-brand={name} key={`${name}-${index}`} role={index < ecosystems.length ? "img" : undefined} aria-label={index < ecosystems.length ? name : undefined} aria-hidden={index >= ecosystems.length ? "true" : undefined}><Logo name={name} /></div>)}
      </div>
    </div>
    <div className="ecosystem-meta"><span>DEVICE / CLIENT INFRASTRUCTURE / ISOLATED</span><span>VALIDATED PER DEPLOYMENT</span></div>
  </section>;
}
