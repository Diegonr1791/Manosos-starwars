const LabelDescription = ({
  labelName,
  labelDescription,
}: {
  labelName: string;
  labelDescription: string;
}) => {
  return (
    <div className="flex md:w-full bg-black pb-[3px] rounded-b-lg">
      <div className="flex w-full bg-slate-200 text-lg md:text-2xl rounded-b-lg">
        <p className="p-1">
          {labelName}: <span className="font-light">{labelDescription}</span>
        </p>
      </div>
    </div>
  );
};

export default LabelDescription;
