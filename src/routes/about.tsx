import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHeader } from "@/components/site/Layout";
import { AboutSection, ContactStrip, ProcessSection, WhySection } from "@/components/site/sections";

const title = "About Alfha Coach Builders | Coach Builders in Karur";
const description =
  "Family-run coach builders in Karur, Tamil Nadu with 20+ years of bus body building experience across Ashok Leyland, Tata, Eicher and BharatBenz chassis.";

export const Route = createFileRoute("/about")({
  component: About,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/about" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
});

function About() {
  return (
    <Layout>
      <PageHeader
        eyebrow="About Us"
        title="Coach Builders In Karur, Tamil Nadu"
        intro="Alfha Coach Bus Body Builders has been fabricating bus bodies in Karur for over two decades — school buses for local institutions, staff buses for mills and factories, and tourist coaches running across South India."
      />
      <AboutSection />
      <WhySection />
      <ProcessSection />
      <ContactStrip />
    </Layout>
  );
}
