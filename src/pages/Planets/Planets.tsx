import PlanetsList from "./components/PlanetsList";

const Planets = () => {
  return (
    <section className="min-h-[91.6vh] bg-black/80 pt-10 px-10 text-white">
      <div className="md:w-[95%] flex justify-center">
        <PlanetsList />
      </div>
    </section>
  );
};

export default Planets;
