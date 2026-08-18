import logoAsset from "@/assets/logo.asset.json";
import busBlue from "@/assets/bus-blue.asset.json";
import busWhite from "@/assets/bus-white.asset.json";
import busYellow from "@/assets/bus-yellow.asset.json";
import coachNight from "@/assets/coach-night.asset.json";

export const site = {
  name: "Alfha Coach Builders",
  legalName: "Alfha Coach Bus Body Builders",
  city: "Karur",
  state: "Tamil Nadu",
  phone: "+918667756019",
  phoneDisplay: "+91 86677 56019",
  whatsapp: "https://wa.me/918667756019?text=Hi%20Alfha%20Coach%20Builders%2C%20I%20would%20like%20a%20quote%20for%20a%20bus%20body%20build.",
  instagram: "https://www.instagram.com/alfha_coach_builders_karur/",
  maps: "https://maps.app.goo.gl/ZbEYnncnbA8BjM4o9?g_st=ic",
  hours: "Mon – Sat, 9:00 AM – 8:00 PM",
} as const;

export const logo = logoAsset.url;

export const gallery = [
  {
    src: busYellow.url,
    alt: "Yellow school bus body built by Alfha Coach Builders, Karur — Alfha Lynx model with steel-framed windows",
    title: "School Bus Body — Lynx",
    meta: "Steel frame · 56-seat layout · Karur build",
  },
  {
    src: busBlue.url,
    alt: "Blue staff bus with custom exterior stripe design fabricated by Alfha Coach Builders in Karur, Tamil Nadu",
    title: "Staff / Factory Bus",
    meta: "Custom stripe livery · Twin door",
  },
  {
    src: busWhite.url,
    alt: "White long-haul coach body with tinted glass and moulded front fascia built by Alfha Coach Builders, Karur",
    title: "Long-Haul Coach",
    meta: "Moulded fascia · Tinted glazing",
  },
  {
    src: coachNight.url,
    alt: "White luxury sleeper coach with LED destination board and blue-green graphics delivered by Alfha Coach Builders, Karur",
    title: "Luxury Sleeper Coach",
    meta: "LED board · Premium interiors",
  },
] as const;

export const heroImage = gallery[3];
