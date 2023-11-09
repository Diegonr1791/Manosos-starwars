import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import NotFoundPage from "@/pages/NotFound/NotFoundPage";
import Loading from "@/components/Loading/Loading";
import Arrow from "@heroicons/react/24/outline/ArrowLeftIcon";
import { getPlanetDetails } from "@/api/planets/getPlanetDetails";
import { getCharactersFromPlanet } from "@/api/planets/getCharactersFromPlanet";
import CharacterCard from "@/pages/Characters/components/CharacterCard";
import ItemDetail from "./components/ItemDetail";

const GET_PLANET_BY_ID_KEY = "GET_PLANET_BY_ID_KEY";
const GET_PLANET_CHARACTERS_KEY = "GET_PLANET_CHARACTERS_KEY";

const PlanetDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data: planet } = useQuery({
    queryKey: [GET_PLANET_BY_ID_KEY, id],
    queryFn: () => getPlanetDetails(String(id)),
    retry: 2,
  });

  const planetResidents = planet?.residents || [];

  const { data: characters, isLoading: isLoadingCharacters } = useQuery({
    queryKey: [GET_PLANET_CHARACTERS_KEY, planet?.residents],
    queryFn: () => getCharactersFromPlanet(planetResidents),
    retry: 2,
    enabled: !!planet?.residents,
  });

  const goBack = () => {
    navigate(-1);
  };

  if (!planet) return;
  if (isLoadingCharacters)
    return (
      <div className="flex  place-content-center h-screen w-full ">
        <Loading size="lg" color="white" />
      </div>
    );
  if (!characters)
    return (
      <div className="flex  place-content-center h-screen w-full">
        <NotFoundPage name="Characters" color="bg-orange-950/70" />;
      </div>
    );

  return (
    <section className="px-10 pt-10  bg-black/80 ">
      <div className="flex flex-col xs:flex-row gap-5 xs:gap-2">
        <div className="flex">
          <Arrow
            className="h-10 font-bold text-white transition-all  hover:scale-125 hover:cursor-pointer"
            onClick={goBack}
          />
        </div>
        <div className="flex flex-1 flex-col justify-center text-center gap-3 pb-8">
          <h1 className="text-5xl font-bold text-white">
            Planeta {planet.name}
          </h1>
        </div>
      </div>
      <div className="flex w-full min-h-screen gap-2">
        {!isLoadingCharacters ? (
          <div className="flex w-full h-full flex-col justify-center gap-2">
            <div className="flex flex-wrap justify-center">
              <ItemDetail label="Diámetro" value={planet.diameter} />
              <ItemDetail label="Población" value={planet.population} />
              <ItemDetail
                label="Periodo de rotación"
                value={planet.rotation_period}
              />
              <ItemDetail
                label="Periodo orbital"
                value={planet.orbital_period}
              />
              <ItemDetail label="Gravedad" value={planet.gravity} />
              <ItemDetail label="Terreno" value={planet.terrain} />
              <ItemDetail label="Clima" value={planet.climate} />
              <ItemDetail
                label="Superficie de agua"
                value={planet.surface_water}
                isLastItem
              />
            </div>
            <div className="flex flex-col justify-center">
              <div className="flex justify-center py-4">
                <h2 className="text-2xl font-bold text-white">Residentes</h2>
              </div>
              {characters.length !== 0 ? (
                <div className="flex flex-wrap justify-center gap-4">
                  {characters.map((character, index) => {
                    return <CharacterCard key={index} character={character} />;
                  })}
                </div>
              ) : (
                <div className="flex flex-col justify-center items-center gap-4">
                  <h2 className="text-2xl  text-white">
                    No hay residentes en este planeta
                  </h2>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="flex w-full h-full items-start justify-center">
            <Loading size="lg" color="secondary" />
          </div>
        )}
      </div>
    </section>
  );
};

export default PlanetDetails;
