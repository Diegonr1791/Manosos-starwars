import { Divider } from "@nextui-org/react";

type ItemDetailProps = {
  label: string;
  value: string;
  isLastItem?: boolean;
};

const ItemDetail = ({ label, value, isLastItem }: ItemDetailProps) => {
  return (
    <div className="flex flex-row p-2">
      <p className="font-bold text-white pr-2">
        {label}: {value}
      </p>
      {!isLastItem && <Divider orientation="vertical" className="bg-white" />}
    </div>
  );
};

export default ItemDetail;
