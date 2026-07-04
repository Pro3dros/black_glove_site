import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteShell } from "@/components/site-layout";
import hero from "@/assets/hero-burger.jpg";
import gloves from "@/assets/gloves-v3.jpg.asset.json";
import burgerJack from "@/assets/burger-jack-orig.png.asset.json";
import burgerCheese from "@/assets/burger-cheese-orig.png.asset.json";
import burgerDouble from "@/assets/burger-double-orig.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BLACK GLOVE — Premium Street Food Burgers" },
      { name: "description", content: "Hand-crafted smashed burgers served with the signature black glove. London premium street food." },
      { property: "og:title", content: "BLACK GLOVE — Premium Street Food Burgers" },
      { property: "og:description", content: "Hand-crafted smashed burgers served with the signature black glove." },
      { property: "og:image", content: hero },
      { name: "twitter:image", content: hero },
    ],
  }),
  component: Index,
});

const featured = [
  { name: "Cheese", desc: "Μπιφτέκι, cheddar, κέτσαπ, burger sauce.", img: burgerCheese.url, price: "4,50€" },
  { name: "Jack", desc: "Μπιφτέκι, cheddar, bacon, iceberg, ντομάτα, τηγανητό κρεμμύδι, μαγιονέζα, Jack Daniels sauce.", img: burgerJack.url, price: "6,50€" },
  { name: "Double", desc: "Διπλό μπιφτέκι, διπλό cheddar, διπλό bacon, καραμελωμένο κρεμμύδι, burger sauce, κέτσαπ.", img: burgerDouble.url, price: "7,50€" },
];

function Index() {
  return (
    <SiteShell>
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <img
          src={hero}
          alt="Hands in black gloves holding a premium smashed burger"
          width={1920}
          height={1280}
          className="absolute inset-0 h-full w-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/30 to-background" />
        <div className="relative mx-auto flex min-h-[92vh] max-w-7xl flex-col justify-end px-5 pb-16 pt-32 sm:px-8 sm:pb-24">
          <div className="max-w-3xl animate-fade-in">
            <span className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-primary">
              <span className="h-px w-8 bg-primary" /> Premium Street Food
            </span>
            <h1 className="mt-6 text-balance text-[clamp(3rem,11vw,9rem)] font-display leading-[0.85] text-foreground" style={{ fontFamily: "var(--font-display)" }}>
              HANDS<br />CLEAN.<br /><span className="text-primary">SOUL DIRTY.</span>
            </h1>
            <p className="mt-8 max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg">
              Φόρεσε το γάντι. Ξέχνα τα υπόλοιπα.
              <br /><br />
              Το burger σου γίνεται πιο άγριο. Τα χέρια σου μένουν καθαρά. Αυτή είναι η εμπειρία Black Glove.
              <br /><br />
              Street Food… με το γάντι.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/menu"
                className="group inline-flex items-center gap-3 border border-primary bg-primary px-7 py-4 text-xs uppercase tracking-[0.25em] text-primary-foreground transition-colors hover:bg-transparent hover:text-foreground"
              >
                See the menu <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/visit"
                className="inline-flex items-center gap-3 border border-border px-7 py-4 text-xs uppercase tracking-[0.25em] text-foreground transition-colors hover:border-foreground"
              >
                Find us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* GLOVE MANIFESTO */}
      <section className="border-t border-border/60">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-24 sm:px-8 md:grid-cols-2 md:py-32 md:gap-20">
          <div className="relative aspect-[5/4] overflow-hidden">
            <img src={gloves.url} alt="Black gloves holding a premium smashed burger" loading="lazy" width={1280} height={1024} className="h-full w-full object-cover" />
          </div>
          <div className="flex flex-col justify-center">
            <span className="text-xs uppercase tracking-[0.35em] text-primary">Το Γάντι</span>
            <h2 className="mt-4 text-balance text-5xl leading-[0.9] sm:text-6xl" style={{ fontFamily: "var(--font-display)" }}>
              ΔΕΝ ΕΙΝΑΙ ΑΞΕΣΟΥΑΡ.<br />ΕΙΝΑΙ ΤΕΛΕΤΟΥΡΓΙΑ.
            </h2>
            <p className="mt-6 max-w-md text-muted-foreground leading-relaxed">
              Η στιγμή που φοράς το μαύρο γάντι είναι η στιγμή που ξεκινά η εμπειρία. Χωρίς χαρτοπετσέτες. Χωρίς δεύτερες σκέψεις.
              Μόνο εσύ και το burger, όπως πρέπει να απολαμβάνεται: με τα δύο χέρια και μέχρι την τελευταία μπουκιά.
            </p>
            <Link to="/story" className="mt-8 inline-flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-foreground hover:text-primary">
              Διάβασε την ιστορία μας <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURED BURGERS */}
      <section className="border-t border-border/60 bg-card/40">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 md:py-32">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <span className="text-xs uppercase tracking-[0.35em] text-primary">Signatures</span>
              <h2 className="mt-4 text-5xl leading-[0.9] sm:text-6xl" style={{ fontFamily: "var(--font-display)" }}>
                THE LINE-UP
              </h2>
            </div>
            <Link to="/menu" className="text-xs uppercase tracking-[0.25em] text-muted-foreground hover:text-foreground">
              Full menu →
            </Link>
          </div>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((b, i) => (
              <article key={b.name} className="group">
                <div className="relative aspect-[5/4] overflow-hidden bg-black border border-ink-line">
                  <img src={b.img} alt={b.name} loading="lazy" className="h-full w-full object-contain transition-transform duration-700 group-hover:scale-105" />
                  <span className="absolute left-4 top-4 text-xs uppercase tracking-[0.25em] text-muted-foreground">
                    0{i + 1}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="border-t border-border/60">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-5 py-20 sm:px-8 md:flex-row md:items-center">
          <h2 className="max-w-2xl text-balance text-4xl leading-[0.95] sm:text-5xl" style={{ fontFamily: "var(--font-display)" }}>
            Η επόμενη αγαπημένη σου μπουκιά σε περιμένει.
          </h2>
          <div className="flex gap-4">
            <Link to="/visit" className="border border-primary bg-primary px-7 py-4 text-xs uppercase tracking-[0.25em] text-primary-foreground hover:bg-transparent hover:text-foreground">
              Visit
            </Link>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
