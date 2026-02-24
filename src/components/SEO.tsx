export default function SEO() {
  const businessData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "SRV Detailing",
    "image": "https://srvdetailing.co.uk/logo.png", // Placeholder logo
    "@id": "https://srvdetailing.co.uk",
    "url": "https://srvdetailing.co.uk",
    "telephone": "+44 7375 759686",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Stockport",
      "addressRegion": "Greater Manchester",
      "addressCountry": "GB"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 53.4084,
      "longitude": -2.1494
    },
    "servesCrawl": [
      "Manchester",
      "Stockport",
      "Greater Manchester"
    ],
    "priceRange": "££",
    "sameAs": [
      "https://www.facebook.com/showroomvaleting.srv",
      "https://www.instagram.com/srv.detailing"
    ],
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
    }
  };

  return (
    <>
      <title>Mobile Car Valeting & Detailing in Manchester – SRV Detailing</title>
      <meta name="description" content="SRV Detailing delivers professional mobile car valeting and detailing across Manchester, Stockport & Greater Manchester. Call now or visit srvdetailing.co.uk." />
      
      {/* OpenGraph tags */}
      <meta property="og:title" content="Mobile Car Valeting & Detailing in Manchester – SRV Detailing" />
      <meta property="og:description" content="SRV Detailing delivers professional mobile car valeting and detailing across Manchester, Stockport & Greater Manchester. Call now or visit srvdetailing.co.uk." />
      <meta property="og:image" content="https://picsum.photos/seed/detailing-og/1200/630" />
      <meta property="og:url" content="https://srvdetailing.co.uk" />
      <meta property="og:type" content="website" />

      {/* Twitter tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Mobile Car Valeting & Detailing in Manchester – SRV Detailing" />
      <meta name="twitter:description" content="SRV Detailing delivers professional mobile car valeting and detailing across Manchester, Stockport & Greater Manchester. Call now or visit srvdetailing.co.uk." />
      <meta name="twitter:image" content="https://picsum.photos/seed/detailing-og/1200/630" />

      <script type="application/ld+json">
        {JSON.stringify(businessData)}
      </script>
    </>
  );
}
