import { getCharacterDetails } from "@/api/characters/getCharacterDetails";

import { useQuery } from "@tanstack/react-query";
import CharacterDetailsContainer from "./components/CharacterDetailsContainer";

const GET_CHARACTER_DETAIL_KEY = "GET_CHARACTER_DETAIL_KEY";

const CharacterDetails = ({ url }: { url: string }) => {
  const { data: characterData } = useQuery({
    queryKey: [GET_CHARACTER_DETAIL_KEY, url],
    queryFn: () => getCharacterDetails(url),
  });

  if (!characterData) return;
  return (
    <section className=" flex w-full h-full text-white md:place-content-center font-PlaypenSerif font-bold">
      <CharacterDetailsContainer characterDetails={characterData} />
    </section>
  );
};

export default CharacterDetails;
