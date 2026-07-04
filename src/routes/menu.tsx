import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-layout";
import imgCheese from "@/assets/items/classic.jpg";
import imgBacon from "@/assets/items/bacon.jpg";
import imgClassic from "@/assets/items/classic.jpg";
import imgBbq from "@/assets/items/bbq.jpg";
import imgJack from "@/assets/items/jack.jpg";
import imgChiliBurger from "@/assets/items/chili.jpg";
import imgDouble from "@/assets/items/double.jpg";
import imgMiniBacon from "@/assets/items/mini-bacon.jpg";
import imgChickenBoom from "@/assets/items/chicken-boom.jpg";
import imgFriedChicken from "@/assets/items/fried-chicken.jpg";
import imgChickenColeslaw from "@/assets/items/chicken-coleslaw.jpg";
import imgVeggie from "@/assets/items/veggie.jpg";
import imgXxxl from "@/assets/items/xxxl.jpg";
import imgAttack from "@/assets/items/attack.jpg";
import imgVariety from "@/assets/items/variety.jpg";
import imgRocky from "@/assets/items/rocky.jpg";
import imgCheddarFilled from "@/assets/items/cheddar-filled.jpg";
import imgKantinas from "@/assets/items/kantinas.jpg";
import imgVromiko from "@/assets/items/vromiko.jpg";
import imgClubHam from "@/assets/items/club-ham.jpg";
import imgClubTurkey from "@/assets/items/club-turkey.jpg";
import imgClubChicken from "@/assets/items/club-chicken.jpg";
import imgClubCrispy from "@/assets/items/club-crispy.jpg";
import imgClubBeef from "@/assets/items/club-beef.jpg";
import imgHotdogClassic from "@/assets/items/hotdog-classic.jpg";
import imgHotdogXl from "@/assets/items/hotdog-xl.jpg";
import imgHotdogChicken from "@/assets/items/hotdog-chicken.jpg";
import imgSaladCaesar from "@/assets/items/salad-caesar.jpg";
import imgSaladColeslaw from "@/assets/items/salad-coleslaw.jpg";
import imgChickenStrips from "@/assets/items/chicken-strips.jpg";
import imgWings from "@/assets/items/wings.jpg";
import imgOnionRings from "@/assets/items/onionrings.jpg";
import imgFries from "@/assets/items/fries.jpg";
import imgFriesCountry from "@/assets/items/fries-country.jpg";
import imgFriesCheddar from "@/assets/items/fries-cheddar.jpg";
import imgFriesCheddarBacon from "@/assets/items/fries-cheddar-bacon.jpg";
import imgKidsBurger from "@/assets/items/kids-burger.jpg";
import imgKidsChicken from "@/assets/items/kids-chicken.jpg";
import imgSoda from "@/assets/items/soda.jpg";
import imgBeer from "@/assets/items/beer.jpg";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Κατάλογος — BLACK GLOVE" },
      { name: "description", content: "Burgers, club sandwiches, hot dog, σαλάτες, πατάτες, kids menu και αναψυκτικά." },
      { property: "og:title", content: "Κατάλογος — BLACK GLOVE" },
      { property: "og:description", content: "Όλο το μενού του BLACK GLOVE street food." },
    ],
  }),
  component: MenuPage,
});

type Item = { name: string; desc?: string; price: string; img?: string };

