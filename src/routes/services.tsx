import { createFileRoute } from "@tanstack/react-router";
import { SITE_URL, heroImage } from "@/lib/site";
import { Layout, PageHeader } from "@/components/site/Layout";
import { ContactStrip, ProcessSection, ServicesSection } from "@/components/site/sections";

const title = "Bus Body Building & Fabrication Services in Karur | Alfha Coach";
const description =
  "Custom bus body building, sheet metal fabrication, exterior design, paint and interior customisation in Karur — school, staff, tourist and sleeper coach bodies.";

export const Route = createFileRoute("/services")({
  component: Services,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/services` },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: `${SITE_URL}${heroImage.src}` },
      { name: "twitter:image", content: `${SITE_URL}${heroImage.src}` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/services` }],
  }),
});

function Services() {
  return (
    <Layout>
      <PageHeader
        eyebrow="Services"
        title="Bus Body Building, Fabrication & Customisation"
        intro="One workshop in Karur for the entire build — structural fabrication, exterior design, paint, glazing, interiors and electricals on any chassis you bring."
      />
      <ServicesSection />
      <ProcessSection />
      <ContactStrip />
    </Layout>
  );
}
