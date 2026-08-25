import { Link } from "@tanstack/react-router";
import { SectionHead } from "./sections";
import { site } from "@/lib/site";

const areas = [
  "Karur",
  "Kulithalai",
  "Aravakurichi",
  "Krishnarayapuram",
  "Namakkal",
  "Erode",
  "Trichy",
  "Dindigul",
  "Salem",
  "Coimbatore",
];

const links = [
  { to: "/about", label: "About our Karur workshop" },
  { to: "/services", label: "Bus body building & fabrication services" },
  { to: "/gallery", label: "Bus bodies we have built" },
  { to: "/contact", label: "Get a bus body quote" },
] as const;

export function LocalSeoSection() {
  return (
    <section className="border-t border-border bg-surface">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20">
        <SectionHead
          eyebrow="Karur · Tamil Nadu"
          title="Bus Body Building In Karur, Serving Tamil Nadu"
          intro="Our shed is in Karur, on the Tamil Nadu transport belt, so chassis reach us quickly from across the western and central districts."
        />

        <div className="mt-10 grid gap-10 md:grid-cols-[1.15fr_1fr]">
          <div className="space-y-4 text-sm leading-relaxed text-muted-foreground">
            <p>
              Alfha Coach Bus Body Builders works as coach builders in Karur for schools, colleges,
              mills, factories and tourist operators. Every stage of bus body fabrication happens
              here — chassis measurement, structural steel framing, panelling, exterior design,
              paint, glazing, interiors and electricals — so you deal with one team from order to
              delivery.
            </p>
            <p>
              We build on Ashok Leyland, Tata, Eicher and BharatBenz chassis, and bodies are made to
              AIS 153 requirements for school and staff transport. Bus body fabrication in Karur
              keeps freight and travel time low for fleet owners across Tamil Nadu, and we handle
              repeat fleet orders, rebodying and repainting for existing customers.
            </p>
            <p>
              Visit the workshop during {site.hours}, or send your seating plan on WhatsApp and we
              will come back with an itemised quotation and a committed delivery date.
            </p>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="font-display text-2xl uppercase">Areas We Serve</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {areas.map((a) => (
                  <li
                    key={a}
                    className="rounded-sm border border-border px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                  >
                    {a}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-display text-2xl uppercase">Explore The Site</h3>
              <ul className="mt-4 space-y-2 text-sm">
                {links.map((l) => (
                  <li key={l.to}>
                    <Link to={l.to} className="text-primary underline-offset-4 hover:underline">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
