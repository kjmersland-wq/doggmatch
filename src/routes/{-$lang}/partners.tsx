import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useRef, useState } from "react";
import {
  Check,
  Handshake,
  ArrowRight,
  BadgePercent,
  QrCode,
  ShoppingBag,
  Scissors,
  GraduationCap,
  Stethoscope,
  ShieldCheck,
  Home,
  Bone,
  Mountain,
} from "lucide-react";
import { Button, Eyebrow, Section, Arrow } from "@/components/dogmatch/ui";
import { partnersContent } from "@/data/partners/content";
import { sendPartnerEnquiry } from "@/lib/partners/partner.functions";
import { cn } from "@/lib/utils";
import { useCopy, useLocale } from "@/i18n";
import partnerHero from "@/assets/partner-hero.jpg";
import partnerGrooming from "@/assets/partner-grooming.jpg";
import partnerVet from "@/assets/partner-vet.jpg";
import partnerTraining from "@/assets/partner-training.jpg";
import partnerOutdoors from "@/assets/partner-outdoors.jpg";
import partnerMoment from "@/assets/partner-moment.jpg";
import partnerCustomerDoggMatch from "@/assets/partner-customer-doggmatch.jpg";
import { seoLinks, abs, localizedHead } from "@/lib/seo";
import { ShareBar } from "@/components/dogmatch/share";

const title = "Become a DoggMatch Partner";
const description =
  "Choose your own DoggMatch+ member benefit, while your customers receive 25% off their first year. No listing fee and no commission.";

const seoCopy = {
  en: { title, description },
  no: {
    title: "Bli DoggMatch-partner",
    description:
      "Gi DoggMatch+-medlemmer en eksklusiv rabatt eller fordel. Ingen listepris, ingen provisjon — bare bedriften din foran hundeeiere som allerede leter.",
  },
  pl: {
    title: "Zostań partnerem DoggMatch",
    description:
      "Zaproponuj członkom DoggMatch+ wyjątkowy rabat lub korzyść. Bez opłat za wpis, bez prowizji — po prostu Twoja firma przed oczami opiekunów psów, którzy już szukają.",
  },
  dk: {
    title: "Bliv DoggMatch-partner",
    description:
      "Giv DoggMatch+-medlemmer en eksklusiv rabat eller fordel. Ingen listepris, ingen provision — bare din virksomhed foran hundeejere, der allerede leder.",
  },
  se: {
    title: "Bli DoggMatch-partner",
    description:
      "Ge DoggMatch+-medlemmar en exklusiv rabatt eller förmån. Ingen listavgift, ingen provision — bara ditt företag inför hundägare som redan letar.",
  },
  de: {
    title: "DoggMatch-Partner werden",
    description:
      "Bieten Sie DoggMatch+-Mitgliedern einen exklusiven Rabatt oder Vorteil. Keine Listungsgebühr, keine Provision — nur Ihr Unternehmen vor Hundehaltern, die bereits suchen.",
  },
  fr: {
    title: "Devenez partenaire DoggMatch",
    description:
      "Offrez aux membres DoggMatch+ une réduction ou un avantage exclusif. Pas de frais de référencement, pas de commission — juste votre entreprise mise en avant auprès de propriétaires de chiens déjà à la recherche.",
  },
  nl: {
    title: "Word DoggMatch-partner",
    description:
      "Geef DoggMatch+-leden een exclusieve korting of voordeel. Geen vermeldingskosten, geen commissie — gewoon jouw bedrijf onder de aandacht bij hondeneigenaren die al aan het zoeken zijn.",
  },
  fi: {
    title: "Ryhdy DoggMatch-kumppaniksi",
    description:
      "Tarjoa DoggMatch+-jäsenille ainutlaatuinen alennus tai etu. Ei listautumismaksua, ei provisiota — vain yrityksesi jo etsivien koiranomistajien silmien edessä.",
  },
};

export const Route = createFileRoute("/{-$lang}/partners")({
  head: (ctx) => localizedHead(ctx, "/partners", seoCopy),
  component: PartnersPage,
});

const categoryIcons: Record<string, typeof ShoppingBag> = {
  equipment: ShoppingBag,
  grooming: Scissors,
  training: GraduationCap,
  vet: Stethoscope,
  insurance: ShieldCheck,
  boarding: Home,
  food: Bone,
  travel: Mountain,
};

