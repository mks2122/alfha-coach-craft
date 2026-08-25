import { Link } from "@tanstack/react-router";
import {
  BadgeCheck,
  Brush,
  Bus,
  ClipboardList,
  Hammer,
  Instagram,
  MapPin,
  MessageCircle,
  Phone,
  Ruler,
  ShieldCheck,
  Sparkles,
  Truck,
  Wrench,
} from "lucide-react";
import { gallery, heroImage, site } from "@/lib/site";
import { AnimatedCounter } from "./AnimatedCounter";

export function CtaRow({ compact = false }: { compact?: boolean }) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-sm px-5 font-bold uppercase tracking-wider transition-transform hover:-translate-y-0.5";
  const size = compact ? "py-2.5 text-xs" : "py-3.5 text-sm";
  return (
    <div className="flex flex-wrap gap-3">
      <a
        href={site.whatsapp}
        target="_blank"
        rel="noreferrer noopener"
        className={`${base} ${size} accent-bar text-primary-foreground`}
        style={{ boxShadow: "var(--shadow-accent)" }}
      >
        <MessageCircle className="h-4 w-4" aria-hidden="true" /> WhatsApp Us
      </a>
      <a href={`tel:${site.phone}`} className={`${base} ${size} border border-border bg-steel text-steel-foreground`}>
        <Phone className="h-4 w-4" aria-hidden="true" /> Call {site.phoneDisplay}
      </a>
      <Link to="/contact" className={`${base} ${size} border border-primary text-primary`}>
        Get a Quote
      </Link>
      <a
        href={site.maps}
        target="_blank"
        rel="noreferrer noopener"
        className={`${base} ${size} border border-border text-foreground`}
      >
        <MapPin className="h-4 w-4" aria-hidden="true" /> Directions
      </a>
      <a
        href={site.instagram}
        target="_blank"
        rel="noreferrer noopener"
        className={`${base} ${size} border border-border text-foreground`}
      >
        <Instagram className="h-4 w-4" aria-hidden="true" /> Instagram
      </a>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <img
        src={heroImage.src}
        alt={heroImage.alt}
        className="absolute inset-0 h-full w-full object-cover object-center"
        loading="eager"
      />
      <div className="absolute inset-0 hero-scrim" />
      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 md:py-36">
        <p className="eyebrow">Karur · Tamil Nadu · Since Four Decades of Craft</p>
        <h1 className="mt-4 max-w-3xl text-5xl uppercase sm:text-6xl md:text-7xl">
          Bus Body Builders in Karur Who Build Coaches That Last
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-foreground/85 sm:text-lg">
          Alfha Coach Bus Body Builders fabricates custom bus bodies, tourist coaches, school and
          staff buses on every major chassis — full exterior design, sheet metal fabrication,
          interiors and customisation under one roof in Karur.
        </p>
        <div className="mt-9">
          <CtaRow />
        </div>
        <dl className="mt-12 grid max-w-3xl grid-cols-2 gap-px overflow-hidden rounded-sm border border-border/70 bg-border/70 sm:grid-cols-4">
          {[
            [<AnimatedCounter key="c" to={1000} suffix="+" />, "Bus Bodies Built"],
            ["40+", "Years of Experience"],
            ["All", "Chassis Makes"],
            ["100%", "In-House Build"],
          ].map(([value, label]) => (
            <div key={String(label)} className="bg-background/85 px-4 py-5">
              <dt className="font-display text-3xl text-primary">{value}</dt>
              <dd className="mt-1 text-[0.7rem] font-semibold uppercase tracking-widest text-muted-foreground">
                {label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

export function SectionHead({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-3 text-3xl uppercase sm:text-4xl md:text-5xl">{title}</h2>
      {intro ? <p className="mt-4 text-base leading-relaxed text-muted-foreground">{intro}</p> : null}
    </div>
  );
}

export function AboutSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20">
      <div className="grid gap-12 md:grid-cols-[1.05fr_1fr] md:items-center">
        <div>
          <SectionHead
            eyebrow="About Alfha Coach"
            title="A Karur Coach Building Workshop, Built On Steel And Word Of Mouth"
            intro="Alfha Coach Builders is a family-run bus body building unit in Karur, Tamil Nadu — the heart of South India's coach building belt. Every body leaves our shed measured, welded, sealed and finished by the same team that started it."
          />
          <ul className="mt-8 space-y-4 text-sm leading-relaxed text-muted-foreground">
            {[
              "Complete body building on Ashok Leyland, Tata, Eicher and BharatBenz chassis.",
              "Heavy-gauge steel skeleton with anti-rust treatment and sealed panel joints.",
              "Design-to-delivery handled in-house: fabrication, panelling, paint, glazing, interiors and electricals.",
              "Fleet operators, schools, factories and tour companies across Tamil Nadu and Kerala.",
            ].map((t) => (
              <li key={t} className="flex gap-3">
                <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {gallery.slice(0, 2).map((g) => (
            <img
              key={g.src}
              src={g.src}
              alt={g.alt}
              loading="lazy"
              className="h-56 w-full rounded-sm object-cover sm:h-72"
              style={{ boxShadow: "var(--shadow-panel)" }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

const services = [
  {
    icon: Bus,
    title: "Custom Bus Body Building",
    body: "Full body building on new chassis — school buses, staff buses, tourist coaches, sleepers and mini buses to your seating plan.",
  },
  {
    icon: Hammer,
    title: "Sheet Metal Fabrication",
    body: "Precision steel skeleton work, pillar and roof framing, jig-set panelling and structural repair with anti-corrosion treatment.",
  },
  {
    icon: Brush,
    title: "Exterior Design & Paint",
    body: "Moulded fascias, bumpers, LED destination boards, two-tone liveries, graphics and high-gloss PU finish.",
  },
  {
    icon: Sparkles,
    title: "Interior Customisation",
    body: "Pushback and sleeper seating, roof panelling, flooring, luggage racks, lighting, AC ducting and entertainment fit-out.",
  },
  {
    icon: Wrench,
    title: "Refurbishment & Rebuild",
    body: "Old body strip-down, rust removal, re-panelling and full re-paint to bring ageing fleet vehicles back to line-ready condition.",
  },
  {
    icon: Truck,
    title: "Fleet & Institutional Orders",
    body: "Batch builds for schools, mills and factories with a common spec sheet, staged delivery and single-point coordination.",
  },
] as const;

export function ServicesSection() {
  return (
    <section className="border-y border-border bg-surface">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20">
        <SectionHead
          eyebrow="Our Services"
          title="Coach Building, Fabrication & Customisation"
          intro="Everything a bus body needs, from bare chassis to keys-in-hand delivery."
        />
        <div className="mt-12 grid gap-px overflow-hidden rounded-sm bg-border sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <article key={s.title} className="group bg-background/90 p-7 transition-colors hover:bg-background">
              <s.icon className="h-8 w-8 text-primary" aria-hidden="true" />
              <h3 className="mt-5 text-2xl uppercase">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function GallerySection({ full = false }: { full?: boolean }) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20">
      <SectionHead
        eyebrow="Our Work"
        title="Bodies Built In Our Karur Shed"
        intro="Real buses delivered to real customers — photographed on our own yard, not a catalogue."
      />
      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {gallery.map((g, i) => (
          <figure
            key={g.src}
            className={`group overflow-hidden rounded-sm border border-border bg-surface ${
              full && i === 0 ? "sm:col-span-2" : ""
            }`}
            style={{ boxShadow: "var(--shadow-panel)" }}
          >
            <img
              src={g.src}
              alt={g.alt}
              loading="lazy"
              className={`w-full object-cover transition-transform duration-500 group-hover:scale-[1.03] ${
                full && i === 0 ? "h-64 sm:h-[26rem]" : "h-60 sm:h-72"
              }`}
            />
            <figcaption className="flex items-baseline justify-between gap-4 border-t border-border px-5 py-4">
              <span className="font-display text-xl uppercase">{g.title}</span>
              <span className="text-[0.7rem] font-semibold uppercase tracking-widest text-muted-foreground">
                {g.meta}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
      {!full ? (
        <div className="mt-10">
          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 rounded-sm border border-primary px-5 py-3 text-sm font-bold uppercase tracking-wider text-primary"
          >
            View Full Gallery
          </Link>
        </div>
      ) : null}
    </section>
  );
}

const reasons = [
  {
    icon: ShieldCheck,
    title: "Structure First",
    body: "Heavy-gauge steel skeleton, correct pillar spacing and rust-proofing — the part you never see is the part we obsess over.",
  },
  {
    icon: Ruler,
    title: "Built To Your Spec",
    body: "Seating count, door position, luggage space, livery — nothing is a fixed template. You approve the layout before we cut steel.",
  },
  {
    icon: ClipboardList,
    title: "Honest Timelines",
    body: "A written delivery date and staged updates with photos while your bus is on the floor.",
  },
  {
    icon: BadgeCheck,
    title: "Fair, Transparent Pricing",
    body: "Itemised quotation covering material, labour and finish. No surprise additions at delivery.",
  },
  {
    icon: Wrench,
    title: "After-Delivery Support",
    body: "Panel, glass, seat and electrical support after handover — we stay reachable on one number.",
  },
  {
    icon: Bus,
    title: "Karur Craftsmanship",
    body: "Four decades of coach building experience in Tamil Nadu's coach building hub, with fleets still running our earliest bodies.",
  },
] as const;

export function WhySection() {
  return (
    <section className="border-y border-border bg-surface">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20">
        <SectionHead eyebrow="Why Choose Us" title="Why Fleet Owners Keep Coming Back To Alfha" />
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r) => (
            <div key={r.title} className="border-l-2 border-primary/70 pl-5">
              <r.icon className="h-6 w-6 text-primary" aria-hidden="true" />
              <h3 className="mt-4 text-2xl uppercase">{r.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{r.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const steps = [
  ["01", "Consultation", "Tell us the chassis, purpose, seating and budget. We advise on layout and finish options."],
  ["02", "Design & Quote", "Drawings, livery direction and an itemised quotation with a committed delivery date."],
  ["03", "Fabrication", "Steel skeleton, panelling, flooring and roof work with anti-rust treatment at every stage."],
  ["04", "Finish & Interiors", "Putty, primer, PU paint, glazing, seating, electricals, lighting and AC fit-out."],
  ["05", "Inspection & Delivery", "Joint quality check with you, documentation support and handover from our Karur yard."],
] as const;

export function ProcessSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20">
      <SectionHead
        eyebrow="Our Process"
        title="From Bare Chassis To Road Ready"
        intro="A clear five-stage build so you always know where your bus stands."
      />
      <ol className="mt-12 grid gap-px overflow-hidden rounded-sm bg-border md:grid-cols-5">
        {steps.map(([n, title, body]) => (
          <li key={n} className="bg-surface p-6">
            <span className="font-display text-4xl text-primary">{n}</span>
            <h3 className="mt-3 text-xl uppercase">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

export function ContactStrip() {
  return (
    <section className="border-t border-border bg-surface">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 md:grid-cols-[1.2fr_1fr] md:items-center">
        <div>
          <p className="eyebrow">Get A Quote</p>
          <h2 className="mt-3 text-3xl uppercase sm:text-4xl">
            Planning a new bus body? Talk to us today.
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
            Share your chassis and seating requirement on WhatsApp or call {site.phoneDisplay} — you
            will speak directly to the people building your bus.
          </p>
        </div>
        <CtaRow compact />
      </div>
    </section>
  );
}