const burgers: Item[] = [
  { name: "CHEESE", desc: "Μπιφτέκι, cheddar, κέτσαπ, burger sauce.", price: "4,50€ / 6,50€", img: imgCheese },
  { name: "BACON", desc: "Μπιφτέκι, cheddar, bacon, κέτσαπ, burger sauce.", price: "5,00€ / 7,00€", img: imgBacon },
  { name: "ΚΛΑΣΙΚΟ ΜΕ ΤΥΡΙ", desc: "Μπιφτέκι, cheddar, bacon, iceberg, ντομάτα, καραμελωμένο κρεμμύδι, burger sauce, μουστάρδα.", price: "5,50€ / 7,50€", img: imgClassic },
  { name: "BBQ", desc: "Μπιφτέκι, cheddar, bacon, iceberg, ντομάτα, καραμελωμένο κρεμμύδι, BBQ sauce, τηγανητό αυγό.", price: "6,00€ / 8,00€", img: imgBbq },
  { name: "JACK", desc: "Μπιφτέκι, cheddar, bacon, iceberg, ντομάτα, τηγανητό κρεμμύδι, μαγιονέζα, Jack Daniels sauce.", price: "6,50€ / 8,50€", img: imgJack },
  { name: "CHILI", desc: "Μπιφτέκι, cheddar, bacon, ντομάτα, τηγανητό κρεμμύδι, BBQ sauce, chili mayo sauce.", price: "6,50€ / 8,50€", img: imgChiliBurger },
  { name: "DOUBLE", desc: "Διπλό μπιφτέκι, διπλό cheddar, διπλό bacon, καραμελωμένο κρεμμύδι, burger sauce, κέτσαπ.", price: "7,50€ / 10,00€", img: imgDouble },
  { name: "MINI BACON (3τμχ.)", desc: "Μπιφτέκι, cheddar, bacon, burger sauce, κέτσαπ.", price: "8,00€", img: imgMiniBacon },
  { name: "CHICKEN BOOM", desc: "Κοτόπουλο πανέ, παρμεζάνα, ντομάτα, μαγιονέζα, σως μουστάρδας.", price: "6,00€ / 8,00€", img: imgChickenBoom },
  { name: "ΠΑΝΑΡΙΣΜΕΝΟ ΤΗΓΑΝΗΤΟ ΚΟΤΟΠΟΥΛΟ", desc: "Τηγανητό κοτόπουλο, bacon, iceberg, ντομάτα, τηγανητό αυγό, sauce tartar.", price: "6,00€ / 8,00€", img: imgFriedChicken },
  { name: "CHICKEN COLESLAW", desc: "Κοτόπουλο πανέ, cheddar, ντομάτα, σαλάτα coleslaw, μουστάρδα.", price: "5,50€ / 7,50€", img: imgChickenColeslaw },
  { name: "MINI BURGER ΚΟΤΟΠΟΥΛΟ (3τμχ.)", desc: "Κοτόπουλο πανέ, καραμελωμένο κρεμμύδι, σως μουστάρδας.", price: "8,00€", img: imgMiniBacon },
  { name: "ΧΟΡΤΟΦΑΓΙΚΟ", desc: "BBQ sauce, iceberg, μπιφτέκι λαχανικών, cheddar sauce, ντομάτα, καραμελωμένο κρεμμύδι.", price: "7,50€", img: imgVeggie },
];

const special: Item[] = [
  { name: "XXXL", desc: "Μπιφτέκι μοσχαρίσιο 1kg, cheddar sauce, bacon, τηγανητό κρεμμύδι, iceberg, ντομάτα, BBQ sauce, κέτσαπ.", price: "40,00€", img: imgXxxl },
  { name: "ATTACK (2 BURGERS)", desc: "Μπιφτέκι μοσχαρίσιο 220gr, cheddar, bacon, καραμελωμένο κρεμμύδι, iceberg, burger sauce, κέτσαπ + κοτόπουλο πανέ, παρμεζάνα, ντομάτα, μαγιονέζα, σως μουστάρδας. Συνοδεύεται από πατάτες cheddar - bacon.", price: "20,00€", img: imgAttack },
  { name: "ΠΟΙΚΙΛΙΑ BURGER (5 BURGERS 100gr)", desc: "1 Bacon, 1 Chicken Boom, 1 Chicken Coleslaw, 1 BBQ, 1 Chili. Συνοδεύεται από πατάτες, burger sauce, cheddar sauce.", price: "30,00€", img: imgVariety },
  { name: "ROCKY BALBOA (1.5 BURGER)", desc: "Μπιφτέκι μοσχαρίσιο 220gr, cheddar sauce, bacon, iceberg, ντομάτα, τηγανητό κρεμμύδι, cheese sauce, λουκάνικο χωριάτικο, cheddar sauce, bacon, BBQ sauce, τηγανητό αυγό.", price: "15,00€", img: imgRocky },
  { name: "ΓΕΜΙΣΤΟ CHEDDAR", desc: "Μπιφτέκι μοσχαρίσιο 220gr γεμιστό με cheddar sauce, διπλό bacon, iceberg, ντομάτα, τηγανητό κρεμμύδι, cheese sauce, κέτσαπ.", price: "10,00€", img: imgCheddarFilled },
];

