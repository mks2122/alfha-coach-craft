import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { logo, site } from "@/lib/site";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/gallery", label: "Our Work" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/92 backdrop-blur-md">
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 sm:px-6">
        <Link to="/" className="flex min-w-0 items-center gap-3">
          <img
            src={logo}
            alt="Alfha Coach Builders logo — bus body builders in Karur, Tamil Nadu"
            className="h-11 w-11 shrink-0 rounded-sm bg-foreground object-contain p-1"
            loading="eager"
            width={44}
            height={44}
          />
          <span className="min-w-0">
            <span className="block truncate font-display text-xl leading-none sm:text-2xl">
              Alfha Coach Builders
            </span>
            <span className="block truncate text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
              Karur · Tamil Nadu
            </span>
          </span>
        </Link>

        <div className="flex items-center gap-2">
          <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                className="rounded-sm px-3 py-2.5 text-sm font-semibold uppercase tracking-wider text-muted-foreground transition-colors hover:text-foreground [&.active]:text-primary"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <a
            href={`tel:${site.phone}`}
            className="hidden min-h-11 items-center gap-2 rounded-sm accent-bar px-4 py-2.5 text-sm font-bold uppercase tracking-wider text-primary-foreground sm:inline-flex"
            style={{ boxShadow: "var(--shadow-accent)" }}
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            {site.phoneDisplay}
          </a>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-sm border border-border text-foreground lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="border-t border-border bg-surface px-4 py-3 lg:hidden"
        >
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className="block border-b border-border/60 py-3.5 font-display text-2xl text-foreground last:border-0 [&.active]:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      ) : null}

    </header>
  );
}
