import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-layout";
import { MapPin, Phone, Smartphone } from "lucide-react";
import gloves from "@/assets/gloves-v3.jpg.asset.json";

export const Route = createFileRoute("/visit")({
  head: () => ({
    meta: [
      { title: "Επικοινωνία — BLACK GLOVE" },
      { name: "description", content: "Βρες το BLACK GLOVE στην Καλαμάτα. Πλατεία Αμφείας 32, Ιστορικό κέντρο." },
      { property: "og:title", content: "Επικοινωνία — BLACK GLOVE" },
      { property: "og:description", content: "Βρες το BLACK GLOVE στην Καλαμάτα. Πλατεία Αμφείας 32, Ιστορικό κέντρο." },
      { property: "og:image", content: gloves.url },
    ],
  }),
  component: VisitPage,
});

function VisitPage() {
  return (
    <SiteShell>
      <section className="border-b border-border/60">
        <div className="mx-auto max-w-7xl px-5 pb-16 pt-28 sm:px-8 sm:pt-32">
          <span className="text-xs uppercase tracking-[0.35em] text-primary">Επικοινωνία</span>
          <h1 className="mt-4 text-balance text-6xl leading-[0.9] sm:text-8xl" style={{ fontFamily: "var(--font-display)" }}>
            Πείνασες;<br />Ξέρεις πού να έρθεις.
          </h1>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 md:grid-cols-[1fr_1.4fr]">
        <div className="space-y-10">
          <div className="flex items-start gap-4">
            <MapPin size={20} className="mt-1 shrink-0 text-primary" />
            <div className="min-w-0">
              <h3 className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Διεύθυνση</h3>
              <p className="mt-2 text-lg text-foreground">Καλαμάτα</p>
              <p className="mt-1 text-lg text-foreground">Πλατεία Αμφείας 32</p>
              <p className="mt-1 text-muted-foreground">παπλωματάδικα — Ιστορικό κέντρο Καλαμάτας</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Phone size={20} className="mt-1 shrink-0 text-primary" />
            <div className="min-w-0">
              <h3 className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Σταθερό</h3>
              <p className="mt-2 text-lg text-foreground">2721 410875</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Smartphone size={20} className="mt-1 shrink-0 text-primary" />
            <div className="min-w-0">
              <h3 className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Κινητό</h3>
              <p className="mt-2 text-lg text-foreground">699 8336326</p>
            </div>
          </div>

          {/* GOOGLE MAPS */}
          <div className="relative aspect-[4/3] w-full overflow-hidden border border-border/60">
            <iframe
              src="https://maps.google.com/maps?q=%CE%A0%CE%BB%CE%B1%CF%84%CE%B5%CE%AF%CE%B1+%CE%91%CE%BC%CF%86%CE%B5%CE%AF%CE%B1%CF%82+32,+%CE%9A%CE%B1%CE%BB%CE%B1%CE%BC%CE%AC%CF%84%CE%B1,+%CE%95%CE%BB%CE%BB%CE%AC%CE%B4%CE%B1&hl=el&t=&z=18&ie=UTF8&iwloc=B&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "grayscale(100%) contrast(1.1)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Black Glove location"
              className="absolute inset-0 h-full w-full"
            />
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <div className="relative aspect-square overflow-hidden border border-border/60 bg-black">
            <img
              src={gloves.url}
              alt="BLACK GLOVE — Street Food"
              loading="lazy"
              width={1024}
              height={1024}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
