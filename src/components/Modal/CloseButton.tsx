const CloseButton = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="flex absolute top-3 left-7">
      <span
        className="text-2xl text-black font-bold hover:cursor-pointer transition-all duration-500 hover:scale-125"
        onClick={onClose}
      >
        X
      </span>
    </div>
  );
};

export default CloseButton;
