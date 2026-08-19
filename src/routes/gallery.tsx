import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHeader } from "@/components/site/Layout";
import { ContactStrip, GallerySection } from "@/components/site/sections";
import { InstitutionalSection } from "@/components/site/highlights";

const title = "Our Work — Bus Body Gallery | Alfha Coach Builders Karur";
const description =
  "Photos of bus bodies built by Alfha Coach Builders in Karur: school buses, staff buses, long-haul coaches and institutional buses.";

export const Route = createFileRoute("/gallery")({
  component: Gallery,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/gallery" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
});

function Gallery() {
  return (
    <Layout>
      <PageHeader
        eyebrow="Our Work"
        title="Buses We Have Built"
        intro="Every photograph here is a body fabricated and finished at our Karur workshop — no catalogue renders, no stock photos."
      />
      <GallerySection full />
      <ContactStrip />
    </Layout>
  );
}
