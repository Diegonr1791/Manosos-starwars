import axios from "axios";
import { PlanetsResult } from "./interfaces";

const STARWARS_API = import.meta.env.STARWARS_API || "https://swapi.dev/api/";
const DEFAULT_CHARACTER_ERROR_MESSAGE = "Error fetching character details";

export const getPlanetDetails = async (id: string) => {
  const url = `${STARWARS_API}/planets/${id}`;
  const response = await axios<PlanetsResult>(url);

  if (!response) throw new Error(DEFAULT_CHARACTER_ERROR_MESSAGE);

  const data = response.data;

  return data;
};