const copy = {
  en: {
    hero: {
      eyebrow: "Partners",
      title: "Become a DoggMatch Partner",
      body: "DoggMatch helps people find the right dog and then live well with them. Our members are already looking for beds, groomers, trainers, vets and places to stay. As a partner, you get in front of them — with an offer you fully control.",
      cta: "Become a DoggMatch Partner",
      note: "We're looking for partners we'd happily recommend to a friend.",
      imgAlt: "A dog owner and her golden retriever browsing the shelves of an independent pet shop",
      caption: "The moment a member walks into your shop is the whole point.",
    },
    why: {
      eyebrow: "What you get",
      title: "A partnership that gives something both ways.",
      groomingAlt: "A groomer gently brushing a small terrier in a bright salon",
      vetAlt: "A veterinarian listening to a labrador's heart while the owner sits nearby",
    },
    categories: {
      eyebrow: "Who we're looking for",
      title: "Good dog businesses, large and small.",
      body: "Independent shops, kennels, breeders, trainers and established teams are equally welcome. If your work makes everyday life with a dog better, we'd be glad to hear from you.",
      outdoorsAlt: "A hiker on a coastal trail at sunrise with his australian shepherd",
      trainingAlt: "A trainer kneeling beside a border collie during an outdoor class",
    },
    verification: {
      eyebrow: "At the counter",
      title: "One scan, and you know they're a member.",
      body: "Every DoggMatch+ member carries a card with a QR code. Point any phone camera at it and a page opens showing whether the membership is active and until when. That's all it shows — no names, no addresses, nothing you have to store or look after.",
      points: [
        "Nothing to install, and no partner login to remember.",
        "Works from a printed card or the card on their phone.",
        "No personal data passes through your till.",
        "A DoggMatch Partner badge for your window and website.",
      ],
      howTitle: "How it goes, in practice",
      steps: [
        "The member mentions DoggMatch+ and shows their card.",
        "You scan the QR code with any phone.",
        "The page says Active, with the date it runs until.",
        "You apply your offer. Done in about five seconds.",
      ],
    },
    how: {
      eyebrow: "How it works",
      title: "Four steps, and no small print to wade through.",
      momentAlt: "A smiling owner with her rescue dog leaning against her outside a café",
      caption: "We'd rather have a short list of partners we genuinely trust than a long one nobody reads.",
    },
    faq: {
      eyebrow: "Questions",
      title: "The things most businesses ask us first.",
    },
    enquiry: {
      eyebrow: "Get in touch",
      title: "Become a DoggMatch Partner.",
      body: "Tell us a little about your business and what you'd like to offer. Nothing here commits you to anything — it's the start of a conversation.",
      thanksTitle: "Thank you. Your enquiry is on its way.",
      thanksBody: "We've sent a short note to your inbox confirming it arrived, and a real person will read it and reply as soon as we can.",
      again: "Send another enquiry",
      genericError: "Sorry, we couldn't send your enquiry right now. Please try again in a moment.",
      fields: {
        company: { label: "Company", placeholder: "Your business name" },
        contact: { label: "Contact person", placeholder: "Who we'll be talking to" },
        email: { label: "Email", placeholder: "you@yourbusiness.com" },
        country: { label: "Country", placeholder: "Where you're based" },
        website: { label: "Website", hint: "Optional", placeholder: "yourbusiness.com" },
        category: { label: "Category", placeholder: "Pick the closest one", other: "Something else" },
        offer: { label: "Proposed discount or benefit", hint: "A rough idea is fine", placeholder: "e.g. 15% off harnesses and leads, or a free first grooming consultation" },
        message: { label: "Message", hint: "Optional — a sentence or two is plenty", placeholder: "Tell us about your business, who you look after, and anything you'd like to know." },
        honeypot: "Leave this empty",
      },
      sending: "Sending…",
      submit: "Become a DoggMatch Partner",
      privacy: "We only use your details to reply to you. Nothing else.",
    },
  },
  no: {
    hero: {
      eyebrow: "Partnere",
      title: "Vis bedriften din frem for folk som nettopp har fått hund.",
      body: "DoggMatch hjelper folk å velge riktig hund, og deretter leve godt sammen med den. Medlemmene våre kjøper senger, bestiller time hos groomer, finner veterinær og planlegger den første turen bort. Som partner er det deg de finner — med et tilbud som får dem til å komme til deg.",
      cta: "Bli DoggMatch-partner",
      note: "Ingen oppføringsavgift. Ingen provisjon. Et ekte menneske svarer.",
      imgAlt: "En hundeeier og gullhunden hennes ser gjennom hyllene i en lokal dyrebutikk",
      caption: "Øyeblikket et medlem går inn i butikken din, er hele poenget.",
    },
    why: {
      eyebrow: "Det du får",
      title: "Seks ærlige grunner til å bli listet hos oss.",
      groomingAlt: "En groomer børster en liten terrier forsiktig i en lys salong",
      vetAlt: "En veterinær som lytter på hjertet til en labrador mens eieren sitter ved siden av",
    },
    categories: {
      eyebrow: "Hvem vi ser etter",
      title: "Åtte typer bedrifter medlemmene våre spør oftest om.",
      body: "Jobber du med noe som berører hundens hverdag, og setter du pris på at vi sender en venn din vei, hører du hjemme her.",
      outdoorsAlt: "En turgåer på en kyststi ved soloppgang sammen med sin australske gjeterhund",
      trainingAlt: "En trener som sitter på huk ved siden av en border collie under en utekurs",
    },
    verification: {
      eyebrow: "Ved disken",
      title: "Ett skann, og du vet at de er medlem.",
      body: "Hvert DoggMatch+-medlem har et kort med en QR-kode. Hold et vilkårlig telefonkamera mot den, og en side åpnes som viser om medlemskapet er aktivt og til når. Det er alt den viser — ingen navn, ingen adresser, ingenting du må lagre eller passe på.",
      points: [
        "Ingenting å installere, og ingen partnerinnlogging å huske.",
        "Fungerer fra et utskrevet kort eller kortet på telefonen deres.",
        "Ingen personopplysninger går gjennom kassen din.",
        "Et DoggMatch-partnermerke til vinduet og nettsiden din.",
      ],
      howTitle: "Slik går det til, i praksis",
      steps: [
        "Medlemmet nevner DoggMatch+ og viser kortet sitt.",
        "Du skanner QR-koden med en vilkårlig telefon.",
        "Siden viser Aktiv, med datoen det gjelder til.",
        "Du gir tilbudet ditt. Unnagjort på rundt fem sekunder.",
      ],
    },
    how: {
      eyebrow: "Slik fungerer det",
      title: "Fire steg, uten liten skrift å vasse gjennom.",
      momentAlt: "En smilende eier med redningshunden sin lent inntil seg utenfor en kafé",
      caption: "Vi vil heller ha en kort liste med partnere vi virkelig stoler på enn en lang ingen leser.",
    },
    faq: {
      eyebrow: "Spørsmål",
      title: "Det de fleste bedrifter spør oss om først.",
    },
    enquiry: {
      eyebrow: "Ta kontakt",
      title: "Bli DoggMatch-partner.",
      body: "Fortell oss litt om bedriften din og hva du ønsker å tilby. Ingenting her forplikter deg til noe — det er starten på en samtale.",
      thanksTitle: "Takk. Henvendelsen din er på vei.",
      thanksBody: "Vi har sendt en kort bekreftelse til innboksen din, og et ekte menneske vil lese den og svare så fort vi kan.",
      again: "Send en ny henvendelse",
      genericError: "Beklager, vi klarte ikke å sende henvendelsen din akkurat nå. Prøv gjerne igjen om et lite øyeblikk.",
      fields: {
        company: { label: "Bedrift", placeholder: "Navnet på bedriften din" },
        contact: { label: "Kontaktperson", placeholder: "Hvem vi kommer til å snakke med" },
        email: { label: "E-post", placeholder: "deg@bedriften.no" },
        country: { label: "Land", placeholder: "Hvor dere holder til" },
        website: { label: "Nettside", hint: "Valgfritt", placeholder: "bedriften.no" },
        category: { label: "Kategori", placeholder: "Velg det som passer best", other: "Noe annet" },
        offer: { label: "Foreslått rabatt eller fordel", hint: "En omtrentlig idé holder", placeholder: "f.eks. 15 % rabatt på seler og bånd, eller en gratis første time hos groomer" },
        message: { label: "Melding", hint: "Valgfritt — en setning eller to er nok", placeholder: "Fortell oss om bedriften din, hvem dere er til for, og alt du lurer på." },
        honeypot: "La dette stå tomt",
      },
      sending: "Sender…",
      submit: "Bli DoggMatch-partner",
      privacy: "Vi bruker opplysningene dine kun til å svare deg. Ikke til noe annet.",
    },
  },
  pl: {
    hero: {
      eyebrow: "Partnerzy",
      title: "Pokaż swoją firmę osobom, które właśnie zdobyły psa.",
      body: "DoggMatch pomaga ludziom wybrać odpowiedniego psa, a potem dobrze z nim żyć. Nasi członkowie kupują legowiska, umawiają się do groomera, szukają weterynarza i planują pierwszy wyjazd. Jako partner to Ciebie znajdą — dzięki ofercie, która sprawi, że przyjdą właśnie do Ciebie.",
      cta: "Zostań partnerem DoggMatch",
      note: "Bez opłaty za wpis. Bez prowizji. Odpowiada prawdziwa osoba.",
      imgAlt: "Właścicielka psa i jej golden retriever przeglądają półki w niezależnym sklepie zoologicznym",
      caption: "Ten moment, gdy członek wchodzi do Twojego sklepu, to cały sens.",
    },
    why: {
      eyebrow: "Co zyskujesz",
      title: "Sześć uczciwych powodów, by być u nas widocznym.",
      groomingAlt: "Groomer delikatnie czesze małego teriera w jasnym salonie",
      vetAlt: "Weterynarz osłuchuje serce labradora, właściciel siedzi obok",
    },
    categories: {
      eyebrow: "Kogo szukamy",
      title: "Osiem rodzajów firm, o które najczęściej pytają nasi członkowie.",
      body: "Jeśli Twoja praca dotyczy codziennego życia psa i chętnie przyjmiesz kogoś, kogo do Ciebie skierujemy, jest tu dla Ciebie miejsce.",
      outdoorsAlt: "Wędrowiec na nadmorskim szlaku o wschodzie słońca ze swoim owczarkiem australijskim",
      trainingAlt: "Trener kucający obok border collie podczas zajęć na świeżym powietrzu",
    },
    verification: {
      eyebrow: "Przy kasie",
      title: "Jedno skanowanie i wiesz, że to członek.",
      body: "Każdy członek DoggMatch+ ma kartę z kodem QR. Wystarczy nakierować na nią dowolny aparat w telefonie, a otworzy się strona pokazująca, czy członkostwo jest aktywne i do kiedy. To wszystko, co pokazuje — żadnych nazwisk, adresów, niczego, co musiałbyś/musiałabyś przechowywać czy pilnować.",
      points: [
        "Nic do instalowania i żadnego loginu partnera do zapamiętania.",
        "Działa zarówno z wydrukowanej karty, jak i z karty w telefonie.",
        "Żadne dane osobowe nie przechodzą przez Twoją kasę.",
        "Odznaka Partnera DoggMatch na witrynę i stronę internetową.",
      ],
      howTitle: "Jak to wygląda w praktyce",
      steps: [
        "Członek wspomina o DoggMatch+ i pokazuje swoją kartę.",
        "Skanujesz kod QR dowolnym telefonem.",
        "Strona pokazuje Aktywne, wraz z datą, do kiedy obowiązuje.",
        "Stosujesz swoją ofertę. Gotowe w około pięć sekund.",
      ],
    },
    how: {
      eyebrow: "Jak to działa",
      title: "Cztery kroki, bez drobnego druku do przebrnięcia.",
      momentAlt: "Uśmiechnięta właścicielka ze swoim psem ze schroniska opartym o nią przed kawiarnią",
      caption: "Wolimy mieć krótką listę partnerów, którym naprawdę ufamy, niż długą, której nikt nie czyta.",
    },
    faq: {
      eyebrow: "Pytania",
      title: "To, o co pyta nas większość firm w pierwszej kolejności.",
    },
    enquiry: {
      eyebrow: "Skontaktuj się",
      title: "Zostań partnerem DoggMatch.",
      body: "Opowiedz nam trochę o swojej firmie i o tym, co chciałbyś/chciałabyś zaoferować. Nic tu do niczego Cię nie zobowiązuje — to dopiero początek rozmowy.",
      thanksTitle: "Dziękujemy. Twoje zgłoszenie jest w drodze.",
      thanksBody: "Wysłaliśmy krótką wiadomość na Twoją skrzynkę z potwierdzeniem, że dotarło, a prawdziwa osoba przeczyta je i odpowie najszybciej, jak to możliwe.",
      again: "Wyślij kolejne zgłoszenie",
      genericError: "Przepraszamy, nie udało nam się teraz wysłać Twojego zgłoszenia. Spróbuj ponownie za chwilę.",
      fields: {
        company: { label: "Firma", placeholder: "Nazwa Twojej firmy" },
        contact: { label: "Osoba kontaktowa", placeholder: "Z kim będziemy rozmawiać" },
        email: { label: "E-mail", placeholder: "ty@twojafirma.pl" },
        country: { label: "Kraj", placeholder: "Skąd działasz" },
        website: { label: "Strona internetowa", hint: "Opcjonalnie", placeholder: "twojafirma.pl" },
        category: { label: "Kategoria", placeholder: "Wybierz najbliższą", other: "Coś innego" },
        offer: { label: "Proponowana zniżka lub korzyść", hint: "Wystarczy ogólny pomysł", placeholder: "np. 15% zniżki na szelki i smycze albo bezpłatna pierwsza konsultacja groomerska" },
        message: { label: "Wiadomość", hint: "Opcjonalnie — wystarczy jedno lub dwa zdania", placeholder: "Opowiedz nam o swojej firmie, kim się opiekujecie i o czym chciałbyś/chciałabyś wiedzieć." },
        honeypot: "Zostaw to pole puste",
      },
      sending: "Wysyłanie…",
      submit: "Zostań partnerem DoggMatch",
      privacy: "Twoje dane wykorzystujemy wyłącznie po to, by Ci odpowiedzieć. Do niczego więcej.",
    },
  },
  dk: {
    hero: {
      eyebrow: "Partnere",
      title: "Vis din virksomhed frem for folk, der lige har fået hund.",
      body: "DoggMatch hjælper folk med at vælge den rette hund og leve godt sammen med den bagefter. Vores medlemmer køber senge, bestiller tid hos frisøren, finder en dyrlæge og planlægger den første tur væk. Som partner er det dig, de finder — med et tilbud, der får dem til at komme til dig.",
      cta: "Bliv DoggMatch-partner",
      note: "Ingen oprettelsesgebyr. Ingen provision. Et rigtigt menneske svarer.",
      imgAlt: "En hundeejer og hendes golden retriever kigger på hylderne i en uafhængig dyrehandel",
      caption: "Øjeblikket hvor et medlem træder ind i din butik er hele pointen.",
    },
    why: {
      eyebrow: "Det, du får",
      title: "Seks ærlige grunde til at blive listet hos os.",
      groomingAlt: "En groomer børster forsigtigt en lille terrier i en lys salon",
      vetAlt: "En dyrlæge lytter til en labradors hjerte, mens ejeren sidder ved siden af",
    },
    categories: {
      eyebrow: "Hvem vi leder efter",
      title: "Otte typer virksomheder, vores medlemmer spørger mest om.",
      body: "Arbejder du med noget, der gør hverdagen med hund bedre, og sætter du pris på, at vi sender en ven din vej, hører du hjemme her.",
      outdoorsAlt: "En vandrer på en kyststi ved solopgang sammen med sin australske fårehund",
      trainingAlt: "En træner der sidder på hug ved siden af en border collie under et udendørs hold",
    },
    verification: {
      eyebrow: "Ved disken",
      title: "Ét scan, og du ved, de er medlem.",
      body: "Hvert DoggMatch+-medlem har et kort med en QR-kode. Ret et vilkårligt telefonkamera mod den, og en side åbner, der viser, om medlemskabet er aktivt, og indtil hvornår. Det er alt, den viser — ingen navne, ingen adresser, intet du skal opbevare eller passe på.",
      points: [
        "Intet at installere, og intet partnerlogin at huske.",
        "Virker fra et printet kort eller kortet på telefonen.",
        "Ingen personoplysninger går gennem dit kasseapparat.",
        "Et DoggMatch-partnermærke til din rude og hjemmeside.",
      ],
      howTitle: "Sådan foregår det i praksis",
      steps: [
        "Medlemmet nævner DoggMatch+ og viser sit kort.",
        "Du scanner QR-koden med en vilkårlig telefon.",
        "Siden viser Aktiv, med datoen det gælder til.",
        "Du giver dit tilbud. Klaret på cirka fem sekunder.",
      ],
    },
    how: {
      eyebrow: "Sådan fungerer det",
      title: "Fire trin, uden småt at vade igennem.",
      momentAlt: "En smilende ejer med sin adoptivhund lænet op ad sig uden for en café",
      caption: "Vi vil hellere have en kort liste med partnere, vi virkelig stoler på, end en lang, ingen læser.",
    },
    faq: {
      eyebrow: "Spørgsmål",
      title: "Det, de fleste virksomheder spørger os om først.",
    },
    enquiry: {
      eyebrow: "Kontakt os",
      title: "Bliv DoggMatch-partner.",
      body: "Fortæl os lidt om din virksomhed, og hvad du gerne vil tilbyde. Intet her forpligter dig til noget — det er starten på en samtale.",
      thanksTitle: "Tak. Din henvendelse er på vej.",
      thanksBody: "Vi har sendt en kort bekræftelse til din indbakke, og et rigtigt menneske læser den og svarer, så snart vi kan.",
      again: "Send en ny henvendelse",
      genericError: "Beklager, vi kunne ikke sende din henvendelse lige nu. Prøv venligst igen om et øjeblik.",
      fields: {
        company: { label: "Virksomhed", placeholder: "Din virksomheds navn" },
        contact: { label: "Kontaktperson", placeholder: "Hvem vi kommer til at tale med" },
        email: { label: "E-mail", placeholder: "dig@dinvirksomhed.dk" },
        country: { label: "Land", placeholder: "Hvor I holder til" },
        website: { label: "Hjemmeside", hint: "Valgfrit", placeholder: "dinvirksomhed.dk" },
        category: { label: "Kategori", placeholder: "Vælg den, der passer bedst", other: "Noget andet" },
        offer: { label: "Foreslået rabat eller fordel", hint: "En omtrentlig idé er fint", placeholder: "fx 15 % rabat på seler og liner, eller en gratis første konsultation hos frisøren" },
        message: { label: "Besked", hint: "Valgfrit — en sætning eller to er nok", placeholder: "Fortæl os om din virksomhed, hvem I tager jer af, og alt, du gerne vil vide." },
        honeypot: "Lad dette felt være tomt",
      },
      sending: "Sender…",
      submit: "Bliv DoggMatch-partner",
      privacy: "Vi bruger kun dine oplysninger til at svare dig. Ikke til andet.",
    },
  },
  se: {
    hero: {
      eyebrow: "Partner",
      title: "Visa upp ditt företag för människor som just har skaffat hund.",
      body: "DoggMatch hjälper människor att välja rätt hund och sedan leva bra tillsammans med den. Våra medlemmar köper bäddar, bokar tid hos frisören, hittar en veterinär och planerar den första resan bort. Som partner är det dig de hittar — med ett erbjudande som får dem att komma till dig.",
      cta: "Bli DoggMatch-partner",
      note: "Ingen listavgift. Ingen provision. En riktig person svarar.",
      imgAlt: "En hundägare och hennes golden retriever tittar bland hyllorna i en oberoende djuraffär",
      caption: "Ögonblicket när en medlem kliver in i din butik är hela poängen.",
    },
    why: {
      eyebrow: "Det du får",
      title: "Sex ärliga skäl att synas hos oss.",
      groomingAlt: "En hundfrisör borstar försiktigt en liten terrier i en ljus salong",
      vetAlt: "En veterinär lyssnar på en labradors hjärta medan ägaren sitter bredvid",
    },
    categories: {
      eyebrow: "Vilka vi letar efter",
      title: "Åtta sorters företag som våra medlemmar frågar mest om.",
      body: "Arbetar du med något som gör vardagen med hund bättre, och uppskattar du att vi skickar en vän din väg, hör du hemma här.",
      outdoorsAlt: "En vandrare på en kuststig vid soluppgång tillsammans med sin australian shepherd",
      trainingAlt: "En instruktör som sitter på huk bredvid en border collie under en utomhuskurs",
    },
    verification: {
      eyebrow: "Vid disken",
      title: "En skanning, och du vet att de är medlem.",
      body: "Varje DoggMatch+-medlem har ett kort med en QR-kod. Rikta valfri telefonkamera mot den, så öppnas en sida som visar om medlemskapet är aktivt och till när. Det är allt den visar — inga namn, inga adresser, inget du behöver spara eller hålla koll på.",
      points: [
        "Inget att installera, och ingen partnerinloggning att komma ihåg.",
        "Fungerar från ett utskrivet kort eller kortet i telefonen.",
        "Inga personuppgifter passerar din kassa.",
        "Ett DoggMatch-partnermärke till ditt skyltfönster och din hemsida.",
      ],
      howTitle: "Så här går det till, i praktiken",
      steps: [
        "Medlemmen nämner DoggMatch+ och visar sitt kort.",
        "Du skannar QR-koden med valfri telefon.",
        "Sidan visar Aktiv, med datumet den gäller till.",
        "Du tillämpar ditt erbjudande. Klart på ungefär fem sekunder.",
      ],
    },
    how: {
      eyebrow: "Så här fungerar det",
      title: "Fyra steg, utan finstilt att vada igenom.",
      momentAlt: "En leende ägare med sin adopterade hund lutad mot sig utanför ett kafé",
      caption: "Vi vill hellre ha en kort lista med partner vi verkligen litar på än en lång som ingen läser.",
    },
    faq: {
      eyebrow: "Frågor",
      title: "Det de flesta företag frågar oss om först.",
    },
    enquiry: {
      eyebrow: "Hör av dig",
      title: "Bli DoggMatch-partner.",
      body: "Berätta lite om ditt företag och vad du skulle vilja erbjuda. Inget här förpliktigar dig till något — det är bara början på ett samtal.",
      thanksTitle: "Tack. Din förfrågan är på väg.",
      thanksBody: "Vi har skickat en kort bekräftelse till din inkorg, och en riktig person läser den och svarar så snart vi kan.",
      again: "Skicka en ny förfrågan",
      genericError: "Tyvärr kunde vi inte skicka din förfrågan just nu. Försök gärna igen om en liten stund.",
      fields: {
        company: { label: "Företag", placeholder: "Ditt företags namn" },
        contact: { label: "Kontaktperson", placeholder: "Vem vi kommer att prata med" },
        email: { label: "E-post", placeholder: "du@dittforetag.se" },
        country: { label: "Land", placeholder: "Var ni finns" },
        website: { label: "Webbplats", hint: "Valfritt", placeholder: "dittforetag.se" },
        category: { label: "Kategori", placeholder: "Välj den som passar bäst", other: "Något annat" },
        offer: { label: "Föreslagen rabatt eller förmån", hint: "En ungefärlig idé räcker", placeholder: "t.ex. 15 % rabatt på selar och koppel, eller en gratis första konsultation hos frisören" },
        message: { label: "Meddelande", hint: "Valfritt — en mening eller två räcker", placeholder: "Berätta om ditt företag, vilka ni tar hand om, och allt du undrar över." },
        honeypot: "Lämna detta fält tomt",
      },
      sending: "Skickar…",
      submit: "Bli DoggMatch-partner",
      privacy: "Vi använder bara dina uppgifter för att svara dig. Inget annat.",
    },
  },
  de: {
    hero: {
      eyebrow: "Partner",
      title: "Zeigen Sie Ihr Unternehmen Menschen, die gerade einen Hund bekommen haben.",
      body: "DoggMatch hilft Menschen, den richtigen Hund zu finden und danach gut mit ihm zu leben. Unsere Mitglieder kaufen Betten, buchen Termine beim Hundefriseur, suchen einen Tierarzt und planen die erste Reise. Als Partner sind Sie es, den sie finden — mit einem Angebot, das sie zu Ihnen führt.",
      cta: "DoggMatch-Partner werden",
      note: "Keine Listungsgebühr. Keine Provision. Ein echter Mensch antwortet.",
      imgAlt: "Eine Hundebesitzerin und ihr Golden Retriever stöbern in den Regalen eines unabhängigen Zoofachgeschäfts",
      caption: "Der Moment, in dem ein Mitglied Ihr Geschäft betritt, ist der ganze Sinn der Sache.",
    },
    why: {
      eyebrow: "Was Sie bekommen",
      title: "Sechs ehrliche Gründe, bei uns gelistet zu sein.",
      groomingAlt: "Ein Hundefriseur bürstet sanft einen kleinen Terrier in einem hellen Salon",
      vetAlt: "Ein Tierarzt hört das Herz eines Labradors ab, während der Besitzer daneben sitzt",
    },
    categories: {
      eyebrow: "Wen wir suchen",
      title: "Acht Arten von Unternehmen, nach denen unsere Mitglieder am häufigsten fragen.",
      body: "Wenn Ihre Arbeit den Alltag mit Hund verbessert und Sie es schätzen, wenn wir Ihnen einen Freund schicken, sind Sie hier richtig.",
      outdoorsAlt: "Ein Wanderer auf einem Küstenpfad bei Sonnenaufgang mit seinem Australian Shepherd",
      trainingAlt: "Ein Trainer kniet neben einem Border Collie während eines Outdoor-Kurses",
    },
    verification: {
      eyebrow: "An der Theke",
      title: "Ein Scan, und Sie wissen, dass sie Mitglied sind.",
      body: "Jedes DoggMatch+-Mitglied hat eine Karte mit einem QR-Code. Halten Sie eine beliebige Handykamera darauf, und es öffnet sich eine Seite, die zeigt, ob die Mitgliedschaft aktiv ist und bis wann. Das ist alles, was angezeigt wird — keine Namen, keine Adressen, nichts, das Sie speichern oder verwalten müssten.",
      points: [
        "Nichts zu installieren, kein Partner-Login zu merken.",
        "Funktioniert mit einer ausgedruckten Karte oder der Karte auf dem Handy.",
        "Keine personenbezogenen Daten laufen über Ihre Kasse.",
        "Ein DoggMatch-Partner-Abzeichen für Ihr Schaufenster und Ihre Website.",
      ],
      howTitle: "So läuft es in der Praxis ab",
      steps: [
        "Das Mitglied erwähnt DoggMatch+ und zeigt seine Karte.",
        "Sie scannen den QR-Code mit einem beliebigen Handy.",
        "Die Seite zeigt Aktiv, mit dem Datum, bis wann.",
        "Sie wenden Ihr Angebot an. Fertig in etwa fünf Sekunden.",
      ],
    },
    how: {
      eyebrow: "So funktioniert es",
      title: "Vier Schritte, ohne Kleingedrucktes zu wälzen.",
      momentAlt: "Eine lächelnde Besitzerin mit ihrem Rettungshund, der sich an sie lehnt, vor einem Café",
      caption: "Wir hätten lieber eine kurze Liste von Partnern, denen wir wirklich vertrauen, als eine lange, die niemand liest.",
    },
    faq: {
      eyebrow: "Fragen",
      title: "Das, wonach die meisten Unternehmen uns zuerst fragen.",
    },
    enquiry: {
      eyebrow: "Kontakt aufnehmen",
      title: "DoggMatch-Partner werden.",
      body: "Erzählen Sie uns ein wenig über Ihr Unternehmen und was Sie anbieten möchten. Nichts hier verpflichtet Sie zu etwas — es ist der Beginn eines Gesprächs.",
      thanksTitle: "Danke. Ihre Anfrage ist unterwegs.",
      thanksBody: "Wir haben eine kurze Bestätigung an Ihr Postfach gesendet, und eine echte Person wird sie lesen und so schnell wie möglich antworten.",
      again: "Weitere Anfrage senden",
      genericError: "Entschuldigung, wir konnten Ihre Anfrage gerade nicht senden. Bitte versuchen Sie es gleich noch einmal.",
      fields: {
        company: { label: "Unternehmen", placeholder: "Name Ihres Unternehmens" },
        contact: { label: "Ansprechpartner", placeholder: "Mit wem wir sprechen werden" },
        email: { label: "E-Mail", placeholder: "sie@ihrunternehmen.de" },
        country: { label: "Land", placeholder: "Wo Sie ansässig sind" },
        website: { label: "Website", hint: "Optional", placeholder: "ihrunternehmen.de" },
        category: { label: "Kategorie", placeholder: "Wählen Sie die passendste", other: "Etwas anderes" },
        offer: { label: "Vorgeschlagener Rabatt oder Vorteil", hint: "Eine grobe Idee reicht", placeholder: "z. B. 15 % Rabatt auf Geschirre und Leinen, oder eine kostenlose erste Beratung beim Hundefriseur" },
        message: { label: "Nachricht", hint: "Optional — ein oder zwei Sätze genügen", placeholder: "Erzählen Sie uns von Ihrem Unternehmen, um wen Sie sich kümmern, und was Sie sonst noch wissen möchten." },
        honeypot: "Dieses Feld leer lassen",
      },
      sending: "Wird gesendet…",
      submit: "DoggMatch-Partner werden",
      privacy: "Wir verwenden Ihre Angaben nur, um Ihnen zu antworten. Sonst zu nichts.",
    },
  },
  fr: {
    hero: {
      eyebrow: "Partenaires",
      title: "Faites découvrir votre entreprise à des personnes qui viennent d'adopter un chien.",
      body: "DoggMatch aide les gens à choisir le bon chien, puis à bien vivre avec lui. Nos membres achètent des couchages, prennent rendez-vous chez le toiletteur, cherchent un vétérinaire et planifient leur premier séjour hors de chez eux. En tant que partenaire, c'est vous qu'ils trouvent — grâce à une offre qui les fait venir chez vous.",
      cta: "Devenir partenaire DoggMatch",
      note: "Pas de frais de référencement. Pas de commission. Une vraie personne vous répond.",
      imgAlt: "Une propriétaire de chien et son golden retriever parcourant les rayons d'une animalerie indépendante",
      caption: "Le moment où un membre entre dans votre boutique, c'est tout l'intérêt.",
    },
    why: {
      eyebrow: "Ce que vous obtenez",
      title: "Six bonnes raisons honnêtes d'être référencé chez nous.",
      groomingAlt: "Un toiletteur brossant délicatement un petit terrier dans un salon lumineux",
      vetAlt: "Un vétérinaire écoutant le cœur d'un labrador pendant que le propriétaire est assis à côté",
    },
    categories: {
      eyebrow: "Qui nous recherchons",
      title: "Huit types d'entreprises que nos membres demandent le plus souvent.",
      body: "Si votre travail améliore le quotidien avec un chien et que vous appréciez qu'on vous envoie un ami, vous avez votre place ici.",
      outdoorsAlt: "Un randonneur sur un sentier côtier au lever du soleil avec son berger australien",
      trainingAlt: "Un éducateur accroupi à côté d'un border collie pendant un cours en extérieur",
    },
    verification: {
      eyebrow: "Au comptoir",
      title: "Un scan, et vous savez qu'ils sont membres.",
      body: "Chaque membre DoggMatch+ a une carte avec un code QR. Pointez n'importe quel appareil photo dessus, et une page s'ouvre indiquant si l'abonnement est actif et jusqu'à quand. C'est tout ce qu'elle montre — aucun nom, aucune adresse, rien que vous ayez à conserver ou à gérer.",
      points: [
        "Rien à installer, et aucun identifiant partenaire à retenir.",
        "Fonctionne avec une carte imprimée ou la carte sur leur téléphone.",
        "Aucune donnée personnelle ne transite par votre caisse.",
        "Un badge de partenaire DoggMatch pour votre vitrine et votre site.",
      ],
      howTitle: "Comment ça se passe, en pratique",
      steps: [
        "Le membre mentionne DoggMatch+ et montre sa carte.",
        "Vous scannez le code QR avec n'importe quel téléphone.",
        "La page indique Actif, avec la date de fin.",
        "Vous appliquez votre offre. Terminé en environ cinq secondes.",
      ],
    },
    how: {
      eyebrow: "Comment ça marche",
      title: "Quatre étapes, sans petites lignes à décortiquer.",
      momentAlt: "Une propriétaire souriante avec son chien adopté appuyé contre elle devant un café",
      caption: "Nous préférons une courte liste de partenaires en qui nous avons vraiment confiance à une longue liste que personne ne lit.",
    },
    faq: {
      eyebrow: "Questions",
      title: "Ce que la plupart des entreprises nous demandent en premier.",
    },
    enquiry: {
      eyebrow: "Contactez-nous",
      title: "Devenir partenaire DoggMatch.",
      body: "Parlez-nous un peu de votre entreprise et de ce que vous aimeriez proposer. Rien ici ne vous engage à quoi que ce soit — c'est le début d'une conversation.",
      thanksTitle: "Merci. Votre demande est en route.",
      thanksBody: "Nous avons envoyé une courte confirmation dans votre boîte mail, et une vraie personne la lira et vous répondra dès que possible.",
      again: "Envoyer une autre demande",
      genericError: "Désolé, nous n'avons pas pu envoyer votre demande pour le moment. Veuillez réessayer dans un instant.",
      fields: {
        company: { label: "Entreprise", placeholder: "Le nom de votre entreprise" },
        contact: { label: "Personne à contacter", placeholder: "À qui nous nous adresserons" },
        email: { label: "E-mail", placeholder: "vous@votreentreprise.com" },
        country: { label: "Pays", placeholder: "Où vous êtes basé" },
        website: { label: "Site web", hint: "Facultatif", placeholder: "votreentreprise.com" },
        category: { label: "Catégorie", placeholder: "Choisissez la plus proche", other: "Autre chose" },
        offer: { label: "Réduction ou avantage proposé", hint: "Une idée approximative suffit", placeholder: "p. ex. 15 % de réduction sur harnais et laisses, ou une première consultation de toilettage gratuite" },
        message: { label: "Message", hint: "Facultatif — une phrase ou deux suffisent", placeholder: "Parlez-nous de votre entreprise, de qui vous vous occupez, et de tout ce que vous aimeriez savoir." },
        honeypot: "Laissez ce champ vide",
      },
      sending: "Envoi en cours…",
      submit: "Devenir partenaire DoggMatch",
      privacy: "Nous n'utilisons vos informations que pour vous répondre. Rien d'autre.",
    },
  },
  nl: {
    hero: {
      eyebrow: "Partners",
      title: "Laat je bedrijf zien aan mensen die net een hond hebben gekregen.",
      body: "DoggMatch helpt mensen de juiste hond te kiezen en daarna goed met hem of haar te leven. Onze leden kopen manden, boeken afspraken bij de trimsalon, zoeken een dierenarts en plannen hun eerste reisje weg. Als partner ben jij degene die ze vinden — met een aanbod dat ze naar jou brengt.",
      cta: "Word DoggMatch-partner",
      note: "Geen vermeldingskosten. Geen commissie. Een echt mens antwoordt.",
      imgAlt: "Een hondeneigenaar en haar golden retriever bekijken de schappen in een onafhankelijke dierenwinkel",
      caption: "Het moment waarop een lid jouw winkel binnenloopt, is precies waar het om draait.",
    },
    why: {
      eyebrow: "Wat je krijgt",
      title: "Zes eerlijke redenen om bij ons vermeld te staan.",
      groomingAlt: "Een trimmer borstelt voorzichtig een kleine terriër in een lichte salon",
      vetAlt: "Een dierenarts luistert naar het hart van een labrador terwijl de eigenaar ernaast zit",
    },
    categories: {
      eyebrow: "Wie we zoeken",
      title: "Acht soorten bedrijven waar onze leden het vaakst naar vragen.",
      body: "Als jouw werk het dagelijks leven met een hond beter maakt en je het waardeert dat we een vriend jouw kant op sturen, hoor je hier thuis.",
      outdoorsAlt: "Een wandelaar op een kustpad bij zonsopgang samen met zijn australian shepherd",
      trainingAlt: "Een trainer die naast een border collie hurkt tijdens een buitenles",
    },
    verification: {
      eyebrow: "Aan de toonbank",
      title: "Eén scan, en je weet dat ze lid zijn.",
      body: "Elk DoggMatch+-lid heeft een pasje met een QR-code. Richt een willekeurige telefooncamera erop, en er opent een pagina die laat zien of het lidmaatschap actief is en tot wanneer. Dat is alles wat het toont — geen namen, geen adressen, niets wat je hoeft te bewaren of bij te houden.",
      points: [
        "Niets te installeren, en geen partnerinlog om te onthouden.",
        "Werkt met een uitgeprinte kaart of de kaart op hun telefoon.",
        "Er gaan geen persoonsgegevens door jouw kassa.",
        "Een DoggMatch-partnerbadge voor je etalage en website.",
      ],
      howTitle: "Zo gaat het in de praktijk",
      steps: [
        "Het lid noemt DoggMatch+ en laat zijn pasje zien.",
        "Je scant de QR-code met een willekeurige telefoon.",
        "De pagina toont Actief, met de datum tot wanneer.",
        "Je past je aanbod toe. Klaar in ongeveer vijf seconden.",
      ],
    },
    how: {
      eyebrow: "Zo werkt het",
      title: "Vier stappen, zonder kleine lettertjes om doorheen te ploeteren.",
      momentAlt: "Een glimlachende eigenaar met haar hond uit het asiel die tegen haar aan leunt buiten een café",
      caption: "We hebben liever een korte lijst met partners die we echt vertrouwen dan een lange die niemand leest.",
    },
    faq: {
      eyebrow: "Vragen",
      title: "Wat de meeste bedrijven ons als eerste vragen.",
    },
    enquiry: {
      eyebrow: "Neem contact op",
      title: "Word DoggMatch-partner.",
      body: "Vertel ons iets over je bedrijf en wat je zou willen aanbieden. Niets hier verplicht je tot iets — het is het begin van een gesprek.",
      thanksTitle: "Bedankt. Je aanvraag is onderweg.",
      thanksBody: "We hebben een korte bevestiging naar je inbox gestuurd, en een echt mens leest hem en reageert zo snel mogelijk.",
      again: "Nog een aanvraag versturen",
      genericError: "Sorry, we konden je aanvraag nu niet versturen. Probeer het straks nog eens.",
      fields: {
        company: { label: "Bedrijf", placeholder: "Naam van je bedrijf" },
        contact: { label: "Contactpersoon", placeholder: "Met wie we contact zullen hebben" },
        email: { label: "E-mail", placeholder: "jij@jouwbedrijf.com" },
        country: { label: "Land", placeholder: "Waar je gevestigd bent" },
        website: { label: "Website", hint: "Optioneel", placeholder: "jouwbedrijf.com" },
        category: { label: "Categorie", placeholder: "Kies de dichtstbijzijnde", other: "Iets anders" },
        offer: { label: "Voorgestelde korting of voordeel", hint: "Een ruw idee is prima", placeholder: "bijv. 15% korting op tuigjes en riemen, of een gratis eerste trimconsult" },
        message: { label: "Bericht", hint: "Optioneel — een zin of twee is genoeg", placeholder: "Vertel ons over je bedrijf, voor wie je zorgt, en alles wat je wilt weten." },
        honeypot: "Laat dit veld leeg",
      },
      sending: "Versturen…",
      submit: "Word DoggMatch-partner",
      privacy: "We gebruiken je gegevens alleen om je te antwoorden. Nergens anders voor.",
    },
  },
  fi: {
    hero: {
      eyebrow: "Kumppanit",
      title: "Näytä yrityksesi juuri koiran hankkineille ihmisille.",
      body: "DoggMatch auttaa ihmisiä valitsemaan oikean koiran ja elämään sitten hyvin sen kanssa. Jäsenemme ostavat petejä, varaavat aikoja trimmaajalle, etsivät eläinlääkärin ja suunnittelevat ensimmäistä matkaa pois kotoa. Kumppanina juuri sinut he löytävät — tarjouksella, joka saa heidät tulemaan luoksesi.",
      cta: "Ryhdy DoggMatch-kumppaniksi",
      note: "Ei listautumismaksua. Ei provisiota. Oikea ihminen vastaa.",
      imgAlt: "Koiranomistaja ja hänen kultainennoutajansa selailemassa itsenäisen lemmikkiliikkeen hyllyjä",
      caption: "Hetki, jolloin jäsen astuu liikkeeseesi, on koko pointti.",
    },
    why: {
      eyebrow: "Mitä saat",
      title: "Kuusi rehellistä syytä näkyä meillä.",
      groomingAlt: "Trimmaaja harjaa varovasti pientä terrieriä valoisassa salongissa",
      vetAlt: "Eläinlääkäri kuuntelee labradorin sydäntä omistajan istuessa vieressä",
    },
    categories: {
      eyebrow: "Keitä etsimme",
      title: "Kahdeksan yritystyyppiä, joista jäsenemme kysyvät eniten.",
      body: "Jos työsi tekee koiran kanssa elämisestä arjessa parempaa ja arvostat, että ohjaamme ystävän luoksesi, kuulut tänne.",
      outdoorsAlt: "Vaeltaja rannikkoreitillä auringonnousun aikaan yhdessä australianpaimenkoiransa kanssa",
      trainingAlt: "Kouluttaja kyykyssä border collien vieressä ulkona pidettävällä kurssilla",
    },
    verification: {
      eyebrow: "Tiskillä",
      title: "Yksi skannaus, ja tiedät heidän olevan jäsen.",
      body: "Jokaisella DoggMatch+-jäsenellä on kortti, jossa on QR-koodi. Suuntaa mikä tahansa puhelimen kamera siihen, ja avautuvalta sivulta näkee, onko jäsenyys voimassa ja mihin asti. Se on kaikki, mitä sivu näyttää — ei nimiä, ei osoitteita, ei mitään, mitä sinun täytyisi säilyttää tai huolehtia siitä.",
      points: [
        "Ei mitään asennettavaa, eikä kumppanin kirjautumistunnuksia muistettavaksi.",
        "Toimii sekä tulostetulta kortilta että puhelimessa olevalta kortilta.",
        "Mitään henkilötietoja ei kulje kassasi kautta.",
        "DoggMatch-kumppanimerkki ikkunaasi ja verkkosivullesi.",
      ],
      howTitle: "Näin se etenee käytännössä",
      steps: [
        "Jäsen mainitsee DoggMatch+:n ja näyttää korttinsa.",
        "Skannaat QR-koodin millä tahansa puhelimella.",
        "Sivu näyttää tekstin Voimassa sekä päivämäärän, mihin asti.",
        "Sovellat tarjoustasi. Valmista noin viidessä sekunnissa.",
      ],
    },
    how: {
      eyebrow: "Näin se toimii",
      title: "Neljä vaihetta, ilman pientä painettua tekstiä.",
      momentAlt: "Hymyilevä omistaja adoptiokoiransa kanssa nojaamassa häneen kahvilan ulkopuolella",
      caption: "Haluamme mieluummin lyhyen listan kumppaneista, joihin todella luotamme, kuin pitkän, jota kukaan ei lue.",
    },
    faq: {
      eyebrow: "Kysymyksiä",
      title: "Se, mitä useimmat yritykset kysyvät meiltä ensimmäisenä.",
    },
    enquiry: {
      eyebrow: "Ota yhteyttä",
      title: "Ryhdy DoggMatch-kumppaniksi.",
      body: "Kerro meille vähän yrityksestäsi ja siitä, mitä haluaisit tarjota. Mikään tässä ei sido sinua mihinkään — tämä on vasta keskustelun alku.",
      thanksTitle: "Kiitos. Tiedustelusi on matkalla.",
      thanksBody: "Lähetimme sähköpostiisi lyhyen vahvistuksen sen perillepääsystä, ja oikea ihminen lukee sen ja vastaa niin pian kuin mahdollista.",
      again: "Lähetä uusi tiedustelu",
      genericError: "Valitettavasti tiedusteluasi ei juuri nyt voitu lähettää. Yritä hetken kuluttua uudelleen.",
      fields: {
        company: { label: "Yritys", placeholder: "Yrityksesi nimi" },
        contact: { label: "Yhteyshenkilö", placeholder: "Kenen kanssa olemme yhteydessä" },
        email: { label: "Sähköposti", placeholder: "sina@yrityksesi.fi" },
        country: { label: "Maa", placeholder: "Missä toimit" },
        website: { label: "Verkkosivu", hint: "Valinnainen", placeholder: "yrityksesi.fi" },
        category: { label: "Kategoria", placeholder: "Valitse lähin", other: "Jokin muu" },
        offer: { label: "Ehdotettu alennus tai etu", hint: "Suuntaa antava idea riittää", placeholder: "esim. 15 % alennus valjaista ja hihnoista, tai maksuton ensimmäinen trimmauskonsultaatio" },
        message: { label: "Viesti", hint: "Valinnainen — lause tai kaksi riittää", placeholder: "Kerro yrityksestäsi, keitä hoidatte, ja mitä tahansa haluat tietää." },
        honeypot: "Jätä tämä kenttä tyhjäksi",
      },
      sending: "Lähetetään…",
      submit: "Ryhdy DoggMatch-kumppaniksi",
      privacy: "Käytämme tietojasi vain vastataksemme sinulle. Emme mihinkään muuhun.",
    },
  },
} as const;

