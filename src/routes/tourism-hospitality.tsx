import { createFileRoute } from "@tanstack/react-router";
import { OfferPage } from "@/components/site/offer-page";

const CANONICAL = "https://westcoastproduction.ie/tourism-hospitality";

export const Route = createFileRoute("/tourism-hospitality")({
  head: () => ({
    meta: [
      { title: 'Tourism & Hospitality Video in Ireland | West Coast Production' },
      { name: "description", content: 'Tourism and hospitality video for hotels, destinations and estates in Clare, Galway and along the west coast of Ireland. Aerial, FPV and ground film from one studio, cut for booking and campaigns.' },
      { property: "og:title", content: 'Tourism & Hospitality Video in Ireland | West Coast Production' },
      { property: "og:description", content: 'Tourism and hospitality video from the west coast of Ireland.' },
      { property: "og:image", content: "https://westcoastproduction.ie/og.jpg" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: CANONICAL },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: 'Tourism & Hospitality Video in Ireland | West Coast Production' },
      { name: "twitter:description", content: 'Tourism and hospitality video from the west coast of Ireland.' },
      { name: "twitter:image", content: "https://westcoastproduction.ie/og.jpg" },
    ],
    links: [{ rel: "canonical", href: CANONICAL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: 'Tourism and hospitality video',
          serviceType: 'Commercial video production',
          url: CANONICAL,
          provider: {
            "@type": "LocalBusiness",
            name: "West Coast Production",
            url: "https://westcoastproduction.ie/",
            telephone: "+353860553070",
            email: "info.westcoastproduction@gmail.com",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Lisdoonvarna",
              addressRegion: "County Clare",
              addressCountry: "IE",
            },
            areaServed: ["County Clare", "County Galway", "Ireland"],
          },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "West Coast Production",
              item: "https://westcoastproduction.ie/",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: 'Tourism and hospitality video',
              item: CANONICAL,
            },
          ],
        }),
      },
    ],
  }),
  component: Page,
});

function Page() {
  return <OfferPage page={{
    path: "/tourism-hospitality",
    kicker: "Hotels, destinations, estates",
    h1: "Tourism and hospitality video on the west coast",
    lead: "A booking page needs the room, the table, the walk to the cliff, and the light that sold the stay. West Coast Production makes that film from Clare for hotels, tourism operators and estates in Clare, Galway and along the Atlantic.",
    image: "/atlantic.jpg",
    imageAlt: "High-altitude aerial of the Wild Atlantic Way coastline",
    forWhom: [
      {
        title: "Hotels and hospitality",
        body: "The stay, not a facility tour. Exterior in its landscape, interior with the same light, short cuts for the channels that book the room.",
      },
      {
        title: "Tourism and destinations",
        body: "Place films for operators and campaigns on the west coast. Aerial for scale, FPV for movement, ground for the thing a visitor will actually do.",
      },
      {
        title: "Estates and property campaigns",
        body: "Cinematic property work for estates that need a film, not a listing flyover. The building, the land, and the cut.",
      },
    ],
    stronger: [
      {
        title: "The guest journey, not a facility tour",
        body: "The film follows what makes the stay worth booking: arrival, space, food, landscape and the route into the place. The property is shown as an experience.",
      },
      {
        title: "Built for the west coast",
        body: "Clare and Galway sell through weather, light and landscape. We plan around those conditions instead of trying to make every property look like the same generic hotel campaign.",
      },
      {
        title: "One shoot, multiple uses",
        body: "Aerial, FPV, ground footage and stills can be captured as one production and cut for websites, booking pages, campaigns and social without sending separate crews.",
      },
    ],
    includes: [
      "Hotel, tourism, and estate films cut for the site, the booking page, and short social versions.",
      "Aerial and FPV used only where they earn the shot, not as decoration on a talking-head film.",
      "8K stills from the same visit when print or a campaign frame is required.",
      "Licensed by the Irish Aviation Authority and fully insured for commercial work.",
      "Based in Lisdoonvarna. Working Clare, Galway, and the west coast of Ireland.",
    ],
    related: [
      { href: "/drone-filming", label: "Drone filming", line: "The aerial half of a hospitality film." },
      { href: "/fpv", label: "FPV", line: "Movement through the property and the coast." },
      { href: "/", label: "The studio", line: "Full production from the Atlantic edge." },
    ],
  }} />;
}
