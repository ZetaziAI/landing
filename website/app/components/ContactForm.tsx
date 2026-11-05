"use client";

import { FormEvent, useState } from "react";

const CONTACT_EMAIL = "hello@zetazi.com";

export function ContactForm() {
  const [drafted, setDrafted] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "");
    const company = String(form.get("company") ?? "");
    const email = String(form.get("email") ?? "");
    const environment = String(form.get("environment") ?? "");
    const subject = `Zetazi deployment conversation | ${company || name}`;
    const body = [`Name: ${name}`, `Company: ${company}`, `Email: ${email}`, "", environment].join("\n");

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setDrafted(true);
  }

  return (
    <form className="contact-form" onSubmit={onSubmit}>
      <div className="contact-row">
        <label><span>Name</span><input name="name" type="text" autoComplete="name" required /></label>
        <label><span>Company</span><input name="company" type="text" autoComplete="organization" required /></label>
      </div>
      <label><span>Work email</span><input name="email" type="email" autoComplete="email" required /></label>
      <label><span>The constraint</span><textarea name="environment" rows={5} required /></label>
      <div className="contact-submit">
        <button className="primary-button" type="submit">Draft email <span>↗</span></button>
        {drafted && <p role="status">Your email application has been opened with the message drafted.</p>}
      </div>
    </form>
  );
}
