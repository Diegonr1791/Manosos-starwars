import characters from "@/assets/images/characters.png";
import planets from "@/assets/images/planets.png";
import spacecraft from "@/assets/images/spacecraft.png";
import CardHome from "@/components/Cards/CardHome";

const Home = () => {
  return (
    <section className="min-h-[91.6vh] bg-black/70 pt-10 px-10 text-white">
      <div className="flex flex-col h-full sm:flex-row sm:gap-3 sm:p-4">
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
          description="Seccion destinada a la información de todos los personajes"
          navigateTo="/spacecrafts"
        />
      </div>
    </section>
  );
};

export default Home;
