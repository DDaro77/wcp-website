import { createFileRoute } from "@tanstack/react-router";
import { OfferPage } from "@/components/site/offer-page";

const CANONICAL = "https://westcoastproduction.ie/drone-filming";

export const Route = createFileRoute("/drone-filming")({
  head: () => ({
    meta: [
      { title: 'Drone Filming in Clare & Galway | West Coast Production' },
      { name: "description", content: 'Licensed drone filming from Lisdoonvarna for hotels, tourism, property and brands in Clare, Galway and along the Atlantic. Cinematic aerial, not a survey or listing flight.' },
      { property: "og:title", content: 'Drone Filming in Clare & Galway | West Coast Production' },
      { property: "og:description", content: 'Drone filming in Clare and Galway, from a studio on the Atlantic edge.' },
      { property: "og:image", content: "https://westcoastproduction.ie/og.jpg" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: CANONICAL },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: 'Drone Filming in Clare & Galway | West Coast Production' },
      { name: "twitter:description", content: 'Drone filming in Clare and Galway, from a studio on the Atlantic edge.' },
      { name: "twitter:image", content: "https://westcoastproduction.ie/og.jpg" },
    ],
    links: [{ rel: "canonical", href: CANONICAL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: 'Drone filming',
          serviceType: 'Aerial cinematography',
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
              name: 'Drone filming',
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
    path: "/drone-filming",
    kicker: "Aerial cinematography",
    h1: "Drone filming in Clare and Galway",
    lead: "Hotels, destinations and brands hire West Coast Production when the shot has to feel like the west coast, not a stock flyover. Stabilized aerial from a Clare studio that also shoots on the ground.",
    image: "/cliffs.jpg",
    imageAlt: "Cliffs of Moher at golden hour, Atlantic swell against dark limestone",
    forWhom: [
      {
        title: "Hotels and estates",
        body: "The approach, the building in its weather, the ground a guest actually walks. Aerial that sells the stay, not a listing rectangle.",
      },
      {
        title: "Tourism and place",
        body: "Clare, the Burren, Galway and the Atlantic edge. Films for destinations that need scale without looking like a survey.",
      },
      {
        title: "Brands and campaigns",
        body: "One licensed flight planned around light and weather, then cut for the campaign, the site, and the short versions.",
      },
    ],
    stronger: [
      {
        title: "A film crew that flies",
        body: "Most Clare and Galway results are drone operators, photo listings, or a county name swapped onto a national page. This is a production studio. The aerial is one camera, not the whole offer.",
      },
      {
        title: "Place, not a hardware list",
        body: "Ranking pages lead with aircraft and sample maps. Buyers here need to know the west coast is the subject: limestone, swell, last light, and a crew that lives beside it.",
      },
      {
        title: "Clare and Galway in one operation",
        body: "Two thin location pages would rank for a county and say nothing distinct. One page covers both coasts because the work is the same: Atlantic light, commercial use, a brief you can send today.",
      },
    ],
    includes: [
      "Stabilized aerial cinematography for tourism, hospitality, property and brand films.",
      "8K stills from the same operation when the campaign needs a frame that holds in print.",
      "Ground coverage planned with the flight, so the film is not only a view from above.",
      "Licensed by the Irish Aviation Authority and fully insured for commercial work.",
      "Based in Lisdoonvarna. Flying Clare, Galway, and the west coast when the brief is there.",
    ],
    related: [
      { href: "/fpv", label: "FPV", line: "The shot a stabilized aerial camera cannot make." },
      { href: "/tourism-hospitality", label: "Tourism and hospitality", line: "Hotel and destination films for the west coast." },
      { href: "/", label: "The studio", line: "Aerial, 360°, stills and the full reel." },
    ],
  }} />;
}
