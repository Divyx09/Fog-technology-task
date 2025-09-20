import {
  HeartIcon,
  SearchIcon,
  ShoppingCartIcon,
  UserIcon,
} from "lucide-react";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "../../../../components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../../../components/ui/navigation-menu";

const navigationItems = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/shop" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const iconButtons = [
  { icon: UserIcon, alt: "Account" },
  { icon: SearchIcon, alt: "Search" },
  { icon: HeartIcon, alt: "Favorites" },
  { icon: ShoppingCartIcon, alt: "Shopping Cart" },
];

export const HeaderSection = (): JSX.Element => {
  const location = useLocation();

  return (
    <header className="w-full bg-white">
      <div className="flex items-center justify-between px-[54px] py-[29px] h-[100px]">
        <Link to="/" className="flex items-center gap-[5px]">
          <img
            className="w-[50px] h-8"
            alt="Meubel house logos"
            src="/meubel-house-logos-05.png"
          />
          <div className="[font-family:'Montserrat',Helvetica] font-bold text-black text-[34px] tracking-[0] leading-[normal]">
            Furniro
          </div>
        </Link>

        <NavigationMenu>
          <NavigationMenuList className="flex gap-[75px]">
            {navigationItems.map((item, index) => (
              <NavigationMenuItem key={index}>
                <NavigationMenuLink asChild>
                  <Link
                    to={item.href}
                    className={`[font-family:'Poppins',Helvetica] font-medium text-base tracking-[0] leading-[normal] hover:text-gray-600 transition-colors ${
                      location.pathname === item.href ? "text-[#b88e2f]" : "text-black"
                    }`}
                  >
                    {item.label}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-[45px]">
          {iconButtons.map((button, index) => (
            <Button
              key={index}
              variant="ghost"
              size="icon"
              className="w-[28px] h-[28px] p-0 hover:bg-gray-100"
            >
              <button.icon className="w-[28px] h-[28px] text-black" />
            </Button>
          ))}
        </div>
      </div>
    </header>
  );
};