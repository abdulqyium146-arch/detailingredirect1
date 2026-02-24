/**
 * SEO.tsx
 * -------
 * Injects document-level metadata via React 19's built-in metadata
 * hoisting (no react-helmet needed). Tags declared here are moved to
 * <head> automatically.
 *
 * JSON-LD structured data gives Google rich information about the
 * business and is the primary driver of local search knowledge panels.
 *
 * HOW TO CUSTOMISE:
 *  - PHONE: replace "+44 7375 759686" throughout this file
 *  - LOGO: replace the "image" URL with your hosted logo (min 112×112px)
 *  - OG IMAGE: replace the og:image URL with a real 1200×630 photo
 *  - SOCIAL: replace Facebook / Instagram URLs if they change
 */

export default function SEO() {
  // ── LocalBusiness JSON-LD ──────────────────────────────────────────────────
  // Using "AutoBodyShop" (a sub-type of LocalBusiness → AutomotiveBusiness)
  // which is the most accurate Schema.org type for a detailing/valeting service.
  // areaServed replaces the incorrect "servesCrawl" key.
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "AutoBodyShop",
    "name": "SRV Detailing",
    // REPLACE: with your actual logo URL (hosted on car-wash-detailing.com or srvdetailing.co.uk)
    "image": "https://srvdetailing.co.uk/logo.png",
    "@id": "https://www.car-wash-detailing.com/",
    "url": "https://www.car-wash-detailing.com/",
    // REPLACE: with your actual phone number if it changes
    "telephone": "+44 7375 759686",
    "email": "",                     // REPLACE: add your business email if you have one
    "description": "SRV Detailing is a professional mobile car valeting and detailing specialist based in Stockport, serving Manchester and Greater Manchester. Services include mobile car valeting, full car detailing, ceramic coating, and paint correction.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Stockport",
      "addressRegion": "Greater Manchester",
      "addressCountry": "GB"
      // REPLACE: add "streetAddress" and "postalCode" if you have a premises
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 53.4084,
      "longitude": -2.1494
    },
    // areaServed tells Google which regions you serve
    "areaServed": [
      {
        "@type": "City",
        "name": "Manchester"
      },
      {
        "@type": "City",
        "name": "Stockport"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Greater Manchester"
      },
      {
        "@type": "City",
        "name": "Salford"
      },
      {
        "@type": "City",
        "name": "Trafford"
      },
      {
        "@type": "County",
        "name": "Cheshire"
      }
    ],
    "priceRange": "££",
    "currenciesAccepted": "GBP",
    "paymentAccepted": "Cash, Card",
    // hasOfferCatalog lists your services for rich results
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Mobile Car Valeting & Detailing Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Mobile Car Valeting",
            "description": "Comprehensive interior and exterior cleaning packages delivered at your home or workplace across Manchester and Stockport."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Car Detailing",
            "description": "Deep cleaning and restoration of every surface — reaching areas standard valeting misses for a truly pristine finish."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Ceramic Coating",
            "description": "Accredited long-term ceramic coating application for your paintwork, wheels, and glass — ultimate gloss and durability."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Paint Correction",
            "description": "Professional machine polishing to remove swirl marks, light scratches, and oxidation — restoring depth and clarity to your paint."
          }
        }
      ]
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "08:00",
      "closes": "18:00"
    },
    // sameAs links your Google Business Profile entity to your social pages
    "sameAs": [
      "https://srvdetailing.co.uk",
      "https://www.facebook.com/showroomvaleting.srv",
      "https://www.instagram.com/srv.detailing"
      // REPLACE: add Google Business Profile URL once verified, e.g.:
      // "https://g.page/srv-detailing"
    ]
  };

  // ── BreadcrumbList JSON-LD ─────────────────────────────────────────────────
  // Helps Google display breadcrumbs in search results.
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.car-wash-detailing.com/"
      }
    ]
  };

  return (
    <>
      {/* ── Primary SEO (React 19 hoists these to <head>) ── */}
      <title>Mobile Car Valeting &amp; Detailing in Manchester – SRV Detailing</title>
      <meta
        name="description"
        content="SRV Detailing offers professional mobile car valeting, car detailing, ceramic coating & paint correction across Manchester, Stockport & Greater Manchester. Book online at srvdetailing.co.uk or call +44 7375 759686."
      />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://www.car-wash-detailing.com/" />

      {/* ── Open Graph ── */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="SRV Detailing" />
      <meta property="og:locale" content="en_GB" />
      <meta property="og:url" content="https://www.car-wash-detailing.com/" />
      <meta
        property="og:title"
        content="Mobile Car Valeting & Detailing in Manchester – SRV Detailing"
      />
      <meta
        property="og:description"
        content="SRV Detailing offers professional mobile car valeting, car detailing, ceramic coating & paint correction across Manchester, Stockport & Greater Manchester."
      />
      {/* REPLACE: with your real hosted OG image (1200×630px) */}
      <meta property="og:image" content="https://www.car-wash-detailing.com/og-image.jpg" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="SRV Detailing — Professional Mobile Car Valeting & Detailing in Manchester" />

      {/* ── Twitter / X Card ── */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="Mobile Car Valeting & Detailing in Manchester – SRV Detailing"
      />
      <meta
        name="twitter:description"
        content="Professional mobile car valeting & detailing across Manchester, Stockport & Greater Manchester. Book now at srvdetailing.co.uk."
      />
      {/* REPLACE: with your real Twitter card image */}
      <meta name="twitter:image" content="https://www.car-wash-detailing.com/og-image.jpg" />

      {/* ── Structured Data ── */}
      <script type="application/ld+json">
        {JSON.stringify(businessSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>
    </>
  );
}
