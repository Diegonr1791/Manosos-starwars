import axios from "axios";
import { CharactersAPI, CharactersFilters } from "./interfaces";

const STARWARS_API = import.meta.env.STARWARS_API || "https://swapi.dev/api/";
const DEFAULT_CHARACTERS_ERROR_MESSAGE = "Error fetching characters";

export const getAllCharacters = async ({
  pageParam,
  filters,
}: {
  pageParam: number;
  filters: CharactersFilters;
}) => {
  let url = `${STARWARS_API}people/?`;
  if (filters.search) url += `search=${filters.search}`;
  if (!filters.search && pageParam) url += `page=${pageParam}`;

  const response = await axios<CharactersAPI>(url);

  if (!response) throw new Error(DEFAULT_CHARACTERS_ERROR_MESSAGE);

  const data = response.data;
  const characters = data.results;
  const hasNextPage = data.next !== null;
  const pegeCount = Math.ceil(data.count / characters.length);

  return {
    nextPage: hasNextPage ? pageParam + 1 : undefined,
    results: characters,
    pageCount: pegeCount,
  };
};