const partnerFeatureCopy = {
  en: {
    hero: {
      reciprocal: "In return, your own customers get 25% off DoggMatch+ for their first year. No listing fee. No commission. You decide what you offer our members.",
      secondaryCta: "Let's talk",
    },
    mutual: {
      eyebrow: "A two-way benefit",
      title: "Simple for you. Useful for your customers.",
      body: "You decide what benefit you want to give our members. In return, we give your customers 25% off DoggMatch+ for their first year.",
      customerTitle: "For your customer",
      customerSteps: ["You share your unique partner code", "They join DoggMatch+", "They receive 25% off their first year"],
      memberTitle: "For a DoggMatch+ member",
      memberSteps: ["They show their QR member card", "You check it in a few seconds", "They receive the benefit you chose"],
      imageAlt: "A pet shop owner showing DoggMatch on her phone to a happy customer with his golden retriever",
      caption: "You keep control of your offer. We take care of your customers' first-year discount.",
    },
  },
  no: {
    hero: {
      reciprocal: "Til gjengjeld får dine egne kunder 25 % rabatt på DoggMatch+ det første året. Ingen oppføringsavgift. Ingen provisjon. Du bestemmer hva du tilbyr medlemmene våre.",
      secondaryCta: "La oss snakke sammen",
    },
    mutual: {
      eyebrow: "En fordel begge veier",
      title: "Enkelt for deg. Nyttig for kundene dine.",
      body: "Du bestemmer hvilken fordel du vil gi medlemmene våre. Til gjengjeld gir vi kundene dine 25 % rabatt på DoggMatch+ det første året.",
      customerTitle: "For kunden din",
      customerSteps: ["Du deler din unike partnerkode", "Kunden blir med i DoggMatch+", "Kunden får 25 % rabatt det første året"],
      memberTitle: "For et DoggMatch+-medlem",
      memberSteps: ["Medlemmet viser QR-kortet sitt", "Du sjekker det på noen sekunder", "Medlemmet får fordelen du har valgt"],
      imageAlt: "En dyrebutikkeier viser DoggMatch på telefonen til en fornøyd kunde med en golden retriever",
      caption: "Du beholder kontrollen over tilbudet ditt. Vi tar oss av kundenes rabatt det første året.",
    },
  },
  pl: {
    hero: {
      reciprocal: "W zamian twoi klienci otrzymują 25% zniżki na DoggMatch+ przez pierwszy rok. Bez opłaty za wpis. Bez prowizji. Ty decydujesz, co oferujesz naszym członkom.",
      secondaryCta: "Porozmawiajmy",
    },
    mutual: {
      eyebrow: "Korzyść dla obu stron",
      title: "Proste dla ciebie. Przydatne dla twoich klientów.",
      body: "Ty decydujesz, jaką korzyść zaoferujesz naszym członkom. W zamian dajemy twoim klientom 25% zniżki na DoggMatch+ przez pierwszy rok.",
      customerTitle: "Dla twojego klienta",
      customerSteps: ["Udostępniasz swój unikalny kod partnera", "Klient dołącza do DoggMatch+", "Otrzymuje 25% zniżki na pierwszy rok"],
      memberTitle: "Dla członka DoggMatch+",
      memberSteps: ["Pokazuje kartę członkowską z kodem QR", "Sprawdzasz ją w kilka sekund", "Otrzymuje wybraną przez ciebie korzyść"],
      imageAlt: "Właścicielka sklepu zoologicznego pokazuje DoggMatch na telefonie zadowolonemu klientowi z golden retrieverem",
      caption: "Zachowujesz kontrolę nad swoją ofertą. My zajmujemy się zniżką dla twoich klientów na pierwszy rok.",
    },
  },
  dk: {
    hero: {
      reciprocal: "Til gengæld får dine egne kunder 25 % rabat på DoggMatch+ det første år. Ingen listepris. Ingen provision. Du bestemmer, hvad du tilbyder vores medlemmer.",
      secondaryCta: "Lad os tale sammen",
    },
    mutual: {
      eyebrow: "En fordel begge veje",
      title: "Enkelt for dig. Nyttigt for dine kunder.",
      body: "Du bestemmer, hvilken fordel du vil give vores medlemmer. Til gengæld giver vi dine kunder 25 % rabat på DoggMatch+ det første år.",
      customerTitle: "For din kunde",
      customerSteps: ["Du deler din unikke partnerkode", "Kunden melder sig ind i DoggMatch+", "Kunden får 25 % rabat det første år"],
      memberTitle: "For et DoggMatch+-medlem",
      memberSteps: ["Medlemmet viser sit QR-medlemskort", "Du tjekker det på et par sekunder", "Medlemmet får den fordel, du har valgt"],
      imageAlt: "En dyrehandelsejer viser DoggMatch på sin telefon til en glad kunde med sin golden retriever",
      caption: "Du beholder kontrollen over dit tilbud. Vi tager os af dine kunders rabat det første år.",
    },
  },
  se: {
    hero: {
      reciprocal: "I gengäld får dina egna kunder 25 % rabatt på DoggMatch+ under det första året. Ingen listavgift. Ingen provision. Du bestämmer vad du erbjuder våra medlemmar.",
      secondaryCta: "Låt oss prata",
    },
    mutual: {
      eyebrow: "En fördel åt båda håll",
      title: "Enkelt för dig. Användbart för dina kunder.",
      body: "Du bestämmer vilken förmån du vill ge våra medlemmar. I gengäld ger vi dina kunder 25 % rabatt på DoggMatch+ under det första året.",
      customerTitle: "För din kund",
      customerSteps: ["Du delar din unika partnerkod", "Kunden blir medlem i DoggMatch+", "Kunden får 25 % rabatt det första året"],
      memberTitle: "För en DoggMatch+-medlem",
      memberSteps: ["De visar sitt QR-medlemskort", "Du kontrollerar det på några sekunder", "De får förmånen du valt"],
      imageAlt: "En djuraffärsägare visar DoggMatch på sin telefon för en nöjd kund med sin golden retriever",
      caption: "Du behåller kontrollen över ditt erbjudande. Vi tar hand om dina kunders rabatt det första året.",
    },
  },
  de: {
    hero: {
      reciprocal: "Im Gegenzug erhalten Ihre eigenen Kunden 25 % Rabatt auf DoggMatch+ im ersten Jahr. Keine Listungsgebühr. Keine Provision. Sie entscheiden, was Sie unseren Mitgliedern anbieten.",
      secondaryCta: "Lassen Sie uns sprechen",
    },
    mutual: {
      eyebrow: "Ein Vorteil für beide Seiten",
      title: "Einfach für Sie. Nützlich für Ihre Kunden.",
      body: "Sie entscheiden, welchen Vorteil Sie unseren Mitgliedern geben möchten. Im Gegenzug geben wir Ihren Kunden 25 % Rabatt auf DoggMatch+ im ersten Jahr.",
      customerTitle: "Für Ihren Kunden",
      customerSteps: ["Sie teilen Ihren einzigartigen Partnercode", "Der Kunde tritt DoggMatch+ bei", "Er erhält 25 % Rabatt im ersten Jahr"],
      memberTitle: "Für ein DoggMatch+-Mitglied",
      memberSteps: ["Es zeigt seine QR-Mitgliedskarte", "Sie prüfen sie in wenigen Sekunden", "Es erhält den von Ihnen gewählten Vorteil"],
      imageAlt: "Eine Zoofachhändlerin zeigt DoggMatch auf ihrem Handy einer zufriedenen Kundin mit ihrem Golden Retriever",
      caption: "Sie behalten die Kontrolle über Ihr Angebot. Wir kümmern uns um den Erstjahresrabatt Ihrer Kunden.",
    },
  },
  fr: {
    hero: {
      reciprocal: "En échange, vos propres clients bénéficient de 25 % de réduction sur DoggMatch+ pour leur première année. Pas de frais de référencement. Pas de commission. Vous décidez ce que vous offrez à nos membres.",
      secondaryCta: "Discutons-en",
    },
    mutual: {
      eyebrow: "Un avantage dans les deux sens",
      title: "Simple pour vous. Utile pour vos clients.",
      body: "Vous décidez quel avantage vous souhaitez offrir à nos membres. En échange, nous offrons à vos clients 25 % de réduction sur DoggMatch+ pour leur première année.",
      customerTitle: "Pour votre client",
      customerSteps: ["Vous partagez votre code partenaire unique", "Il rejoint DoggMatch+", "Il reçoit 25 % de réduction pour sa première année"],
      memberTitle: "Pour un membre DoggMatch+",
      memberSteps: ["Il montre sa carte de membre QR", "Vous la vérifiez en quelques secondes", "Il reçoit l'avantage que vous avez choisi"],
      imageAlt: "Une propriétaire d'animalerie montrant DoggMatch sur son téléphone à une cliente satisfaite avec son golden retriever",
      caption: "Vous gardez le contrôle de votre offre. Nous nous occupons de la réduction de première année de vos clients.",
    },
  },
  nl: {
    hero: {
      reciprocal: "In ruil daarvoor krijgen jouw eigen klanten 25% korting op DoggMatch+ voor hun eerste jaar. Geen vermeldingskosten. Geen commissie. Jij bepaalt wat je onze leden aanbiedt.",
      secondaryCta: "Laten we praten",
    },
    mutual: {
      eyebrow: "Een voordeel voor beide kanten",
      title: "Eenvoudig voor jou. Nuttig voor je klanten.",
      body: "Jij bepaalt welk voordeel je onze leden wilt geven. In ruil daarvoor geven wij jouw klanten 25% korting op DoggMatch+ voor hun eerste jaar.",
      customerTitle: "Voor jouw klant",
      customerSteps: ["Je deelt jouw unieke partnercode", "De klant wordt lid van DoggMatch+", "De klant krijgt 25% korting in het eerste jaar"],
      memberTitle: "Voor een DoggMatch+-lid",
      memberSteps: ["Ze laten hun QR-ledenpas zien", "Je controleert hem in een paar seconden", "Ze krijgen het voordeel dat jij hebt gekozen"],
      imageAlt: "Een dierenwinkeleigenaar laat DoggMatch op haar telefoon zien aan een tevreden klant met zijn golden retriever",
      caption: "Jij behoudt de controle over je aanbod. Wij zorgen voor de korting in het eerste jaar van je klanten.",
    },
  },
  fi: {
    hero: {
      reciprocal: "Vastineeksi omat asiakkaasi saavat 25 % alennuksen DoggMatch+:sta ensimmäiseltä vuodelta. Ei listautumismaksua. Ei provisiota. Sinä päätät, mitä tarjoat jäsenillemme.",
      secondaryCta: "Jutellaan",
    },
    mutual: {
      eyebrow: "Molemminpuolinen etu",
      title: "Yksinkertaista sinulle. Hyödyllistä asiakkaillesi.",
      body: "Sinä päätät, minkä edun haluat antaa jäsenillemme. Vastineeksi annamme asiakkaillesi 25 % alennuksen DoggMatch+:sta ensimmäiseltä vuodelta.",
      customerTitle: "Asiakkaallesi",
      customerSteps: ["Jaat ainutlaatuisen kumppanikoodisi", "Asiakas liittyy DoggMatch+:aan", "Asiakas saa 25 % alennuksen ensimmäisestä vuodesta"],
      memberTitle: "DoggMatch+-jäsenelle",
      memberSteps: ["Jäsen näyttää QR-jäsenkorttinsa", "Tarkistat sen muutamassa sekunnissa", "Jäsen saa valitsemasi edun"],
      imageAlt: "Lemmikkiliikkeen omistaja näyttää DoggMatchia puhelimestaan tyytyväiselle asiakkaalle, jolla on kultainennoutaja",
      caption: "Sinä pidät hallinnan tarjouksestasi. Me huolehdimme asiakkaidesi ensimmäisen vuoden alennuksesta.",
    },
  },
} as const;

