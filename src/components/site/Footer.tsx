import { Link } from "@tanstack/react-router";
import { Instagram, MapPin, Phone } from "lucide-react";
import { logo, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="Alfha Coach Builders logo"
              className="h-12 w-12 rounded-sm bg-foreground object-contain p-1"
              loading="lazy"
            />
            <span className="font-display text-2xl">Alfha Coach Builders</span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Bus body builders and coach builders in Karur, Tamil Nadu. Custom bus body building,
            fabrication, exterior design and full customisation for school buses, staff buses,
            tourist coaches and luxury sleepers.
          </p>
        </div>

        <div>
          <h3 className="font-display text-xl">Explore</h3>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {[
              { to: "/about", label: "About Us" },
              { to: "/services", label: "Services" },
              { to: "/gallery", label: "Our Work" },
              { to: "/contact", label: "Contact & Enquiry" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="transition-colors hover:text-primary">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-xl">Reach Us</h3>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li>
              <a href={`tel:${site.phone}`} className="inline-flex items-center gap-2 hover:text-primary">
                <Phone className="h-4 w-4 shrink-0" aria-hidden="true" /> {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={site.maps}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 hover:text-primary"
              >
                <MapPin className="h-4 w-4 shrink-0" aria-hidden="true" /> Karur, Tamil Nadu
              </a>
            </li>
            <li>
              <a
                href={site.instagram}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 hover:text-primary"
              >
                <Instagram className="h-4 w-4 shrink-0" aria-hidden="true" /> @alfha_coach_builders_karur
              </a>
            </li>
            <li>{site.hours}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/70 px-4 py-5 text-center text-xs uppercase tracking-[0.2em] text-muted-foreground">
        © {new Date().getFullYear()} Alfha Coach Bus Body Builders, Karur
      </div>
    </footer>
  );
}
