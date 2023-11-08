import CharactersList from "./components/CharactersList";

const Characters = () => {
  return (
    <section className="min-h-[91.6vh] bg-black/80 pt-10 px-10 text-white">
      <div className="md:w-[95%] flex justify-center">
        <CharactersList />
      </div>
    </section>
  );
};

export default Characters;
