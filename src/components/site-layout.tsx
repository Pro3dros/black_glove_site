import { Link } from "@tanstack/react-router";
import { useState, useEffect, useRef, type ReactNode, createContext, useContext } from "react";
import { Instagram, Facebook, Phone, X, ChevronUp, ExternalLink } from "lucide-react";
import brandHeader from "@/assets/brand-header.png.asset.json";
import woltAsset from "@/assets/wolt.png.asset.json";
import efoodAsset from "@/assets/efood.png.asset.json";
import boxAsset from "@/assets/box.png.asset.json";

interface OrderPopupContextType {
  open: boolean;
  setOpen: (v: boolean) => void;
}

const OrderPopupContext = createContext<OrderPopupContextType>({ open: false, setOpen: () => {} });

const nav = [
  { to: "/", label: "HOME" },
  { to: "/menu", label: "MENU" },
  { to: "/story", label: "STORY" },
  { to: "/events-catering", label: "EVENTS & CATERING" },
  { to: "/visit", label: "VISIT" },
] as const;

const orderOptions = [
  {
    label: "ΚΑΛΕΣΕ ΤΩΡΑ",
    sublabel: "699 833 6326\n27214 10875",
    href: "tel:6998336326",
    accent: "#C1121F",
    icon: "phone" as const,
    discount: "-10%",
  },
  {
    label: "Wolt",
    href: "https://wolt.com/el/grc/kalamata/restaurant/black-glove-street-food",
    accent: "#009DE0",
    logo: woltAsset.url,
  },
  {
    label: "efood",
    href: "https://www.e-food.gr/delivery/kalamata/black-glove-streat-food",
    accent: "#E21B22",
    logo: efoodAsset.url,
  },
  {
    label: "BOX",
    href: "https://box.gr/delivery/kalamata/black-glove-street-food",
    accent: "#FF6A13",
    logo: boxAsset.url,
  },
];

function Logo() {
  return (
    <Link to="/" className="flex items-center" aria-label="BLACK GLOVE home">
      <img
        src={brandHeader.url}
        alt="BLACK GLOVE — Street Food Burgers"
        className="h-16 w-auto object-contain sm:h-20"
      />
    </Link>
  );
}

