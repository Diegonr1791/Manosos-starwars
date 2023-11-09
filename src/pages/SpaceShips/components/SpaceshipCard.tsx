import { useDisclosure } from "@nextui-org/react";
import ModalComponent from "../../../components/Modal/Modal";
import { SpaceshipResult } from "@/api/spaceships/interfaces";
import Card from "@/components/Cards/Card";
import SpaceshipDetails from "../SpaceshipDetails";
import spaceshipCard from "@/assets/images/spaceshipCard.png";

export const SpaceshipCard = ({
  spaceship,
}: {
  spaceship: SpaceshipResult;
}) => {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  return (
    <>
      <Card image={spaceshipCard} name={spaceship.name} onClick={onOpen} />
      <ModalComponent
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        children={<SpaceshipDetails url={spaceship.url} />}
        onClose={onClose}
      />
    </>
  );
};

export default SpaceshipCard;
