import CardCharacter from "@/components/Cards/Card";
import yoda from "@/assets/images/yoda.png";
import NotFoundPage from "@/pages/NotFound/NotFoundPage";
import { PlanetsResult } from "@/api/planets/interfaces";

const CharacterContainer = ({ planets }: { planets: PlanetsResult[] }) => {
  if (planets.length === 0) return <NotFoundPage name="Character" />;
  return (
    <div className="flex flex-wrap justify-center gap-3">
      {planets.map((planet, index) => (
        <CardCharacter
          key={`${planet.name}-${index}`}
          name={planet.name}
          onClick={() => console.log()}
          image={yoda}
        />
      ))}
    </div>
  );
};

export default CharacterContainer;