const sandwiches: Item[] = [
  { name: "ΤΗΣ ΚΑΝΤΙΝΑΣ", desc: "Κρέας επιλογής (μπιφτέκι, πανσέτα, φιλέτο κοτόπουλο, λουκάνικο χωριάτικο), λευκό ψωμί, edam, νάριζα, ντομάτα, κρεμμύδι, πατάτες, κέτσαπ, μουστάρδα, τυροσαλάτα, μαγιονέζα.", price: "7,00€", img: imgKantinas },
  { name: "ΒΡΩΜΙΚΟ", desc: "Λευκό ψωμί, χοιρινή πανσέτα, cheddar sauce, καραμελωμένο κρεμμύδι, σαλάτα λάχανο - καρότο, BBQ sauce, πατάτες.", price: "6,50€", img: imgVromiko },
];

const clubs: Item[] = [
  { name: "CLUB SANDWICH ΑΛΛΑΝΤΙΚΩΝ", desc: "Gouda, νάριζα, bacon, iceberg, ντομάτα, μαγιονέζα, πατάτες, dip μαγιονέζας.", price: "7,50€", img: imgClubHam },
  { name: "CLUB SANDWICH ΓΑΛΟΠΟΥΛΑ", desc: "Gouda, γαλοπούλα, bacon, iceberg, ντομάτα, μαγιονέζα, πατάτες, dip μαγιονέζας.", price: "7,50€", img: imgClubTurkey },
  { name: "CLUB SANDWICH ΦΙΛΕΤΟ ΚΟΤΟΠΟΥΛΟ", desc: "Gouda, φιλέτο κοτόπουλο, bacon, iceberg, ντομάτα, σως μουστάρδας, πατάτες, dip σως μουστάρδα.", price: "8,50€", img: imgClubChicken },
  { name: "CLUB SANDWICH ΠΑΝΕ ΚΟΤΟΠΟΥΛΟ", desc: "Gouda, παρμεζάνα, πανέ κοτόπουλο, bacon, iceberg, ντομάτα, σως μουστάρδας, πατάτες, dip σως μουστάρδας.", price: "9,00€", img: imgClubCrispy },
  { name: "CLUB SANDWICH ΜΠΙΦΤΕΚΙ ΜΟΣΧΑΡΙΣΙΟ", desc: "Gouda, bacon, μπιφτέκι μοσχαρίσιο 220gr, iceberg, ντομάτα, burger sauce, πατάτες, dip burger sauce.", price: "9,50€", img: imgClubBeef },
];

const hotdogs: Item[] = [
  { name: "ΚΛΑΣΙΚΟ", desc: "Ψωμί brioche, λουκάνικο Φρανκφούρτης, καραμελωμένο κρεμμύδι, σαλάτα λάχανο - καρότο, κέτσαπ, μουστάρδα.", price: "4,00€", img: imgHotdogClassic },
  { name: "ΚΛΑΣΙΚΟ XL", desc: "Ψωμί brioche, λουκάνικο Φρανκφούρτης XL, καραμελωμένο κρεμμύδι, σαλάτα λάχανο - καρότο, κέτσαπ, μουστάρδα.", price: "5,00€", img: imgHotdogXl },
  { name: "ΚΟΤΟΜΠΟΥΚΙΕΣ", desc: "Ψωμί brioche, κοτόπουλο πανέ, καραμελωμένο κρεμμύδι, λάχανο - καρότο, σως μουστάρδας.", price: "5,00€", img: imgHotdogChicken },
];

const salads: Item[] = [
  { name: "CEASAR", desc: "Φιλέτο κοτόπουλο, λόλα, iceberg, κρουτόν, παρμεζάνα, gouda, caesar sauce.", price: "7,00€", img: imgSaladCaesar },
  { name: "COLESLAW", desc: "Iceberg, σαλάτα λάχανο - καρότο, κρουτόν, burger sauce.", price: "5,00€", img: imgSaladColeslaw },
];

