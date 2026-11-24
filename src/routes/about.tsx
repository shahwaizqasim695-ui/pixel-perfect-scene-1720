import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { AuthorPortrait, PageIntro, Reveal } from "@/components/site-components";
import { Button } from "@/components/ui/button";
import { authorBiography, book, getPageMeta } from "@/data/site-content";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: getPageMeta("about") }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="The woman behind the words"
        title={<>Meet <span className="gold-text">Laura Jerlinski</span></>}
        copy="A life shaped by hard seasons, the work of recovery, and a faith that made room for another beginning."
      />
      <section className="about-page-section section-pad">
        <div className="page-container about-page-layout">
          <Reveal><AuthorPortrait className="about-portrait-large" /></Reveal>
          <Reveal className="editorial-copy">
            <p className="eyebrow">A story told honestly</p>
            <h2>Writing from the road back to herself</h2>
            {authorBiography.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            <p>
              In <em>{book.title}</em>, Laura writes about the years when alcohol became a comfort, the repeated attempts to find recovery, and the difficult return to New Jersey to face the consequences of her past.
            </p>
            <p>
              Her memoir is a personal account of what it means to keep choosing sobriety, spiritual growth, and support from others—even when life does not unfold in a straight line.
            </p>
            <Button asChild>
              <Link to="/the-book">Discover the Memoir <ArrowRight aria-hidden="true" /></Link>
            </Button>
          </Reveal>
        </div>
      </section>
      <section className="about-quote-section section-pad">
        <div className="page-container about-quote-layout">
          <Reveal>
            <p className="eyebrow">Why share this story</p>
            <blockquote>“One day at a time, even here.”</blockquote>
          </Reveal>
          <Reveal>
            <p>
              Laura shares her experience in the hope that someone else might feel less alone. Her story does not promise an easy way forward; it speaks to the possibility of rebuilding, finding support, and taking the next step.
            </p>
          </Reveal>
        </div>
      </section>
      <section className="contact-band section-pad">
        <div className="page-container contact-band-inner">
          <div>
            <p className="eyebrow">Stay in touch</p>
            <h2>For conversations about the book and its message.</h2>
          </div>
          <Button asChild variant="outline" className="button-outline-warm">
            <Link to="/contact">Contact Laura <ArrowRight aria-hidden="true" /></Link>
          </Button>
        </div>
      </section>
    </>
  );
}