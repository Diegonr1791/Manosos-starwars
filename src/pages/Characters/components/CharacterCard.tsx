import { useDisclosure } from "@nextui-org/react";
import ModalComponent from "../../../components/Modal/Modal";
import CharacterDetails from "@/pages/Characters/CharacterDetails";
import { CharactersResult } from "@/api/characters/interfaces";
import Card from "@/components/Cards/Card";
import yoda from "@/assets/images/yoda.png";

export const CharacterCard = ({
  character,
}: {
  character: CharactersResult;
}) => {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  return (
    <>
      <Card image={yoda} name={character.name} onClick={onOpen} />
      <ModalComponent
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        children={<CharacterDetails url={character.url} />}
        onClose={onClose}
      />
    </>
  );
};

export default CharacterCard;