const meridies: Item[] = [
  { name: "ΚΟΤΟΜΠΟΥΚΙΕΣ", desc: "4τμχ. κοτόπουλο πανέ, πατάτες, σως μουστάρδας.", price: "6,50€", img: imgChickenStrips },
  { name: "ΦΤΕΡΟΥΓΕΣ", desc: "8τμχ. φτερούγες κοτόπουλο, πατάτες, BBQ sauce.", price: "6,50€", img: imgWings },
  { name: "ONION RINGS (10τμχ.)", desc: "BBQ sauce.", price: "5,00€", img: imgOnionRings },
];

const potatoes: Item[] = [
  { name: "ΠΑΤΑΤΕΣ", price: "3,50€", img: imgFries },
  { name: "ΠΑΤΑΤΕΣ COUNTRY", price: "4,50€", img: imgFriesCountry },
  { name: "ΠΑΤΑΤΕΣ CHEDDAR", price: "4,50€", img: imgFriesCheddar },
  { name: "ΠΑΤΑΤΕΣ CHEDDAR - BACON", price: "5,50€", img: imgFriesCheddarBacon },
];

const extras: Item[] = [
  { name: "Μπιφτέκι μοσχαρίσιο 100γρ.", price: "2,50€" },
  { name: "Μπιφτέκι μοσχαρίσιο 220γρ.", price: "3,50€" },
  { name: "Μπιφτέκι κοτόπουλο 100γρ.", price: "2,50€" },
  { name: "Μπιφτέκι κοτόπουλο 220γρ.", price: "3,50€" },
  { name: "Αυγό", price: "1,00€" },
  { name: "Μπέικον", price: "1,00€" },
  { name: "Cheddar", price: "1,00€" },
  { name: "Ντομάτα", price: "1,00€" },
  { name: "Iceberg", price: "1,00€" },
  { name: "Πίκλες", price: "1,00€" },
  { name: "Onion rings", price: "1,00€" },
  { name: "Καραμ. κρεμμύδια", price: "1,00€" },
  { name: "Τηγανητά κρεμμύδια", price: "1,00€" },
  { name: "Συνοδευτικές πατάτες", price: "2,50€" },
  { name: "Συνοδευτικές Country", price: "3,50€" },
  { name: "Σως 120ml", price: "1,50€" },
  { name: "Σως 250ml", price: "3,50€" },
];

const kids: Item[] = [
  { name: "MINI BURGER παιδικό (2τμχ)", desc: "Μπιφτέκι, cheddar, κέτσαπ + πατάτες + 1 χυμός.", price: "7,50€", img: imgKidsBurger },
  { name: "MINI BURGER παιδικό (2τμχ) — Κοτόπουλο", desc: "Κοτομπουκιά, σως μουστάρδας + πατάτες + 1 χυμός.", price: "7,50€", img: imgKidsChicken },
];

const sodas: Item[] = [
  { name: "Pepsi 330ml", price: "2,00€", img: imgSoda },
  { name: "Pepsi Zero 330ml", price: "2,00€" },
  { name: "Pepsi Twist 330ml", price: "2,00€" },
  { name: "7up Zero 330ml", price: "2,00€" },
  { name: "Pepsi 500ml", price: "2,50€" },
  { name: "Pepsi Zero 500ml", price: "2,50€" },
  { name: "7up Zero 500ml", price: "2,50€" },
  { name: "Pepsi 1,5L", price: "3,00€" },
  { name: "Pepsi Zero 1,5L", price: "3,00€" },
  { name: "Ήβη 330ml (Πορτοκαλάδα, Λεμονάδα, Σόδα, Σόδα Λεμόνι)", price: "2,00€" },
  { name: "Νερό 500ml", price: "0,50€" },
  { name: "Νερό 1,50lt", price: "1,00€" },
];

const beers: Item[] = [
  { name: "Fix 330ml", price: "2,50€", img: imgBeer },
  { name: "Fix Άνευ 330ml", price: "2,50€" },
];

