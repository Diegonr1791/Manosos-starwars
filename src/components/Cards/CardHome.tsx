import { Button } from "@nextui-org/react";
import { Link } from "react-router-dom";

type CardProps = {
  image: string;
  title: string;
  description: string;
  navigateTo: string;
};
const CardHome = ({ image, title, description, navigateTo }: CardProps) => {
  return (
    <div className="flex flex-col h-full">
      <div>
        <img src={image} className="rounded-t-sm aspect-square"></img>
      </div>
      <div className="flex flex-col h-1/3 p-2 gap-4 justify-start">
        <h2 className="font-bold text-3xl">{title}</h2>
        <h3>{description}</h3>
        <Button className="w-12 text-white bg-gray-800 hover:text-black hover:bg-white transition-all">
          <Link to={navigateTo}>Ver más</Link>
        </Button>
      </div>
    </div>
  );
};

export default CardHome;
