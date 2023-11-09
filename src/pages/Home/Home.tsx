import characters from "@/assets/images/characters.png";
import planets from "@/assets/images/planets.png";
import spacecraft from "@/assets/images/spacecraft.png";
import CardHome from "@/components/Cards/CardHome";

const Home = () => {
  return (
    <section className="min-h-[91.6vh] bg-black/70 pt-10 px-10 text-white">
      <div className="flex flex-col gap-3 sm:p-4">
        <div className="flex flex-col h-[20%] pb-1">
          <h2 className="text-4xl pb-2">Bienvenido a la Wiki de Star Wars</h2>
        </div>
        <div className="flex flex-col sm:flex-row h-[40%]">
          <CardHome
            title="Personajes"
            image={characters}
            description="Seccion destinada a la información de todos los personajes"
            navigateTo="/characters"
          />
          <CardHome
            title="Planetas"
            image={planets}
            description="Seccion destinada a la información de todos los planetas"
            navigateTo="/planets"
          />
          <CardHome
            title="Naves"
            image={spacecraft}
            description="Seccion destinada a la información de todas las naves"
            navigateTo="/spaceships"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
