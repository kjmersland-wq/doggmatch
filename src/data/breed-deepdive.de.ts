import type { BreedId } from "./breeds";
import type { BreedDeepDive } from "./breed-deepdive.en";

export const breedDeepDiveDe: Partial<Record<BreedId, BreedDeepDive>> = {
  "labrador-retriever": {
    originalPurpose:
      "Der Labrador geht auf die Wasserhunde Neufundlands zurück und wurde in Großbritannien zum Apportierhund verfeinert, der mit Freude an Land und aus eiskaltem Wasser bringt. Daher auch die Liebe zum Baden.",
    healthConsiderations:
      "Ein guter Züchter zeigt Ihnen gern die Hüft- und Ellbogenbefunde sowie DNA-Ergebnisse zu progressiver Retinaatrophie (prcd-PRA) und belastungsinduziertem Kollaps (EIC). Im Alltag lohnt sich vor allem der Blick aufs Gewicht: Viele Labradore tragen eine Genvariante für mehr Appetit, und abgewogene Portionen halten sie länger fit.",
    poorMatchFor: [
      "Sie träumen von einem Sofa ohne Hundehaare",
      "Ein täglicher Spaziergang und ein wenig Training passen kaum in Ihre Woche",
      "Ihr Hund wäre an den meisten Tagen einen ganzen Arbeitstag allein",
    ],
    keyTradeoffs: [
      "Wunderbar leicht zu erziehen, weil Futter ihnen so viel bedeutet, und genau dieser Appetit verlangt ein Auge auf die Figur",
      "Begrüßt fast jeden wie einen Freund: herrliche Gesellschaft, aber kaum ein Wachhund",
    ],
  },
  "french-bulldog": {
    originalPurpose:
      "Die Französische Bulldogge stammt von kleinen englischen Bulldoggen ab, die Spitzenklöppler im 19. Jahrhundert nach Frankreich mitnahmen. Die Pariser verliebten sich in sie, und seitdem ist sie ein reiner Begleithund.",
    healthConsiderations:
      "Das niedliche, flache Gesicht kann das Atmen erschweren (BOAS). Fragen Sie deshalb, ob die Elterntiere auf ihre Atemwege untersucht wurden, und wählen Sie einen Welpen mit gut offenen Nasenlöchern. Rücken, Hautfalten und Ohren brauchen etwas Extrapflege, und viele Würfe kommen per Kaiserschnitt. Planen Sie eine gute Versicherung ein und halten Sie Ihren Hund an warmen Tagen kühl.",
    poorMatchFor: [
      "Sie wünschen sich einen Begleiter zum Joggen, Wandern oder für heiße Sommertage",
      "Eine unerwartete Tierarztrechnung von einigen Tausend Euro würde Sie wirklich belasten",
      "Ihre Wohnung wird im Sommer heiß und lässt sich kaum kühlen",
    ],
    keyTradeoffs: [
      "Klein, ruhig und mit kurzen Runden zufrieden, doch sie gesund zu halten, kann mehr kosten als bei fast jeder anderen Rasse",
      "Das Gesicht, das alle verzaubert, steckt auch hinter den meisten gesundheitlichen Sorgen",
    ],
  },
  "border-collie": {
    originalPurpose:
      "Der Border Collie stammt aus dem Hügelland zwischen England und Schottland, wo er Schafe über weite Hänge zusammentrieb und auf die Zeichen eines weit entfernten Schäfers achtete.",
    healthConsiderations:
      "Zum Glück ist er eine robuste Rasse. Fragen Sie nach Hüftbefunden, einer Augenuntersuchung und DNA-Tests auf Collie Eye Anomaly, Trapped Neutrophil Syndrome und neuronale Ceroid-Lipofuszinose. Epilepsie kommt vor, und viele sind geräuschempfindlich, daher tut ein ruhiges Zuhause gut.",
    poorMatchFor: [
      "Sie wünschen sich einen Familienhund, dem Spaziergänge genügen und der keine Aufgabe für den Kopf braucht",
      "Sie wohnen an einer belebten Straße, wo vorbeifahrende Autos und Räder zum Hüten verleiten",
      "Faule Wochenenden auf dem Sofa sind für Sie das Schönste",
    ],
    keyTradeoffs: [
      "Vielleicht der gelehrigste Hund der Welt, und ohne Aufgabe sucht er sich eigene Projekte",
      "Seine Feinfühligkeit macht ihn zum großartigen Partner, doch ein lautes, hektisches Zuhause setzt ihm zu",
    ],
  },
  "cavalier-king-charles-spaniel": {
    originalPurpose:
      "Der Cavalier wurde in den 1920er-Jahren in England wiederbelebt, um den kleinen Spaniels auf den Gemälden vom Hof Karls II. zu gleichen, und ist seit jeher ein hingebungsvoller Schoßhund.",
    healthConsiderations:
      "Herzklappenerkrankungen sind sehr häufig und beginnen oft im mittleren Alter. Lassen Sie sich daher aktuelle Herzbefunde beider Elterntiere zeigen. Auch Syringomyelie ist ein ernstes Thema, und es lohnt sich, auf MRT-untersuchte Eltern zu warten. Für Episodic Falling und Dry Eye/Curly Coat gibt es DNA-Tests.",
    poorMatchFor: [
      "Ihr Cavalier wäre an den meisten Wochentagen überwiegend allein",
      "Regelmäßige Herzkontrollen und vielleicht lebenslange Medikamente sind im Budget nicht drin",
      "Sie möchten einen Hund, der Bescheid gibt, wenn jemand vor der Tür steht",
    ],
    keyTradeoffs: [
      "Eines der sanftesten, unkompliziertesten Wesen überhaupt, verbunden mit einem der anspruchsvolleren Gesundheitsprofile",
      "Liebt jeden, den er trifft: wunderbar zu Hause, als Wachhund völlig ungeeignet",
    ],
  },
  "german-shepherd": {
    originalPurpose:
      "Die Rasse wurde 1899 in Deutschland als vielseitiger Hütehund festgelegt und arbeitete schon bald als Blindenführ-, Such-, Polizei- und Diensthund.",
    healthConsiderations:
      "Fragen Sie nach Hüft- und Ellbogenbefunden und einem DNA-Test auf degenerative Myelopathie. Magendrehung, exokrine Pankreasinsuffizienz und ein empfindlicher Magen oder empfindliche Haut können auftreten. Es ist freundlicher, Linien mit geradem, ausgewogenem Körperbau zu wählen statt eines stark abfallenden Rückens.",
    poorMatchFor: [
      "Es ist Ihr erster Hund, und Sie haben noch keinen Plan für Erziehung und Sozialisierung",
      "Sie wünschen sich einen Hund, der Fremden von Natur aus gelassen begegnet",
      "Viele Haare und ein kräftiger Hund an der Leine würden Sie zermürben",
    ],
    keyTradeoffs: [
      "Zutiefst treu und beschützend, und beständige Sozialisierung hält diese Seite im richtigen Maß",
      "Eine Freude in der Ausbildung, und ohne regelmäßige Aufgaben wirklich unglücklich",
    ],
  },
  dachshund: {
    originalPurpose:
      "Der Dackel wurde in Deutschland gezüchtet, um dem Dachs in den Bau zu folgen: ein kleiner, furchtloser Jäger mit einer Stimme, die man bis aus der Erde hört.",
    healthConsiderations:
      "Rückenprobleme (Dackellähme, IVDD) treffen recht viele Dackel und können ernst werden. Das Liebevollste, was Sie tun können: ihn schlank halten, ihn auf Treppen tragen und ihm das Springen behutsam abgewöhnen. Rauhaarige Linien haben oft weniger Rückenprobleme. Für manche Varietäten gibt es DNA-Tests auf Augenerkrankungen (cord1-PRA) und die Lafora-Krankheit.",
    poorMatchFor: [
      "Sie wohnen mehrere Stockwerke hoch ohne Aufzug",
      "Sie brauchen einen ruhigen Hund in einem Haus mit dünnen Wänden",
      "Die Kleinsten in der Familie würden den Hund am liebsten ständig hochheben und herumtragen",
    ],
    keyTradeoffs: [
      "Klein genug, um überallhin mitzukommen, mit der Stimme und dem Selbstbewusstsein eines viel größeren Hundes",
      "Klug und eigenständig, deshalb brauchen Rückruf und Stubenreinheit meist etwas mehr Geduld",
    ],
  },
  beagle: {
    originalPurpose:
      "Der Beagle ist ein britischer Meutehund, gezüchtet, um der Spur des Hasen zu folgen, während die Jäger zu Fuß hinterherliefen. Die Nase gibt bis heute den Ton an.",
    healthConsiderations:
      "Die gute Nachricht: Beagles sind meist gesund und langlebig. Epilepsie, Schilddrüsenunterfunktion und Rückenprobleme können vorkommen, und es gibt einen DNA-Test auf das Musladin-Lueke-Syndrom. Beagles nehmen leicht zu, und die schönen langen Ohren sollten regelmäßig kontrolliert werden.",
    poorMatchFor: [
      "Sie wünschen sich einen Hund, der überall zuverlässig ohne Leine läuft",
      "Ihre Nachbarn würden sich an etwas Heulen stören, während Sie weg sind",
      "Ihr Garten ist nicht sicher eingezäunt",
    ],
    keyTradeoffs: [
      "Freundlich zu Menschen und Hunden, doch die Nase gewinnt meistens gegen das, worum Sie gerade gebeten haben",
      "Kompakt genug für die meisten Wohnungen, mit der Ausdauer eines arbeitenden Laufhundes",
    ],
  },
  "cocker-spaniel": {
    originalPurpose:
      "Der Cocker ist ein britischer Stöberhund, gezüchtet, um Waldschnepfen (woodcock) aus dichtem Unterholz aufzuscheuchen und zu apportieren. Daher sein Name.",
    healthConsiderations:
      "Die Ohren sind die tägliche Aufgabe: Wer sie oft trocknet und kontrolliert, erspart dem Hund viel Unbehagen. Fragen Sie nach Hüftbefunden und DNA-Tests auf progressive Retinaatrophie (prcd-PRA) und familiäre Nephropathie, eine Nierenerkrankung. Arbeits- und Showlinien unterscheiden sich stark im Temperament, also fragen Sie, welche Linie Sie vor sich haben.",
    poorMatchFor: [
      "Regelmäßiges Bürsten und Trimmen würde schnell in Vergessenheit geraten",
      "Ihr Cocker wäre lange Arbeitstage allein",
      "Sie wünschen sich einen gemütlichen Hund, haben sich aber in einen Welpen aus einer Arbeitslinie verliebt",
    ],
    keyTradeoffs: [
      "Fröhlich und eifrig bemüht, Ihnen zu gefallen, und Arbeitslinien sind weit umtriebiger, als das sanfte Gesicht vermuten lässt",
      "Ein wunderschönes Fell, das die Hilfe eines Hundefriseurs braucht, um schön zu bleiben",
    ],
  },
  chihuahua: {
    originalPurpose:
      "Der Chihuahua ist nach dem mexikanischen Bundesstaat benannt und stammt wohl von den kleinen Begleithunden des alten Mexiko ab. Seit dem späten 19. Jahrhundert wird er als Begleithund gezüchtet.",
    healthConsiderations:
      "Die Zähne brauchen die meiste Pflege: Tägliches Putzen und ab und zu eine professionelle Reinigung machen einen großen Unterschied. Kniescheiben- und Herzklappenprobleme können auftreten, und sehr kleine Welpen können Unterzucker bekommen. Das Schöne: 15 Jahre und mehr sind ganz normal.",
    poorMatchFor: [
      "In Ihrem Haushalt leben Kleinkinder oder junge Kinder",
      "Sie möchten einen Hund, der bei Besuch ruhig und leise bleibt",
      "Ihre Winter sind kalt, und Sie möchten Ihren Hund ungern für jeden Spaziergang anziehen",
    ],
    keyTradeoffs: [
      "Klein in Platzbedarf und Kosten, und so zart, dass er behutsamen Umgang braucht",
      "Seinem Menschen völlig ergeben, allen anderen gegenüber oft misstrauisch oder gesprächig",
    ],
  },
  "bernese-mountain-dog": {
    originalPurpose:
      "Der Berner Sennenhund war Hofhund im Schweizer Kanton Bern: Er zog Milchkarren, trieb Kühe und hatte ein freundliches Auge auf den Hof.",
    healthConsiderations:
      "Das Schwerste daran, einen Berner zu lieben, ist sein oft kurzes Leben, und Krebs, besonders das histiozytäre Sarkom, ist leider häufig. Fragen Sie nach Hüft- und Ellbogenbefunden und einem DNA-Test auf degenerative Myelopathie, und lernen Sie die Anzeichen einer Magendrehung kennen.",
    poorMatchFor: [
      "Sie leben in einem warmen Klima oder ganz oben ohne Aufzug",
      "Sieben bis zehn gemeinsame Jahre würden sich zu kurz anfühlen",
      "Tierarzt- und Futterkosten eines großen Hundes würden Ihr Budget sprengen",
    ],
    keyTradeoffs: [
      "Ein sanfter, geduldiger Riese, mit weniger gemeinsamer Zeit, als man sich wünscht",
      "Als Erwachsener ruhig nach einer langen, stürmischen Jugend, und das ganze Jahr über liegen Haare überall",
    ],
  },
};
