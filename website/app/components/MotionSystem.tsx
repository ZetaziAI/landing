"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function MotionSystem() {
  useEffect(() => {
    const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const finePointer = matchMedia("(pointer: fine)").matches;

    const moveLight = (event: PointerEvent) => {
      document.documentElement.style.setProperty("--cursor-x", `${event.clientX}px`);
      document.documentElement.style.setProperty("--cursor-y", `${event.clientY}px`);
      document.documentElement.classList.add("has-pointer");
    };
    if (finePointer && !reduced) addEventListener("pointermove", moveLight, { passive: true });
    if (reduced) return () => removeEventListener("pointermove", moveLight);

    gsap.registerPlugin(ScrollTrigger);
    const context = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((element) => {
        gsap.fromTo(element, { y: 46, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: .9, ease: "power3.out", scrollTrigger: { trigger: element, start: "top 84%", once: true } });
      });
      gsap.utils.toArray<HTMLElement>(".story-word").forEach((word, index) => {
        gsap.fromTo(word, { yPercent: 105, autoAlpha: .12 }, { yPercent: 0, autoAlpha: 1, duration: .7, delay: index * .07, ease: "power3.out", scrollTrigger: { trigger: word.closest(".mission"), start: "top 72%", once: true } });
      });
      gsap.utils.toArray<HTMLElement>(".tilt-card").forEach((card) => {
        const onMove = (event: PointerEvent) => { const rect = card.getBoundingClientRect(); const x = (event.clientX - rect.left) / rect.width - .5; const y = (event.clientY - rect.top) / rect.height - .5; gsap.to(card, { rotateY: x * 4, rotateX: y * -4, x: x * 5, y: y * 5, duration: .35, ease: "power2.out", transformPerspective: 900 }); };
        const reset = () => gsap.to(card, { rotateY: 0, rotateX: 0, x: 0, y: 0, duration: .65, ease: "elastic.out(1,.55)" });
        card.addEventListener("pointermove", onMove); card.addEventListener("pointerleave", reset);
        return () => { card.removeEventListener("pointermove", onMove); card.removeEventListener("pointerleave", reset); };
      });
      gsap.utils.toArray<HTMLElement>(".scroll-fill:not(.scroll-fill-words)").forEach((element) => {
        ScrollTrigger.create({
          trigger: element,
          start: "top 86%",
          end: "bottom 38%",
          scrub: true,
          onUpdate: ({ progress }) => element.style.setProperty("--fill", `${Math.round(progress * 100)}%`),
        });
      });
      gsap.utils.toArray<HTMLElement>(".scroll-fill-words span").forEach((word, index) => {
        gsap.fromTo(word, { color: "#3d444d" }, { color: "#e5eaf0", delay: index * .06, scrollTrigger: { trigger: word.closest(".scroll-fill-words"), start: "top 86%", end: "bottom 38%", scrub: true } });
      });
    });
    return () => {
      removeEventListener("pointermove", moveLight);
      document.documentElement.classList.remove("has-pointer");
      context.revert();
    };
  }, []);
  return null;
}