export function SiteHeader() {
  return (
    <>
      {/* TOP BRANDING SECTION */}
      <header className="relative h-[90px] overflow-hidden bg-background sm:h-[100px]">
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span
            className="text-[28px] tracking-[0.08em] text-foreground sm:text-[40px]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            BLACK GLOVE
          </span>
          <span className="mt-0.5 text-[9px] uppercase tracking-[0.5em] text-muted-foreground sm:text-[11px] sm:tracking-[0.55em]">
            STR.EAT FOOD
          </span>
          <span className="mt-0.5 text-[9px] tracking-[0.15em] text-primary/80 sm:text-[11px]">
            ...με το γάντι!
          </span>
        </div>
      </header>

      {/* BOTTOM NAVIGATION */}
      <nav className="sticky top-0 z-50 border-y border-border/60 bg-background">
        <div className="mx-auto flex h-11 max-w-7xl items-center justify-center gap-8 px-4 sm:h-12 sm:gap-12 md:gap-16">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-[10px] uppercase tracking-[0.25em] text-foreground transition-colors duration-200 hover:text-primary sm:text-xs sm:tracking-[0.3em]"
              activeProps={{
                className:
                  "text-[10px] uppercase tracking-[0.25em] text-primary sm:text-xs sm:tracking-[0.3em]",
              }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
          <Link
            to="/order-now"
            className="text-[10px] font-bold uppercase tracking-[0.25em] text-primary transition-colors duration-200 hover:text-primary/80 sm:text-xs sm:tracking-[0.3em]"
            activeProps={{
              className:
                "text-[10px] font-bold uppercase tracking-[0.25em] text-primary sm:text-xs sm:tracking-[0.3em]",
            }}
          >
            ORDER
          </Link>
        </div>
      </nav>
    </>
  );
}

export function FloatingOrderButton() {
  const { open, setOpen } = useContext(OrderPopupContext);
  const [isAtTop, setIsAtTop] = useState(true);
  const [closing, setClosing] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleScroll() {
      setIsAtTop(window.scrollY < 60);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (popupRef.current && !popupRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    if (open) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open, setOpen]);

  // Auto fade-out after 3s
  useEffect(() => {
    if (!open) {
      setClosing(false);
      return;
    }
    setClosing(false);
    const fadeTimer = setTimeout(() => setClosing(true), 2700);
    const closeTimer = setTimeout(() => setOpen(false), 3000);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(closeTimer);
    };
  }, [open, setOpen]);

  return (
    <div ref={popupRef} className="fixed bottom-6 right-6 z-[100] flex flex-col items-end gap-3 sm:bottom-8 sm:right-8">
      {/* Popup options */}
      {open && (
        <div className={`flex flex-col gap-2 ${closing ? "animate-fade-out" : "animate-fade-in"}`}>
          {orderOptions.map((opt) => (
            <a
              key={opt.label}
              href={opt.href}
              target={opt.href.startsWith("tel:") ? undefined : "_blank"}
              rel={opt.href.startsWith("tel:") ? undefined : "noopener noreferrer"}
              className="group flex items-center gap-3 rounded-none border border-border/60 bg-card px-4 py-3 shadow-[0_8px_30px_-8px_rgba(0,0,0,0.5)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_-8px_rgba(0,0,0,0.6)]"
              style={{ borderLeft: `3px solid ${opt.accent}` }}
              onClick={() => setOpen(false)}
            >
              {opt.icon === "phone" ? (
                <div className="relative">
                  <Phone size={18} style={{ color: opt.accent }} />
                  {opt.discount && (
                    <span className="absolute -right-3 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-[#C1121F] text-[8px] font-bold text-white">
                      -
                    </span>
                  )}
                </div>
              ) : opt.logo ? (
                <img src={opt.logo} alt={opt.label} className="h-5 w-auto object-contain" loading="lazy" />
              ) : null}
              <div className="flex flex-col">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-foreground">
                  {opt.label}
                </span>
                {opt.sublabel && (
                  <span className="whitespace-pre-line text-xs text-muted-foreground">{opt.sublabel}</span>
                )}
                {opt.discount && (
                  <span className="text-[10px] font-bold text-[#C1121F]">{opt.discount} ΤΗΛΕΦΩΝΙΚΗ ΠΑΡΑΓΓΕΛΙΑ</span>
                )}
              </div>
              {!opt.href.startsWith("tel:") && (
                <ExternalLink size={12} className="ml-2 text-muted-foreground opacity-60" />
              )}
            </a>
          ))}
        </div>
      )}

      {/* Main toggle button */}
      <button
        onClick={() => setOpen(!open)}
        className={`flex h-16 w-16 items-center justify-center rounded-full bg-[#C1121F] text-primary-foreground shadow-[0_4px_20px_-4px_rgba(193,18,31,0.5)] transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_30px_-4px_rgba(193,18,31,0.7)] active:scale-95 sm:h-[72px] sm:w-[72px] ${isAtTop ? "pulse" : ""}`}
        aria-label={open ? "Κλείσε επιλογές παραγγελίας" : "Άνοιξε επιλογές παραγγελίας"}
      >
        {open ? (
          <X size={26} strokeWidth={2} />
        ) : (
          <span
            className="text-sm font-bold uppercase tracking-wider sm:text-base"
            style={{ fontFamily: "var(--font-display)" }}
          >
            ORDER
          </span>
        )}
      </button>
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <Logo />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Premium street food. Served with the glove.
          </p>
        </div>
        <div>
          <h4 className="mb-4 text-xs uppercase tracking-[0.25em] text-muted-foreground">Visit</h4>
          <p className="text-sm leading-relaxed text-foreground">
            Καλαμάτα<br />Αμφείας 32, 24100
          </p>
          <p className="mt-3 whitespace-pre-line text-sm text-muted-foreground">
            Ιστορικό κέντρο Καλαμάτας{"\n"}@ info@blackglove.gr
          </p>
        </div>
        <div>
          <h4 className="mb-4 text-xs uppercase tracking-[0.25em] text-muted-foreground">Follow</h4>
          <div className="flex flex-col gap-2">
            <a href="https://www.instagram.com/blackglove_kalamata/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-foreground transition-colors hover:text-primary">
              <Instagram size={16} /> @blackglove_kalamata
            </a>
            <a href="https://www.facebook.com/BLACKGLOVEKALAMATA" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-foreground transition-colors hover:text-primary">
              <Facebook size={16} /> BLACKGLOVEKALAMATA
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="mx-auto max-w-7xl px-5 py-6 sm:px-8">
          <nav aria-label="Legal" className="flex flex-col items-center gap-3 text-center sm:flex-row sm:justify-center sm:gap-10">
            {[
              { to: "/privacy-policy", label: "Privacy Policy" },
              { to: "/cookie-policy", label: "Cookie Policy" },
              { to: "/terms-of-use", label: "Terms of Use" },
              { to: "/corporate-information", label: "ETAΙΡΙΚΑ ΣΤΟΙΧΕΙΑ" },
            ].map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="text-xs uppercase tracking-[0.25em] text-muted-foreground transition-colors hover:text-primary"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-2 px-5 py-6 text-xs uppercase tracking-[0.2em] text-muted-foreground sm:flex-row sm:items-center sm:px-8">
          <span className="whitespace-pre-line">© {new Date().getFullYear()} BLACK GLOVE ΜΟΝΟΠΡΟΣΩΠΗ ΙΚΕ.{"\n"}ALL RIGHTS RESERVED{"\n"}ΓΕΜΗ 194451745000{"\n"}ΑΦΜ. 803316874 / ΔΟΥ ΚΑΛΑΜΑΤΑΣ{"\n\n"}</span>
          <span>Hands clean. Soul dirty.</span>
        </div>
      </div>
    </footer>
  );
}

export function SiteShell({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <OrderPopupContext.Provider value={{ open, setOpen }}>
      <div className="flex min-h-screen flex-col bg-background text-foreground">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <FloatingOrderButton />
      </div>
    </OrderPopupContext.Provider>
  );
}
