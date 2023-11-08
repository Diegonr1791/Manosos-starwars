import Menu from "@/components/Navbar/Navbar";
import { ReactNode } from "react";

const Layout = ({
  children,
  color,
}: {
  children: ReactNode;
  color: string;
}) => {
  return (
    <div className="flex flex-col w-full">
      <Menu color={color} />
      {children}
    </div>
  );
};

export default Layout;
