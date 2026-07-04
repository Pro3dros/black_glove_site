import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-layout";
import gloves from "@/assets/gloves-v3.jpg.asset.json";
import interior from "@/assets/interior-new.jpg.asset.json";

export const Route = createFileRoute("/story")({
  head: () => ({
    meta: [
      { title: "Η Ιστορία μας — BLACK GLOVE" },
      { name: "description", content: "Γιατί κάθε burger του BLACK GLOVE σερβίρεται με το μαύρο γάντι. Το τελετουργικό, η τέχνη, το burger." },
      { property: "og:title", content: "Η Ιστορία μας — BLACK GLOVE" },
      { property: "og:description", content: "Γιατί κάθε burger σερβίρεται με το μαύρο γάντι." },
      { property: "og:image", content: gloves.url },
    ],
  }),
  component: StoryPage,
});

function StoryPage() {
  return (
    <SiteShell>
      <section className="border-b border-border/60">
        <div className="mx-auto max-w-7xl px-5 pb-16 pt-28 sm:px-8 sm:pt-32">
          <span className="text-xs uppercase tracking-[0.35em] text-primary">Η Ιστορία μας</span>
          <h1 className="mt-4 max-w-4xl text-balance text-6xl leading-[0.9] sm:text-8xl" style={{ fontFamily: "var(--font-display)" }}>
            Έλα πεινασμένος.<br />Φύγε ευτυχισμένος.
          </h1>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-16 px-5 py-24 sm:px-8 md:grid-cols-[1fr_1.3fr]">
        <img src={gloves.url} alt="Black gloves" loading="lazy" width={1600} height={1200} className="aspect-[4/5] w-full object-cover" />
        <div className="space-y-8 text-lg leading-relaxed text-muted-foreground">
          <p>
            Το <span className="text-foreground">BLACK GLOVE</span> ξεκίνησε με ένα μαντεμένιο τηγάνι,
            ένα smash press και την ιδέα ότι ένα σπουδαίο burger δεν χρειάζεται δώδεκα υλικά —
            χρειάζεται σεβασμό.
          </p>
          <p>
            Το γάντι ήρθε από την κουζίνα. Οι μάγειρες που δουλεύουν το κρέας όλη μέρα δεν ήθελαν
            να χαλάσουν την τέχνη τους στο σερβίρισμα. Έτσι βάλαμε το γάντι στη σακούλα. Με κάθε burger.
            Κάθε φορά.
          </p>
          <p>
            Άλλαξε τον τρόπο που τρώμε. Όχι μισές μπουκιές. Όχι χορογραφία με χαρτοπετσέτες.
            Μόνο μια στιγμή — φοράς το γάντι, σηκώνεις με τα δύο χέρια, γεύεσαι ό,τι βάλαμε μέσα.
          </p>
        </div>
      </section>

      <section className="border-t border-border/60 bg-card/40">
        <div className="mx-auto grid max-w-7xl gap-16 px-5 py-24 sm:px-8 md:grid-cols-3">
          {[
            { n: "01", t: "100% Μοσχαρίσιο", d: "Αυθεντική γεύση, επιλεγμένες πρώτες ύλες και burgers που ξεχωρίζουν." },
            { n: "02", t: "Smash στο μαντέμι", d: "Δυνατό σοτάρισμα, τραγανές άκρες, χωρίς συμβιβασμούς." },
            { n: "03", t: "Χειροποίητο ψωμί", d: "Φτιαγμένο για να κρατά τη γεύση εκεί που ανήκει: σε κάθε μπουκιά." },
          ].map((c) => (
            <div key={c.n}>
              <span className="text-xs uppercase tracking-[0.35em] text-primary">{c.n}</span>
              <h3 className="mt-3 text-3xl" style={{ fontFamily: "var(--font-display)" }}>{c.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative h-[60vh] overflow-hidden">
        <img src={interior.url} alt="Black Glove interior" loading="lazy" width={1600} height={1000} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 mx-auto max-w-7xl px-5 pb-12 sm:px-8">
          <p className="max-w-xl text-balance text-2xl leading-snug text-foreground sm:text-3xl" style={{ fontFamily: "var(--font-display)" }}>
            &laquo;Δεν φτιάξαμε εστιατόριο. Φτιάξαμε ένα τελετουργικό.&raquo;
          </p>
          <p className="mt-3 text-xs uppercase tracking-[0.25em] text-muted-foreground">— Οι ιδρυτές, Black Glove</p>
        </div>
      </section>
    </SiteShell>
  );
}