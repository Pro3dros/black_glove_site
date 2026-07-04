import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-layout";
import { useState } from "react";
import {
  Cake,
  PartyPopper,
  Heart,
  Wine,
  Home,
  Building2,
  Users,
  Rocket,
  Trophy,
  Drum,
  Flame,
  ChefHat,
  UtensilsCrossed,
  ClipboardList,
  HeadphonesIcon,
  MapPin,
  Phone,
  Send,
  CalendarDays,
  User,
  Mail,
  MessageSquare,
  MapPinned,
  UsersRound,
} from "lucide-react";
import gloves from "@/assets/gloves-v3.jpg.asset.json";
import eventStand from "@/assets/event-stand.jpg.asset.json";
import eventBooth from "@/assets/event-booth.jpg.asset.json";
import eventSliders from "@/assets/event-sliders.jpg.asset.json";
import eventParty from "@/assets/event-party.jpg.asset.json";

export const Route = createFileRoute("/events-catering")({
  head: () => ({
    meta: [
      { title: "Εκδηλώσεις & Catering — BLACK GLOVE" },
      { name: "description", content: "Premium burgers, street food experience και live cooking για ιδιωτικές και εταιρικές εκδηλώσεις σε Καλαμάτα και Μεσσηνία." },
      { property: "og:title", content: "Εκδηλώσεις & Catering — BLACK GLOVE" },
      { property: "og:description", content: "Premium burgers, street food experience και live cooking για ιδιωτικές και εταιρικές εκδηλώσεις." },
      { property: "og:url", content: "https://black-glove-forge.lovable.app/events-catering" },
    ],
    links: [
      { rel: "canonical", href: "https://black-glove-forge.lovable.app/events-catering" },
    ],
  }),
  component: EventsCateringPage,
});

function EventsCateringPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    eventDate: "",
    guests: "",
    location: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <SiteShell>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border/60">
        <div className="absolute inset-0">
          <img
            src={gloves.url}
            alt="BLACK GLOVE events"
            loading="eager"
            className="h-full w-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        </div>
        <div className="relative mx-auto max-w-7xl px-5 pb-20 pt-28 sm:px-8 sm:pb-24 sm:pt-32">
          <span className="text-xs uppercase tracking-[0.35em] text-primary">
            Εκδηλώσεις & Catering
          </span>
          <h1
            className="mt-4 max-w-4xl text-balance text-6xl leading-[0.9] sm:text-8xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            HANDS CLEAN.
            <br />
            SOUL DIRTY.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Μια ολοκληρωμένη street food εμπειρία με φρεσκοψημένα burgers, live
            cooking και επαγγελματική εξυπηρέτηση για κάθε εκδήλωση.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#quote"
              className="inline-flex items-center justify-center border border-primary bg-primary px-8 py-3.5 text-sm font-semibold uppercase tracking-[0.2em] text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Ζητήστε Προσφορά
            </a>
            <a
              href="tel:6998336326"
              className="inline-flex items-center justify-center gap-2 border border-border/60 bg-card px-8 py-3.5 text-sm font-semibold uppercase tracking-[0.2em] text-foreground transition-colors hover:border-primary/60 hover:text-primary whitespace-pre-line text-center"
            >
              <Phone size={16} className="shrink-0" />
              {"699 833 6326\n 27214 10875"}
            </a>
          </div>
        </div>
      </section>

      {/* PRIVATE EVENTS */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
        <div className="flex items-center gap-4">
          <span className="text-xs uppercase tracking-[0.35em] text-primary">
            01
          </span>
          <h2
            className="text-4xl sm:text-5xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            ΙΔΙΩΤΙΚΕΣ ΕΚΔΗΛΩΣΕΙΣ
          </h2>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { icon: Cake, label: "Γενέθλια" },
            { icon: PartyPopper, label: "Βαπτίσεις" },
            { icon: Heart, label: "Γάμοι" },
            { icon: Wine, label: "Bachelor parties" },
            { icon: Home, label: "House parties" },
          ].map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-4 border border-border/60 bg-card/30 p-6 transition-colors hover:border-primary/40"
            >
              <item.icon size={22} className="shrink-0 text-primary" />
              <span className="text-sm font-medium uppercase tracking-[0.15em] text-foreground">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* CORPORATE EVENTS */}
      <section className="border-t border-border/60 bg-card/30">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
          <div className="flex items-center gap-4">
            <span className="text-xs uppercase tracking-[0.35em] text-primary">
              02
            </span>
            <h2
              className="text-4xl sm:text-5xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
            ΕΤΑΙΡΙΚΕΣ ΕΚΔΗΛΩΣΕΙΣ
            </h2>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: Building2, label: "Εταιρικές συγκεντρώσεις" },
              { icon: Users, label: "Team building" },
              { icon: Rocket, label: "Product launches" },
              { icon: Drum, label: "Φεστιβάλ" },
              { icon: Trophy, label: "Αθλητικές εκδηλώσεις" },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-4 border border-border/60 bg-background p-6 transition-colors hover:border-primary/40"
              >
                <item.icon size={22} className="shrink-0 text-primary" />
                <span className="text-sm font-medium uppercase tracking-[0.15em] text-foreground">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE OFFER */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
        <div className="flex items-center gap-4">
          <span className="text-xs uppercase tracking-[0.35em] text-primary">
            03
          </span>
          <h2
            className="text-4xl sm:text-5xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            ΤΙ ΠΡΟΣΦΕΡΟΥΜΕ
          </h2>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: Flame,
              title: "ΦΡΕΣΚΑ BURGERS",
              desc: "Φτιαγμένα στο χέρι, ψημένα σε μαντεμένια πλάκα, σερβίρονται ζεστά στην εκδήλωσή σας.",
            },
            {
              icon: ChefHat,
              title: "Live burger station",
              desc: "Οι chefs μας μαγειρεύουν μπροστά στους καλεσμένους σας για ένα ολοκληρωμένο show.",
            },
            {
              icon: UtensilsCrossed,
              title: "Street food setup",
              desc: "Industrial, minimal στήσιμο που ταιριάζει σε κάθε χώρο.",
            },
            {
              icon: ClipboardList,
              title: "Ευέλικτα μενού",
              desc: "Από κλασικά smash μέχρι loaded specials — προσαρμοσμένα στο κοινό σας.",
            },
            {
              icon: HeadphonesIcon,
              title: "Επαγγελματική εξυπηρέτηση",
              desc: "Έμπειρη ομάδα, καθαρό στήσιμο, γρήγορο σέρβις, μηδέν άγχος.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="group border border-border/60 bg-card/30 p-8 transition-all hover:border-primary/40"
            >
              <item.icon
                size={28}
                className="text-primary transition-transform group-hover:scale-110"
              />
              <h3 className="mt-5 text-lg font-semibold uppercase tracking-[0.15em] text-foreground">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FOOD PHOTOGRAPHY */}
      <section className="border-t border-border/60">
        <div className="mx-auto grid max-w-7xl grid-cols-2 grid-rows-2 gap-1 sm:grid-cols-4 sm:grid-rows-2 sm:[grid-template-areas:'a_a_b_c''a_a_d_c']">
          <div className="relative aspect-square overflow-hidden sm:aspect-auto sm:[grid-area:a]">
            <img
              src={eventParty.url}
              alt="Black Glove party sliders platter"
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
          <div className="relative aspect-square overflow-hidden sm:aspect-auto sm:[grid-area:b]">
            <img
              src={eventStand.url}
              alt="Black Glove street food stand at festival"
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
          <div className="relative aspect-square overflow-hidden sm:aspect-auto sm:[grid-area:c]">
            <img
              src={eventSliders.url}
              alt="Fresh mini burger buns ready for catering"
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
          <div className="relative aspect-square overflow-hidden sm:aspect-auto sm:[grid-area:d]">
            <img
              src={eventBooth.url}
              alt="Black Glove event booth with branded banners"
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* EVENT COVERAGE AREA */}
      <section className="border-t border-border/60 bg-card/30">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
          <div className="flex items-center gap-4">
            <span className="text-xs uppercase tracking-[0.35em] text-primary">
              04
            </span>
            <h2
              className="text-4xl sm:text-5xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
            ΠΕΡΙΟΧΗ ΚΑΛΥΨΗΣ
            </h2>
          </div>
          <div className="mt-10 flex items-start gap-4">
            <MapPin size={22} className="mt-1 shrink-0 text-primary" />
            <div>
              <p className="text-lg text-foreground">
                Με έδρα την Καλαμάτα και κάλυψη σε όλη τη Μεσσηνία.
              </p>
              <p className="mt-2 text-muted-foreground">
                Για μεγαλύτερες εκδηλώσεις μπορούμε να καλύψουμε και άλλες περιοχές.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section id="quote" className="border-t border-border/60">
        <div className="mx-auto grid max-w-7xl gap-16 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-[1fr_1.2fr]">
          {/* left info */}
          <div>
            <span className="text-xs uppercase tracking-[0.35em] text-primary">
              05
            </span>
            <h2
              className="mt-4 text-4xl sm:text-5xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
            ΕΠΙΚΟΙΝΩΝΙΑ ΓΙΑ ΠΡΟΣΦΟΡΑ
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Πείτε μας για την εκδήλωσή σας και θα σας στείλουμε προσωποποιημένη
              προσφορά εντός 24 ωρών.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <Phone size={18} className="text-primary" />
              <a
                href="tel:6998336326"
                className="text-lg text-foreground transition-colors hover:text-primary whitespace-pre-line"
              >
                {"699 833 6326\n 27214 10875"}
              </a>
            </div>
          </div>

          {/* right form */}
          <div>
            {submitted ? (
              <div className="flex flex-col items-center justify-center border border-border/60 bg-card/30 py-16 text-center">
                <Send size={32} className="text-primary" />
                <h3 className="mt-4 text-xl font-semibold text-foreground">
                  Το αίτημα στάλθηκε
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Θα επικοινωνήσουμε σύντομα μαζί σας με προσωποποιημένη προσφορά.
                </p>
                <Link
                  to="/"
                  className="mt-6 text-xs uppercase tracking-[0.25em] text-primary transition-colors hover:text-primary/80"
                >
                  Επιστροφή στην Αρχική
                </Link>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-5 border border-border/60 bg-card/30 p-6 sm:p-10"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                      <User size={14} /> Ονοματεπώνυμο
                    </label>
                    <input
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      className="w-full border-b border-border/60 bg-transparent py-2 text-sm text-foreground outline-none transition-colors focus:border-primary"
                      placeholder="Το όνομά σας"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                      <Phone size={14} /> Τηλέφωνο
                    </label>
                    <input
                      name="phone"
                      type="tel"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      className="w-full border-b border-border/60 bg-transparent py-2 text-sm text-foreground outline-none transition-colors focus:border-primary"
                      placeholder="Αριθμός τηλεφώνου"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                      <Mail size={14} /> Email
                    </label>
                    <input
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      className="w-full border-b border-border/60 bg-transparent py-2 text-sm text-foreground outline-none transition-colors focus:border-primary"
                      placeholder="Διεύθυνση email"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                      <CalendarDays size={14} /> Ημερομηνία Εκδήλωσης
                    </label>
                    <input
                      name="eventDate"
                      type="date"
                      required
                      value={form.eventDate}
                      onChange={handleChange}
                      className="w-full border-b border-border/60 bg-transparent py-2 text-sm text-foreground outline-none transition-colors focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                      <UsersRound size={14} /> Αριθμός Καλεσμένων
                    </label>
                    <input
                      name="guests"
                      type="number"
                      min={1}
                      required
                      value={form.guests}
                      onChange={handleChange}
                      className="w-full border-b border-border/60 bg-transparent py-2 text-sm text-foreground outline-none transition-colors focus:border-primary"
                      placeholder="Κατά προσέγγιση"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                      <MapPinned size={14} /> Τοποθεσία
                    </label>
                    <input
                      name="location"
                      type="text"
                      required
                      value={form.location}
                      onChange={handleChange}
                      className="w-full border-b border-border/60 bg-transparent py-2 text-sm text-foreground outline-none transition-colors focus:border-primary"
                      placeholder="Πόλη / Χώρος"
                    />
                  </div>
                </div>
                <div className="space-y-2 pt-2">
                  <label className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    <MessageSquare size={14} /> Μήνυμα
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    className="w-full resize-none border-b border-border/60 bg-transparent py-2 text-sm text-foreground outline-none transition-colors focus:border-primary"
                    placeholder="Πείτε μας για την εκδήλωσή σας..."
                  />
                </div>
                <button
                  type="submit"
                  className="mt-4 inline-flex w-full items-center justify-center gap-2 border border-primary bg-primary px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary-foreground transition-colors hover:bg-primary/90 sm:w-auto"
                >
                  <Send size={16} />
                  Ζητήστε Προσφορά
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
