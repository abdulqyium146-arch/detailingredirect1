/**
 * Layout.tsx
 * ----------
 * All page sections as named exports consumed by App.tsx.
 *
 * SEO notes:
 *  - ONE <h1> lives in <Hero> — the page's primary keyword heading.
 *  - All section titles use <h2>, individual cards use <h3>.
 *  - Every <img> has descriptive alt text for accessibility & image SEO.
 *  - All external links to srvdetailing.co.uk pass link authority
 *    (rel="noopener noreferrer" retained for security; these are follow links).
 *
 * HOW TO CUSTOMISE:
 *  - IMAGES: replace all picsum.photos URLs with real photos on your CDN/host
 *  - PHONE: replace "+44 7375 759686" with your current number
 *  - SOCIAL: update Facebook / Instagram hrefs if they change
 */

import {
  Car,
  Shield,
  Sparkles,
  PaintBucket,
  MapPin,
  Phone,
  ExternalLink,
  Menu,
  X,
  Facebook,
  Instagram,
  CheckCircle2,
} from 'lucide-react';
import { useState } from 'react';

// ─── NAVBAR ────────────────────────────────────────────────────────────────────

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Areas Served', href: '#area' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/5"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo / Brand */}
          <a
            href="https://srvdetailing.co.uk"
            rel="noopener noreferrer"
            aria-label="SRV Detailing — visit main website"
            className="flex items-center gap-2"
          >
            <Car className="w-8 h-8 text-brand-primary" aria-hidden="true" />
            <span className="font-display text-xl font-bold tracking-tighter">
              SRV <span className="text-brand-primary">DETAILING</span>
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-baseline space-x-8 ml-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white/70 hover:text-brand-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://srvdetailing.co.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-primary text-black px-5 py-2 rounded-full text-sm font-bold hover:bg-white transition-all flex items-center gap-2"
              aria-label="Book your detailing service at srvdetailing.co.uk (opens in new tab)"
            >
              Book Now <ExternalLink className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen
              ? <X aria-hidden="true" />
              : <Menu aria-hidden="true" />
            }
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden glass border-t border-white/5 px-4 pt-2 pb-6 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-white block px-3 py-4 rounded-md text-base font-medium border-b border-white/5"
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://srvdetailing.co.uk"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full mt-4 bg-brand-primary text-black px-5 py-4 rounded-xl text-center font-bold flex items-center justify-center gap-2"
            aria-label="Book your detailing service at srvdetailing.co.uk (opens in new tab)"
          >
            Book Now <ExternalLink className="w-4 h-4" aria-hidden="true" />
          </a>
        </div>
      )}
    </nav>
  );
}

// ─── HERO ──────────────────────────────────────────────────────────────────────
// Contains the ONE <h1> on the page — keyword-rich and visible immediately.

export function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
      aria-label="Hero — SRV Detailing"
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        {/*
          REPLACE: swap picsum URL with a real photo of your work.
          Host it on car-wash-detailing.com or srvdetailing.co.uk for best performance.
          Recommended size: 1920×1080px, WebP format.
        */}
        <img
          src="https://picsum.photos/seed/cardetailing/1920/1080?grayscale&blur=2"
          alt="Professional mobile car detailing service in Manchester"
          className="w-full h-full object-cover opacity-40"
          referrerPolicy="no-referrer"
          fetchPriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/80 via-brand-dark/40 to-brand-dark" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">

        {/* Redirect notice banner */}
        <div className="mb-8 glass py-3 px-6 rounded-2xl inline-block border-brand-primary/20">
          <p className="text-sm md:text-base font-medium text-white/80">
            Previously{' '}
            <span className="text-brand-primary font-bold">Car Wash Detailing</span>
            , now{' '}
            <span className="text-brand-primary font-bold">SRV Detailing</span>{' '}
            — book professional mobile car valeting &amp; detailing at{' '}
            <a
              href="https://srvdetailing.co.uk"
              className="underline hover:text-white transition-colors"
              aria-label="Visit SRV Detailing main website at srvdetailing.co.uk"
            >
              srvdetailing.co.uk
            </a>
          </p>
        </div>

        <span className="inline-block px-4 py-1.5 mb-6 rounded-full glass text-brand-primary text-sm font-bold tracking-widest uppercase">
          Mobile Valeting &amp; Detailing Specialist — Manchester
        </span>

        {/*
          H1: the single most important on-page SEO element.
          Contains primary keywords and location.
        */}
        <h1 className="text-5xl md:text-8xl font-bold mb-6 leading-[0.9] tracking-tighter">
          SHOWROOM FINISH,<br />
          <span className="text-brand-primary">ANYWHERE YOU ARE.</span>
        </h1>

        <p className="text-xl md:text-2xl text-white/60 mb-10 max-w-2xl mx-auto font-light">
          Professional mobile car valeting and detailing across Manchester,
          Stockport &amp; Greater Manchester. Premium care for your vehicle,
          at your door.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://srvdetailing.co.uk"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary w-full sm:w-auto"
            aria-label="Book your car detailing service at srvdetailing.co.uk"
          >
            Book Your Service <ExternalLink className="w-5 h-5" aria-hidden="true" />
          </a>
          <a href="#services" className="btn-secondary w-full sm:w-auto">
            Explore Services
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/20" aria-hidden="true">
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-white/20 rounded-full" />
        </div>
      </div>
    </section>
  );
}

