import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-layout";

export const Route = createFileRoute("/cookie-policy")({
  head: () => ({
    meta: [
      { title: "Cookie Policy — BLACK GLOVE" },
      { name: "description", content: "Πολιτική cookies της BLACK GLOVE — αναγκαία, αναλυτικά και marketing cookies, διαχείριση συγκατάθεσης GDPR." },
      { property: "og:title", content: "Cookie Policy — BLACK GLOVE" },
      { property: "og:description", content: "Πολιτική cookies της BLACK GLOVE." },
    ],
  }),
  component: CookiePolicyPage,
});

function CookiePolicyPage() {
  return (
    <SiteShell>
      <section className="border-b border-border/60">
        <div className="mx-auto max-w-4xl px-5 pb-12 pt-28 sm:px-8 sm:pt-32">
          <span className="text-xs uppercase tracking-[0.35em] text-primary">Legal</span>
          <h1 className="mt-4 text-balance text-5xl leading-[0.95] sm:text-7xl" style={{ fontFamily: "var(--font-display)" }}>
            Cookie Policy
          </h1>
        </div>
      </section>

      <article className="mx-auto max-w-4xl space-y-10 px-5 py-16 sm:px-8 sm:py-20">
        <section>
          <h2 className="mb-3 text-xs uppercase tracking-[0.25em] text-muted-foreground">Αναγκαία Cookies</h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Είναι απαραίτητα για τη βασική λειτουργία του ιστότοπου (πλοήγηση, ασφάλεια, βασικές προτιμήσεις). Δεν μπορούν να απενεργοποιηθούν χωρίς να επηρεαστεί η εμπειρία χρήσης.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xs uppercase tracking-[0.25em] text-muted-foreground">Αναλυτικά Cookies</h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Μας βοηθούν να κατανοήσουμε πώς χρησιμοποιείται ο ιστότοπος (επισκέψεις, σελίδες, χρόνος παραμονής), ώστε να βελτιώνουμε συνεχώς την εμπειρία σας. Τα δεδομένα είναι ανωνυμοποιημένα.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xs uppercase tracking-[0.25em] text-muted-foreground">Marketing Cookies</h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Χρησιμοποιούνται για να σας εμφανίζουμε σχετικό περιεχόμενο και προωθητικές ενέργειες, εντός και εκτός του ιστότοπου. Ενεργοποιούνται μόνο με τη ρητή σας συγκατάθεση.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xs uppercase tracking-[0.25em] text-muted-foreground">Διαχείριση Συγκατάθεσης</h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Κατά την πρώτη επίσκεψή σας, μπορείτε να αποδεχτείτε ή να απορρίψετε τη χρήση μη αναγκαίων cookies. Μπορείτε να αλλάξετε την προτίμησή σας ανά πάσα στιγμή μέσω των ρυθμίσεων του browser σας.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xs uppercase tracking-[0.25em] text-muted-foreground">Διαγραφή Cookies από τον Browser</h2>
          <ul className="list-disc space-y-1 pl-5 text-sm leading-relaxed text-muted-foreground">
            <li>Chrome: Settings → Privacy and security → Cookies and other site data</li>
            <li>Safari: Preferences → Privacy → Manage Website Data</li>
            <li>Firefox: Settings → Privacy & Security → Cookies and Site Data</li>
            <li>Edge: Settings → Cookies and site permissions → Manage and delete cookies</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-3 text-xs uppercase tracking-[0.25em] text-muted-foreground">Συμμόρφωση GDPR</h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Η χρήση cookies στον ιστότοπό μας είναι πλήρως εναρμονισμένη με τον Γενικό Κανονισμό Προστασίας Δεδομένων (GDPR) και την οδηγία ePrivacy.
          </p>
        </section>

        <div className="pt-6">
          <Link to="/" className="text-xs uppercase tracking-[0.25em] text-muted-foreground transition-colors hover:text-primary">
            ← Back to Home
          </Link>
        </div>
      </article>
    </SiteShell>
  );
}