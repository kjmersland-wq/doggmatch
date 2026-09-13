import { pick } from "@/i18n";
import * as en from "./content.en";
import * as no from "./content.no";
import * as pl from "./content.pl";
import * as dk from "./content.dk";
import * as se from "./content.se";
import * as fi from "./content.fi";
import * as de from "./content.de";
import * as fr from "./content.fr";
import * as nl from "./content.nl";

const localized = <K extends keyof typeof en>(key: K) => pick({ en: en[key], no: no[key], pl: pl[key], dk: dk[key], se: se[key], fi: fi[key], de: de[key], fr: fr[key], nl: nl[key] });

export function getCarSteps() { return localized("carSteps"); }
export function getCarSafety() { return localized("carSafety"); }
export function getCarSickness() { return localized("carSickness"); }
export function getNervousDog() { return localized("nervousDog"); }
export function getWalkPrep() { return localized("walkPrep"); }
export function getHikingFactors() { return localized("hikingFactors"); }
export function getWeather() { return localized("weather"); }
export function getPawChecks() { return localized("pawChecks"); }
export function getLongJourney() { return localized("longJourney"); }
export function getBeforeYouLeave() { return localized("beforeYouLeave"); }
export function getHolidayChecklist() { return localized("holidayChecklist"); }
export function getPublicTransport() { return localized("publicTransport"); }
export function getAirTravel() { return localized("airTravel"); }
export function getTravelWithDifferentDogs() { return localized("travelWithDifferentDogs"); }
