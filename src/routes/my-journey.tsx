import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { PageIntro, Reveal, SectionHeading } from "@/components/site-components";
import { Button } from "@/components/ui/button";
import { getPageMeta, journeyStages } from "@/data/site-content";

export const Route = createFileRoute("/my-journey")({
  head: () => ({ meta: getPageMeta("journey") }),
  component: JourneyPage,
});

function JourneyPage() {
  return (
    <>
      <PageIntro
        eyebrow="From darkness to light"
        title={<>The road back is <span className="gold-text">not a straight line.</span></>}
        copy="A personal journey through addiction, sobriety, incarceration, faith, and the difficult work of starting over."
      />
      <section className="journey-page-intro section-pad">
        <div className="page-container journey-page-lead">
          <Reveal>
            <p className="eyebrow">An honest account</p>
            <blockquote>“She got sober. Then she had to go to jail anyway.”</blockquote>
          </Reveal>
          <Reveal>
            <p>
              Laura’s story holds two truths at once: sobriety can begin, and the consequences of the past can still be waiting. Her memoir does not smooth over that tension. It follows her through fear, accountability, and the quiet strength of continuing.
            </p>
          </Reveal>
        </div>
      </section>
      <section className="journey-long-section section-pad">
        <div className="page-container">
          <Reveal>
            <SectionHeading
              eyebrow="The turning points"
              title="Every ending can become a beginning"
              copy="Each stage marks a change in what Laura was facing—and what she chose to keep reaching for."
            />
          </Reveal>
          <div className="journey-timeline">
            {journeyStages.map((stage, index) => (
              <Reveal className={`timeline-entry${index > 2 ? " timeline-entry-warm" : ""}`} key={stage.number}>
                <span className="timeline-marker" aria-hidden="true" />
                <p className="journey-number">{stage.number}</p>
                <div className="timeline-entry-copy">
                  <h2>{stage.title}</h2>
                  <p className="timeline-description">{stage.description}</p>
                  <p>{stage.note}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="journey-reflection section-pad">
        <div className="page-container reflection-layout">
          <Reveal>
            <p className="eyebrow">A faith that stays</p>
            <h2>Faith does not wait for you to be whole.</h2>
          </Reveal>
          <Reveal>
            <p>
              In Laura’s account, faith is not a reward for having everything figured out. It is part of the reaching, the support, and the willingness to try again—one day at a time.
            </p>
            <Button asChild><Link to="/the-book">Read about the memoir <ArrowRight aria-hidden="true" /></Link></Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}