import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-layout";
import { Phone, ExternalLink } from "lucide-react";
import woltAsset from "@/assets/wolt.png.asset.json";
import efoodAsset from "@/assets/efood.png.asset.json";
import boxAsset from "@/assets/box.png.asset.json";

export const Route = createFileRoute("/order-now")({
  head: () => ({
    meta: [
      { title: "Παραγγελία — BLACK GLOVE" },
      { name: "description", content: "Παράγγειλε τώρα από το BLACK GLOVE. Τηλεφωνικές παραγγελίες με 10% έκπτωση ή online μέσω Wolt, efood & BOX." },
      { property: "og:title", content: "Παραγγελία — BLACK GLOVE" },
      { property: "og:description", content: "Παράγγειλε τώρα από το BLACK GLOVE. Τηλεφωνικές παραγγελίες με 10% έκπτωση ή online μέσω Wolt, efood & BOX." },
    ],
  }),
  component: OrderNowPage,
});

const partners = [
  {
    name: "Wolt",
    url: "https://wolt.com/el/grc/kalamata/restaurant/black-glove-street-food",
    accent: "#009DE0",
    bg: "#0A1929",
    logo: woltAsset.url,
  },
  {
    name: "efood",
    url: "https://www.e-food.gr/delivery/kalamata/black-glove-streat-food",
    accent: "#E21B22",
    bg: "#FFFFFF",
    logo: efoodAsset.url,
  },
  {
    name: "BOX",
    url: "https://box.gr/delivery/kalamata/black-glove-street-food",
    accent: "#FF6A13",
    bg: "#FF6A13",
    logo: boxAsset.url,
  },
];

function OrderNowPage() {
  return (
    <SiteShell>
      <section className="relative mx-auto flex min-h-[calc(100vh-90px-44px)] max-w-3xl flex-col items-center justify-center px-5 py-20 text-center sm:px-8">
        {/* Title */}
        <h1
          className="text-balance text-[clamp(2.5rem,10vw,5.5rem)] leading-[0.9] tracking-tight text-foreground"
          style={{ fontFamily: "var(--font-display)" }}
        >
          ΠΑΡΑΓΓΕΙΛΕ<br />ΤΩΡΑ
        </h1>

        {/* Discount badge + hero message */}
        <div className="mt-10 flex max-w-lg flex-col items-center gap-4">
          <div className="relative">
            <svg viewBox="0 0 200 200" className="h-36 w-36 sm:h-44 sm:w-44" aria-hidden="true">
              {/* Comic burst outline */}
              <path
                d="M100,5 L115,45 L155,20 L135,60 L185,55 L145,85 L190,110 L145,120 L175,160 L130,140 L120,195 L100,150 L80,195 L70,140 L25,160 L55,120 L10,110 L55,85 L15,55 L65,60 L45,20 L85,45 Z"
                fill="#C1121F"
                stroke="#fff"
                strokeWidth="2"
              />
              {/* Halftone dots overlay */}
              <circle cx="70" cy="90" r="1.5" fill="rgba(0,0,0,0.15)" />
              <circle cx="80" cy="100" r="2" fill="rgba(0,0,0,0.15)" />
              <circle cx="120" cy="85" r="1.5" fill="rgba(0,0,0,0.15)" />
              <circle cx="130" cy="95" r="2" fill="rgba(0,0,0,0.15)" />
              <circle cx="100" cy="110" r="1.5" fill="rgba(0,0,0,0.15)" />
              <circle cx="90" cy="80" r="2" fill="rgba(0,0,0,0.15)" />
              <circle cx="110" cy="105" r="1.5" fill="rgba(0,0,0,0.15)" />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center leading-none">
              <span className="text-2xl font-bold text-white drop-shadow-sm sm:text-3xl" style={{ fontFamily: "var(--font-display)" }}>-10%</span>
              <span className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-white/95 sm:text-xs">Έκπτωση</span>
            </div>
          </div>
          <p className="text-lg font-medium leading-relaxed text-foreground sm:text-xl">
            Κέρδισε 10% έκπτωση στις τηλεφωνικές παραγγελίες.
          </p>
          <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
            Παράγγειλε απευθείας από το κατάστημα και απόλαυσε 10% έκπτωση σε όλες τις τηλεφωνικές παραγγελίες.
          </p>
        </div>

        {/* Phone CTA */}
        <a
          href="tel:6998336326"
          className="group mt-12 inline-flex w-full max-w-md flex-col items-center justify-center gap-3 rounded-none bg-[#C1121F] px-8 py-6 text-primary-foreground shadow-[0_0_40px_-10px_rgba(193,18,31,0.4)] transition-all duration-300 hover:bg-[#a00f1a] hover:shadow-[0_0_60px_-10px_rgba(193,18,31,0.6)] active:scale-[0.98] sm:w-auto sm:flex-row sm:py-7 sm:px-12"
        >
          <Phone size={28} strokeWidth={1.5} className="shrink-0 transition-transform duration-300 group-hover:scale-110" />
          <div className="flex flex-col items-center sm:items-start">
            <span className="text-xs uppercase tracking-[0.3em] opacity-80">ΚΑΛΕΣΕ ΤΩΡΑ</span>
            <span className="text-2xl font-semibold tracking-wide sm:text-3xl" style={{ fontFamily: "var(--font-display)" }}>
              699 833 6326<br />27214 10875
            </span>
          </div>
        </a>

        {/* Divider */}
        <div className="mt-14 flex w-full max-w-md items-center gap-4">
          <span className="h-px flex-1 bg-border" />
          <span className="whitespace-nowrap text-xs uppercase tracking-[0.2em] text-muted-foreground">
            ή παράγγειλε online
          </span>
          <span className="h-px flex-1 bg-border" />
        </div>

        {/* Partner buttons */}
        <div className="mt-10 grid w-full max-w-md gap-4 sm:grid-cols-3">
          {partners.map((p) => (
            <a
              key={p.name}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Παράγγειλε από ${p.name}`}
              className="group relative flex aspect-square flex-col items-center justify-center gap-2 overflow-hidden border border-border/60 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.6)]"
              style={{ backgroundColor: p.bg }}
            >
              <span
                className="absolute left-0 top-0 h-0.5 w-full transition-all duration-300 group-hover:h-1"
                style={{ backgroundColor: p.accent }}
              />
              <img
                src={p.logo}
                alt={`${p.name} logo`}
                className="max-h-[55%] max-w-[70%] object-contain transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              <ExternalLink
                size={12}
                className="absolute bottom-2 right-2 opacity-60 transition-opacity group-hover:opacity-100"
                style={{ color: p.accent }}
              />
            </a>
          ))}
        </div>

        {/* Note */}
        <p className="mt-10 max-w-sm text-center text-xs leading-relaxed text-muted-foreground">
          Οι online παραγγελίες διεκπεραιώνονται απευθείας από τους συνεργαζόμενους παρόχους.
        </p>
      </section>
    </SiteShell>
  );
}
