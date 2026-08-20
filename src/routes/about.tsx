import { createFileRoute } from "@tanstack/react-router";
import { SITE_URL, heroImage } from "@/lib/site";
import { Layout, PageHeader } from "@/components/site/Layout";
import { AboutSection, ContactStrip, ProcessSection, WhySection } from "@/components/site/sections";

const title = "About Alfha Coach Builders | Coach Builders in Karur";
const description =
  "Family-run coach builders in Karur, Tamil Nadu with 40+ years of bus body building experience across Ashok Leyland, Tata, Eicher and BharatBenz chassis.";

export const Route = createFileRoute("/about")({
  component: About,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/about` },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: `${SITE_URL}${heroImage.src}` },
      { name: "twitter:image", content: `${SITE_URL}${heroImage.src}` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/about` }],
  }),
});

function About() {
  return (
    <Layout>
      <PageHeader
        eyebrow="About Us"
        title="Coach Builders In Karur, Tamil Nadu"
        intro="Alfha Coach Bus Body Builders has been fabricating bus bodies in Karur for over four decades — school buses for local institutions, staff buses for mills and factories, and tourist coaches running across South India."
      />
      <AboutSection />
      <WhySection />
      <ProcessSection />
      <ContactStrip />
    </Layout>
  );
}
