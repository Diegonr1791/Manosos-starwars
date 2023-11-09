import axios from "axios";
import { SpaceshipFilters, SpaceshipsAPI } from "./interfaces";

const STARWARS_API = import.meta.env.STARWARS_API || "https://swapi.dev/api/";
const DEFAULT_SPACESHIPS_ERROR_MESSAGE = "Error fetching spaceships";

export const getAllSpaceships = async ({
  pageParam,
  filters,
}: {
  pageParam: number;
  filters: SpaceshipFilters;
}) => {
  let url = `${STARWARS_API}starships/?`;
  if (filters.search) url += `search=${filters.search}`;
  if (!filters.search && pageParam) url += `page=${pageParam}`;

  const response = await axios<SpaceshipsAPI>(url);

  if (!response) throw new Error(DEFAULT_SPACESHIPS_ERROR_MESSAGE);

  const data = response.data;
  const spaceships = data.results;
  const hasNextPage = data.next !== null;
  const pegeCount = Math.ceil(data.count / spaceships.length);

  return {
    nextPage: hasNextPage ? pageParam + 1 : undefined,
    results: spaceships,
    pageCount: pegeCount,
  };
};
