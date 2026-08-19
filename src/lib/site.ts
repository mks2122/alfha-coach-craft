import logoAsset from "@/assets/logo.asset.json";
import busBlue from "@/assets/bus-blue.asset.json";
import busWhite from "@/assets/bus-white.asset.json";
import busYellow from "@/assets/bus-yellow.asset.json";
import instJacsiceExterior from "@/assets/inst-jacsice-exterior.asset.json";
import instJacsiceInterior from "@/assets/inst-jacsice-interior.asset.json";
import instNatureCabs from "@/assets/inst-nature-cabs.asset.json";
import instRamcoDay from "@/assets/inst-ramco-day.asset.json";
import instFleetThree from "@/assets/inst-fleet-three.asset.json";
import instAlphaDusk from "@/assets/inst-alpha-dusk.asset.json";
import instAlphaPair from "@/assets/inst-alpha-pair.asset.json";
import instKavinaPair from "@/assets/inst-kavina-pair.asset.json";
import instRamcoNight from "@/assets/inst-ramco-night.asset.json";
import instInteriorBlue from "@/assets/inst-interior-blue.asset.json";

export const site = {
  name: "Alfha Coach Builders",
  legalName: "Alfha Coach Bus Body Builders",
  city: "Karur",
  state: "Tamil Nadu",
  phone: "+919842988407",
  phoneDisplay: "+91 98429 88407",
  phoneAlt: "+918667756019",
  phoneAltDisplay: "+91 86677 56019",
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
    src: instNatureCabs.url,
    alt: "White intercity coach with blue and green sweeping graphics built by Alfha Coach Builders, Karur",
    title: "Intercity Coach",
    meta: "Custom livery · LED lighting",
  },
] as const;

export const heroImage = {
  src: instAlphaDusk.url,
  alt: "Yellow institutional bus body built by Alfha Coach Builders, Karur, photographed at dusk",
};

export const institutionalGallery = [
  {
    src: instJacsiceExterior.url,
    alt: "Yellow JACSICE college bus body built by Alfha Coach Builders, Karur",
    title: "College Bus — JACSICE",
  },
  {
    src: instRamcoDay.url,
    alt: "Ramco Institute of Technology yellow college bus body built by Alfha Coach Builders, Karur",
    title: "College Bus — Ramco Institute",
  },
  {
    src: instKavinaPair.url,
    alt: "Pair of Kavina Global School yellow school buses bodied by Alfha Coach Builders, Karur",
    title: "School Buses — Kavina Global",
  },
  {
    src: instFleetThree.url,
    alt: "Three yellow Alfha school bus bodies lined up after delivery in Karur, Tamil Nadu",
    title: "Fleet Delivery — Three Buses",
  },
  {
    src: instAlphaPair.url,
    alt: "Two yellow Alfha institutional buses at dusk with interior lighting on, built in Karur",
    title: "Institutional Buses — Twin Delivery",
  },
  {
    src: instRamcoNight.url,
    alt: "Rear view of two Ramco Institute college buses bodied by Alfha Coach Builders, Karur",
    title: "College Fleet — Rear View",
  },
  {
    src: instAlphaDusk.url,
    alt: "Yellow Alfha institutional bus body at dusk showing wide glazing and entry door, Karur",
    title: "Staff Bus — Wide Glazing",
  },
  {
    src: instJacsiceInterior.url,
    alt: "Maroon and cream JACSICE branded bus seating interior finished by Alfha Coach Builders, Karur",
    title: "Interior — Branded Seating",
  },
  {
    src: instInteriorBlue.url,
    alt: "Blue institutional bus interior with stainless grab rails and cushioned bench seating, Karur",
    title: "Interior — Steel Rails & Benches",
  },
  {
    src: instNatureCabs.url,
    alt: "White staff transport coach with blue and green graphics built by Alfha Coach Builders, Karur",
    title: "Staff Transport Coach",
  },
] as const;
