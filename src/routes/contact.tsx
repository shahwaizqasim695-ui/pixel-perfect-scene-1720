import { createFileRoute } from "@tanstack/react-router";

import { ContactForm, PageIntro, Reveal } from "@/components/site-components";
import { getPageMeta } from "@/data/site-content";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: getPageMeta("contact") }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageIntro
        eyebrow="Get in touch"
        title={<>A conversation starts <span className="gold-text">with a note.</span></>}
        copy="For general, media, book, speaking, and event inquiries, use the form below."
      />
      <section className="contact-page-section section-pad">
        <div className="page-container contact-page-layout">
          <Reveal className="contact-copy">
            <p className="eyebrow">A note to Laura</p>
            <h2>Thank you for reaching out.</h2>
            <p>
              This form is prepared for inquiries about Laura and her memoir. No email address or inbox has been provided for this website yet, so submissions are not sent or stored.
            </p>
            <div className="contact-categories">
              <span>General inquiries</span>
              <span>Media &amp; interviews</span>
              <span>Book-related inquiries</span>
              <span>Speaking &amp; events</span>
            </div>
          </Reveal>
          <Reveal><ContactForm /></Reveal>
        </div>
      </section>
    </>
  );
}