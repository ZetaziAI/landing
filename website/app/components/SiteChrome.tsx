"use client";

import { useEffect, useState } from "react";
import { MotionSystem } from "./MotionSystem";

export function SiteChrome({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [raised, setRaised] = useState(false);
  useEffect(() => { const update = () => setRaised(window.scrollY > 20); update(); addEventListener("scroll", update, { passive: true }); return () => removeEventListener("scroll", update); }, []);
  return <>
    <header className={raised ? "site-nav site-nav--raised" : "site-nav"}>
      <a className="brand" href="/"><span>ζ</span><b>ZETAZI</b></a>
      <button className="nav-toggle" aria-expanded={open} aria-label="Open menu" onClick={() => setOpen(!open)}><i /><i /><i /></button>
      <nav className={open ? "nav-links nav-links--open" : "nav-links"} aria-label="Main navigation">
        <a href="/">Home</a><a href="/solutions">Our solutions</a><a href="/technology">Our technology</a><a href="/about">About us</a><a className="nav-cta" href="/contact">Contact us</a>
      </nav>
    </header>
    {children}<MotionSystem />
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-identity"><a className="brand" href="/"><span>ζ</span><b>ZETAZI</b></a><p>Edge intelligence.<br />Under your control.</p></div>
        <nav className="footer-links" aria-label="Footer navigation"><a href="/">Home</a><a href="/solutions">Solutions</a><a href="/technology">Technology</a><a href="/about">About</a><a href="/contact">Contact</a></nav>
        <div className="footer-contact"><span>START A CONVERSATION</span><a href="mailto:hello@zetazi.com">hello@zetazi.com</a><a className="linkedin-mark" href="https://www.linkedin.com/company/zetazi/" target="_blank" rel="noreferrer" aria-label="Zetazi on LinkedIn">in</a></div>
      </div>
      <div className="footer-meta"><small>© {new Date().getFullYear()} Zetazi. Norway.</small><span className="footer-secret" aria-hidden="true">LOCAL / PRIVATE / YOURS</span><small>Built for the edge.</small></div>
    </footer>
  </>;
}
