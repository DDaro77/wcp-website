import { createFileRoute } from "@tanstack/react-router";
import { SitePage } from "@/components/site/page";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "West Coast Production | Cinematic Video & Drone Production Ireland",
      },
      {
        name: "description",
        content:
          "West Coast Production is an independent creative studio on the west coast of Ireland specialising in cinematic video, aerial cinematography, FPV drone filming and visual storytelling.",
      },
      {
        property: "og:title",
        content: "West Coast Production | Perspective from the edge.",
      },
      {
        property: "og:description",
        content:
          "Cinematic video, aerial cinematography, FPV drone filming and visual storytelling from the west coast of Ireland.",
      },
      {
        property: "og:image",
        content: "https://westcoastproduction.ie/og.jpg",
      },
      {
        property: "og:type",
        content: "website",
      },
      {
        property: "og:url",
        content: "https://westcoastproduction.ie/",
      },
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
      {
        name: "twitter:title",
        content: "West Coast Production | Perspective from the edge.",
      },
      {
        name: "twitter:description",
        content:
          "Cinematic video, aerial cinematography, FPV drone filming and visual storytelling from the west coast of Ireland.",
      },
      {
        name: "twitter:image",
        content: "https://westcoastproduction.ie/og.jpg",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "West Coast Production",
          url: "https://westcoastproduction.ie/",
          telephone: "+353860553070",
          image: "https://westcoastproduction.ie/og.jpg",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Lisdoonvarna",
            addressRegion: "County Clare",
            addressCountry: "IE",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: 53.0264,
            longitude: -9.2906,
          },
          areaServed: ["County Clare", "County Galway", "Ireland"],
          sameAs: [
            "https://www.instagram.com/west_coast_production/",
            "https://www.youtube.com/@west.coast.production",
            "https://www.facebook.com/westcoastproduction/",
          ],
        }),
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://westcoastproduction.ie/",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return <SitePage />;
}