function PriceRow({ name, price }: { name: string; price: string }) {
  return (
    <div className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-4 border-b border-border/50 py-5">
      <h4 className="truncate text-lg text-foreground" style={{ fontFamily: "var(--font-display)" }}>{name}</h4>
      <span className="shrink-0 text-sm text-primary">{price}</span>
    </div>
  );
}

function ItemCard({ item }: { item: Item }) {
  return (
    <article className="flex gap-5">
      {item.img ? (
        <img src={item.img} alt={item.name} loading="lazy" width={1024} height={1024} className="h-32 w-32 shrink-0 bg-black object-cover sm:h-40 sm:w-40" />
      ) : (
        <div className="grid h-32 w-32 shrink-0 place-items-center border border-border/60 bg-card text-3xl text-muted-foreground sm:h-40 sm:w-40" style={{ fontFamily: "var(--font-display)" }}>
          BG
        </div>
      )}
      <div className="min-w-0 flex-1">
        <div className="flex items-baseline justify-between gap-4">
          <h3 className="text-xl text-foreground sm:text-2xl" style={{ fontFamily: "var(--font-display)" }}>{item.name}</h3>
          <span className="shrink-0 text-sm text-primary">{item.price}</span>
        </div>
        {item.desc && <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>}
      </div>
    </article>
  );
}

function Section({ id, title, items }: { id: string; title: string; items: Item[] }) {
  return (
    <section id={id} className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
      <h2 className="text-3xl text-foreground sm:text-4xl" style={{ fontFamily: "var(--font-display)" }}>{title}</h2>
      <div className="mt-12 grid gap-12 md:grid-cols-2">
        {items.map((b) => <ItemCard key={b.name} item={b} />)}
      </div>
    </section>
  );
}

function MenuPage() {
  return (
    <SiteShell>
      <section className="border-b border-border/60">
        <div className="mx-auto max-w-7xl px-5 pb-16 pt-28 sm:px-8 sm:pt-32">
          <span className="text-xs uppercase tracking-[0.35em] text-primary">Κατάλογος</span>
          <h1 className="mt-4 text-balance text-6xl leading-[0.9] sm:text-8xl" style={{ fontFamily: "var(--font-display)" }}>
            ΜΕ ΤΟ<br />ΓΑΝΤΙ.
          </h1>
        </div>
      </section>

      <Section id="burger" title="Burger (110gr / 220gr)" items={burgers} />

      <div className="border-t border-border/60 bg-card/40">
        <Section id="special" title="Special" items={special} />
      </div>

      <Section id="sandwiches" title="Sandwiches" items={sandwiches} />

      <div className="border-t border-border/60 bg-card/40">
        <Section id="club" title="Club Sandwiches" items={clubs} />
      </div>

      <Section id="hotdog" title="Hot Dog" items={hotdogs} />

      <div className="border-t border-border/60 bg-card/40">
        <Section id="salads" title="Σαλάτες" items={salads} />
      </div>

      <Section id="meridies" title="Μερίδες" items={meridies} />

      <div className="border-t border-border/60 bg-card/40">
        <Section id="potatoes" title="Πατάτες" items={potatoes} />
      </div>

      <Section id="kids" title="Kids Menu" items={kids} />

      <section className="border-t border-border/60 bg-card/40">
        <div className="mx-auto grid max-w-7xl gap-16 px-5 py-20 sm:px-8 md:grid-cols-2">
          <div>
            <h2 className="text-3xl text-foreground sm:text-4xl" style={{ fontFamily: "var(--font-display)" }}>Αναψυκτικά</h2>
            <div className="mt-6">
              {sodas.map((s) => <PriceRow key={s.name} name={s.name} price={s.price} />)}
            </div>
          </div>
          <div>
            <h2 className="text-3xl text-foreground sm:text-4xl" style={{ fontFamily: "var(--font-display)" }}>Μπύρες</h2>
            <div className="mt-6">
              {beers.map((s) => <PriceRow key={s.name} name={s.name} price={s.price} />)}
            </div>
            <h2 className="mt-16 text-3xl text-foreground sm:text-4xl" style={{ fontFamily: "var(--font-display)" }}>Extra</h2>
            <div className="mt-6">
              {extras.map((s) => <PriceRow key={s.name} name={s.name} price={s.price} />)}
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}