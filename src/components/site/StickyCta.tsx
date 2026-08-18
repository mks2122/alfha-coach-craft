import { MapPin, MessageCircle, Phone } from "lucide-react";
import { site } from "@/lib/site";

export function StickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-3 border-t border-border bg-background/95 backdrop-blur md:hidden">
      <a
        href={`tel:${site.phone}`}
        className="flex flex-col items-center gap-1 py-2.5 text-[0.7rem] font-bold uppercase tracking-wider text-foreground"
      >
        <Phone className="h-5 w-5 text-primary" aria-hidden="true" /> Call
      </a>
      <a
        href={site.whatsapp}
        target="_blank"
        rel="noreferrer noopener"
        className="flex flex-col items-center gap-1 border-x border-border py-2.5 text-[0.7rem] font-bold uppercase tracking-wider text-foreground"
      >
        <MessageCircle className="h-5 w-5 text-whatsapp" aria-hidden="true" /> WhatsApp
      </a>
      <a
        href={site.maps}
        target="_blank"
        rel="noreferrer noopener"
        className="flex flex-col items-center gap-1 py-2.5 text-[0.7rem] font-bold uppercase tracking-wider text-foreground"
      >
        <MapPin className="h-5 w-5 text-primary" aria-hidden="true" /> Directions
      </a>
    </div>
  );
}
