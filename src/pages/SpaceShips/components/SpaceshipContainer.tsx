import NotFoundPage from "@/pages/NotFound/NotFoundPage";
import { SpaceshipResult } from "@/api/spaceships/interfaces";
import SpaceshipCard from "./SpaceshipCard";

const SpaceshipContainer = ({
  spaceships,
}: {
  spaceships: SpaceshipResult[];
}) => {
  if (spaceships.length === 0) return <NotFoundPage name="Spaceship" />;
  return (
    <div className="flex flex-wrap justify-center gap-3">
      {spaceships.map((spaceship, index) => (
        <SpaceshipCard key={index} spaceship={spaceship} />
      ))}
    </div>
  );
};

export default SpaceshipContainer;
