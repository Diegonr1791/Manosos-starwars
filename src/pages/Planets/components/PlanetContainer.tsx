import planetCard from "@/assets/images/planetCard.png";
import NotFoundPage from "@/pages/NotFound/NotFoundPage";
import { PlanetsResultFormatted } from "@/api/planets/interfaces";
import { useNavigate } from "react-router-dom";
import CardPlanets from "@/components/Cards/CardPlanets";

const CharacterContainer = ({
  planets,
}: {
  planets: PlanetsResultFormatted[];
}) => {
  const navigate = useNavigate();

  const onCardClick = (id: string) => {
    navigate(`/planets/${id}`);
  };

  if (planets.length === 0) return <NotFoundPage name="Planet" />;

  return (
    <div className="flex flex-wrap justify-center gap-3">
      {planets.map((planet, index) => (
        <CardPlanets
          key={`${planet.name}-${index}`}
          id={planet.id}
          name={planet.name}
          onCardClick={onCardClick}
          image={planetCard}
        />
      ))}
    </div>
  );
};

export default CharacterContainer;
