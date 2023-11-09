import axios from "axios";
import { CharactersResult } from "../characters/interfaces";

const DEFAULT_EPISODE_ERROR_MESSAGE = "Error fetching episode details";

export const getCharactersFromPlanet = async (characters: Array<string>) => {
  const charactersFormatted = await Promise.all(
    characters.map(async (character) => {
      const res = await axios<CharactersResult>(character);
      return res.data;
    })
  );

  if (!charactersFormatted) throw new Error(DEFAULT_EPISODE_ERROR_MESSAGE);

  return charactersFormatted;
};
