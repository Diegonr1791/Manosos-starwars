import { PlanetsResultFormatted, PlanetsResult } from "../interfaces";
import { regexIdUrl } from "@/utils/regex";

const planetsAdapter = ({ planets }: { planets: PlanetsResult[] }) => {
  const planetsFormatted = planets.map((planet) => {
    let idValue;
    const match = planet.url.match(regexIdUrl);
    if (match) idValue = match[1];

    return {
      ...planet,
      id: idValue,
      characters: planet.residents,
    };
  });
  return planetsFormatted as PlanetsResultFormatted[];
};

export default planetsAdapter;
