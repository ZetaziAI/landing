import type { Metadata } from "next";
import { ContactForm } from "../components/ContactForm";
import { SiteChrome } from "../components/SiteChrome";

export const metadata: Metadata = {
  title: "Contact | Zetazi",
  description: "Discuss an edge-intelligence deployment with Zetazi.",
};

export default function Contact() {
  return (
    <SiteChrome>
      <main>
        <section className="page-hero contact-hero">
          <p className="eyebrow">CONTACT ZETAZI</p>
          <h1>Bring the<br /><em>constraint.</em></h1>
          <p>Where must intelligence run?</p>
        </section>
        <section className="contact-section page-pad">
          <div className="contact-intro">
            <p className="eyebrow">DEPLOYMENT CONVERSATION</p>
            <h2>Let’s make it<br />work at the edge.</h2>
            <div className="contact-direct"><span>EMAIL DIRECTLY</span><a href="mailto:hello@zetazi.com">hello@zetazi.com</a></div>
          </div>
          <ContactForm />
        </section>
      </main>
    </SiteChrome>
  );
}
