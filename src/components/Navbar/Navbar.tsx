import { useState } from "react";
import {
  Navbar,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import LogoRM from "@/assets/images/logoSW.png";
import { navigationMenu } from "@/constants/navigation";
import { Link } from "react-router-dom";
import { cn } from "@/utils/cn";

const Menu = ({ color }: { color: string }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathName = window.location.pathname;

  return (
    <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className={cn(
        "flex justify-start  backdrop-filter-none  bg-transparent  shadow-medium border-b-1 border-b-white/20 p-2",
        color
      )}
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="text-white"
        />
      </NavbarContent>

      <div className="flex w-full h-full justify-end sm:justify-start">
        <Link to={"/home"}>
          <div className="flex w-16 h-16 rounded-full bg-white place-content-center">
            <img src={LogoRM} />
          </div>
        </Link>
      </div>

      <NavbarContent className="hidden sm:flex gap-4 py-1" justify="center">
        {navigationMenu.map((item, index) => {
          const isActive = pathName.includes(item.path);
          const activeColor = isActive
            ? "text-black underline underline-offset-4"
            : "text-white";

          return (
            <NavbarItem key={`${item.name}-${index}`}>
              <Link
                to={item.path}
                className={cn(
                  `w-full  font-semibold hover:text-white/70 transition duration-300  hover:ease-in-out text-lg`,
                  activeColor
                )}
              >
                {item.name}
              </Link>
            </NavbarItem>
          );
        })}
      </NavbarContent>

      <NavbarMenu className={cn("border-r-3 border-white w-1/2 mt-4", color)}>
        {navigationMenu.map((item, index) => {
          const isActive = pathName.includes(item.path);
          return (
            <NavbarMenuItem
              key={`${item.name}-${index}`}
              className="border-b-1 border-white"
            >
              <Link
                className={cn(
                  `w-full  font-semibold hover:text-white/70 transition duration-300  hover:ease-in-out text-lg`,
                  { "text-white": !isActive, "text-black": isActive }
                )}
                to={item.path}
              >
                {item.name}
              </Link>
            </NavbarMenuItem>
          );
        })}
      </NavbarMenu>
    </Navbar>
  );
};

export default Menu;
