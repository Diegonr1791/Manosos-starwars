import axios from "axios";
import { SpaceshipResult } from "./interfaces";

const DEFAULT_CHARACTER_ERROR_MESSAGE = "Error fetching character details";
export const getSpaceshipDetails = async (url: string) => {
  const response = await axios<SpaceshipResult>(url);

  if (!response) throw new Error(DEFAULT_CHARACTER_ERROR_MESSAGE);

  const data = response.data;

  return data;
};
