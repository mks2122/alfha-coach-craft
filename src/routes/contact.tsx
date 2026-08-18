import { createFileRoute } from "@tanstack/react-router";
import { Instagram, MapPin, MessageCircle, Phone } from "lucide-react";
import { Layout, PageHeader } from "@/components/site/Layout";
import { EnquiryForm } from "@/components/site/EnquiryForm";
import { site } from "@/lib/site";

const title = "Contact Alfha Coach Builders, Karur | Get a Bus Body Quote";
const description =
  "Call or WhatsApp +91 86677 56019 for a bus body building quote in Karur, Tamil Nadu. Send your chassis and seating requirement through our enquiry form.";

export const Route = createFileRoute("/contact")({
  component: Contact,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
});

const links = [
  { href: `tel:${site.phone}`, icon: Phone, label: "Call Us", value: site.phoneDisplay },
  { href: site.whatsapp, icon: MessageCircle, label: "WhatsApp", value: "Chat with our team" },
  { href: site.maps, icon: MapPin, label: "Workshop", value: "Karur, Tamil Nadu — get directions" },
  {
    href: site.instagram,
    icon: Instagram,
    label: "Instagram",
    value: "@alfha_coach_builders_karur",
  },
] as const;

function Contact() {
  return (
    <Layout>
      <PageHeader
        eyebrow="Contact"
        title="Get A Quote From Alfha Coach Builders"
        intro="Tell us the chassis, seating plan and finish you need. We reply with an itemised quotation and a committed delivery date."
      />
      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-[1fr_1.15fr]">
        <div className="space-y-4">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              {...(l.href.startsWith("http") ? { target: "_blank", rel: "noreferrer noopener" } : {})}
              className="flex items-center gap-4 rounded-sm border border-border bg-surface px-5 py-5 transition-colors hover:border-primary"
            >
              <l.icon className="h-6 w-6 shrink-0 text-primary" aria-hidden="true" />
              <span className="min-w-0">
                <span className="block text-[0.7rem] font-bold uppercase tracking-widest text-muted-foreground">
                  {l.label}
                </span>
                <span className="block truncate font-display text-xl">{l.value}</span>
              </span>
            </a>
          ))}
          <p className="text-sm text-muted-foreground">Working hours: {site.hours}</p>
        </div>
        <EnquiryForm />
      </section>
    </Layout>
  );
}
