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
  let url = `${STARWARS_API}planets/?`;
  if (filters.search) url += `search=${filters.search}`;
  if (!filters.search && pageParam) url += `page=${pageParam}`;

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
