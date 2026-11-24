import { useEffect, useState, type FormEvent, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowRight, ArrowUpRight, Menu, X } from "lucide-react";

import coverAsset from "@/assets/believing-while-broken-cover.jpg.asset.json";
import portraitAsset from "@/assets/laura-portrait.jpg.asset.json";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  book,
  chapters,
  navigationItems,
  pageMetadata,
  type SitePath,
} from "@/data/site-content";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const updateScrolled = () => setScrolled(window.scrollY > 28);
    updateScrolled();
    window.addEventListener("scroll", updateScrolled, { passive: true });
    return () => window.removeEventListener("scroll", updateScrolled);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`site-header${scrolled ? " site-header-scrolled" : ""}`}>
      <div className="site-header-inner">
        <Link to="/" className="wordmark" aria-label="Laura Jerlinski home" onClick={closeMenu}>
          <span>Laura</span> Jerlinski
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navigationItems.map((item) => (
            <Link key={item.href} to={item.href} className="nav-link">
              {item.label}
            </Link>
          ))}
        </nav>
        <Button asChild className="header-cta" size="sm">
          <Link to="/the-book">
            Discover the Book <ArrowRight aria-hidden="true" />
          </Link>
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="mobile-menu-toggle"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </Button>
      </div>
      {menuOpen ? (
        <nav id="mobile-navigation" className="mobile-nav" aria-label="Mobile navigation">
          {navigationItems.map((item) => (
            <Link key={item.href} to={item.href} className="mobile-nav-link" onClick={closeMenu}>
              {item.label}
              <ArrowUpRight aria-hidden="true" />
            </Link>
          ))}
          <Button asChild className="mobile-nav-cta">
            <Link to="/the-book" onClick={closeMenu}>
              Discover the Book <ArrowRight aria-hidden="true" />
            </Link>
          </Button>
        </nav>
      ) : null}
    </header>
  );
}

