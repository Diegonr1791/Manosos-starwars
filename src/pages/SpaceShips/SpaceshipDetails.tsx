import { useQuery } from "@tanstack/react-query";
import { getSpaceshipDetails } from "@/api/spaceships/getSpaceshipDetails";
import SpaceshipDetailsContainer from "./components/SpaceshipDetailsContainer";

const GET_SPACESHIP_DETAIL_KEY = "GET_CHARACTER_DETAIL_KEY";

const SpaceshipDetails = ({ url }: { url: string }) => {
  const { data: spaceshipData } = useQuery({
    queryKey: [GET_SPACESHIP_DETAIL_KEY, url],
    queryFn: () => getSpaceshipDetails(url),
  });

  if (!spaceshipData) return;
  return (
    <section className=" flex w-full h-full text-white md:place-content-center font-PlaypenSerif font-bold">
      <SpaceshipDetailsContainer spaceshipDetails={spaceshipData} />
    </section>
  );
};

export default SpaceshipDetails;
