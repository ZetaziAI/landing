"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function CinematicHero() {
  const hero = useRef<HTMLElement>(null);
  const scene = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const context = gsap.context(() => {
      gsap.from(".hero-line > span", {
        yPercent: 120,
        duration: 1.1,
        stagger: 0.12,
        ease: "power4.out",
      });
      gsap.from(".hero-kicker, .hero-copy, .hero-actions, .hero-assurance", {
        y: 22,
        autoAlpha: 0,
        duration: 0.75,
        stagger: 0.1,
        delay: 0.42,
      });
      gsap.to(".hero-topology", {
        yPercent: -12,
        rotate: 1.5,
        ease: "none",
        scrollTrigger: {
          trigger: hero.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });
    }, hero);

    return () => context.revert();
  }, []);

  const move = (event: React.PointerEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    scene.current?.style.setProperty("--mx", String((event.clientX - rect.left) / rect.width - 0.5));
    scene.current?.style.setProperty("--my", String((event.clientY - rect.top) / rect.height - 0.5));
  };

  return (
    <section ref={hero} onPointerMove={move} className="landing-hero">
      <div ref={scene} className="hero-bg" aria-hidden="true">
        <div className="hero-grid" />
        <div className="orbit orbit-a" />
        <div className="orbit orbit-b" />
        <div className="beam" />
      </div>

      <div className="hero-content">
        <p className="hero-kicker"><i /> EDGE AI COMPANY / NORWAY</p>
        <h1>
          <span className="hero-line"><span>We bring</span></span>
          <span className="hero-line"><span>intelligence</span></span>
          <span className="hero-line"><span>to the <em>edge.</em></span></span>
        </h1>
        <p className="hero-copy">We build private, multimodal AI systems for devices and client-controlled infrastructure.</p>
        <div className="hero-actions">
          <a className="primary-button" href="/solutions">Our solutions</a>
          <a className="text-button" href="/technology">Our technology</a>
        </div>
        <div className="hero-assurance" aria-label="Platform characteristics">
          <span>LOCAL INFERENCE</span>
          <span>PRIVATE BY DESIGN</span>
          <span>INDEPENDENT OPERATION</span>
        </div>
      </div>

      <div className="hero-topology" aria-label="Zetazi edge intelligence core">
        <i className="topology-ring topology-ring--outer" />
        <i className="topology-ring topology-ring--inner" />
        <span className="topology-beam topology-beam--a" />
        <span className="topology-beam topology-beam--b" />
        <div className="topology-core"><strong>ζ</strong></div>
      </div>

      <div className="hero-bottom">
        <span>INTELLIGENCE WHERE THE WORK HAPPENS</span>
        <i />
        <span>PLATFORM / MULTIMODAL / PRIVATE</span>
      </div>
    </section>
  );
}