// ─── ABOUT ─────────────────────────────────────────────────────────────────────

export function About() {
  const credentials = [
    'Accredited Ceramic Coating Specialist',
    'Fully Mobile — We Come To You',
    'Serving Greater Manchester Since 2018',
    'Trusted by 500+ Customers',
  ];

  return (
    <section id="about" className="py-24 bg-brand-gray relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Image */}
          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden border border-white/10">
              {/*
                REPLACE: with a real photo of your work or team.
                Recommended: 800×800px, WebP. Host on your domain.
              */}
              <img
                src="https://picsum.photos/seed/carpolish/800/800"
                alt="SRV Detailing technician applying ceramic coating to a luxury car in Manchester"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 glass p-8 rounded-2xl hidden md:block">
              <p className="text-4xl font-bold text-brand-primary">5+</p>
              <p className="text-white/60 uppercase tracking-widest text-xs font-bold">Years of Experience</p>
            </div>
          </div>

          {/* Text */}
          <div>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
              PASSION FOR <span className="text-brand-primary">PERFECTION.</span>
            </h2>

            <div className="space-y-5 text-lg text-white/70 font-light leading-relaxed">
              <p>
                SRV Detailing is a premier mobile car valeting and detailing specialist
                based in Stockport, serving Manchester, Trafford, Salford, Cheshire,
                and the wider Greater Manchester area. We bring the showroom to your
                doorstep with fully equipped mobile units — no travel required on your part.
              </p>
              <p>
                As an accredited ceramic coating specialist, we use only the finest
                professional-grade products and proven techniques to ensure your vehicle
                receives the ultimate protection and finish it deserves.
              </p>
              <p>
                Whether it's a routine maintenance valet or a full multi-stage paint
                correction followed by ceramic coating, our attention to detail is
                unmatched. Every vehicle is treated as if it were our own.{' '}
                <a
                  href="https://srvdetailing.co.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-primary underline hover:text-white transition-colors"
                  aria-label="Visit SRV Detailing main website to view full portfolio and pricing"
                >
                  View our full portfolio and pricing at srvdetailing.co.uk
                </a>
                .
              </p>
            </div>

            {/* Credential list */}
            <ul className="mt-10 space-y-3" aria-label="SRV Detailing credentials">
              {credentials.map((item) => (
                <li key={item} className="flex items-center gap-3 text-white/80">
                  <CheckCircle2 className="w-5 h-5 text-brand-primary flex-shrink-0" aria-hidden="true" />
                  <span className="font-medium text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── SERVICES ──────────────────────────────────────────────────────────────────
// Four core services matching the business offering and structured data.

export function Services() {
  const services = [
    {
      title: 'Mobile Car Valeting',
      description:
        'Comprehensive interior and exterior cleaning packages tailored to your needs, delivered at your home or workplace anywhere in Manchester and Stockport. No need to drop your car off.',
      icon: <Car className="w-8 h-8" aria-hidden="true" />,
      cta: 'Book a Valet',
    },
    {
      title: 'Car Detailing',
      description:
        'Deep cleaning and restoration of every surface — reaching areas standard valeting misses. We detail engines, door shuts, wheels, glass, and every interior surface for a truly pristine result.',
      icon: <Sparkles className="w-8 h-8" aria-hidden="true" />,
      cta: 'Book Detailing',
    },
    {
      title: 'Ceramic Coating',
      description:
        'Accredited long-term ceramic coating application for your paintwork, wheels, and glass. Provides superior gloss, hydrophobic protection, and durability — lasting years, not weeks.',
      icon: <Shield className="w-8 h-8" aria-hidden="true" />,
      cta: 'Get a Coating Quote',
    },
    {
      title: 'Paint Correction',
      description:
        'Multi-stage machine polishing to permanently remove swirl marks, light scratches, water spots, and oxidation — restoring depth, clarity, and true colour to your paintwork.',
      icon: <PaintBucket className="w-8 h-8" aria-hidden="true" />,
      cta: 'Book Paint Correction',
    },
  ];

  return (
    <section id="services" className="py-24 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-4">

        {/* Section header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            PREMIUM <span className="text-brand-primary">SERVICES</span>
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto text-lg font-light">
            Professional mobile car valeting, detailing, ceramic coating and paint
            correction across Manchester, Stockport &amp; Greater Manchester.
          </p>
        </div>

        {/* Service cards — 2 cols on tablet, 4 cols on desktop */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
          {services.map((service) => (
            <article
              key={service.title}
              className="glass p-8 rounded-3xl hover:border-brand-primary/30 transition-all group flex flex-col"
            >
              <div className="w-16 h-16 rounded-2xl bg-brand-primary/10 flex items-center justify-center mb-6 group-hover:bg-brand-primary group-hover:text-black transition-all text-brand-primary">
                {service.icon}
              </div>
              {/* h3 for individual service titles (inside an h2 section) */}
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-white/60 font-light leading-relaxed flex-1">
                {service.description}
              </p>
              <a
                href="https://srvdetailing.co.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 text-brand-primary text-sm font-bold flex items-center gap-1 hover:text-white transition-colors"
                aria-label={`${service.cta} — visit srvdetailing.co.uk`}
              >
                {service.cta} <ExternalLink className="w-3 h-3" aria-hidden="true" />
              </a>
            </article>
          ))}
        </div>

        {/* Cross-link to main site for authority passing */}
        <p className="text-center mt-16 text-white/40 text-sm">
          Full pricing, packages &amp; gallery available at{' '}
          <a
            href="https://srvdetailing.co.uk"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-primary hover:text-white underline transition-colors"
          >
            srvdetailing.co.uk
          </a>
        </p>
      </div>
    </section>
  );
}

// ─── SERVICE AREA ──────────────────────────────────────────────────────────────

export function ServiceArea() {
  const areas = [
    'Manchester City Centre',
    'Stockport',
    'Trafford',
    'Salford',
    'Cheshire',
    'Didsbury',
    'Cheadle',
    'Wilmslow',
    'Altrincham',
    'Stretford',
    'Wythenshawe',
    'Bury',
  ];

  return (
    <section id="area" className="py-24 bg-brand-gray">
      <div className="max-w-7xl mx-auto px-4">
        <div className="glass rounded-[3rem] p-12 md:p-20 overflow-hidden relative">

          <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none" aria-hidden="true">
            <MapPin className="w-full h-full text-white -mr-20 -mt-20" />
          </div>

          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                WHERE WE <span className="text-brand-primary">OPERATE.</span>
              </h2>
              <p className="text-xl text-white/70 mb-4 font-light leading-relaxed">
                Our fully equipped mobile units are ready to come to you. We provide
                mobile car valeting and detailing across{' '}
                <strong className="text-white">Manchester</strong>,{' '}
                <strong className="text-white">Stockport</strong>, and the wider{' '}
                <strong className="text-white">Greater Manchester</strong> area —
                centred around Stockport with a wide service radius.
              </p>
              <p className="text-white/50 text-sm mb-10">
                Not sure if we cover your area?{' '}
                <a
                  href="https://srvdetailing.co.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-primary underline hover:text-white transition-colors"
                >
                  Contact us at srvdetailing.co.uk
                </a>{' '}
                and we'll confirm.
              </p>

              {/* Area list — these location names help local SEO */}
              <ul
                className="grid grid-cols-2 gap-3"
                aria-label="Areas served by SRV Detailing"
              >
                {areas.map((area) => (
                  <li key={area} className="flex items-center gap-3 text-white/80">
                    <div className="w-2 h-2 rounded-full bg-brand-primary flex-shrink-0" aria-hidden="true" />
                    <span className="font-medium text-sm">{area}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Visual placeholder — REPLACE with an embedded Google Map iframe */}
            <div className="bg-brand-dark/50 aspect-video rounded-3xl border border-white/5 flex items-center justify-center overflow-hidden">
              {/*
                RECOMMENDED: Replace this placeholder with a Google Maps embed.
                Example:
                <iframe
                  title="SRV Detailing service area map"
                  src="https://www.google.com/maps/embed?pb=YOUR_EMBED_URL"
                  width="100%" height="100%" style={{border:0}}
                  allowFullScreen loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              */}
              <div className="text-center p-8">
                <MapPin className="w-12 h-12 text-brand-primary mx-auto mb-4" aria-hidden="true" />
                <p className="text-white/40 text-sm uppercase tracking-widest font-bold">
                  Mobile Service Coverage
                </p>
                <p className="text-2xl font-bold mt-2">Manchester &amp; Stockport</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── CONTACT / BOOKING ─────────────────────────────────────────────────────────

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">

          <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            READY FOR A <span className="text-brand-primary">TRANSFORMATION?</span>
          </h2>
          <p className="text-xl text-white/60 mb-12 font-light">
            Book your professional mobile car valeting or detailing service today
            and give your vehicle the care it deserves. We cover Manchester,
            Stockport, and Greater Manchester.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            {/* REPLACE: update phone number if it changes */}
            <a
              href="tel:+447375759686"
              className="btn-primary w-full md:w-auto px-12"
              aria-label="Call SRV Detailing on +44 7375 759686"
            >
              <Phone className="w-5 h-5" aria-hidden="true" />
              Call +44 7375 759686
            </a>
            <a
              href="https://srvdetailing.co.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary w-full md:w-auto px-12"
              aria-label="Book online at srvdetailing.co.uk (opens in new tab)"
            >
              Book Online at srvdetailing.co.uk
            </a>
          </div>

          {/* Social links */}
          <div className="mt-16 flex items-center justify-center gap-8">
            {/* REPLACE: update href if Facebook URL changes */}
            <a
              href="https://www.facebook.com/showroomvaleting.srv"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-brand-primary transition-colors"
              aria-label="SRV Detailing on Facebook (opens in new tab)"
            >
              <Facebook className="w-8 h-8" aria-hidden="true" />
            </a>
            {/* REPLACE: update href if Instagram handle changes */}
            <a
              href="https://www.instagram.com/srv.detailing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-brand-primary transition-colors"
              aria-label="SRV Detailing on Instagram (opens in new tab)"
            >
              <Instagram className="w-8 h-8" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── FOOTER ────────────────────────────────────────────────────────────────────

export function Footer() {
  return (
    <footer className="py-12 border-t border-white/5 bg-brand-dark" aria-label="Site footer">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">

        {/* Brand */}
        <a
          href="https://srvdetailing.co.uk"
          rel="noopener noreferrer"
          aria-label="SRV Detailing main website"
          className="flex items-center gap-2"
        >
          <Car className="w-6 h-6 text-brand-primary" aria-hidden="true" />
          <span className="font-display text-lg font-bold tracking-tighter">
            SRV <span className="text-brand-primary">DETAILING</span>
          </span>
        </a>

        <p className="text-white/40 text-sm font-light">
          &copy; {new Date().getFullYear()} SRV Detailing. All rights reserved.
          Mobile car valeting &amp; detailing across Manchester &amp; Stockport.
        </p>

        {/* Footer nav — visible links pass authority to main site */}
        <nav aria-label="Footer navigation">
          <ul className="flex gap-6 text-sm text-white/40">
            <li>
              <a
                href="https://srvdetailing.co.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                Main Website
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/showroomvaleting.srv"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/srv.detailing"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                Instagram
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
