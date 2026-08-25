import { useState } from "react";
import { Send } from "lucide-react";
import { site } from "@/lib/site";

const requirements = [
  "School Bus Body",
  "Staff / Factory Bus",
  "Tourist Coach",
  "College / Institution Bus",
  "Refurbishment / Re-paint",
  "Fabrication Work",
] as const;

export function EnquiryForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const message = [
      "New enquiry — Alfha Coach Builders",
      `Name: ${data.get("name")}`,
      `Phone: ${data.get("phone")}`,
      `Location: ${data.get("location")}`,
      `Requirement: ${data.get("requirement")}`,
      `Chassis: ${data.get("chassis")}`,
      `Details: ${data.get("details")}`,
    ].join("\n");
    setSent(true);
    window.open(`https://wa.me/918667756019?text=${encodeURIComponent(message)}`, "_blank", "noopener");
  }

  const field =
    "mt-2 w-full rounded-sm border border-input bg-background px-3 py-3 text-base text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary sm:py-2.5 sm:text-sm";
  const label = "block text-[0.7rem] font-bold uppercase tracking-widest text-muted-foreground";

  return (
    <form onSubmit={handleSubmit} className="surface-panel rounded-sm p-6 sm:p-8">
      <h2 className="text-2xl uppercase sm:text-3xl">Enquiry Form</h2>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        Fill this in and we will reply on WhatsApp with a quotation. Fields marked{" "}
        <span className="text-primary">*</span> are required.
      </p>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <div>
          <label className={label} htmlFor="name">
            Your Name <span className="text-primary">*</span>
          </label>
          <input id="name" name="name" required autoComplete="name" className={field} placeholder="Full name" />
        </div>
        <div>
          <label className={label} htmlFor="phone">
            Phone / WhatsApp <span className="text-primary">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            required
            className={field}
            placeholder="10-digit mobile number"
          />
        </div>

        <div>
          <label className={label} htmlFor="location">
            City / District
          </label>
          <input id="location" name="location" className={field} placeholder="e.g. Karur, Erode" />
        </div>
        <div>
          <label className={label} htmlFor="requirement">
            Requirement
          </label>
          <select id="requirement" name="requirement" className={field} defaultValue={requirements[0]}>
            {requirements.map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label className={label} htmlFor="chassis">
            Chassis / Model
          </label>
          <input
            id="chassis"
            name="chassis"
            className={field}
            placeholder="e.g. Ashok Leyland 4x2, Tata LP 909"
          />
        </div>
        <div className="sm:col-span-2">
          <label className={label} htmlFor="details">
            Seating & Other Details
          </label>
          <textarea
            id="details"
            name="details"
            rows={4}
            className={field}
            placeholder="Seating count, AC / non-AC, livery, expected delivery date"
          />
        </div>
      </div>

      <button
        type="submit"
        className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-sm accent-bar px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-primary-foreground sm:w-auto"
        style={{ boxShadow: "var(--shadow-accent)" }}
      >
        <Send className="h-4 w-4" aria-hidden="true" /> Send Enquiry
      </button>

      <p role="status" aria-live="polite" className="mt-4 text-sm leading-relaxed text-whatsapp">
        {sent
          ? `Thanks! Your enquiry opened in WhatsApp — press send there, or call ${site.phoneDisplay}.`
          : ""}
      </p>

    </form>
  );
}