/**
 * Detailed partner-type sections. English is the source language — other
 * locales fall back to English here until they are translated.
 */
const partnerTypesCopy = {
  en: {
    askTitle: "What members usually ask for",
    offerTitle: "Offers that work well",
    types: [
      {
        id: "equipment",
        title: "Pet shops & equipment",
        tagline: "The first weeks with a new dog involve a lot of shopping — and members come in with questions, not just a list.",
        ask: [
          "Harness and lead fitting that actually fits",
          "Help choosing beds, crates and toys that last",
          "Honest food advice without the brand push",
        ],
        offers: [
          "A percentage off a first fitting visit",
          "A new-dog starter bundle",
          "A standing member discount on everyday kit",
        ],
      },
      {
        id: "grooming",
        title: "Groomers",
        tagline: "A calm groomer is worth their weight in gold, especially for puppies and nervous rescues.",
        ask: [
          "A gentle first puppy trim",
          "Patient handling of anxious dogs",
          "Regular appointments they can rely on",
        ],
        offers: [
          "A reduced-price first visit",
          "A free nail trim alongside a groom",
          "Priority rebooking for members",
        ],
      },
      {
        id: "training",
        title: "Trainers",
        tagline: "From puppy class to a rescue dog's first recall, members look for reward-based help they can trust.",
        ask: [
          "Puppy classes with small groups",
          "Help with recall, loose-lead walking and jumping up",
          "One-to-one support for a rescue settling in",
        ],
        offers: [
          "A free or reduced intro session",
          "A percentage off a course",
          "A members-only class or drop-in evening",
        ],
      },
      {
        id: "vet",
        title: "Veterinary clinics",
        tagline: "New owners want a clinic that explains things plainly and doesn't rush. That first introduction is worth making well.",
        ask: [
          "First check-ups and vaccination plans",
          "Clear guidance on insurance and microchipping",
          "Someone to call when they're not sure it's urgent",
        ],
        offers: [
          "A free or reduced first consultation",
          "A welcome health-check at member price",
          "Microchipping bundled with a first visit",
        ],
      },
      {
        id: "boarding",
        title: "Boarding & daycare",
        tagline: "The first night away is a big step. Members want to meet the people and see the place before they book.",
        ask: [
          "A trial day or a short stay to start with",
          "Weekend and holiday cover they can plan around",
          "Regular daycare with a familiar routine",
        ],
        offers: [
          "A free or half-price trial day",
          "A percentage off a first stay",
          "An off-peak member rate",
        ],
      },
    ],
    alsoTitle: "Also very welcome",
    alsoBody: "If your work touches a dog's everyday life in any other way, we'd still like to hear from you.",
  },
} as const;

