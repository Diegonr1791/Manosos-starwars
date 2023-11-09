import { CharactersResult } from "@/api/characters/interfaces";
import CharacterCard from "@/pages/Characters/components/CharacterCard";
import NotFoundPage from "@/pages/NotFound/NotFoundPage";

const CharacterContainer = ({
  characters,
}: {
  characters: CharactersResult[];
}) => {
  if (characters.length === 0) return <NotFoundPage name="Character" />;
  return (
    <div className="flex flex-wrap justify-center gap-3">
      {characters.map((character, index) => (
        <CharacterCard key={index} character={character} />
      ))}
    </div>
  );
};

export default CharacterContainer;
