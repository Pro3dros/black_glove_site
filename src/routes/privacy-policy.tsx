import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-layout";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — BLACK GLOVE" },
      { name: "description", content: "Πολιτική απορρήτου της BLACK GLOVE ΜΟΝΟΠΡΟΣΩΠΗ Ι.Κ.Ε. — GDPR, δεδομένα, δικαιώματα χρηστών." },
      { property: "og:title", content: "Privacy Policy — BLACK GLOVE" },
      { property: "og:description", content: "Πολιτική απορρήτου της BLACK GLOVE ΜΟΝΟΠΡΟΣΩΠΗ Ι.Κ.Ε." },
    ],
  }),
  component: PrivacyPolicyPage,
});

function PrivacyPolicyPage() {
  return (
    <SiteShell>
      <section className="border-b border-border/60">
        <div className="mx-auto max-w-4xl px-5 pb-12 pt-28 sm:px-8 sm:pt-32">
          <span className="text-xs uppercase tracking-[0.35em] text-primary">Legal</span>
          <h1 className="mt-4 text-balance text-5xl leading-[0.95] sm:text-7xl" style={{ fontFamily: "var(--font-display)" }}>
            Privacy Policy
          </h1>
        </div>
      </section>

      <article className="mx-auto max-w-4xl space-y-10 px-5 py-16 sm:px-8 sm:py-20">
        <section>
          <h2 className="mb-3 text-xs uppercase tracking-[0.25em] text-muted-foreground">Data Controller</h2>
          <div className="space-y-1 text-sm leading-relaxed text-foreground">
            <p>BLACK GLOVE ΜΟΝΟΠΡΟΣΩΠΗ Ι.Κ.Ε.</p>
            <p>Αμφείας 32, 24100 Καλαμάτα</p>
            <p>ΑΦΜ: 803316874 — ΓΕΜΗ: 194451745000</p>
            <p>Τηλ: 699 833 6326 / 27214 10875</p>
          </div>
        </section>

        <section>
          <h2 className="mb-3 text-xs uppercase tracking-[0.25em] text-muted-foreground">Σκοπός Συλλογής Δεδομένων</h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Συλλέγουμε προσωπικά δεδομένα μόνο όταν είναι απαραίτητο για την παροχή των υπηρεσιών μας, την επικοινωνία μαζί σας και την εκτέλεση των παραγγελιών σας. Δεν πωλούμε ποτέ τα δεδομένα σας σε τρίτους.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xs uppercase tracking-[0.25em] text-muted-foreground">Φόρμες Επικοινωνίας</h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Τα στοιχεία που μας στέλνετε μέσω φόρμας επικοινωνίας (όνομα, τηλέφωνο, email, μήνυμα) χρησιμοποιούνται αποκλειστικά για να σας απαντήσουμε και διατηρούνται μόνο για όσο χρειάζεται.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xs uppercase tracking-[0.25em] text-muted-foreground">Αιτήματα Παραγγελιών</h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Για την εκτέλεση παραγγελιών συλλέγουμε όνομα, διεύθυνση παράδοσης, τηλέφωνο και λεπτομέρειες παραγγελίας. Τα δεδομένα χρησιμοποιούνται αποκλειστικά για την ολοκλήρωση της παραγγελίας.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xs uppercase tracking-[0.25em] text-muted-foreground">Επικοινωνία με Πελάτες</h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Μπορούμε να επικοινωνήσουμε μαζί σας τηλεφωνικά ή ηλεκτρονικά για θέματα που αφορούν αποκλειστικά την παραγγελία ή το αίτημά σας.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xs uppercase tracking-[0.25em] text-muted-foreground">Δικαιώματα GDPR</h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Σύμφωνα με τον Γενικό Κανονισμό Προστασίας Δεδομένων (GDPR), έχετε δικαίωμα πρόσβασης, διόρθωσης, διαγραφής, περιορισμού επεξεργασίας, φορητότητας και εναντίωσης στην επεξεργασία των δεδομένων σας. Μπορείτε να ασκήσετε τα δικαιώματά σας επικοινωνώντας μαζί μας.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xs uppercase tracking-[0.25em] text-muted-foreground">Χρόνος Διατήρησης</h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Τα δεδομένα διατηρούνται μόνο για όσο χρόνο είναι απαραίτητο για την εξυπηρέτηση του σκοπού συλλογής τους ή για όσο επιβάλλει η ισχύουσα νομοθεσία.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xs uppercase tracking-[0.25em] text-muted-foreground">Επικοινωνία</h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Για οποιοδήποτε θέμα σχετικά με τα προσωπικά σας δεδομένα: <span className="text-foreground">info@blackglove.gr</span>
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