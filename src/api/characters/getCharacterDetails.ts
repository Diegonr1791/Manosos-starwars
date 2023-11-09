import axios from "axios";
import { CharactersResult } from "./interfaces";

const DEFAULT_CHARACTER_ERROR_MESSAGE = "Error fetching character details";
export const getCharacterDetails = async (url: string) => {
  const response = await axios<CharactersResult>(url);

  if (!response) throw new Error(DEFAULT_CHARACTER_ERROR_MESSAGE);

  const data = response.data;

  return data;
};
