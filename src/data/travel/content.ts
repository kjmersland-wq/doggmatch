import { pick } from "@/i18n";
import * as en from "./content.en";
import * as no from "./content.no";
import * as pl from "./content.pl";

export function getCarSteps() { return pick({ en: en.carSteps, no: no.carSteps, pl: pl.carSteps }); }
export function getCarSafety() { return pick({ en: en.carSafety, no: no.carSafety, pl: pl.carSafety }); }
export function getCarSickness() { return pick({ en: en.carSickness, no: no.carSickness, pl: pl.carSickness }); }
export function getNervousDog() { return pick({ en: en.nervousDog, no: no.nervousDog, pl: pl.nervousDog }); }
export function getWalkPrep() { return pick({ en: en.walkPrep, no: no.walkPrep, pl: pl.walkPrep }); }
export function getHikingFactors() { return pick({ en: en.hikingFactors, no: no.hikingFactors, pl: pl.hikingFactors }); }
export function getWeather() { return pick({ en: en.weather, no: no.weather, pl: pl.weather }); }
export function getPawChecks() { return pick({ en: en.pawChecks, no: no.pawChecks, pl: pl.pawChecks }); }
export function getLongJourney() { return pick({ en: en.longJourney, no: no.longJourney, pl: pl.longJourney }); }
export function getBeforeYouLeave() { return pick({ en: en.beforeYouLeave, no: no.beforeYouLeave, pl: pl.beforeYouLeave }); }
export function getHolidayChecklist() { return pick({ en: en.holidayChecklist, no: no.holidayChecklist, pl: pl.holidayChecklist }); }
export function getPublicTransport() { return pick({ en: en.publicTransport, no: no.publicTransport, pl: pl.publicTransport }); }
export function getAirTravel() { return pick({ en: en.airTravel, no: no.airTravel, pl: pl.airTravel }); }
export function getTravelWithDifferentDogs() { return pick({ en: en.travelWithDifferentDogs, no: no.travelWithDifferentDogs, pl: pl.travelWithDifferentDogs }); }
