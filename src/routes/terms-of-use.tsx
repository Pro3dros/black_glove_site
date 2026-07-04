import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-layout";

export const Route = createFileRoute("/terms-of-use")({
  head: () => ({
    meta: [
      { title: "Terms of Use — BLACK GLOVE" },
      { name: "description", content: "Όροι χρήσης του ιστότοπου της BLACK GLOVE ΜΟΝΟΠΡΟΣΩΠΗ Ι.Κ.Ε." },
      { property: "og:title", content: "Terms of Use — BLACK GLOVE" },
      { property: "og:description", content: "Όροι χρήσης του ιστότοπου της BLACK GLOVE." },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <SiteShell>
      <section className="border-b border-border/60">
        <div className="mx-auto max-w-4xl px-5 pb-12 pt-28 sm:px-8 sm:pt-32">
          <span className="text-xs uppercase tracking-[0.35em] text-primary">Legal</span>
          <h1 className="mt-4 text-balance text-5xl leading-[0.95] sm:text-7xl" style={{ fontFamily: "var(--font-display)" }}>
            Terms of Use
          </h1>
        </div>
      </section>

      <article className="mx-auto max-w-4xl space-y-10 px-5 py-16 sm:px-8 sm:py-20">
        <section>
          <h2 className="mb-3 text-xs uppercase tracking-[0.25em] text-muted-foreground">Ιδιοκτησία Ιστότοπου</h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Ο παρών ιστότοπος ανήκει στην εταιρεία BLACK GLOVE ΜΟΝΟΠΡΟΣΩΠΗ Ι.Κ.Ε., με έδρα Αμφείας 32, 24100 Καλαμάτα.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xs uppercase tracking-[0.25em] text-muted-foreground">Πνευματικά Δικαιώματα</h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Όλο το περιεχόμενο του ιστότοπου (κείμενα, εικόνες, λογότυπα, γραφικά, βίντεο, σχεδιασμός) αποτελεί πνευματική ιδιοκτησία της BLACK GLOVE ΜΟΝΟΠΡΟΣΩΠΗ Ι.Κ.Ε. και προστατεύεται από την ελληνική και διεθνή νομοθεσία. Απαγορεύεται η αντιγραφή, αναπαραγωγή ή χρήση χωρίς προηγούμενη γραπτή άδεια.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xs uppercase tracking-[0.25em] text-muted-foreground">Περιορισμός Ευθύνης</h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Η εταιρεία καταβάλλει κάθε προσπάθεια ώστε οι πληροφορίες του ιστότοπου να είναι ακριβείς και ενημερωμένες, χωρίς όμως να παρέχει οποιαδήποτε εγγύηση. Δεν φέρει ευθύνη για ζημίες που τυχόν προκύψουν από τη χρήση του ιστότοπου.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xs uppercase tracking-[0.25em] text-muted-foreground">Ακρίβεια Πληροφοριών</h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Τιμές, διαθεσιμότητα προϊόντων και άλλες πληροφορίες ενδέχεται να μεταβάλλονται χωρίς προειδοποίηση. Διατηρούμε το δικαίωμα διόρθωσης τυχόν λαθών ή παραλείψεων.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xs uppercase tracking-[0.25em] text-muted-foreground">Υποχρεώσεις Χρηστών</h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Οι χρήστες οφείλουν να χρησιμοποιούν τον ιστότοπο σύμφωνα με τον νόμο, τα χρηστά ήθη και τους παρόντες όρους, χωρίς να προβαίνουν σε ενέργειες που θα μπορούσαν να βλάψουν τη λειτουργία του ή τρίτους.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xs uppercase tracking-[0.25em] text-muted-foreground">Εφαρμοστέο Δίκαιο</h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Οι παρόντες όροι διέπονται από το ελληνικό δίκαιο. Αρμόδια για κάθε διαφορά ορίζονται τα Δικαστήρια Καλαμάτας.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xs uppercase tracking-[0.25em] text-muted-foreground">Επικοινωνία</h2>
          <div className="space-y-1 text-sm leading-relaxed text-foreground">
            <p>BLACK GLOVE ΜΟΝΟΠΡΟΣΩΠΗ Ι.Κ.Ε.</p>
            <p>Αμφείας 32, 24100 Καλαμάτα</p>
            <p>Τηλ: 699 833 6326 / 27214 10875</p>
          </div>
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