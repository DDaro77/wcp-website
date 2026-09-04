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