export function SiteFooter() {
  const footerLinks: ReadonlyArray<{ label: string; href: SitePath }> = [
    { label: "About Laura", href: "/about" },
    { label: "The Book", href: "/the-book" },
    { label: "My Journey", href: "/my-journey" },
    { label: "Recovery Resources", href: "/recovery-resources" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <footer className="site-footer">
      <div className="footer-top page-container">
        <div className="footer-author">
          <Link to="/" className="wordmark footer-wordmark">
            <span>Laura</span> Jerlinski
          </Link>
          <p>Honest stories of recovery, faith, and the courage to begin again.</p>
        </div>
        <div className="footer-column">
          <p className="footer-label">Explore</p>
          <nav aria-label="Footer navigation" className="footer-links">
            {footerLinks.map((item) => (
              <Link key={item.href} to={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="footer-column footer-book">
          <p className="footer-label">The memoir</p>
          <p className="footer-book-title">{book.title}</p>
          <p className="footer-book-subtitle">{book.subtitle}</p>
          <p className="footer-publisher">Published by {book.publisher}</p>
        </div>
      </div>
      <div className="footer-bottom page-container">
        <span>© 2026 Laura Jerlinski</span>
        <span>Made with hope, one day at a time.</span>
      </div>
    </footer>
  );
}

export function SiteFrame({ children }: { children: ReactNode }) {
  return (
    <div className="site-frame">
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
}

export function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const reducedMotion = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reducedMotion ? false : { opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.16 }}
      transition={{ duration: 0.68, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  copy,
  align = "left",
}: {
  eyebrow?: string;
  title: ReactNode;
  copy?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={`section-heading${align === "center" ? " section-heading-center" : ""}`}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2>{title}</h2>
      {copy ? <p className="section-heading-copy">{copy}</p> : null}
    </div>
  );
}

export function PageIntro({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string;
  title: ReactNode;
  copy: string;
}) {
  return (
    <section className="page-intro">
      <div className="page-container">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="page-intro-copy">{copy}</p>
      </div>
    </section>
  );
}

export function BookCover({ className = "" }: { className?: string }) {
  return (
    <div className={`book-cover-stage ${className}`}>
      <div className="book-cover-halo" aria-hidden="true" />
      <div className="book-cover-frame">
        <img
          src={coverAsset.url}
          alt="Front cover of Believing While Broken by Laura Jerlinski"
          loading="eager"
          fetchPriority="high"
          width="943"
          height="1421"
        />
      </div>
      <span className="book-cover-caption">A memoir by Laura Jerlinski</span>
    </div>
  );
}

export function AuthorPortrait({ className = "" }: { className?: string }) {
  return (
    <figure className={`author-portrait ${className}`}>
      <div className="portrait-frame">
        <img
          src={portraitAsset.url}
          alt="Laura Jerlinski"
          loading="lazy"
          width="220"
          height="225"
        />
      </div>
      <figcaption>Laura Jerlinski</figcaption>
    </figure>
  );
}

export function ChapterList({ className = "" }: { className?: string }) {
  return (
    <div className={`chapter-list ${className}`}>
      {chapters.map((chapter) => (
        <details className="chapter-item" key={chapter.number}>
          <summary>
            <span className="chapter-number">{chapter.number}</span>
            <span className="chapter-title">{chapter.title}</span>
            <span className="chapter-plus" aria-hidden="true">+</span>
          </summary>
          <p>{chapter.description}</p>
        </details>
      ))}
    </div>
  );
}

export function ReadExcerptDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="button-outline-warm">
          Read an Excerpt <ArrowRight aria-hidden="true" />
        </Button>
      </DialogTrigger>
      <DialogContent className="excerpt-dialog">
        <DialogHeader>
          <p className="eyebrow">From the preface</p>
          <DialogTitle>{book.title}</DialogTitle>
          <DialogDescription>By Laura Jerlinski</DialogDescription>
        </DialogHeader>
        <div className="excerpt-page">
          <p>{book.excerpt}</p>
          <blockquote>{book.hopeExcerpt}</blockquote>
        </div>
        <p className="excerpt-note">A short excerpt from the manuscript. The full manuscript is not available here.</p>
      </DialogContent>
    </Dialog>
  );
}

export function NewsletterForm() {
  const [status, setStatus] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("The newsletter service is not connected yet. No address has been saved.");
  };

  return (
    <form className="newsletter-form" onSubmit={handleSubmit}>
      <label className="sr-only" htmlFor="newsletter-email">Email address</label>
      <Input
        id="newsletter-email"
        name="email"
        type="email"
        placeholder="Your email address"
        autoComplete="email"
        required
        aria-describedby="newsletter-status"
      />
      <Button type="submit">Subscribe <ArrowRight aria-hidden="true" /></Button>
      <p id="newsletter-status" className="form-status" role="status" aria-live="polite">
        {status || "Newsletter setup is pending; your email will not be stored."}
      </p>
    </form>
  );
}

export function ContactForm() {
  const [status, setStatus] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("Contact submissions are not connected yet. Your message was not sent.");
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <p className="form-pending-note">This form is not connected to an inbox yet. No message will be sent.</p>
      <div className="form-grid">
        <label className="form-field">
          <span>Full name</span>
          <Input name="name" autoComplete="name" required />
        </label>
        <label className="form-field">
          <span>Email address</span>
          <Input name="email" type="email" autoComplete="email" required />
        </label>
        <label className="form-field">
          <span>Inquiry type</span>
          <Input
            name="inquiryType"
            list="inquiry-types"
            placeholder="Choose or enter an inquiry type"
            required
          />
          <datalist id="inquiry-types">
            <option value="General inquiry" />
            <option value="Media or interview" />
            <option value="Book-related inquiry" />
            <option value="Speaking or event request" />
          </datalist>
        </label>
        <label className="form-field">
          <span>Subject</span>
          <Input name="subject" required />
        </label>
        <label className="form-field form-field-wide">
          <span>Message</span>
          <Textarea name="message" rows={6} required />
        </label>
      </div>
      <Button type="submit">Send inquiry <ArrowRight aria-hidden="true" /></Button>
      <p className="form-status" role="status" aria-live="polite">{status}</p>
    </form>
  );
}

export function PageMetadataNotice({ page }: { page: keyof typeof pageMetadata }) {
  return <span className="sr-only">{pageMetadata[page].title}</span>;
}

export function ScrollCue() {
  return (
    <a className="scroll-cue" href="#story">
      <span>Scroll to begin</span>
      <ArrowDown aria-hidden="true" />
    </a>
  );
}