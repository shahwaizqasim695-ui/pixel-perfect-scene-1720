import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Phone } from "lucide-react";

import { PageIntro, Reveal, SectionHeading } from "@/components/site-components";
import { recoveryResources, getPageMeta } from "@/data/site-content";

export const Route = createFileRoute("/recovery-resources")({
  head: () => ({ meta: getPageMeta("resources") }),
  component: ResourcesPage,
});

function ResourcesPage() {
  return (
    <>
      <PageIntro
        eyebrow="You are not alone"
        title={<>Your miracle <span className="gold-text">begins here.</span></>}
        copy="If you or someone you love needs support, these US-based organizations may be a place to start. Reaching out can be one small step."
      />
      <section className="resources-section section-pad">
        <div className="page-container">
          <Reveal>
            <SectionHeading
              eyebrow="Support and connection"
              title="Help is available beyond these pages"
              copy="These organizations offer crisis, recovery, and referral support. Visit their official websites for current information and options."
            />
          </Reveal>
          <div className="resource-list">
            {recoveryResources.map((resource, index) => (
              <Reveal className="resource-row" key={resource.name}>
                <span className="resource-index">0{index + 1}</span>
                <div className="resource-copy">
                  <h2>{resource.name}</h2>
                  <p>{resource.detail}</p>
                </div>
                <div className="resource-action">
                  {"phone" in resource ? (
                    <a className="resource-phone" href={`tel:${resource.phone}`}>
                      <Phone aria-hidden="true" /> {resource.contact}
                    </a>
                  ) : null}
                  <a href={resource.href} target="_blank" rel="noreferrer" className="resource-link">
                    {resource.href.replace(/^https:\/\//, "").replace(/\/$/, "")}
                    <ArrowUpRight aria-hidden="true" />
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="resource-disclaimer">
            <p className="eyebrow">Please keep in mind</p>
            <p>
              This website shares personal experiences and informational resources. It is not a substitute for professional medical or mental health care. If you are in immediate danger, contact local emergency services.
            </p>
          </Reveal>
        </div>
      </section>
      <section className="resource-hope-band section-pad">
        <div className="page-container">
          <p className="eyebrow">From the opening pages</p>
          <blockquote>“Recovery is the quiet miracle that begins the moment you decide you’re not done yet.”</blockquote>
        </div>
      </section>
    </>
  );
}