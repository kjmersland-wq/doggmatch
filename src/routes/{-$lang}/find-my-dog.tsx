import { Link, createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { ChevronDown } from "lucide-react";
import { useT, interpolate, useCopy } from "@/i18n";
import { withLangPrefix } from "@/lib/localized-path";

const resultCopy = {
  en: {
    scoreNote: "Based on everything you told us, including the limits you said you couldn't stretch.",
    essentials: ["A bed and a safe space", "Collar, lead and tag", "Food and mealtimes", "Insurance and vet care"],
    suited: "Suited to a {breed}.",
    ownDogTitle: "And the dog you already have",
    ownDogMixed:
      "Scored from {name}'s own characteristics — size, energy, how much exercise they need, how they are with people — not from a breed label.",
    ownDogPure:
      "Scored from what we know about {name}, breed included.",
    ownDogUnknown:
      "You told us {name} is a mix with unknown parentage, so we haven't guessed at breeds. This is your dog, as you described them.",
    ownDogFit: "Fit with the life you described",
    ownDogEdit: "Add more about {name}",
    fitsTitle: "Why This Fits You",
    fitsNone: "Nothing stood out clearly here — but every dog is worth meeting in person.",
    tradeTitle: "Trade-offs & Watch-outs",
    tradeNone: "Nothing here worked against you, going by your answers.",
    breakdownHonesty:
      "This is a lifestyle compatibility reading, not a scientific measurement — it compares what you told us with what this breed usually needs.",
    thirtyDaysTitle: "Your First 30 Days with a {breed}",
    budgetTitle: "Estimated setup budget",
    budgetGear: "Initial gear — bed, crate, lead, bowls, toys",
    budgetGearRange: "€150–350",
    budgetVet: "First vet visit, vaccinations & microchipping",
    budgetVetRange: "€80–180",
    budgetInsurance: "First month of pet insurance",
    budgetInsuranceRange: "€15–40",
    budgetNote: "A general starting point — actual costs vary by country, breeder and vet practice.",
    checklistTitle: "Home-prep checklist",
    checklistItems: [
      "Set up one calm, enclosed room as a safe space before they arrive",
      "Lock away household chemicals, medication and anything chokable",
      "Tuck away or cover loose cables and cords",
      "Fit a stair-gate or barrier if you have stairs, a pool or a pond",
      "Store food, chocolate and anything toxic to dogs well out of reach",
    ],
    plusLinkLabel: "Track daily schedules & routines in DoggMatch+",
  },
  no: {
    scoreNote: "Basert på alt du har fortalt oss, også grensene du sa du ikke kunne tøye.",
    essentials: ["En seng og et trygt sted", "Halsbånd, bånd og ID-brikke", "Mat og faste måltider", "Forsikring og veterinær"],
    suited: "Tilpasset en {breed}.",
    ownDogTitle: "Og hunden du allerede har",
    ownDogMixed:
      "Regnet ut fra {name} sine egne egenskaper — størrelse, energi, mosjonsbehov, hvordan den er med folk — ikke fra en rasemerkelapp.",
    ownDogPure:
      "Regnet ut fra det vi vet om {name}, rasen inkludert.",
    ownDogUnknown:
      "Du har fortalt oss at {name} er en blanding med ukjent opphav, så vi gjetter ikke på raser. Dette er hunden din, slik du har beskrevet den.",
    ownDogFit: "Passer med livet du beskrev",
    ownDogEdit: "Fortell mer om {name}",
    fitsTitle: "Hvorfor dette passer deg",
    fitsNone: "Ingenting pekte seg tydelig ut her — men møt gjerne hunden i virkeligheten.",
    tradeTitle: "Ting du bør være forberedt på",
    tradeNone: "Ingenting her talte imot deg, ut fra svarene dine.",
    breakdownHonesty:
      "Dette er en lesning av livsstilskompatibilitet, ikke en vitenskapelig måling — den sammenligner det du fortalte oss med det denne rasen vanligvis trenger.",
    thirtyDaysTitle: "De første 30 dagene sammen med en {breed}",
    budgetTitle: "Anslått oppstartsbudsjett",
    budgetGear: "Startutstyr — seng, bur, bånd, boller, leker",
    budgetGearRange: "150–350 €",
    budgetVet: "Første veterinærbesøk, vaksiner og ID-merking",
    budgetVetRange: "80–180 €",
    budgetInsurance: "Første måned med forsikring",
    budgetInsuranceRange: "15–40 €",
    budgetNote: "Et generelt utgangspunkt — faktiske kostnader varierer med land, oppdretter og veterinær.",
    checklistTitle: "Sjekkliste for hjemmet",
    checklistItems: [
      "Sett i stand ett rolig, avgrenset rom som trygt sted før hunden kommer",
      "Lås inn husholdningskjemikalier, medisiner og alt som kan svelges",
      "Gjem eller dekk til løse ledninger og kabler",
      "Sett opp grind eller sperre ved trapper, basseng eller dam",
      "Oppbevar mat, sjokolade og alt giftig for hunder utilgjengelig",
    ],
    plusLinkLabel: "Følg daglige rutiner og planer i DoggMatch+",
  },
  pl: {
    scoreNote: "Na podstawie wszystkiego, co nam powiedziałeś/aś, w tym granic, których — jak zaznaczyłeś/aś — nie chcesz przekraczać.",
    essentials: ["Legowisko i bezpieczne miejsce", "Obroża, smycz i zawieszka", "Jedzenie i stałe pory posiłków", "Ubezpieczenie i opieka weterynaryjna"],
    suited: "Dopasowane do {breed}.",
    ownDogTitle: "A co z psem, którego już masz",
    ownDogMixed:
      "Ocenione na podstawie własnych cech {name} — rozmiaru, energii, potrzeby ruchu, relacji z ludźmi — a nie etykietki rasy.",
    ownDogPure:
      "Ocenione na podstawie tego, co wiemy o {name}, łącznie z rasą.",
    ownDogUnknown:
      "Powiedziałeś/aś nam, że {name} to mieszaniec o nieznanym pochodzeniu, więc nie zgadujemy ras. To Twój pies, taki, jakim go opisałeś/aś.",
    ownDogFit: "Dopasowanie do życia, które opisałeś/aś",
    ownDogEdit: "Dodaj więcej informacji o {name}",
    fitsTitle: "Dlaczego to do Ciebie pasuje",
    fitsNone: "Nic tu wyraźnie się nie wyróżniło — ale warto poznać psa osobiście.",
    tradeTitle: "Wyzwania i kompromisy",
    tradeNone: "Nic tutaj nie przemawiało przeciwko tobie, sądząc po twoich odpowiedziach.",
    breakdownHonesty:
      "To odczyt zgodności stylu życia, a nie pomiar naukowy — porównuje to, co nam powiedziałeś/aś, z tym, czego zwykle potrzebuje ta rasa.",
    thirtyDaysTitle: "Wasze pierwsze 30 dni razem z {breed}",
    budgetTitle: "Szacowany budżet startowy",
    budgetGear: "Podstawowy sprzęt — legowisko, kojec, smycz, miski, zabawki",
    budgetGearRange: "150–350 €",
    budgetVet: "Pierwsza wizyta u weterynarza, szczepienia i czipowanie",
    budgetVetRange: "80–180 €",
    budgetInsurance: "Pierwszy miesiąc ubezpieczenia",
    budgetInsuranceRange: "15–40 €",
    budgetNote: "Ogólny punkt wyjścia — rzeczywiste koszty zależą od kraju, hodowcy i weterynarza.",
    checklistTitle: "Lista przygotowań w domu",
    checklistItems: [
      "Przygotuj jeden spokojny, zamknięty pokój jako bezpieczną strefę, zanim pies się pojawi",
      "Zamknij środki chemiczne, leki i wszystko, co można połknąć",
      "Schowaj lub zabezpiecz luźne kable i przewody",
      "Zamontuj bramkę lub barierę przy schodach, basenie lub oczku wodnym",
      "Trzymaj jedzenie, czekoladę i wszystko toksyczne dla psów poza zasięgiem",
    ],
    plusLinkLabel: "Śledź codzienne plany i rutyny w DoggMatch+",
  },
  dk: {
    scoreNote: "Baseret på alt du har fortalt os, også de grænser du sagde du ikke kunne rykke.",
    essentials: ["En seng og et trygt sted", "Halsbånd, snor og tag", "Mad og faste måltider", "Forsikring og dyrlæge"],
    suited: "Passer til en {breed}.",
    ownDogTitle: "Og hunden du allerede har",
    ownDogMixed:
      "Vurderet ud fra {name}s egne egenskaber — størrelse, energi, hvor meget motion de har brug for, hvordan de er med mennesker — ikke ud fra en racebetegnelse.",
    ownDogPure:
      "Vurderet ud fra det, vi ved om {name}, racen inklusive.",
    ownDogUnknown:
      "Du har fortalt os, at {name} er en blanding med ukendt herkomst, så vi har ikke gættet på racer. Det her er din hund, sådan som du har beskrevet den.",
    ownDogFit: "Match med det liv, du beskrev",
    ownDogEdit: "Fortæl mere om {name}",
    fitsTitle: "Hvorfor det her passer dig",
    fitsNone: "Ikke noget stak tydeligt frem her — men enhver hund er værd at møde personligt.",
    tradeTitle: "Ting du skal være forberedt på",
    tradeNone: "Ikke noget her talte imod dig, ud fra dine svar.",
    breakdownHonesty:
      "Det her er en livsstilskompatibilitet, ikke en videnskabelig måling — den sammenligner det, du fortalte os, med det, denne race typisk har brug for.",
    thirtyDaysTitle: "De første 30 dage sammen med en {breed}",
    budgetTitle: "Anslået startbudget",
    budgetGear: "Startudstyr — seng, bur, snor, skåle, legetøj",
    budgetGearRange: "150–350 €",
    budgetVet: "Første dyrlægebesøg, vaccinationer og chipmærkning",
    budgetVetRange: "80–180 €",
    budgetInsurance: "Første måned med forsikring",
    budgetInsuranceRange: "15–40 €",
    budgetNote: "Et generelt udgangspunkt — de reelle omkostninger varierer med land, opdrætter og dyrlæge.",
    checklistTitle: "Tjekliste til hjemmet",
    checklistItems: [
      "Indret ét roligt, afgrænset rum som et trygt sted, inden hunden ankommer",
      "Lås husholdningskemikalier, medicin og alt, der kan sluges, væk",
      "Gem eller dæk løse ledninger og kabler",
      "Sæt en trappespærre eller barriere op, hvis du har trapper, en pool eller en dam",
      "Opbevar mad, chokolade og alt giftigt for hunde utilgængeligt",
    ],
    plusLinkLabel: "Følg daglige rutiner og planer i DoggMatch+",
  },
  se: {
    scoreNote: "Baserat på allt du har berättat för oss, även de gränser du sa att du inte kunde tänja på.",
    essentials: ["En säng och en trygg plats", "Halsband, koppel och bricka", "Mat och fasta måltider", "Försäkring och veterinärvård"],
    suited: "Passar en {breed}.",
    ownDogTitle: "Och hunden du redan har",
    ownDogMixed:
      "Beräknat utifrån {name}s egna egenskaper — storlek, energi, hur mycket motion de behöver, hur de är med människor — inte utifrån en rasetikett.",
    ownDogPure:
      "Beräknat utifrån det vi vet om {name}, rasen inkluderad.",
    ownDogUnknown:
      "Du har berättat för oss att {name} är en blandning med okänt ursprung, så vi har inte gissat på raser. Det här är din hund, precis som du har beskrivit den.",
    ownDogFit: "Matchning med det liv du beskrev",
    ownDogEdit: "Berätta mer om {name}",
    fitsTitle: "Varför det här passar dig",
    fitsNone: "Inget stack ut tydligt här — men alla hundar är värda att träffa på riktigt.",
    tradeTitle: "Viktiga avvägningar",
    tradeNone: "Inget här talade emot dig, utifrån dina svar.",
    breakdownHonesty:
      "Det här är en livsstilskompatibilitet, inte ett vetenskapligt mått — den jämför det du berättat för oss med det den här rasen vanligtvis behöver.",
    thirtyDaysTitle: "De första 30 dagarna tillsammans med en {breed}",
    budgetTitle: "Uppskattad startbudget",
    budgetGear: "Startutrustning — säng, bur, koppel, skålar, leksaker",
    budgetGearRange: "150–350 €",
    budgetVet: "Första veterinärbesöket, vaccinationer och id-märkning",
    budgetVetRange: "80–180 €",
    budgetInsurance: "Första månadens försäkring",
    budgetInsuranceRange: "15–40 €",
    budgetNote: "En generell utgångspunkt — de faktiska kostnaderna varierar med land, uppfödare och veterinär.",
    checklistTitle: "Checklista för hemmet",
    checklistItems: [
      "Ordna ett lugnt, avgränsat rum som trygg plats innan hunden kommer hem",
      "Lås in kemikalier, mediciner och allt som kan sväljas",
      "Göm eller täck över lösa sladdar och kablar",
      "Sätt upp en trappgrind eller barriär om du har trappor, en pool eller en damm",
      "Förvara mat, choklad och allt som är giftigt för hundar utom räckhåll",
    ],
    plusLinkLabel: "Följ dagliga rutiner och scheman i DoggMatch+",
  },
  fi: {
    scoreNote: "Perustuu kaikkeen, mitä olet meille kertonut, myös rajoihin, joita et sanonut voivasi venyttää.",
    essentials: ["Peti ja turvallinen paikka", "Kaulapanta, hihna ja tunnistelaatta", "Ruoka ja säännölliset ruoka-ajat", "Vakuutus ja eläinlääkärikäynnit"],
    suited: "Sopii tälle rodulle: {breed}.",
    ownDogTitle: "Entä koira, joka sinulla jo on",
    ownDogMixed:
      "Arvioitu {name}n omien ominaisuuksien perusteella — koon, energian, liikuntatarpeen ja ihmisten kanssa toimimisen — ei rotuleiman perusteella.",
    ownDogPure:
      "Arvioitu sen perusteella, mitä tiedämme {name}sta, rotu mukaan lukien.",
    ownDogUnknown:
      "Kerroit meille, että {name} on sekarotuinen tuntemattomasta taustasta, joten emme ole arvailleet rotuja. Tämä on sinun koirasi, sellaisena kuin sinä sen kuvasit.",
    ownDogFit: "Sopivuus kuvailemaasi elämään",
    ownDogEdit: "Kerro lisää {name}sta",
    fitsTitle: "Miksi tämä sopii sinulle",
    fitsNone: "Mikään ei noussut tässä selvästi esiin — mutta jokainen koira kannattaa tavata kasvokkain.",
    tradeTitle: "Huomioitavat asiat",
    tradeNone: "Mikään tässä ei puhunut sinua vastaan, vastaustesi perusteella.",
    breakdownHonesty:
      "Tämä on elämäntyylin yhteensopivuuden arvio, ei tieteellinen mittaus — se vertaa kertomaasi siihen, mitä tämä rotu yleensä tarvitsee.",
    thirtyDaysTitle: "Ensimmäiset 30 yhteistä päivää — {breed}",
    budgetTitle: "Arvioitu aloitusbudjetti",
    budgetGear: "Perusvarusteet — peti, häkki, hihna, ruokakupit, lelut",
    budgetGearRange: "150–350 €",
    budgetVet: "Ensimmäinen eläinlääkärikäynti, rokotukset ja mikrosirutus",
    budgetVetRange: "80–180 €",
    budgetInsurance: "Ensimmäinen kuukausi vakuutusta",
    budgetInsuranceRange: "15–40 €",
    budgetNote: "Yleinen lähtökohta — todelliset kustannukset vaihtelevat maan, kasvattajan ja eläinlääkärin mukaan.",
    checklistTitle: "Kodin valmistelun tarkistuslista",
    checklistItems: [
      "Järjestä yksi rauhallinen, rajattu huone turvapaikaksi ennen koiran saapumista",
      "Lukitse pois kotitalouskemikaalit, lääkkeet ja kaikki nieltävissä oleva",
      "Piilota tai suojaa löysät johdot ja kaapelit",
      "Asenna porttiaita tai este, jos kotonasi on portaita, uima-allas tai lampi",
      "Säilytä ruoka, suklaa ja kaikki koirille myrkyllinen hyvin ulottumattomissa",
    ],
    plusLinkLabel: "Seuraa päivittäisiä rutiineja ja aikatauluja DoggMatch+:ssa",
  },
  de: {
    scoreNote: "Basierend auf allem, was Sie uns mitgeteilt haben, einschließlich der Grenzen, die Sie als unverhandelbar bezeichnet haben.",
    essentials: ["Ein Bett und ein sicherer Rückzugsort", "Halsband, Leine und Marke", "Futter und feste Fütterungszeiten", "Versicherung und tierärztliche Versorgung"],
    suited: "Passend für einen {breed}.",
    ownDogTitle: "Und der Hund, den Sie schon haben",
    ownDogMixed:
      "Bewertet nach {name}s eigenen Eigenschaften — Größe, Energie, Bewegungsbedarf, Umgang mit Menschen — nicht nach einer Rassebezeichnung.",
    ownDogPure:
      "Bewertet nach dem, was wir über {name} wissen, die Rasse eingeschlossen.",
    ownDogUnknown:
      "Sie haben uns mitgeteilt, dass {name} ein Mischling unbekannter Abstammung ist, daher haben wir keine Rassen erraten. Das ist Ihr Hund, so wie Sie ihn beschrieben haben.",
    ownDogFit: "Passung zum beschriebenen Leben",
    ownDogEdit: "Mehr über {name} ergänzen",
    fitsTitle: "Warum das zu Ihnen passt",
    fitsNone: "Hier stach nichts eindeutig hervor — aber jeder Hund ist es wert, persönlich getroffen zu werden.",
    tradeTitle: "Wichtige Kompromisse",
    tradeNone: "Nach Ihren Antworten sprach hier nichts gegen Sie.",
    breakdownHonesty:
      "Das ist eine Einschätzung der Lebensstil-Kompatibilität, keine wissenschaftliche Messung — sie vergleicht das, was Sie uns mitgeteilt haben, mit dem, was diese Rasse üblicherweise braucht.",
    thirtyDaysTitle: "Ihre ersten 30 Tage mit einem {breed}",
    budgetTitle: "Geschätztes Startbudget",
    budgetGear: "Erstausstattung — Bett, Box, Leine, Näpfe, Spielzeug",
    budgetGearRange: "150–350 €",
    budgetVet: "Erster Tierarztbesuch, Impfungen & Chippen",
    budgetVetRange: "80–180 €",
    budgetInsurance: "Erster Monat Hundeversicherung",
    budgetInsuranceRange: "15–40 €",
    budgetNote: "Ein allgemeiner Ausgangspunkt — die tatsächlichen Kosten variieren je nach Land, Züchter und Tierarztpraxis.",
    checklistTitle: "Checkliste zur Vorbereitung zu Hause",
    checklistItems: [
      "Ein ruhiges, abgegrenztes Zimmer als sicheren Rückzugsort einrichten, bevor der Hund einzieht",
      "Haushaltschemikalien, Medikamente und alles Verschluckbare wegschließen",
      "Lose Kabel und Strippen verstecken oder abdecken",
      "Ein Treppenschutzgitter oder eine Barriere anbringen, falls Treppen, ein Pool oder ein Teich vorhanden sind",
      "Futter, Schokolade und alles für Hunde Giftige gut außer Reichweite aufbewahren",
    ],
    plusLinkLabel: "Tägliche Abläufe & Routinen in DoggMatch+ verfolgen",
  },
  fr: {
    scoreNote: "En fonction de tout ce que vous nous avez indiqué, y compris les limites que vous avez dites ne pas pouvoir dépasser.",
    essentials: ["Un couchage et un espace sûr", "Collier, laisse et médaille", "Nourriture et horaires de repas", "Assurance et soins vétérinaires"],
    suited: "Adapté à un {breed}.",
    ownDogTitle: "Et le chien que vous avez déjà",
    ownDogMixed:
      "Évalué à partir des caractéristiques propres de {name} — taille, énergie, besoin d'exercice, comportement avec les gens — pas d'après une étiquette de race.",
    ownDogPure:
      "Évalué à partir de ce que nous savons de {name}, race comprise.",
    ownDogUnknown:
      "Vous nous avez indiqué que {name} est un croisé d'origine inconnue, nous n'avons donc pas deviné de races. Voici votre chien, tel que vous l'avez décrit.",
    ownDogFit: "Compatibilité avec la vie que vous avez décrite",
    ownDogEdit: "Ajouter des informations sur {name}",
    fitsTitle: "Pourquoi cela vous correspond",
    fitsNone: "Rien ne s'est clairement démarqué ici — mais chaque chien mérite d'être rencontré en personne.",
    tradeTitle: "Compromis et points de vigilance",
    tradeNone: "D'après vos réponses, rien ici ne jouait en votre défaveur.",
    breakdownHonesty:
      "Il s'agit d'une lecture de la compatibilité de style de vie, pas d'une mesure scientifique — elle compare ce que vous nous avez indiqué à ce dont cette race a généralement besoin.",
    thirtyDaysTitle: "Vos 30 premiers jours avec un {breed}",
    budgetTitle: "Budget de départ estimé",
    budgetGear: "Équipement initial — couchage, caisse, laisse, gamelles, jouets",
    budgetGearRange: "150–350 €",
    budgetVet: "Première visite vétérinaire, vaccins et puce électronique",
    budgetVetRange: "80–180 €",
    budgetInsurance: "Premier mois d'assurance",
    budgetInsuranceRange: "15–40 €",
    budgetNote: "Un point de départ général — les coûts réels varient selon le pays, l'éleveur et le cabinet vétérinaire.",
    checklistTitle: "Liste de préparation du logement",
    checklistItems: [
      "Aménagez une pièce calme et fermée comme espace sûr avant son arrivée",
      "Rangez sous clé les produits ménagers, les médicaments et tout ce qui peut être avalé",
      "Cachez ou protégez les câbles et fils qui traînent",
      "Installez une barrière d'escalier si vous avez des marches, une piscine ou un bassin",
      "Rangez la nourriture, le chocolat et tout ce qui est toxique pour les chiens hors de portée",
    ],
    plusLinkLabel: "Suivez les routines et plannings quotidiens sur DoggMatch+",
  },
  nl: {
    scoreNote: "Gebaseerd op alles wat u ons heeft verteld, inclusief de grenzen waarvan u zei dat ze niet onderhandelbaar waren.",
    essentials: ["Een mand en een veilige plek", "Halsband, riem en penning", "Voer en vaste eetmomenten", "Verzekering en dierenartszorg"],
    suited: "Geschikt voor een {breed}.",
    ownDogTitle: "En de hond die u al heeft",
    ownDogMixed:
      "Beoordeeld op basis van {name}s eigen kenmerken — grootte, energie, beweegbehoefte, omgang met mensen — niet op basis van een rasetiket.",
    ownDogPure:
      "Beoordeeld op basis van wat we over {name} weten, het ras inbegrepen.",
    ownDogUnknown:
      "U heeft ons verteld dat {name} een kruising is met onbekende afkomst, dus we hebben geen rassen geraden. Dit is uw hond, zoals u die heeft beschreven.",
    ownDogFit: "Match met het leven dat u beschreef",
    ownDogEdit: "Meer over {name} toevoegen",
    fitsTitle: "Waarom dit bij u past",
    fitsNone: "Hier viel niets duidelijk op — maar elke hond is het waard om in persoon te ontmoeten.",
    tradeTitle: "Belangrijke afwegingen",
    tradeNone: "Op basis van uw antwoorden pleitte hier niets tegen u.",
    breakdownHonesty:
      "Dit is een leefstijl-compatibiliteitsanalyse, geen wetenschappelijke meting — het vergelijkt wat u ons heeft verteld met wat dit ras doorgaans nodig heeft.",
    thirtyDaysTitle: "Uw eerste 30 dagen met een {breed}",
    budgetTitle: "Geschat opstartbudget",
    budgetGear: "Startuitrusting — mand, bench, riem, bakken, speelgoed",
    budgetGearRange: "€150–350",
    budgetVet: "Eerste dierenartsbezoek, vaccinaties & chippen",
    budgetVetRange: "€80–180",
    budgetInsurance: "Eerste maand huisdierenverzekering",
    budgetInsuranceRange: "€15–40",
    budgetNote: "Een algemeen uitgangspunt — de werkelijke kosten variëren per land, fokker en dierenartspraktijk.",
    checklistTitle: "Checklist voorbereiding thuis",
    checklistItems: [
      "Richt één rustige, afgesloten ruimte in als veilige plek voordat de hond arriveert",
      "Berg huishoudchemicaliën, medicijnen en alles wat ingeslikt kan worden op slot op",
      "Verstop of dek losse kabels en snoeren af",
      "Plaats een traphekje of barrière als u trappen, een zwembad of een vijver heeft",
      "Bewaar voer, chocolade en alles wat giftig is voor honden goed buiten bereik",
    ],
    plusLinkLabel: "Volg dagelijkse schema's en routines in DoggMatch+",
  },
};
import { quizQuestions } from "@/data/questions.locale";
import { breedContent } from "@/data/breed-content";
import { breedImages } from "@/data/breed-images";
import { matchBreeds, explain } from "@/lib/matching/engine";
import {
  crossContributionLines,
  crossHeading,
  matchOwnDog,
  resolveDogTraits,
  traitBasisNote,
} from "@/lib/dogs/profile";
import { useActiveDog } from "@/lib/training/store";
import { breedById } from "@/data/breeds";
import { saveMatchProfile } from "@/lib/matching/store";
import { matchInsights, scoreReading } from "@/lib/matching/insights";
import type { BreedTraits } from "@/data/breeds";
import type { DimensionKey, MatchResult, UserProfile } from "@/lib/matching/types";
import { Arrow, Badge, Button, ButtonLink, Eyebrow, ScoreBar, ScoreRing } from "@/components/dogmatch/ui";
import { MatchNotes } from "@/components/dogmatch/match-notes";
import { JourneyLinks } from "@/components/dogmatch/journey-links";
import { cn } from "@/lib/utils";
import { seoLinks, abs, localizedHead } from "@/lib/seo";

const title = "Find My Dog — a free match, in about two minutes | DoggMatch";
const description =
  "Answer a few friendly questions about your days, your home and what you're hoping for, and we'll show you the dogs that may suit you best.";

const seoCopy = {
  en: { title, description },
  no: {
    title: "Finn min hund — gratis match på cirka to minutter | DoggMatch",
    description:
      "Svar på noen vennlige spørsmål om dagene dine, hjemmet ditt og hva du håper på, så viser vi deg hundene som kan passe deg best.",
  },
  pl: {
    title: "Znajdź mojego psa — darmowe dopasowanie w około dwie minuty | DoggMatch",
    description:
      "Odpowiedz na kilka przyjaznych pytań o swoje dni, dom i oczekiwania, a pokażemy Ci psy, które mogą pasować Ci najlepiej.",
  },
  dk: {
    title: "Find min hund — gratis match på cirka to minutter | DoggMatch",
    description:
      "Svar på nogle venlige spørgsmål om dine dage, dit hjem og hvad du håber på, så viser vi dig de hunde, der kan passe dig bedst.",
  },
  se: {
    title: "Hitta min hund — gratis match på cirka två minuter | DoggMatch",
    description:
      "Svara på några vänliga frågor om dina dagar, ditt hem och vad du hoppas på, så visar vi dig hundarna som kan passa dig bäst.",
  },
  fi: {
    title: "Löydä koirani — ilmainen täsmäys noin kahdessa minuutissa | DoggMatch",
    description:
      "Vastaa muutamaan ystävälliseen kysymykseen päivistäsi, kodistasi ja toiveistasi, niin näytämme sinulle koirat, jotka voisivat sopia sinulle parhaiten.",
  },
  de: {
    title: "Finde meinen Hund — kostenloses Matching in etwa zwei Minuten | DoggMatch",
    description:
      "Beantworten Sie ein paar freundliche Fragen zu Ihrem Alltag, Ihrem Zuhause und Ihren Wünschen, und wir zeigen Ihnen die Hunde, die am besten zu Ihnen passen könnten.",
  },
  fr: {
    title: "Trouver mon chien — un match gratuit en environ deux minutes | DoggMatch",
    description:
      "Répondez à quelques questions simples sur votre quotidien, votre logement et vos attentes, et nous vous montrerons les chiens qui pourraient le mieux vous convenir.",
  },
  nl: {
    title: "Vind mijn hond — gratis match in ongeveer twee minuten | DoggMatch",
    description:
      "Beantwoord een paar vriendelijke vragen over uw dagen, uw huis en uw wensen, en wij laten u de honden zien die het beste bij u zouden kunnen passen.",
  },
};

export const Route = createFileRoute("/{-$lang}/find-my-dog")({
  head: (ctx) => localizedHead(ctx, "/find-my-dog", seoCopy),
  component: FindMyDogPage,
});

type Phase = "quiz" | "revealing" | "result";

/**
 * The four high-stakes questions where a reader can mark their answer as
 * non-negotiable, so a breed that fails it is dropped from the results
 * entirely rather than merely scored down. See `isHardLimit` in the engine.
 */
const HARD_LIMIT_QUESTIONS = new Set(["home", "alone", "shedding", "allergy"]);

/** Sensible, neutral answers applied when a reader skips a non-critical question. */
const SKIP_DEFAULTS: Record<string, string> = { size: "any", pets: "none" };

const flowCopy = {
  en: {
    statusPhrases: [
      "Screening against 9 lifestyle dimensions…",
      "Calculating constraint overlap…",
      "Weighing trait compatibility…",
      "Cross-referencing breed traits…",
      "Deterministic scoring — no AI guesswork…",
    ],
    hardLimitLabel: "Set as Non-Negotiable (Hard Limit)",
    hardLimitNote: "Breeds exceeding this boundary will be strictly eliminated from recommendations.",
  },
  no: {
    statusPhrases: [
      "Vurderer opp mot 9 livsstilsdimensjoner…",
      "Beregner overlapp mellom grenser…",
      "Vekter egenskapskompatibilitet…",
      "Sammenligner med rasenes egenskaper…",
      "Deterministisk beregning — ingen KI-gjetting…",
    ],
    hardLimitLabel: "Sett som ufravikelig grense",
    hardLimitNote: "Raser som går utover denne grensen blir utelukket helt fra forslagene.",
  },
  pl: {
    statusPhrases: [
      "Sprawdzanie względem 9 wymiarów stylu życia…",
      "Obliczanie nakładania się ograniczeń…",
      "Ważenie zgodności cech…",
      "Porównywanie z cechami ras…",
      "Deterministyczne wyliczenia — bez zgadywania AI…",
    ],
    hardLimitLabel: "Ustaw jako warunek bezwzględny",
    hardLimitNote: "Rasy, które nie spełniają tego warunku, zostaną całkowicie wykluczone z rekomendacji.",
  },
  dk: {
    statusPhrases: [
      "Screener mod 9 livsstilsdimensioner…",
      "Beregner overlap mellem krav…",
      "Vejer egenskabskompatibilitet…",
      "Sammenligner med racernes egenskaber…",
      "Deterministisk beregning — ingen AI-gætteri…",
    ],
    hardLimitLabel: "Sæt som ufravigeligt krav",
    hardLimitNote: "Racer, der ikke opfylder dette krav, bliver udelukket helt fra anbefalingerne.",
  },
  se: {
    statusPhrases: [
      "Screenar mot 9 livsstilsdimensioner…",
      "Beräknar överlapp mellan krav…",
      "Väger egenskapskompatibilitet…",
      "Jämför med rasernas egenskaper…",
      "Deterministisk beräkning — inga AI-gissningar…",
    ],
    hardLimitLabel: "Ange som ofrånkomligt krav",
    hardLimitNote: "Raser som inte uppfyller det här kravet utesluts helt från rekommendationerna.",
  },
  fi: {
    statusPhrases: [
      "Tarkistetaan 9 elämäntyylin ulottuvuutta vasten…",
      "Lasketaan ehtojen päällekkäisyyttä…",
      "Punnitaan ominaisuuksien yhteensopivuutta…",
      "Verrataan rotujen ominaisuuksiin…",
      "Deterministinen laskenta — ei tekoälyn arvailua…",
    ],
    hardLimitLabel: "Aseta ehdottomaksi kriteeriksi",
    hardLimitNote: "Rodut, jotka eivät täytä tätä kriteeriä, suljetaan kokonaan pois suosituksista.",
  },
  de: {
    statusPhrases: [
      "Abgleich mit 9 Lebensstil-Dimensionen…",
      "Überschneidung der Ausschlusskriterien wird berechnet…",
      "Eigenschaftskompatibilität wird gewichtet…",
      "Abgleich mit Rasseeigenschaften…",
      "Deterministische Berechnung — kein KI-Raten…",
    ],
    hardLimitLabel: "Als Ausschlusskriterium festlegen",
    hardLimitNote: "Rassen, die diese Grenze überschreiten, werden strikt aus den Empfehlungen ausgeschlossen.",
  },
  fr: {
    statusPhrases: [
      "Évaluation sur 9 dimensions de style de vie…",
      "Calcul du chevauchement des contraintes…",
      "Pondération de la compatibilité des traits…",
      "Comparaison avec les traits des races…",
      "Calcul déterministe — aucune estimation par IA…",
    ],
    hardLimitLabel: "Définir comme critère rédhibitoire",
    hardLimitNote: "Les races dépassant cette limite seront strictement exclues des recommandations.",
  },
  nl: {
    statusPhrases: [
      "Toetsing aan 9 leefstijldimensies…",
      "Overlap tussen criteria wordt berekend…",
      "Weging van eigenschap-compatibiliteit…",
      "Vergelijking met raseigenschappen…",
      "Deterministische berekening — geen AI-giswerk…",
    ],
    hardLimitLabel: "Instellen als ononderhandelbaar criterium",
    hardLimitNote: "Rassen die deze grens overschrijden, worden volledig uitgesloten van de aanbevelingen.",
  },
} as const;

function FindMyDogPage() {
  const t = useT();
  const fc = useCopy(flowCopy);
  const questions = quizQuestions();
  const [step, setStep] = useState(0);
  const [profile, setProfile] = useState<UserProfile>({});
  const [phase, setPhase] = useState<Phase>("quiz");

  const question = questions[step]!;
  const total = questions.length;
  const selected = profile[question.id];
  const progress = Math.round(((step + (selected ? 1 : 0)) / total) * 100);
  const statusPhrase = fc.statusPhrases[step % fc.statusPhrases.length];
  const isHardLimitEligible = HARD_LIMIT_QUESTIONS.has(question.id);
  const hardLimitOn = profile[`${question.id}HardLimit`] === "true";

  const results = useMemo(() => (phase === "result" ? matchBreeds(profile) : []), [phase, profile]);

  function choose(value: string) {
    setProfile((p) => ({ ...p, [question.id]: value }));
  }

  function setHardLimit(on: boolean) {
    setProfile((p) => ({ ...p, [`${question.id}HardLimit`]: on ? "true" : "false" }));
  }

  function next() {
    if (step + 1 < total) setStep(step + 1);
    else setPhase("revealing");
  }

  function skip() {
    const fallback = SKIP_DEFAULTS[question.id];
    if (fallback) choose(fallback);
    next();
  }

  function restart() {
    setProfile({});
    setStep(0);
    setPhase("quiz");
    window.scrollTo({ top: 0 });
  }

  if (phase === "revealing") return <Reveal onDone={() => setPhase("result")} />;
  if (phase === "result") return <Results results={results} profile={profile} onRestart={restart} />;

  return (
    <div className="container-page flex min-h-[calc(100vh-72px)] max-w-3xl flex-col py-10 md:py-16">
      {/* progress */}
      <div>
        <div className="flex items-baseline justify-between">
          <Eyebrow>{t.quiz.intro}</Eyebrow>
          <p className="text-sm tabular-nums text-muted-foreground">
            {t.quiz.question} {step + 1} {t.quiz.of} {total}
          </p>
        </div>
        <div
          className="mt-4 h-[3px] w-full overflow-hidden rounded-full bg-surface-strong"
          role="progressbar"
          aria-valuenow={progress}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={t.quiz.progress}
        >
          <div
            className="h-full rounded-full bg-accent transition-[width] duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p
          aria-live="polite"
          className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-surface px-3 py-1 text-xs text-muted-foreground"
        >
          <span className="h-1.5 w-1.5 shrink-0 animate-pulse rounded-full bg-accent" aria-hidden="true" />
          {statusPhrase}
        </p>
      </div>

      <div key={question.id} className="animate-rise mt-12 flex-1 md:mt-16">
        <p className="eyebrow">{question.eyebrow}</p>
        <h1 className="display-lg mt-4">{question.title}</h1>
        {question.help && (
          <p className="mt-4 max-w-xl text-[0.9375rem] leading-relaxed text-muted-foreground">
            {question.help}
          </p>
        )}

        <fieldset className="mt-10 space-y-3">
          <legend className="sr-only">{question.title}</legend>
          {question.options.map((option) => {
            const isSelected = selected === option.value;
            return (
              <label
                key={option.value}
                className={cn(
                  "flex min-h-16 cursor-pointer items-center gap-4 rounded-2xl border px-5 py-4 transition-all duration-300 ease-out",
                  isSelected
                    ? "border-accent bg-accent-soft/70 shadow-[var(--shadow-soft)]"
                    : "border-border bg-card hover:border-border-strong hover:bg-surface/60",
                )}
              >
                <input
                  type="radio"
                  name={question.id}
                  value={option.value}
                  checked={isSelected}
                  onChange={() => choose(option.value)}
                  className="peer sr-only"
                />
                <span
                  aria-hidden="true"
                  className={cn(
                    "grid h-5 w-5 shrink-0 place-items-center rounded-full border transition-colors",
                    isSelected ? "border-accent bg-accent" : "border-border-strong",
                  )}
                >
                  <span
                    className={cn(
                      "h-1.5 w-1.5 rounded-full bg-accent-foreground transition-transform duration-300",
                      isSelected ? "scale-100" : "scale-0",
                    )}
                  />
                </span>
                <span className="min-w-0">
                  <span className="block font-display text-[1.0625rem] leading-tight tracking-tight">
                    {option.label}
                  </span>
                  {option.hint && (
                    <span className="mt-1 block text-sm text-muted-foreground">{option.hint}</span>
                  )}
                </span>
              </label>
            );
          })}
        </fieldset>

        {isHardLimitEligible && (
          <div className="mt-6 rounded-2xl border border-border bg-surface/60 px-5 py-4">
            <label className="flex cursor-pointer items-center justify-between gap-4">
              <span className="text-sm font-medium text-foreground">{fc.hardLimitLabel}</span>
              <button
                type="button"
                role="switch"
                aria-checked={hardLimitOn}
                onClick={() => setHardLimit(!hardLimitOn)}
                className={cn(
                  "h-6 w-11 shrink-0 rounded-full transition-colors",
                  hardLimitOn ? "bg-accent" : "bg-border-strong",
                )}
              >
                <span
                  className={cn(
                    "block h-5 w-5 rounded-full bg-background transition-transform duration-300",
                    hardLimitOn ? "translate-x-[22px]" : "translate-x-[2px]",
                  )}
                />
              </button>
            </label>
            {hardLimitOn && (
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{fc.hardLimitNote}</p>
            )}
          </div>
        )}
      </div>

      <div className="sticky bottom-20 mt-12 flex items-center gap-3 border-t border-border bg-background/90 py-5 backdrop-blur-xl lg:bottom-0">
        <Button
          tone="ghost"
          onClick={() => (step === 0 ? window.history.back() : setStep(step - 1))}
        >
          {t.quiz.back}
        </Button>
        {question.optional && !selected && (
          <button
            type="button"
            onClick={skip}
            className="text-sm font-medium text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
          >
            {t.quiz.skip}
          </button>
        )}
        <Button size="lg" className="ml-auto" disabled={!selected} onClick={next}>
          {step + 1 === total ? t.quiz.seeResult : t.quiz.continue}
          <Arrow />
        </Button>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------- The reveal */

function Reveal({ onDone }: { onDone: () => void }) {
  const t = useT();
  const lines = [t.quiz.calculating, t.quiz.comparing, t.quiz.finishing];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const tick = setInterval(() => setIndex((i) => i + 1), 750);
    const finish = setTimeout(onDone, 2350);
    return () => {
      clearInterval(tick);
      clearTimeout(finish);
    };
  }, [onDone]);

  return (
    <div className="container-page grid min-h-[calc(100vh-72px)] place-items-center py-20 text-center">
      <div>
        <span className="mx-auto block h-2 w-2 animate-pulse rounded-full bg-accent" aria-hidden="true" />
        <p className="display-md mt-8" aria-live="polite">
          {lines[Math.min(index, lines.length - 1)]}
        </p>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------- The result */

const DIMENSION_ORDER: DimensionKey[] = [
  "lifestyle",
  "home",
  "activity",
  "temperament",
  "trainability",
  "companionship",
  "allergy",
  "wellbeing",
  "maintenance",
];

function CheckIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CautionIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 4 2 20h20L12 4Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M12 10v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <circle cx="12" cy="17.3" r="0.9" fill="currentColor" />
    </svg>
  );
}

/**
 * The honest, dual-column read on one breed: what lines up with the reader's
 * own answers, and what genuinely doesn't — each capped to a few lines so it
 * stays a calm read rather than an exhaustive audit.
 */
function MatchBreakdown({
  traits,
  profile,
  score,
}: {
  traits: BreedTraits;
  profile: UserProfile;
  score: number;
}) {
  const c = useCopy(resultCopy);
  const { fits, tradeoffs } = matchInsights(traits, profile);
  const shownFits = fits.slice(0, 3);
  const shownTradeoffs = tradeoffs.slice(0, 3);

  return (
    <div>
      <p className="max-w-xl text-lg leading-relaxed">{scoreReading(score)}</p>
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-border bg-card p-8 md:p-10">
          <h3 className="display-md">{c.fitsTitle}</h3>
          <ul className="mt-6 space-y-4">
            {shownFits.length === 0 && (
              <li className="text-[0.9375rem] leading-relaxed text-muted-foreground">{c.fitsNone}</li>
            )}
            {shownFits.map((item) => (
              <li key={item.from} className="flex gap-3">
                <span
                  aria-hidden="true"
                  className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-level-low/15 text-level-low"
                >
                  <CheckIcon />
                </span>
                <span className="text-[0.9375rem] leading-relaxed">{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border border-border bg-card p-8 md:p-10">
          <h3 className="display-md">{c.tradeTitle}</h3>
          <ul className="mt-6 space-y-4">
            {shownTradeoffs.length === 0 && (
              <li className="text-[0.9375rem] leading-relaxed text-muted-foreground">{c.tradeNone}</li>
            )}
            {shownTradeoffs.map((item) => (
              <li key={item.from} className="flex gap-3">
                <span
                  aria-hidden="true"
                  className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-level-medium/15 text-level-medium"
                >
                  <CautionIcon />
                </span>
                <span className="text-[0.9375rem] leading-relaxed">{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className="mt-5 max-w-2xl border-l-2 border-border pl-4 text-sm leading-relaxed text-muted-foreground">
        {c.breakdownHonesty}
      </p>
    </div>
  );
}

/** A collapsed-by-default drawer with the concrete first steps for one breed. */
function FirstThirtyDays({ breedName }: { breedName: string }) {
  const c = useCopy(resultCopy);
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-2xl border border-border bg-card">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 p-6 text-left md:p-8"
      >
        <span className="font-display text-xl tracking-tight">
          {interpolate(c.thirtyDaysTitle, { breed: breedName })}
        </span>
        <ChevronDown
          className={cn("h-5 w-5 shrink-0 text-muted-foreground transition-transform", open && "rotate-180")}
          aria-hidden="true"
        />
      </button>
      {open && (
        <div className="animate-fade border-t border-border p-6 pt-6 md:p-8 md:pt-6">
          <h4 className="eyebrow">{c.budgetTitle}</h4>
          <ul className="mt-4 space-y-3">
            <li className="flex items-baseline justify-between gap-4 text-[0.9375rem]">
              <span>{c.budgetGear}</span>
              <span className="shrink-0 font-display tabular-nums text-muted-foreground">{c.budgetGearRange}</span>
            </li>
            <li className="flex items-baseline justify-between gap-4 text-[0.9375rem]">
              <span>{c.budgetVet}</span>
              <span className="shrink-0 font-display tabular-nums text-muted-foreground">{c.budgetVetRange}</span>
            </li>
            <li className="flex items-baseline justify-between gap-4 text-[0.9375rem]">
              <span>{c.budgetInsurance}</span>
              <span className="shrink-0 font-display tabular-nums text-muted-foreground">
                {c.budgetInsuranceRange}
              </span>
            </li>
          </ul>
          <p className="mt-3 text-xs leading-relaxed text-muted-foreground">{c.budgetNote}</p>

          <h4 className="eyebrow mt-8">{c.checklistTitle}</h4>
          <ul className="mt-4 space-y-2.5">
            {c.checklistItems.map((item) => (
              <li key={item} className="flex gap-3 text-[0.9375rem] leading-relaxed">
                <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <ButtonLink to={withLangPrefix("/plus")} tone="outline" className="mt-8">
            {c.plusLinkLabel}
          </ButtonLink>
        </div>
      )}
    </div>
  );
}

function Results({
  results,
  profile,
  onRestart,
}: {
  results: MatchResult[];
  profile: UserProfile;
  onRestart: () => void;
}) {
  const t = useT();
  const ownDog = useActiveDog();
  const ownTraits = resolveDogTraits(ownDog);
  const ownFit = ownDog ? matchOwnDog(ownDog, profile) : undefined;
  const c = useCopy(resultCopy);
  const best = results[0]!;
  const content = breedContent()[best.breedId];
  const detail = explain(best);
  const others = results.slice(1, 4);

  /** How forgiving a breed tends to be of first-timer training mistakes, from its firstTimeSuitability trait. */
  const beginnerLevel = (score: number) =>
    score >= 4 ? t.result.beginnerHigh : score <= 2 ? t.result.beginnerLow : t.result.beginnerModerate;

  // Kept on this device so Compare and the breed pages can speak to the same life.
  useEffect(() => {
    saveMatchProfile(profile);
  }, [profile]);

  return (
    <div className="pb-24">
      <section className="container-page pt-10 md:pt-16">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-16">
          <div className="animate-rise">
            <Eyebrow>{t.result.eyebrow}</Eyebrow>
            <h1 className="display-xl mt-6">{content.displayName}</h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
              {detail.summary}
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-8">
              <ScoreRing value={best.score} />
              <div className="max-w-[14rem]">
                <p className="font-display text-lg leading-tight">{t.result.compatibility}</p>
                <p className="mt-2 text-[0.9375rem] leading-relaxed">{scoreReading(best.score)}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {c.scoreNote}
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-2">
                  <Badge tone="neutral">
                    {t.result.beginnerFriendlinessLabel}: {beginnerLevel(breedById[best.breedId].traits.firstTimeSuitability)}
                  </Badge>
                  {best.status !== "recommended" && (
                    <Badge tone="accent">
                      {best.status === "not-recommended" ? t.result.notRecommended : t.result.mismatchTitle}
                    </Badge>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem]">
            <img
              src={breedImages[best.breedId]}
              alt={content.displayName}
              width={1024}
              height={1280}
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* actionable next step, right beneath the top match */}
      <section className="container-page mt-12 md:mt-16">
        <FirstThirtyDays breedName={content.displayName} />
      </section>

      {/* the dog you already have — scored from the dog itself, not a breed guess */}
      {ownDog && ownFit && (
        <section className="container-page mt-20 md:mt-28">
          <div className="rounded-2xl border border-border bg-card p-8 md:p-10">
            <h2 className="display-md">{c.ownDogTitle}</h2>
            <div className="mt-8 flex flex-wrap items-center gap-8">
              <ScoreRing value={ownFit.score} />
              <div className="max-w-md">
                <p className="font-display text-lg leading-tight">{c.ownDogFit}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {interpolate(
                    ownTraits.unknownMix ? c.ownDogUnknown : ownTraits.isMixed ? c.ownDogMixed : c.ownDogPure,
                    { name: ownDog.name },
                  )}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {traitBasisNote(ownTraits)}
                </p>
                {crossHeading(ownTraits) && (
                  <div className="mt-4 rounded-xl border border-border bg-background p-4">
                    <p className="text-sm font-medium">{crossHeading(ownTraits)}</p>
                    <ul className="mt-2 space-y-1">
                      {crossContributionLines(ownTraits).map((line) => (
                        <li key={line} className="text-sm leading-relaxed text-muted-foreground">
                          {line}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                <div className="mt-5">
                  <ButtonLink to={withLangPrefix("/my-dog/setup")} tone="outline">
                    {interpolate(c.ownDogEdit, { name: ownDog.name })}
                  </ButtonLink>
                </div>
              </div>
            </div>
            {ownFit.warnings.length > 0 && (
              <ul className="mt-8 space-y-3">
                {ownFit.warnings.map((w) => (
                  <li key={w} className="text-[0.9375rem] leading-relaxed text-muted-foreground">
                    {w}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>
      )}

      {/* breakdown */}
      <section className="container-page mt-20 md:mt-28">
        <h2 className="display-md">{t.result.breakdown}</h2>
        <div className="mt-8 grid gap-x-14 gap-y-7 rounded-2xl border border-border bg-card p-8 md:grid-cols-2 md:p-10">
          {DIMENSION_ORDER.map((key) => (
            <ScoreBar key={key} label={t.dimensions[key]} value={best.dimensions[key]} />
          ))}
        </div>
        <MatchNotes profile={profile} />
      </section>

      {/* fit and trade-offs, tied line by line to the answers given */}
      <section className="container-page mt-20 md:mt-28">
        <MatchBreakdown traits={breedById[best.breedId].traits} profile={profile} score={best.score} />
      </section>



      {/* why + considerations */}
      <section className="container-page mt-20 grid gap-10 md:mt-28 md:grid-cols-2 md:gap-14">
        <div>
          <h2 className="display-md max-w-sm">
            {interpolate(t.result.whyTitle, { breed: content.displayName })}
          </h2>
          <ul className="mt-8 space-y-4">
            {detail.strengths.map((item) => (
              <li key={item} className="flex gap-3 text-[0.9375rem] leading-relaxed">
                <span aria-hidden="true" className="mt-[2px] text-primary">
                  ✓
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="display-md">{t.result.considerTitle}</h2>
          <ul className="mt-8 space-y-4">
            {[...detail.warnings, ...detail.considerations].map((item) => (
              <li key={item} className="flex gap-3 text-[0.9375rem] leading-relaxed">
                <span aria-hidden="true" className="mt-[2px] text-accent">
                  !
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-8 border-l-2 border-border pl-4 text-sm leading-relaxed text-muted-foreground">
            {t.allergyNote}
          </p>
        </div>
      </section>

      {/* other matches */}
      <section className="container-page mt-20 md:mt-28">
        <h2 className="display-md">{t.result.otherMatches}</h2>
        <ul className="mt-8 grid gap-6 sm:grid-cols-3">
          {others.map((r) => (
            <li key={r.breedId}>
              <Link to={withLangPrefix("/breeds/$breedId")} params={{ breedId: r.breedId }} className="group block">
                <div className="overflow-hidden rounded-[1.25rem]">
                  <img
                    src={breedImages[r.breedId]}
                    alt={breedContent()[r.breedId].displayName}
                    width={1024}
                    height={1280}
                    loading="lazy"
                    className="aspect-[4/5] w-full object-cover transition-transform duration-[900ms] group-hover:scale-[1.04]"
                  />
                </div>
                <div className="mt-4 flex items-baseline justify-between gap-3">
                  <h3 className="font-display text-lg leading-tight tracking-tight">
                    {breedContent()[r.breedId].displayName}
                  </h3>
                  <span className="font-display text-sm tabular-nums text-muted-foreground">
                    {r.score}%
                  </span>
                </div>
                <div className="mt-2">
                  <Badge tone="neutral">
                    {t.result.beginnerFriendlinessLabel}: {beginnerLevel(breedById[r.breedId].traits.firstTimeSuitability)}
                  </Badge>
                </div>
                {r.status !== "recommended" && (
                  <p className="mt-2 text-sm text-accent">{r.warnings[0]}</p>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* premium */}
      <section className="container-page mt-20 md:mt-28">
        <div className="grid gap-8 rounded-[1.75rem] border border-border bg-surface p-8 md:grid-cols-[1.2fr_1fr] md:items-center md:p-12">
          <div>
            <p className="eyebrow">{t.result.premiumEyebrow}</p>
            <h2 className="display-md mt-4">{t.result.premiumTitle}</h2>
            <p className="mt-4 max-w-md leading-relaxed text-muted-foreground">
              {t.result.premiumBody}
            </p>
            <p className="mt-6 text-sm text-muted-foreground">{t.result.premiumNote}</p>
          </div>
          <div className="flex flex-col items-start gap-4 md:items-end">
            <span className="font-display text-4xl tracking-tight">{t.result.premiumPrice}</span>
            <Button tone="outline">{t.result.premiumCta}</Button>
          </div>
        </div>
      </section>

      {/* essentials */}
      <section className="container-page mt-20 md:mt-28">
        <h2 className="display-md max-w-lg">
          {interpolate(t.result.essentialsTitle, { breed: content.displayName })}
        </h2>
        <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">
          {t.result.essentialsBody}
        </p>
        <ul className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {c.essentials.map((item) => (
            <li key={item} className="bg-background p-7">
              <p className="font-display text-lg leading-tight">{item}</p>
              <p className="mt-2 text-sm text-muted-foreground">
                {interpolate(c.suited, { breed: content.displayName })}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <div className="container-page mt-16 flex flex-wrap gap-3">
        <ButtonLink to={withLangPrefix("/breeds/$breedId")} params={{ breedId: best.breedId } as never} size="lg">
          {t.result.viewBreed}
          <Arrow />
        </ButtonLink>
        <Button tone="outline" size="lg" onClick={onRestart}>
          {t.result.restart}
        </Button>
      </div>

      <JourneyLinks exclude={["/find-my-dog"]} />
    </div>
  );
}
