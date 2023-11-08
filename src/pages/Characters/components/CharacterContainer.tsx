import { CharactersResult } from "@/api/characters/interfaces";
import CardCharacter from "@/components/Cards/Card";
import yoda from "@/assets/images/yoda.png";
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
        <CardCharacter
          key={`${character.name}-${index}`}
          name={character.name}
          onClick={() => console.log()}
          image={yoda}
        />
      ))}
    </div>
  );
};

export default CharacterContainer;
