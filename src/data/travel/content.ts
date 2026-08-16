import { pick } from "@/i18n";
import * as en from "./content.en";
import * as no from "./content.no";

export function getCarSteps() { return pick({ en: en.carSteps, no: no.carSteps }); }
export function getCarSafety() { return pick({ en: en.carSafety, no: no.carSafety }); }
export function getCarSickness() { return pick({ en: en.carSickness, no: no.carSickness }); }
export function getNervousDog() { return pick({ en: en.nervousDog, no: no.nervousDog }); }
export function getWalkPrep() { return pick({ en: en.walkPrep, no: no.walkPrep }); }
export function getHikingFactors() { return pick({ en: en.hikingFactors, no: no.hikingFactors }); }
export function getWeather() { return pick({ en: en.weather, no: no.weather }); }
export function getPawChecks() { return pick({ en: en.pawChecks, no: no.pawChecks }); }
export function getLongJourney() { return pick({ en: en.longJourney, no: no.longJourney }); }
export function getBeforeYouLeave() { return pick({ en: en.beforeYouLeave, no: no.beforeYouLeave }); }
export function getHolidayChecklist() { return pick({ en: en.holidayChecklist, no: no.holidayChecklist }); }
export function getPublicTransport() { return pick({ en: en.publicTransport, no: no.publicTransport }); }
export function getAirTravel() { return pick({ en: en.airTravel, no: no.airTravel }); }
export function getTravelWithDifferentDogs() { return pick({ en: en.travelWithDifferentDogs, no: no.travelWithDifferentDogs }); }
