type CardEpisodeProps = {
  id: string;
  name: string;
  image: string;
  onCardClick: (id: string) => void;
};

const CardPlanets = ({ id, name, image, onCardClick }: CardEpisodeProps) => {
  return (
    <div
      className="w-[300px] h-[350px] bg-black p-[4px] rounded-lg shadow-md shadow-black transition-all  hover:cursor-pointer hover:scale-105 hover:shadow-white/70 group"
      onClick={() => onCardClick(id)}
    >
      <div className="w-full h-full bg-white rounded-md p-3">
        <div className="w-full h-full bg-black p-[5px] rounded-lg">
          <div className=" w-full h-full bg-white rounded-md">
            <div className="w-full h-full  bg-green-700/50 rounded-md">
              <div className="flex h-5/6">
                <img src={image} alt="image for starwars planets" />
              </div>
              <div className=" w-full h-1/6  border-t-4 border-black pt-1 pl-1 bg-green-900/40">
                <span className="w-full h-full line-clamp-2">
                  <p className="font-bold">{name}</p>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPlanets;
