import NotFoundImage from "@/assets/images/notFound.png";
import { cn } from "@/utils/cn";

const NotFoundPage = ({ name, color }: { name: string; color?: string }) => {
  return (
    <div className={cn("flex w-full h-full place-content-center", color)}>
      <div className="flex flex-col items-center">
        <div className="flex flex-col w-full justify-center items-center gap-5">
          <h1 className="text-5xl text-white font-bold">Sorry</h1>
          <p className="text-3xl text-white p-3"> {name} not found</p>
        </div>
        <div className="flex w-5/6 h-5/6 place-content-center justify-center items-center ">
          <img src={NotFoundImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
