import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-layout";

export const Route = createFileRoute("/corporate-information")({
  head: () => ({
    meta: [
      { title: "Εταιρικά Στοιχεία — BLACK GLOVE" },
      { name: "description", content: "Εταιρικά στοιχεία BLACK GLOVE ΜΟΝΟΠΡΟΣΩΠΗ Ι.Κ.Ε. — ΑΦΜ, ΓΕΜΗ, έδρα, διαχείριση." },
      { property: "og:title", content: "Εταιρικά Στοιχεία — BLACK GLOVE" },
      { property: "og:description", content: "Επίσημα εταιρικά στοιχεία της BLACK GLOVE ΜΟΝΟΠΡΟΣΩΠΗ Ι.Κ.Ε." },
    ],
  }),
  component: CorporatePage,
});

const rows: { label: string; value: string }[] = [
  { label: "Επωνυμία", value: "BLACK GLOVE ΜΟΝΟΠΡΟΣΩΠΗ Ι.Κ.Ε." },
  { label: "Νομική Μορφή", value: "Ιδιωτική Κεφαλαιουχική Εταιρεία Ενός Εταίρου (Ι.Κ.Ε.)" },
  { label: "ΑΦΜ", value: "803316874" },
  { label: "Αριθμός ΓΕΜΗ", value: "194451745000" },
  { label: "ΔΟΥ", value: "ΔΟΥ Καλαμάτας" },
  { label: "Έδρα", value: "Αμφείας 32, 24100 Καλαμάτα" },
  { label: "Τηλέφωνο", value: "699 833 6326 / 27214 10875" },
  { label: "Ημερομηνία Ίδρυσης", value: "12/06/2026" },
  { label: "Μετοχικό Κεφάλαιο", value: "€10,000" },
  { label: "Διαχειρίστρια", value: "ΜΑΡΙΑ ΗΛΙΑΝΑ ΓΕΩΡΓΙΑΔΗ" },
  { label: "Δραστηριότητα", value: "Υπηρεσίες εστιατορίων, υπηρεσίες παροχής γευμάτων και προετοιμασίας τροφίμων." },
];

function CorporatePage() {
  return (
    <SiteShell>
      <section className="border-b border-border/60">
        <div className="mx-auto max-w-4xl px-5 pb-12 pt-28 sm:px-8 sm:pt-32">
          <span className="text-xs uppercase tracking-[0.35em] text-primary">Νομικά</span>
          <h1 className="mt-4 text-balance text-5xl leading-[0.95] sm:text-7xl" style={{ fontFamily: "var(--font-display)" }}>
            ΕΤΑΙΡΙΚΑ ΣΤΟΙΧΕΙΑ
          </h1>
        </div>
      </section>

      <article className="mx-auto max-w-4xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="overflow-hidden rounded-2xl border border-border/60 bg-card/40">
          <dl className="divide-y divide-border/60">
            {rows.map((r) => (
              <div key={r.label} className="grid gap-1 px-6 py-5 sm:grid-cols-[1fr_2fr] sm:gap-6">
                <dt className="text-xs uppercase tracking-[0.25em] text-muted-foreground">{r.label}</dt>
                <dd className="text-sm leading-relaxed text-foreground">{r.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="pt-10">
          <Link to="/" className="text-xs uppercase tracking-[0.25em] text-muted-foreground transition-colors hover:text-primary">
            ← Επιστροφή στην Αρχική
          </Link>
        </div>
      </article>
    </SiteShell>
  );
}