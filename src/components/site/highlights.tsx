import {
  Building2,
  GraduationCap,
  Award,
  ShieldCheck,
  Sofa,
  Hammer,
  Users,
  School,
} from "lucide-react";
import { institutionalGallery } from "@/lib/site";
import { CtaRow, SectionHead } from "./sections";

const institutional = [
  { icon: School, label: "School Buses" },
  { icon: GraduationCap, label: "College Buses" },
  { icon: Building2, label: "Educational Institutions" },
  { icon: Users, label: "Staff Transportation" },
  { icon: Building2, label: "Organizations & Institutions" },
] as const;

export function InstitutionalSection() {
  const [hero, ...rest] = institutionalGallery;
  return (
    <section className="border-y border-border bg-surface">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <SectionHead
          eyebrow="Institutional Buses"
          title="Buses Built For Schools, Colleges & Organizations"
          intro="Purpose-built institutional bodies for educational campuses, factories and organizations — safe entry steps, guarded windows, durable interiors and layouts planned around daily passenger loads."
        />
        <div className="mt-12 grid gap-6">
          <figure
            className="group overflow-hidden rounded-sm border border-border bg-background"
            style={{ boxShadow: "var(--shadow-panel)" }}
          >
            <img
              src={hero.src}
              alt={hero.alt}
              loading="lazy"
              decoding="async"
              className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-[1.03] sm:h-[30rem]"
            />
            <figcaption className="border-t border-border px-5 py-4 font-display text-xl uppercase">
              {hero.title}
            </figcaption>
          </figure>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((g) => (
              <figure
                key={g.title}
                className="group overflow-hidden rounded-sm border border-border bg-background"
                style={{ boxShadow: "var(--shadow-panel)" }}
              >
                <img
                  src={g.src}
                  alt={g.alt}
                  loading="lazy"
                  decoding="async"
                  className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-[1.03] sm:h-56"
                />
                <figcaption className="border-t border-border px-5 py-3 font-display text-lg uppercase">
                  {g.title}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
        <ul className="mt-10 grid gap-px overflow-hidden rounded-sm bg-border sm:grid-cols-3 lg:grid-cols-5">
          {institutional.map((it) => (
            <li key={it.label} className="flex items-center gap-3 bg-background/90 px-5 py-5">
              <it.icon className="h-6 w-6 shrink-0 text-primary" aria-hidden="true" />
              <span className="text-[0.78rem] font-bold uppercase tracking-wider">{it.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function CertificationSection() {
  return (
    <section className="relative isolate overflow-hidden border-b border-border">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 md:grid-cols-[1fr_0.9fr] md:items-center">
        <div>
          <p className="eyebrow">Safety · Strength · Trust</p>
          <div className="mt-5 inline-flex items-center gap-3 rounded-sm border border-primary/60 bg-primary/10 px-4 py-2">
            <Award className="h-5 w-5 text-primary" aria-hidden="true" />
            <span className="font-display text-xl uppercase tracking-wide text-primary">
              AIS 153 Certified
            </span>
          </div>
          <h2 className="mt-6 text-3xl uppercase sm:text-4xl md:text-5xl">
            Delivering Safe, Reliable &amp; Certified Buses For A Better Tomorrow
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
            Alfha Coach Builders, Karur builds to AIS 153 certification — the Indian bus body code
            standard for structural safety. Every body is built around that discipline: verified
            construction, strong steel structure and dependable finish work you can trust for years
            of service.
          </p>
          <div className="mt-8">
            <CtaRow compact />
          </div>
        </div>
        <div className="grid gap-px overflow-hidden rounded-sm bg-border">
          {[
            { icon: ShieldCheck, title: "Safety", body: "AIS 153 certified body construction." },
            { icon: Hammer, title: "Strength", body: "Heavy-gauge steel skeleton, rust-proofed." },
            { icon: Award, title: "Trust", body: "Karur-built, fleet-proven for four decades." },
          ].map((c) => (
            <div key={c.title} className="bg-surface px-6 py-7">
              <c.icon className="h-7 w-7 text-primary" aria-hidden="true" />
              <h3 className="mt-4 text-2xl uppercase">{c.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const usps = [
  { icon: Award, title: "AIS 153 Certified", body: "For Maximum Safety" },
  { icon: School, title: "School, College & Staff Buses", body: "Built To Perfection" },
  { icon: Hammer, title: "Strong & Durable Construction", body: "For Long Lasting Performance" },
  { icon: Sofa, title: "Comfortable & Spacious Design", body: "For Every Journey" },
] as const;

export function UspSection() {
  return (
    <section className="border-b border-border bg-surface">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <SectionHead
          eyebrow="School, College & Staff Buses"
          title="Built To Perfection"
          intro="Safety-first structures, strong and durable construction, comfortable spacious layouts and reliable long-term performance on every institutional build."
        />
        <div className="mt-12 grid gap-px overflow-hidden rounded-sm bg-border sm:grid-cols-2 lg:grid-cols-4">
          {usps.map((u) => (
            <article
              key={u.title}
              className="bg-background/90 p-7 transition-colors hover:bg-background"
            >
              <u.icon className="h-8 w-8 text-primary" aria-hidden="true" />
              <h3 className="mt-5 text-xl uppercase leading-tight">{u.title}</h3>
              <p className="mt-2 text-[0.78rem] font-bold uppercase tracking-widest text-muted-foreground">
                {u.body}
              </p>
            </article>
          ))}
        </div>
        <p className="mt-10 font-display text-2xl uppercase tracking-wide text-primary sm:text-3xl">
          Quality You Can Trust, Excellence We Deliver
        </p>
      </div>
    </section>
  );
}