function PartnersPage() {
  return (
    <div>
      <Hero />
      <Why />
      <MutualBenefit />
      <Categories />
      <Verification />
      <How />
      <Faq />
      <EnquirySection />
    </div>
  );
}

/* ------------------------------------------------------------------ Hero */

function Hero() {
  const c = useCopy(copy).hero;
  const feature = useCopy(partnerFeatureCopy).hero;
  return (
    <section className="container-page pt-12 pb-6 md:pt-20">
      <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <div>
          <Eyebrow>{c.eyebrow}</Eyebrow>
          <h1 className="display-lg mt-6 text-balance">{c.title}</h1>
          <ShareBar className="mt-6" />
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">{c.body}</p>
          <p className="mt-5 max-w-xl text-lg font-medium leading-relaxed text-foreground">
            {feature.reciprocal}
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#enquiry"
              className="group inline-flex h-14 shrink-0 items-center justify-center gap-2.5 whitespace-nowrap rounded-full bg-primary px-8 text-base font-medium text-primary-foreground shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-[1px] hover:shadow-[var(--shadow-lift)]"
            >
              {c.cta}
              <Arrow />
            </a>
            <a href="#enquiry" className="inline-flex h-14 shrink-0 items-center whitespace-nowrap rounded-full border border-border-strong px-6 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent">
              {feature.secondaryCta}
            </a>
          </div>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">{c.note}</p>
        </div>

        <figure className="relative">
          <div className="overflow-hidden rounded-[2rem] border border-border">
            <img
              src={partnerHero}
              alt={c.imgAlt}
              width={1600}
              height={1104}
              className="h-full w-full object-cover"
            />
          </div>
          <figcaption className="mt-4 text-sm text-muted-foreground">{c.caption}</figcaption>
        </figure>
      </div>
    </section>
  );
}

