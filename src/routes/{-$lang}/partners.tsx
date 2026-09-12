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
        message: { label: "Message", placeholder: "Tell us about your business, who you look after, and anything you'd like to know." },
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
        message: { label: "Melding", placeholder: "Fortell oss om bedriften din, hvem dere er til for, og alt du lurer på." },
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
        message: { label: "Wiadomość", placeholder: "Opowiedz nam o swojej firmie, kim się opiekujecie i o czym chciałbyś/chciałabyś wiedzieć." },
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
        message: { label: "Besked", placeholder: "Fortæl os om din virksomhed, hvem I tager jer af, og alt, du gerne vil vide." },
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
        message: { label: "Meddelande", placeholder: "Berätta om ditt företag, vilka ni tar hand om, och allt du undrar över." },
        honeypot: "Lämna detta fält tomt",
      },
      sending: "Skickar…",
      submit: "Bli DoggMatch-partner",
      privacy: "Vi använder bara dina uppgifter för att svara dig. Inget annat.",
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
        message: { label: "Viesti", placeholder: "Kerro yrityksestäsi, keitä hoidatte, ja mitä tahansa haluat tietää." },
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
  const { partnerCategories } = partnersContent();
  return (
    <Section className="border-y border-border bg-surface">
      <div className="container-page">
        <Eyebrow>{c.eyebrow}</Eyebrow>
        <h2 className="display-md mt-6 max-w-2xl text-balance">{c.title}</h2>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">{c.body}</p>

        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {partnerCategories.map((cat) => {
            const Icon = categoryIcons[cat.id] ?? ShoppingBag;
            return (
              <li
                key={cat.id}
                className="rounded-[1.5rem] border border-border bg-background p-6 transition-colors hover:border-foreground/20"
              >
                <span className="grid h-10 w-10 place-items-center rounded-full border border-border-strong text-foreground">
                  <Icon className="h-[1.1rem] w-[1.1rem]" aria-hidden />
                </span>
                <h3 className="mt-5 font-display text-lg tracking-tight">{cat.label}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{cat.blurb}</p>
              </li>
            );
          })}
        </ul>

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

            <Field label={c.fields.message.label} id="message" error={errors["message"]}>
              <textarea
                id="message"
                name="message"
                required
                rows={7}
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
