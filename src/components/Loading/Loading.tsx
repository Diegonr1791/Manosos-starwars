import { Spinner } from "@nextui-org/react";
type colorProps =
  | "current"
  | "white"
  | "default"
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "danger"
  | undefined;
type sizeProps = "sm" | "md" | "lg" | undefined;
const Loading = ({ size, color }: { size: sizeProps; color: colorProps }) => {
  return (
    <div className="flex gap-4 justify-center">
      <Spinner color={color} size={size} />
    </div>
  );
};

export default Loading;