/* ------------------------------------------------------- Mutual benefit */

function MutualBenefit() {
  const c = useCopy(partnerFeatureCopy).mutual;
  const flows = [
    { title: c.customerTitle, icon: BadgePercent, steps: c.customerSteps },
    { title: c.memberTitle, icon: QrCode, steps: c.memberSteps },
  ] as const;

  return (
    <Section className="border-y border-border bg-surface">
      <div className="container-page">
        <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <div>
            <Eyebrow>{c.eyebrow}</Eyebrow>
            <h2 className="display-md mt-6 max-w-xl text-balance">{c.title}</h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">{c.body}</p>

            <div className="mt-9 grid gap-4">
              {flows.map(({ title: flowTitle, icon: Icon, steps }) => (
                <div key={flowTitle} className="rounded-3xl border border-border bg-background p-6 md:p-7">
                  <div className="flex items-center gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-full bg-accent/10 text-accent">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h3 className="font-display text-xl tracking-tight">{flowTitle}</h3>
                  </div>
                  <ol className="mt-5 grid gap-3 sm:grid-cols-[1fr_auto_1fr_auto_1fr] sm:items-center">
                    {steps.map((step, index) => (
                      <li key={step} className="contents">
                        <span className="text-sm leading-relaxed text-muted-foreground">{step}</span>
                        {index < steps.length - 1 && <ArrowRight className="hidden h-4 w-4 text-accent sm:block" aria-hidden />}
                      </li>
                    ))}
                  </ol>
                </div>
              ))}
            </div>
          </div>

          <figure>
            <img
              src={partnerCustomerDoggMatch}
              alt={c.imageAlt}
              loading="lazy"
              width={1600}
              height={1072}
              className="aspect-[4/3] w-full rounded-[2rem] border border-border object-cover"
            />
            <figcaption className="mt-4 text-sm leading-relaxed text-muted-foreground">{c.caption}</figcaption>
          </figure>
        </div>
      </div>
    </Section>
  );
}

