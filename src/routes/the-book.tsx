import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import {
  BookCover,
  ChapterList,
  PageIntro,
  ReadExcerptDialog,
  Reveal,
  SectionHeading,
} from "@/components/site-components";
import { Button } from "@/components/ui/button";
import { book, bookThemes, getPageMeta, readers, retailerLinks } from "@/data/site-content";

export const Route = createFileRoute("/the-book")({
  head: () => ({ meta: getPageMeta("book") }),
  component: BookPage,
});

function BookPage() {
  return (
    <>
      <PageIntro
        eyebrow="The memoir"
        title={<>Believing <span className="gold-text">While Broken</span></>}
        copy="A memoir of falling, faith, and rising again."
      />
      <section className="book-page-feature section-pad">
        <div className="page-container book-page-layout">
          <Reveal><BookCover /></Reveal>
          <Reveal className="book-page-copy">
            <p className="eyebrow">By Laura Jerlinski</p>
            <h2>{book.subtitle}</h2>
            <p className="book-tagline">{book.tagline}</p>
            <p>{book.synopsis}</p>
            <p>{book.longSynopsis}</p>
            <div className="book-actions">
              <ReadExcerptDialog />
              {retailerLinks.map((retailer) => (
                <Button asChild key={retailer.href}>
                  <a href={retailer.href} target="_blank" rel="noreferrer">{retailer.label}</a>
                </Button>
              ))}
            </div>
            {retailerLinks.length === 0 ? (
              <p className="retailer-note">Purchase information is not available yet. Retailer buttons will be added when confirmed links are supplied.</p>
            ) : null}
          </Reveal>
        </div>
      </section>
      <section className="book-themes-section section-pad">
        <div className="page-container">
          <Reveal>
            <SectionHeading eyebrow="What the story holds" title="The themes beneath the pages" />
          </Reveal>
          <div className="theme-grid">
            {bookThemes.map((theme, index) => (
              <Reveal className="theme-item" key={theme.title}>
                <span className="theme-number">0{index + 1}</span>
                <h3>{theme.title}</h3>
                <p>{theme.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="book-chapters-section section-pad">
        <div className="page-container chapters-layout">
          <Reveal className="chapters-intro">
            <p className="eyebrow">Inside the book</p>
            <h2>Behind the walls. Beyond the darkness.</h2>
            <p>Four sections trace the court date, the day-to-day realities of jail, and the faith that helped Laura keep going.</p>
            <ReadExcerptDialog />
          </Reveal>
          <Reveal><ChapterList /></Reveal>
        </div>
      </section>
      <section className="book-readers-section section-pad">
        <div className="page-container readers-detail-layout">
          <Reveal>
            <p className="eyebrow">Who this book is for</p>
            <h2>For anyone who has ever felt broken</h2>
          </Reveal>
          <Reveal>
            <ul className="readers-bullets">
              {readers.map((reader) => <li key={reader}>{reader}</li>)}
            </ul>
          </Reveal>
        </div>
      </section>
      <section className="book-faq-section section-pad">
        <div className="page-container faq-layout">
          <Reveal>
            <p className="eyebrow">A few questions</p>
            <h2>Before you open the book</h2>
          </Reveal>
          <Reveal className="faq-list">
            <details className="chapter-item">
              <summary><span className="chapter-title">What is the memoir about?</span><span className="chapter-plus" aria-hidden="true">+</span></summary>
              <p>It follows Laura’s experiences with alcohol addiction, recovery, incarceration, faith, and the effort to rebuild her life.</p>
            </details>
            <details className="chapter-item">
              <summary><span className="chapter-title">Where can I purchase it?</span><span className="chapter-plus" aria-hidden="true">+</span></summary>
              <p>Confirmed retailer links have not been provided yet, so no purchase buttons are shown.</p>
            </details>
            <details className="chapter-item">
              <summary><span className="chapter-title">Does the book include difficult subjects?</span><span className="chapter-plus" aria-hidden="true">+</span></summary>
              <p>The memoir discusses alcohol addiction, incarceration, recovery, and personal hardship. Readers may wish to take care while engaging with these topics.</p>
            </details>
          </Reveal>
        </div>
      </section>
      <section className="contact-band section-pad">
        <div className="page-container contact-band-inner">
          <div><p className="eyebrow">Questions about the memoir</p><h2>Stay with the story.</h2></div>
          <Button asChild variant="outline" className="button-outline-warm"><Link to="/contact">Get in touch <ArrowRight aria-hidden="true" /></Link></Button>
        </div>
      </section>
    </>
  );
}