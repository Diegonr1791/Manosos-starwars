import axios from "axios";
import { PlanetsAPI, PlanetsFilters } from "./interfaces";
import planetsAdapter from "./adapters/planetsAdapter";

const STARWARS_API = import.meta.env.STARWARS_API || "https://swapi.dev/api/";
const DEFAULT_PLANETS_ERROR_MESSAGE = "Error fetching planets";

export const getAllPlanets = async ({
  pageParam,
  filters,
}: {
  pageParam: number;
  filters: PlanetsFilters;
}) => {
  let url = `${STARWARS_API}planets/?page=${pageParam}`;

  Object.keys(filters).forEach((property) => {
    const key = property as keyof PlanetsFilters;
    if (filters[key]) {
      url = url.concat(`&${key}=${filters[key]}`);
    }
  });

  const response = await axios<PlanetsAPI>(url);

  if (!response) throw new Error(DEFAULT_PLANETS_ERROR_MESSAGE);

  const data = response.data;
  const planets = planetsAdapter({ planets: data.results });
  const hasNextPage = data.next !== null;
  const pegeCount = Math.ceil(data.count / planets.length);

  return {
    nextPage: hasNextPage ? pageParam + 1 : undefined,
    results: planets,
    pageCount: pegeCount,
  };
};