/* ------------------------------------------------------------------ Why */

function Why() {
  const c = useCopy(copy).why;
  const { partnerBenefits } = partnersContent();
  return (
    <Section className="container-page">
      <Eyebrow>{c.eyebrow}</Eyebrow>
      <h2 className="display-md mt-6 max-w-2xl text-balance">{c.title}</h2>

      <div className="mt-14 grid gap-x-10 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
        {partnerBenefits.map((b) => (
          <article key={b.id}>
            <span className="grid h-11 w-11 place-items-center rounded-full bg-accent/10 text-accent">
              <Handshake className="h-5 w-5" aria-hidden />
            </span>
            <h3 className="mt-5 font-display text-xl tracking-tight text-foreground">{b.title}</h3>
            <p className="mt-3 text-[0.9375rem] leading-relaxed text-muted-foreground">{b.body}</p>
          </article>
        ))}
      </div>

      <div className="mt-16 grid gap-5 sm:grid-cols-2">
        <img
          src={partnerGrooming}
          alt={c.groomingAlt}
          loading="lazy"
          width={1200}
          height={912}
          className="h-64 w-full rounded-[1.75rem] border border-border object-cover md:h-80"
        />
        <img
          src={partnerVet}
          alt={c.vetAlt}
          loading="lazy"
          width={1200}
          height={912}
          className="h-64 w-full rounded-[1.75rem] border border-border object-cover md:h-80"
        />
      </div>
    </Section>
  );
}

/* ------------------------------------------------------------ Categories */

