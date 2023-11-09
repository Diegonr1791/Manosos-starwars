import { Modal, ModalContent } from "@nextui-org/react";
import CloseButton from "./CloseButton";
type ModalProps = {
  children: React.ReactNode;
  isOpen: boolean;
  onOpenChange: () => void;
  onClose: () => void;
};

const ModalComponent = ({
  children,
  isOpen,
  onOpenChange,
  onClose,
}: ModalProps) => {
  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      size="4xl"
      closeButton={<CloseButton onClose={onClose} />}
      placement="center"
    >
      <ModalContent className="flex  w-full xs:w-2/3 h-[90%] sm:h-auto  overflow-auto">
        <div>{children}</div>
      </ModalContent>
    </Modal>
  );
};

export default ModalComponent;
