import { createFileRoute } from "@tanstack/react-router";
import { OfferPage } from "@/components/site/offer-page";

const CANONICAL = "https://westcoastproduction.ie/fpv";

export const Route = createFileRoute("/fpv")({
  head: () => ({
    meta: [
      { title: 'FPV Drone Filming in Ireland | West Coast Production' },
      { name: "description", content: 'FPV drone filming from County Clare for hotels, tourism and brands across Ireland. First-person flight through cliff lines and tight ground a stabilized aerial camera cannot make.' },
      { property: "og:title", content: 'FPV Drone Filming in Ireland | West Coast Production' },
      { property: "og:description", content: 'FPV drone filming on the west coast of Ireland.' },
      { property: "og:image", content: "https://westcoastproduction.ie/og.jpg" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: CANONICAL },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: 'FPV Drone Filming in Ireland | West Coast Production' },
      { name: "twitter:description", content: 'FPV drone filming on the west coast of Ireland.' },
      { name: "twitter:image", content: "https://westcoastproduction.ie/og.jpg" },
    ],
    links: [{ rel: "canonical", href: CANONICAL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: 'FPV drone filming',
          serviceType: 'FPV cinematography',
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
              name: 'FPV drone filming',
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
    path: "/fpv",
    kicker: "First-person flight",
    h1: "FPV drone filming in Ireland",
    lead: "FPV is the shot that moves with the place. Along a cliff, through a ruin, down a laneway, into the weather. West Coast Production flies it from Lisdoonvarna for commercial and tourism briefs, not as a stunt reel.",
    image: "/fpv.jpg",
    imageAlt: "FPV view along an Irish limestone cliff with the Atlantic below",
    forWhom: [
      {
        title: "Hotels that need motion",
        body: "A corridor, a courtyard, the path to the water. FPV carries the viewer through the property instead of hovering over the roof.",
      },
      {
        title: "Tourism films",
        body: "Cliff lines, coastal roads, and ground no crane can follow. Used inside a finished film, not left as a raw fly-through.",
      },
      {
        title: "Brands that want speed with control",
        body: "First-person flight planned as a shot, then graded and cut with the rest of the production. Ireland-wide when the brief leaves the west.",
      },
    ],
    stronger: [
      {
        title: "Not the same as aerial",
        body: "A stabilized camera drone looks at the place. FPV moves through it. National pages often mix the two, or sell FPV as a gadget line. This page is only the first-person job.",
      },
      {
        title: "West coast, not a Dublin showreel",
        body: "The pages that rank for FPV in Ireland are mostly Donegal, Dublin, or Northern Ireland operators with national claims. The gap is a west-coast studio that uses FPV inside cinematic commercial work.",
      },
      {
        title: "Useful, not a doorways list",
        body: "No separate Clare FPV page that only changes the county. If the brief is Clare, Galway, or elsewhere in Ireland, it starts here and on the brief.",
      },
    ],
    includes: [
      "FPV through stone, spray, and sky, cut into a commercial or tourism film.",
      "Planned with stabilized aerial when the job needs both the line and the wide view.",
      "Reels from the same flights, in the ratios the platforms actually use.",
      "Licensed by the Irish Aviation Authority and fully insured for commercial work.",
      "Based in Lisdoonvarna. Available across Ireland when the shot belongs somewhere else.",
    ],
    related: [
      { href: "/drone-filming", label: "Drone filming", line: "Stabilized aerial for Clare and Galway." },
      { href: "/tourism-hospitality", label: "Tourism and hospitality", line: "Where FPV belongs inside a hotel or destination film." },
      { href: "/", label: "The studio", line: "The full craft, including 360° and 8K stills." },
    ],
  }} />;
}
