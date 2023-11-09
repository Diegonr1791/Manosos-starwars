import { Card as CardComponent, CardFooter, Image } from "@nextui-org/react";

type CardCharacterProps = {
  name: string;
  image: string;
  onClick?: () => void;
};

export const Card = ({ name, image, onClick }: CardCharacterProps) => {
  return (
    <CardComponent className="bg-white/90 rounded-md p-3 hover:shadow-md hover:shadow-violet-400/60 hover:rotate-[2deg] transition-all duration-1000 group">
      <Image
        alt={`image for card}-${name}`}
        className="min-w-[150px] max-w-[200px] object-cover rounded-none border-x-3 border-b-3  border-gray-900/90 group-hover:rotate-[-2deg]"
        src={image}
      />
      <CardFooter className=" group h-12 w-full absolute rounded-md bottom-[-10px] right-0 z-10 p-0 [perspective:1000px] group-hover:rotate-[-2deg]">
        <div className="relative h-full w-full transition-all delay-75 duration-1000  [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] ">
          <div className="absolute inset-0">
            <p className=" text-center text-lg text-black border-3 border-gray-900 bg-white rounded-md mx-5 line-clamp-1 ">
              {name}
            </p>
          </div>
          <div className=" absolute inset-0 h-full w-full [transform:rotateY(180deg)] [backface-visibility:hidden]">
            <p
              onClick={onClick}
              className="bg-orange-600 text-center text-lg text-white border-3 border-gray-900  rounded-md mx-5 hover:cursor-pointer"
            >
              Ver detalles
            </p>
          </div>
        </div>
      </CardFooter>
    </CardComponent>
  );
};

export default Card;
