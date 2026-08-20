import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import {
  AboutSection,
  ContactStrip,
  GallerySection,
  Hero,
  ProcessSection,
  ServicesSection,
  WhySection,
} from "@/components/site/sections";
import {
  CertificationSection,
  InstitutionalSection,
  UspSection,
} from "@/components/site/highlights";
import { SITE_URL, heroImage, site } from "@/lib/site";

const title = "Bus Body Builders in Karur | Alfha Coach Bus Body Builders";
const description =
  "Alfha Coach Builders, Karur — custom bus body building, coach fabrication, exterior design and interior customisation for school, staff, tourist and sleeper buses. Call +91 86677 56019.";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      {
        name: "keywords",
        content:
          "bus body builders in Karur, coach builders in Karur, bus body building Tamil Nadu, custom coach builders Karur, school bus body builders Karur, bus fabrication Karur",
      },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/` },
      { property: "og:image", content: `${SITE_URL}${heroImage.src}` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: `${SITE_URL}${heroImage.src}` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "@id": "https://alfhacoachbuilders.com/#localbusiness",
          name: site.legalName,
          alternateName: site.name,
          description,
          telephone: [site.phoneDisplay, site.phoneAltDisplay],
          url: "/",
          image: "/favicon.ico",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Karur",
            addressRegion: "Tamil Nadu",
            addressCountry: "IN",
          },
          areaServed: ["Karur", "Tamil Nadu", "India"],
          hasMap: site.maps,
          sameAs: [site.instagram, site.maps],
          openingHours: "Mo-Sa 09:00-20:00",
          priceRange: "₹₹",
          knowsAbout: [
            "Bus body building",
            "Coach building",
            "Bus fabrication",
            "Exterior design and customisation",
          ],
        }),
      },
    ],
  }),
});

function Home() {
  return (
    <Layout>
      <Hero />
      <AboutSection />
      <ServicesSection />
      <CertificationSection />
      <UspSection />
      <InstitutionalSection />
      <GallerySection />
      <WhySection />
      <ProcessSection />
      <ContactStrip />
    </Layout>
  );
}