function Categories() {
  const c = useCopy(copy).categories;
  const t = useCopy(partnerTypesCopy);
  const { partnerCategories } = partnersContent();
  const alsoWelcome = partnerCategories.filter((cat) =>
    ["insurance", "food", "travel"].includes(cat.id),
  );
  return (
    <Section className="border-y border-border bg-surface">
      <div className="container-page">
        <Eyebrow>{c.eyebrow}</Eyebrow>
        <h2 className="display-md mt-6 max-w-2xl text-balance">{c.title}</h2>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">{c.body}</p>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {t.types.map((type) => {
            const Icon = categoryIcons[type.id] ?? ShoppingBag;
            return (
              <article
                key={type.id}
                className="rounded-[1.75rem] border border-border bg-background p-7 transition-colors hover:border-foreground/20 md:p-8"
              >
                <div className="flex items-center gap-3.5">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-accent/10 text-accent">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="font-display text-xl tracking-tight">{type.title}</h3>
                </div>
                <p className="mt-4 text-[0.9375rem] leading-relaxed text-muted-foreground">
                  {type.tagline}
                </p>
                <div className="mt-6 grid gap-6 sm:grid-cols-2">
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-[0.12em] text-foreground/70">
                      {t.askTitle}
                    </h4>
                    <ul className="mt-3 space-y-2.5">
                      {type.ask.map((line) => (
                        <li key={line} className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" strokeWidth={2.4} aria-hidden />
                          <span>{line}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-[0.12em] text-foreground/70">
                      {t.offerTitle}
                    </h4>
                    <ul className="mt-3 space-y-2.5">
                      {type.offers.map((line) => (
                        <li key={line} className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground">
                          <BadgePercent className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden />
                          <span>{line}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-8 rounded-[1.75rem] border border-dashed border-border-strong bg-background/60 p-6 md:p-7">
          <h3 className="font-display text-lg tracking-tight">{t.alsoTitle}</h3>
          <div className="mt-4 flex flex-wrap gap-3">
            {alsoWelcome.map((cat) => {
              const Icon = categoryIcons[cat.id] ?? ShoppingBag;
              return (
                <span
                  key={cat.id}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm text-foreground"
                >
                  <Icon className="h-4 w-4 text-accent" aria-hidden />
                  {cat.label}
                </span>
              );
            })}
          </div>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">{t.alsoBody}</p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-[1.3fr_1fr]">
          <img
            src={partnerOutdoors}
            alt={c.outdoorsAlt}
            loading="lazy"
            width={1600}
            height={912}
            className="h-64 w-full rounded-[1.75rem] border border-border object-cover md:h-96"
          />
          <img
            src={partnerTraining}
            alt={c.trainingAlt}
            loading="lazy"
            width={1200}
            height={912}
            className="h-64 w-full rounded-[1.75rem] border border-border object-cover md:h-96"
          />
        </div>
      </div>
    </Section>
  );
}

/* ---------------------------------------------------------- Verification */

function Verification() {
  const c = useCopy(copy).verification;
  return (
    <Section className="container-page">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <Eyebrow>{c.eyebrow}</Eyebrow>
          <h2 className="display-md mt-6 text-balance">{c.title}</h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{c.body}</p>
          <ul className="mt-8 space-y-4">
            {c.points.map((line) => (
              <li key={line} className="flex gap-3 text-[0.9375rem] leading-relaxed">
                <Check className="mt-1 h-4 w-4 shrink-0 text-accent" strokeWidth={2.4} aria-hidden />
                <span className="text-muted-foreground">{line}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-[2rem] border border-border bg-surface p-8 md:p-10">
          <span className="grid h-12 w-12 place-items-center rounded-2xl bg-primary text-primary-foreground">
            <QrCode className="h-6 w-6" aria-hidden />
          </span>
          <h3 className="mt-6 font-display text-2xl tracking-tight">{c.howTitle}</h3>
          <ol className="mt-6 space-y-5">
            {c.steps.map((step, i) => (
              <li key={step} className="flex gap-4">
                <span className="font-mono text-sm text-accent">0{i + 1}</span>
                <span className="text-[0.9375rem] leading-relaxed text-muted-foreground">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </Section>
  );
}

/* ------------------------------------------------------------------ How */

function How() {
  const c = useCopy(copy).how;
  const { partnerSteps } = partnersContent();
  return (
    <Section className="border-y border-border bg-surface">
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <div>
            <Eyebrow>{c.eyebrow}</Eyebrow>
            <h2 className="display-md mt-6 text-balance">{c.title}</h2>
            <ol className="mt-12 space-y-10">
              {partnerSteps.map((s) => (
                <li key={s.no} className="grid grid-cols-[auto_1fr] gap-6">
                  <span className="font-mono text-sm text-accent">{s.no}</span>
                  <div>
                    <h3 className="font-display text-xl tracking-tight">{s.title}</h3>
                    <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted-foreground">
                      {s.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <figure className="lg:sticky lg:top-28 lg:self-start">
            <img
              src={partnerMoment}
              alt={c.momentAlt}
              loading="lazy"
              width={1200}
              height={912}
              className="w-full rounded-[2rem] border border-border object-cover"
            />
            <figcaption className="mt-4 text-sm leading-relaxed text-muted-foreground">{c.caption}</figcaption>
          </figure>
        </div>
      </div>
    </Section>
  );
}

/* ------------------------------------------------------------------ FAQ */

function Faq() {
  const c = useCopy(copy).faq;
  const { partnerFaq } = partnersContent();
  return (
    <Section className="container-page">
      <Eyebrow>{c.eyebrow}</Eyebrow>
      <h2 className="display-md mt-6 max-w-2xl text-balance">{c.title}</h2>
      <dl className="mt-12 grid gap-x-12 gap-y-10 md:grid-cols-2">
        {partnerFaq.map((f) => (
          <div key={f.q}>
            <dt className="font-display text-lg tracking-tight text-foreground">{f.q}</dt>
            <dd className="mt-2 text-[0.9375rem] leading-relaxed text-muted-foreground">{f.a}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}

/* -------------------------------------------------------------- Enquiry */

const fieldClass =
  "w-full rounded-2xl border border-border-strong bg-background px-4 py-3.5 text-base text-foreground placeholder:text-muted-foreground/70 transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/40";

function EnquirySection() {
  const c = useCopy(copy).enquiry;
  const { partnerCategories } = partnersContent();
  const send = useServerFn(sendPartnerEnquiry);
  const formRef = useRef<HTMLFormElement>(null);
  const [busy, setBusy] = useState(false);
  const [done, setDone] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formError, setFormError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (busy) return;
    setBusy(true);
    setFormError(null);
    setErrors({});

    const fd = new FormData(e.currentTarget);
    const payload = {
      company: String(fd.get("company") ?? ""),
      contact: String(fd.get("contact") ?? ""),
      email: String(fd.get("email") ?? ""),
      country: String(fd.get("country") ?? ""),
      website: String(fd.get("website") ?? ""),
      category: String(fd.get("category") ?? ""),
      offer: String(fd.get("offer") ?? ""),
      message: String(fd.get("message") ?? ""),
      fax: String(fd.get("fax") ?? ""),
    };

    try {
      const res = await send({ data: payload });
      if (res.ok) {
        formRef.current?.reset();
        setDone(true);
      } else {
        setErrors(res.fieldErrors ?? {});
        setFormError(res.message);
      }
    } catch {
      setFormError(c.genericError);
    } finally {
      setBusy(false);
    }
  }

  return (
    <Section id="enquiry" className="border-t border-border bg-surface scroll-mt-24">
      <div className="container-page max-w-3xl">
        <Eyebrow>{c.eyebrow}</Eyebrow>
        <h2 className="display-md mt-6 text-balance">{c.title}</h2>
        <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{c.body}</p>

        {done ? (
          <div className="animate-fade mt-10 rounded-3xl border border-border bg-background p-8 md:p-10">
            <span className="grid h-12 w-12 place-items-center rounded-full bg-accent text-accent-foreground">
              <Check className="h-6 w-6" strokeWidth={2} aria-hidden />
            </span>
            <h3 className="mt-6 font-display text-2xl tracking-tight text-foreground">{c.thanksTitle}</h3>
            <p className="mt-3 text-muted-foreground">{c.thanksBody}</p>
            <Button tone="outline" className="mt-7" type="button" onClick={() => setDone(false)}>
              {c.again}
              <Arrow />
            </Button>
          </div>
        ) : (
          <form ref={formRef} onSubmit={onSubmit} noValidate className="mt-10 space-y-6">
            {formError && (
              <p
                role="alert"
                className="animate-fade rounded-2xl border border-destructive/40 bg-destructive/10 px-4 py-3 text-sm text-foreground"
              >
                {formError}
              </p>
            )}

            <div className="grid gap-6 sm:grid-cols-2">
              <Field label={c.fields.company.label} id="company" error={errors["company"]}>
                <input
                  id="company"
                  name="company"
                  required
                  maxLength={150}
                  autoComplete="organization"
                  placeholder={c.fields.company.placeholder}
                  className={fieldClass}
                />
              </Field>

              <Field label={c.fields.contact.label} id="contact" error={errors["contact"]}>
                <input
                  id="contact"
                  name="contact"
                  required
                  maxLength={100}
                  autoComplete="name"
                  placeholder={c.fields.contact.placeholder}
                  className={fieldClass}
                />
              </Field>

              <Field label={c.fields.email.label} id="email" error={errors["email"]}>
                <input
                  id="email"
                  name="email"
                  type="email"
                  inputMode="email"
                  required
                  maxLength={255}
                  autoComplete="email"
                  placeholder={c.fields.email.placeholder}
                  className={fieldClass}
                />
              </Field>

              <Field label={c.fields.country.label} id="country" error={errors["country"]}>
                <input
                  id="country"
                  name="country"
                  required
                  maxLength={80}
                  autoComplete="country-name"
                  placeholder={c.fields.country.placeholder}
                  className={fieldClass}
                />
              </Field>

              <Field label={c.fields.website.label} id="website" hint={c.fields.website.hint} error={errors["website"]}>
                <input
                  id="website"
                  name="website"
                  maxLength={200}
                  autoComplete="url"
                  placeholder={c.fields.website.placeholder}
                  className={fieldClass}
                />
              </Field>

              <Field label={c.fields.category.label} id="category" error={errors["category"]}>
                <select
                  id="category"
                  name="category"
                  required
                  defaultValue=""
                  className={cn(fieldClass, "appearance-none")}
                >
                  <option value="" disabled>
                    {c.fields.category.placeholder}
                  </option>
                  {partnerCategories.map((cat) => (
                    <option key={cat.id} value={cat.label}>
                      {cat.label}
                    </option>
                  ))}
                  <option value="Something else">{c.fields.category.other}</option>
                </select>
              </Field>
            </div>

            <Field
              label={c.fields.offer.label}
              id="offer"
              hint={c.fields.offer.hint}
              error={errors["offer"]}
            >
              <input
                id="offer"
                name="offer"
                required
                maxLength={300}
                placeholder={c.fields.offer.placeholder}
                className={fieldClass}
              />
            </Field>

            <Field label={c.fields.message.label} id="message" hint={c.fields.message.hint} error={errors["message"]}>
              <textarea
                id="message"
                name="message"
                rows={5}
                maxLength={4000}
                placeholder={c.fields.message.placeholder}
                className={cn(fieldClass, "resize-y leading-relaxed")}
              />
            </Field>

            {/* Honeypot — hidden from people, catnip for bots. */}
            <div aria-hidden="true" className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
              <label htmlFor="fax">{c.fields.honeypot}</label>
              <input id="fax" name="fax" tabIndex={-1} autoComplete="off" />
            </div>

            <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center">
              <Button type="submit" size="lg" disabled={busy} className="w-full sm:w-auto">
                <Handshake className="h-4 w-4" aria-hidden />
                {busy ? c.sending : c.submit}
              </Button>
              <p className="text-sm text-muted-foreground">{c.privacy}</p>
            </div>
          </form>
        )}
      </div>
    </Section>
  );
}

function Field({
  label,
  id,
  hint,
  error,
  children,
}: {
  label: string;
  id: string;
  hint?: string;
  error?: string | undefined;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2 flex items-baseline gap-2 text-sm font-medium text-foreground"
      >
        {label}
        {hint && <span className="text-xs font-normal text-muted-foreground">{hint}</span>}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} role="alert" className="mt-2 text-sm text-destructive">
          {error}
        </p>
      )}
    </div>
  );
}
