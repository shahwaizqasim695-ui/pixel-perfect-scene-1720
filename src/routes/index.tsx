import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Heart, ShieldCheck, Sparkles } from "lucide-react";

import {
  AuthorPortrait,
  BookCover,
  ChapterList,
  NewsletterForm,
  ReadExcerptDialog,
  Reveal,
  ScrollCue,
  SectionHeading,
} from "@/components/site-components";
import { Button } from "@/components/ui/button";
import {
  authorBiography,
  book,
  bookThemes,
  getPageMeta,
  journeyStages,
  readers,
} from "@/data/site-content";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: getPageMeta("home"),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Person",
              name: book.author,
              authorOf: { "@type": "Book", name: book.title },
            },
            {
              "@type": "Book",
              name: book.title,
              alternateName: book.fullTitle,
              author: { "@type": "Person", name: book.author },
              publisher: { "@type": "Organization", name: book.publisher },
              bookFormat: "https://schema.org/Paperback",
            },
          ],
        }),
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <section className="hero-section">
        <div className="hero-inner page-container">
          <Reveal className="hero-copy">
            <p className="eyebrow">An unfiltered memoir of recovery &amp; faith</p>
            <h1>
              Believing
              <span className="hero-title-second"><em>While</em> Broken</span>
            </h1>
            <p className="hero-subtitle">{book.subtitle}</p>
            <p className="hero-description">
              {book.tagline} A deeply personal story of addiction, incarceration, faith, and the courage to begin again.
            </p>
            <div className="hero-actions">
              <Button asChild size="lg">
                <Link to="/the-book">Discover the Book <ArrowRight aria-hidden="true" /></Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="button-outline-warm">
                <Link to="/about">Meet the Author</Link>
              </Button>
            </div>
          </Reveal>
          <Reveal className="hero-book" aria-label="Featured memoir cover">
            <BookCover />
          </Reveal>
        </div>
        <ScrollCue />
      </section>

      <section className="quote-section section-pad" id="story">
        <Reveal className="quote-inner page-container">
          <span className="quote-rule" aria-hidden="true" />
          <p className="eyebrow">A quiet truth</p>
          <blockquote>“Faith does not wait for you to be whole.”</blockquote>
          <p className="quote-supporting">
            Hope can begin before everything is fixed. Sometimes it starts with one honest step, one day, one small act of willingness.
          </p>
          <span className="quote-rule" aria-hidden="true" />
        </Reveal>
      </section>

      <section className="author-section section-pad">
        <div className="page-container author-layout">
          <Reveal>
            <AuthorPortrait />
          </Reveal>
          <Reveal className="author-copy">
            <p className="eyebrow">The woman behind the words</p>
            <h2>Meet Laura Jerlinski</h2>
            <p>{authorBiography[0]}</p>
            <p>{authorBiography[1]}</p>
            <Button asChild variant="outline" className="button-outline-warm">
              <Link to="/about">Read My Story <ArrowRight aria-hidden="true" /></Link>
            </Button>
          </Reveal>
        </div>
      </section>

      <section className="book-section section-pad">
        <div className="page-container book-feature-layout">
          <Reveal className="book-feature-art"><BookCover /></Reveal>
          <Reveal className="book-feature-copy">
            <p className="eyebrow">The memoir</p>
            <h2>A Story of Falling, Faith, and Rising Again</h2>
            <p className="book-feature-title">{book.fullTitle}</p>
            <p>{book.longSynopsis}</p>
            <div className="theme-list" aria-label="Themes in the book">
              {bookThemes.map((theme) => (
                <span key={theme.title}>{theme.title}</span>
              ))}
            </div>
            <div className="book-actions">
              <Button asChild>
                <Link to="/the-book">Learn More About the Book <ArrowRight aria-hidden="true" /></Link>
              </Button>
              <ReadExcerptDialog />
            </div>
            <p className="retailer-note">Retailer links will appear when confirmed details are available.</p>
          </Reveal>
        </div>
      </section>

      <section className="journey-section section-pad">
        <div className="page-container">
          <Reveal>
            <SectionHeading
              eyebrow="From darkness to light"
              title={<>Every ending can become a <span className="gold-text">beginning</span></>}
              copy="A journey through hard truths, recovery, accountability, and a faith that held on."
            />
          </Reveal>
          <div className="journey-rail">
            {journeyStages.map((stage) => (
              <Reveal className="journey-stop" key={stage.number}>
                <span className="journey-number">{stage.number}</span>
                <h3>{stage.title}</h3>
                <p>{stage.description}</p>
              </Reveal>
            ))}
          </div>
          <div className="section-link-row">
            <Button asChild variant="outline" className="button-outline-warm">
              <Link to="/my-journey">Explore My Journey <ArrowRight aria-hidden="true" /></Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="chapters-section section-pad">
        <div className="page-container chapters-layout">
          <Reveal className="chapters-intro">
            <p className="eyebrow">Explore the pages</p>
            <h2>Behind the walls. Beyond the darkness.</h2>
            <p>The memoir moves through four defining parts of Laura’s time in jail and the faith that carried her through.</p>
            <Button asChild variant="outline" className="button-outline-warm">
              <Link to="/the-book">Explore the Book <ArrowRight aria-hidden="true" /></Link>
            </Button>
          </Reveal>
          <Reveal><ChapterList /></Reveal>
        </div>
      </section>

      <section className="reader-section section-pad">
        <div className="page-container">
          <Reveal>
            <SectionHeading
              eyebrow="For the ones still holding on"
              title="For anyone who has ever felt broken"
              copy="An honest memoir for people who recognize part of their story in these pages."
              align="center"
            />
          </Reveal>
          <div className="reader-list">
            {readers.map((reader, index) => {
              const icons = [Heart, ShieldCheck, Sparkles];
              const Icon = icons[index % icons.length] ?? Heart;
              return (
                <Reveal className="reader-item" key={reader}>
                  <Icon aria-hidden="true" />
                  <p>{reader}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="hope-section section-pad">
        <div className="page-container hope-layout">
          <Reveal>
            <p className="eyebrow">You are not alone</p>
            <h2>Your miracle begins here.</h2>
            <p>Recovery is not about perfection. It is about willingness, courage, and finding the strength to begin again. Even in the darkest moments, there is still room for hope.</p>
            <Button asChild>
              <Link to="/recovery-resources">Explore Recovery Resources <ArrowRight aria-hidden="true" /></Link>
            </Button>
          </Reveal>
          <Reveal className="hope-quote">
            <p>“Recovery isn’t about perfection; it’s about willingness.”</p>
            <span>From the opening pages of the memoir</span>
          </Reveal>
        </div>
      </section>

      <section className="newsletter-section section-pad">
        <div className="page-container newsletter-layout">
          <Reveal>
            <p className="eyebrow">Stay connected</p>
            <h2>A little hope in your inbox</h2>
            <p>Updates about Laura’s writing, book news, and reflections on recovery, faith, and finding strength in everyday life.</p>
          </Reveal>
          <Reveal><NewsletterForm /></Reveal>
        </div>
      </section>

      <section className="final-cta-section">
        <Reveal className="final-cta-inner page-container">
          <p className="eyebrow">One day at a time, even here.</p>
          <h2>A story of survival, surrender, faith, and the courage to rise again.</h2>
          <Button asChild size="lg">
            <Link to="/the-book">Discover Believing While Broken <ArrowRight aria-hidden="true" /></Link>
          </Button>
        </Reveal>
      </section>
    </>
  );
}